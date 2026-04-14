# Vercel GitHub Deployment Guide

## Step 1: Vercel Dashboard Setup

1. **Vercel Dashboard kholen:**
   - https://vercel.com/mrsarimofficials-projects
   - Login karein agar nahi kiya

2. **New Project banayein:**
   - "Add New..." button click karein
   - "Project" select karein

## Step 2: GitHub Repository Import

1. **Repository select karein:**
   - "Import Git Repository" section mein
   - `sarimofficial/gym-management-so` search karein
   - "Import" button click karein

---

## Project 1: Main Frontend

### Configuration:
- **Project Name:** `gym-frontend` (ya koi bhi naam)
- **Framework Preset:** Vite
- **Root Directory:** `.` (root)
- **Build Command:** `pnpm run build`
- **Output Directory:** `dist`
- **Install Command:** `pnpm install`

### Environment Variables:
```
VITE_API_URL=https://your-api-domain.vercel.app
```
*(API deploy hone ke baad update karenge)*

### Deploy:
- "Deploy" button click karein
- Wait for deployment to complete

---

## Project 2: Gym Admin Panel

### Setup:
1. Vercel dashboard mein wapas jayein
2. "Add New..." → "Project"
3. Same repository `sarimofficial/gym-management-so` import karein

### Configuration:
- **Project Name:** `gym-admin` (ya koi bhi naam)
- **Framework Preset:** Vite
- **Root Directory:** `artifacts/gym-admin` ⚠️ IMPORTANT
- **Build Command:** `pnpm run build`
- **Output Directory:** `dist`
- **Install Command:** `pnpm install`

### Environment Variables:
```
VITE_API_URL=https://your-api-domain.vercel.app
VITE_ADMIN_BASE_PATH=/gym-admin/
```
*(API deploy hone ke baad update karenge)*

### Deploy:
- "Deploy" button click karein

---

## Project 3: API Server (Serverless)

### Setup:
1. Vercel dashboard mein wapas jayein
2. "Add New..." → "Project"
3. Same repository `sarimofficial/gym-management-so` import karein

### Configuration:
- **Project Name:** `gym-api` (ya koi bhi naam)
- **Framework Preset:** Other
- **Root Directory:** `artifacts/api-server` ⚠️ IMPORTANT
- **Build Command:** Leave empty (serverless functions)
- **Output Directory:** Leave empty
- **Install Command:** `pnpm install`

### Environment Variables (CRITICAL):
```
DATABASE_URL=postgresql://neondb_owner:npg_8N9mtOpnRliK@ep-round-wildflower-amy3drt0-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
ADMIN_EMAIL=admin@gymfitpro.com
ADMIN_PASSWORD=Admin123!
ADMIN_NAME=Core X Admin
NODE_ENV=production
```

⚠️ **Security Warning:** Production mein strong password use karein!

### Deploy:
- "Deploy" button click karein

---

## Step 3: Update API URLs

Jab sab deploy ho jayein:

1. **API URL copy karein:**
   - API project ke deployment URL (e.g., `https://gym-api.vercel.app`)

2. **Frontend projects update karein:**
   - Main Frontend project → Settings → Environment Variables
   - `VITE_API_URL` ko API URL se update karein
   - Redeploy karein (Deployments tab → latest → "Redeploy")

3. **Admin Panel update karein:**
   - Admin project → Settings → Environment Variables
   - `VITE_API_URL` ko API URL se update karein
   - Redeploy karein

---

## Step 4: Test Deployment

1. **Frontend test karein:**
   - Frontend URL open karein
   - Check karein page load ho raha hai

2. **Admin Panel test karein:**
   - Admin URL open karein
   - Login try karein

3. **API test karein:**
   - `https://your-api-url.vercel.app/api/health` open karein
   - Response aana chahiye

---

## Automatic Deployments

Ab jab bhi aap GitHub par code push karenge:
- Vercel automatically detect karega
- Sab 3 projects automatically deploy honge
- Preview URLs milenge har PR ke liye

---

## Troubleshooting

### Build Failures:
- Vercel logs check karein (Deployments → Failed deployment → View logs)
- `pnpm-lock.yaml` aur `package.json` sync hone chahiye

### API Not Working:
- Environment variables check karein
- Database connection string verify karein
- Function logs check karein (Deployment → Functions tab)

### CORS Errors:
- API server ke `cors()` configuration mein frontend domains add karein
- `artifacts/api-server/src/app.ts` file edit karein

---

## Important Notes

1. **Monorepo Structure:** Har app ko alag Vercel project banana padega
2. **Root Directory:** Har project ke liye correct root directory set karna ZAROORI hai
3. **Environment Variables:** Har deployment ke baad check karein
4. **Database:** Neon PostgreSQL already configured hai
5. **Member App:** React Native app ko Vercel par deploy nahi kar sakte

---

## Deployment URLs (Example)

After deployment, aapko ye URLs milenge:
- Main Frontend: `https://gym-frontend-xxx.vercel.app`
- Admin Panel: `https://gym-admin-xxx.vercel.app`
- API Server: `https://gym-api-xxx.vercel.app`

In URLs ko environment variables mein update karna mat bhoolna!

---

## Quick Links

- Vercel Dashboard: https://vercel.com/mrsarimofficials-projects
- GitHub Repo: https://github.com/sarimofficial/gym-management-so
- Vercel Docs: https://vercel.com/docs
