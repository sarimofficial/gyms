Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$envFile = Join-Path $repoRoot ".env.local"

if (-not (Test-Path $envFile)) {
  throw ".env.local not found at $envFile"
}

Get-Content $envFile | ForEach-Object {
  $line = $_.Trim()
  if (-not $line -or $line.StartsWith("#")) {
    return
  }

  $parts = $line.Split("=", 2)
  if ($parts.Count -eq 2) {
    [Environment]::SetEnvironmentVariable($parts[0], $parts[1], "Process")
  }
}

if (-not $env:DATABASE_URL) {
  throw "DATABASE_URL is required in .env.local"
}

$apiPort = if ($env:API_PORT) { [int]$env:API_PORT } else { 3000 }
$adminPort = if ($env:ADMIN_PORT) { [int]$env:ADMIN_PORT } else { 5173 }
$basePath = if ($env:ADMIN_BASE_PATH) { $env:ADMIN_BASE_PATH } else { "/gym-admin/" }
$apiOrigin = if ($env:API_ORIGIN) { $env:API_ORIGIN } else { "http://127.0.0.1:$apiPort" }

function Assert-PortFree {
  param([int]$Port)

  $listener = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
  if ($listener) {
    throw "Port $Port is already in use. Stop the existing process and run the script again."
  }
}

Assert-PortFree -Port $apiPort
Assert-PortFree -Port $adminPort

Set-Location $repoRoot

Write-Host "Pushing database schema..."
pnpm --filter @workspace/db run push
if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}

Write-Host "Ensuring admin account exists..."
pnpm --filter @workspace/db exec node ..\..\scripts\ensure-admin.mjs
if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}

$logDir = Join-Path $repoRoot ".local"
New-Item -ItemType Directory -Force $logDir | Out-Null

$apiOut = Join-Path $logDir "api-server.log"
$apiErr = Join-Path $logDir "api-server.err.log"
$adminOut = Join-Path $logDir "gym-admin.log"
$adminErr = Join-Path $logDir "gym-admin.err.log"

$safeRepoRoot = $repoRoot.Replace("'", "''")
$safeDbUrl = $env:DATABASE_URL.Replace("'", "''")
$safeBasePath = $basePath.Replace("'", "''")
$safeApiOrigin = $apiOrigin.Replace("'", "''")

$apiCommand = @"
`$env:DATABASE_URL = '$safeDbUrl'
`$env:PORT = '$apiPort'
`$env:NODE_ENV = 'development'
Set-Location '$safeRepoRoot'
pnpm --filter @workspace/api-server run build
if (`$LASTEXITCODE -ne 0) { exit `$LASTEXITCODE }
node --enable-source-maps '.\artifacts\api-server\dist\index.mjs'
"@

$adminCommand = @"
`$env:PORT = '$adminPort'
`$env:BASE_PATH = '$safeBasePath'
`$env:API_ORIGIN = '$safeApiOrigin'
Set-Location '$safeRepoRoot'
pnpm --filter @workspace/gym-admin run dev
"@

$apiProcess = Start-Process powershell `
  -PassThru `
  -WindowStyle Hidden `
  -WorkingDirectory $repoRoot `
  -ArgumentList "-NoProfile", "-Command", $apiCommand `
  -RedirectStandardOutput $apiOut `
  -RedirectStandardError $apiErr

$adminProcess = Start-Process powershell `
  -PassThru `
  -WindowStyle Hidden `
  -WorkingDirectory $repoRoot `
  -ArgumentList "-NoProfile", "-Command", $adminCommand `
  -RedirectStandardOutput $adminOut `
  -RedirectStandardError $adminErr

Start-Sleep -Seconds 8

$apiOk = $false
$adminOk = $false

try {
  $apiResponse = Invoke-WebRequest -UseBasicParsing "http://127.0.0.1:$apiPort/api/healthz" -TimeoutSec 10
  $apiOk = $apiResponse.StatusCode -eq 200
} catch {}

try {
  $adminResponse = Invoke-WebRequest -UseBasicParsing "http://127.0.0.1:$adminPort$basePath" -TimeoutSec 10
  $adminOk = $adminResponse.StatusCode -ge 200 -and $adminResponse.StatusCode -lt 500
} catch {}

Write-Host ""
Write-Host "API PID: $($apiProcess.Id)"
Write-Host "Admin PID: $($adminProcess.Id)"
Write-Host "API URL: http://127.0.0.1:$apiPort/api/healthz"
Write-Host "Admin URL: http://127.0.0.1:$adminPort$basePath"
Write-Host "Admin login: $($env:ADMIN_EMAIL) / $($env:ADMIN_PASSWORD)"
Write-Host "API healthy: $apiOk"
Write-Host "Admin reachable: $adminOk"
Write-Host "Logs: $logDir"
