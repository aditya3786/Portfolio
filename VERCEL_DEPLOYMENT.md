# 🚀 Vercel Deployment Guide

Your portfolio is ready to deploy! Follow these steps to go live.

## Step 1: Initialize Git Locally

```bash
cd /Users/adityapathania/Desktop/Projects/portfolio

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com/new)
2. Create a new repository named `portfolio` (or any name)
3. **Do NOT** initialize with README (we already have one)
4. Click "Create repository"

## Step 3: Push to GitHub

After creating the repo, GitHub will show you commands. Run:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Deploy to Vercel

### Option A: Using Vercel CLI (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Then follow the prompts:
- Link to existing project? → No
- Which scope? → Your GitHub username
- Link to GitHub repo? → Yes (if you want auto-deploy)
- Build settings → Accept defaults

### Option B: Using Vercel Website (Manual)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Select your `portfolio` repository
5. Click "Import"
6. Environment Variables → **Add your EmailJS credentials**:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
7. Click "Deploy"

## ⚠️ Important: Environment Variables

**You MUST add your EmailJS credentials to Vercel:**

1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add these three variables (get them from `.env.local`):
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

## 🎉 What's Happening Behind the Scenes

- Vercel automatically detects Vite configuration
- Your `dist/` folder is deployed as static assets
- Your portfolio gets a free URL: `portfolio-*.vercel.app`
- You can add a custom domain later

## ✅ Post-Deployment Checklist

- [ ] Portfolio loads at your Vercel URL
- [ ] Smooth scroll and animations work
- [ ] 3D scene renders (check on desktop)
- [ ] Contact form is functional (EmailJS configured)
- [ ] All project links work
- [ ] Mobile responsive

## 🔗 Custom Domain (Optional)

1. Go to Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records (Vercel will provide instructions)

## ♻️ Auto-Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys
- Vercel shows deployment status
- Failed builds get notified

## Troubleshooting

### Contact form not working
- Verify EmailJS env vars are set in Vercel
- Check that all 3 variables are correctly added
- Test with existing Pinecone credentials

### Build fails
- Check build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Look for TypeScript/import errors

### Site is blank
- Check browser console (F12) for errors
- Verify all dependencies installed
- Check if Three.js is loading properly

## Commands Reference

```bash
# Local development
npm run dev

# Build locally
npm run build

# Preview production build
npm run preview

# Push to GitHub
git push origin main
```

## Resources

- [Vercel Docs](https://vercel.com/docs)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
