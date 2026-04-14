# Vercel Deployment Guide - Gym Management System

## Overview
Is project mein 3 deployable apps hain:
1. **Main Frontend** (Root Vite app)
2. **Gym Admin Panel** (artifacts/gym-admin)
3. **API Server** (artifacts/api-server - serverless functions)

**Note:** `gym-member-app` ek React Native/Expo mobile app hai jo Vercel par deploy nahi ho sakta. Isko Expo EAS ya App Store/Play Store ke liye build karna hoga.

---

## 1. Main Frontend Deployment

### Steps:
```bash
cd G:\Gym-Goer-main
vercel
```

### Configuration:
- **Framework:** Vite
- **Build Command:** `pnpm run build`
- **Output Directory:** `dist`
- **Install Command:** `pnpm install`

### Environment Variables (Vercel Dashboard mein add karein):
```
VITE_API_URL=https://your-api-domain.vercel.app
```

---

## 2. Gym Admin Panel Deployment

### Steps:
```bash
cd G:\Gym-Goer-main\artifacts\gym-admin
vercel
```

### Configuration:
- **Framework:** Vite
- **Build Command:** `pnpm run build`
- **Output Directory:** `dist`
- **Install Command:** `pnpm install`
- **Root Directory:** `artifacts/gym-admin`

### Environment Variables:
```
VITE_API_URL=https://your-api-domain.vercel.app
VITE_ADMIN_BASE_PATH=/gym-admin/
```

---

## 3. API Server Deployment (Serverless)

### Steps:
```bash
cd G:\Gym-Goer-main\artifacts\api-server
vercel
```

### Configuration:
- **Build Command:** Leave empty (serverless functions don't need build)
- **Output Directory:** Leave empty
- **Install Command:** `pnpm install`
- **Root Directory:** `artifacts/api-server`

### Environment Variables (IMPORTANT):
```
DATABASE_URL=postgresql://neondb_owner:npg_8N9mtOpnRliK@ep-round-wildflower-amy3drt0-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
ADMIN_EMAIL=admin@gymfitpro.com
ADMIN_PASSWORD=Admin123!
ADMIN_NAME=Core X Admin
NODE_ENV=production
```

**⚠️ Security Warning:** Production mein strong passwords use karein aur DATABASE_URL ko secure rakhein!

---

## Quick Deployment Commands

### Option 1: Vercel CLI se (Recommended)

1. **Vercel CLI install karein:**
```bash
npm i -g vercel
```

2. **Login karein:**
```bash
vercel login
```

3. **Har app ko deploy karein:**

**Main Frontend:**
```bash
cd G:\Gym-Goer-main
vercel --prod
```

**Admin Panel:**
```bash
cd G:\Gym-Goer-main\artifacts\gym-admin
vercel --prod
```

**API Server:**
```bash
cd G:\Gym-Goer-main\artifacts\api-server
vercel --prod
```

### Option 2: GitHub Integration (Automatic)

1. GitHub par repo push karein
2. Vercel dashboard mein 3 separate projects banayein:
   - `gym-frontend` (root directory: `/`)
   - `gym-admin` (root directory: `artifacts/gym-admin`)
   - `gym-api` (root directory: `artifacts/api-server`)
3. Har project mein environment variables set karein
4. Auto-deploy enable ho jayega

---

## Post-Deployment Steps

1. **API URL update karein:**
   - Admin panel aur frontend ke environment variables mein deployed API URL add karein
   - Redeploy karein

2. **CORS settings check karein:**
   - API server mein frontend aur admin panel ke domains allow karein

3. **Database migrations:**
   - Agar database migrations hain to manually run karein

4. **Test karein:**
   - Har app ko browser mein open karke test karein
   - API endpoints test karein

---

## Troubleshooting

### Build Failures:
- `pnpm-lock.yaml` aur `package.json` sync hone chahiye
- Node version check karein (Vercel default: Node 18)

### API Issues:
- Environment variables properly set hain ya nahi check karein
- Database connection string correct hai ya nahi verify karein
- Vercel function logs check karein

### CORS Errors:
- API server ke `cors()` configuration mein frontend domains add karein

---

## Important Notes

1. **Monorepo Structure:** Ye ek pnpm workspace hai, to har app ko separately deploy karna padega
2. **Member App:** Mobile app ko Vercel par deploy nahi kar sakte - use Expo EAS
3. **Database:** Neon PostgreSQL already configured hai
4. **Cost:** Vercel free tier mein 3 projects deploy ho sakti hain

---

## Deployment URLs (Example)

After deployment, aapko ye URLs milenge:
- Main Frontend: `https://gym-frontend.vercel.app`
- Admin Panel: `https://gym-admin.vercel.app`
- API Server: `https://gym-api.vercel.app`

In URLs ko apne environment variables mein update karein!
