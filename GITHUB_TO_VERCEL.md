# ✅ Deploy Your Portfolio to Vercel (From GitHub)

Your code is now on GitHub! Follow these steps to deploy live.

## 🚀 Automatic Deployment with Vercel

### Step 1: Go to Vercel Dashboard

1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub (it will ask for permissions)
3. Click **"Add New"** → **"Project"**

### Step 2: Import Your GitHub Repository

1. You should see your repositories listed
2. Find **`Portfolio`** (the one we just pushed)
3. Click **"Import"**

### Step 3: Configure Project Settings

Vercel will auto-detect your Vite configuration. You should see:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

✅ These are already correct! Just accept them.

### Step 4: Add Environment Variables ⚠️ IMPORTANT

Before deploying, add your EmailJS credentials:

1. Under "Environment Variables" section, add:

```
VITE_EMAILJS_PUBLIC_KEY = your_public_key_here
VITE_EMAILJS_SERVICE_ID = your_service_id_here
VITE_EMAILJS_TEMPLATE_ID = your_template_id_here
```

2. Get these from your `.env.local` file or EmailJS dashboard

### Step 5: Deploy 🚀

Click the **"Deploy"** button

⏳ Vercel will build your project and deploy it (takes 1-2 minutes)

## 🎉 After Deployment

Once complete, you'll get:

✅ **Live URL**: `https://portfolio-[random].vercel.app`
✅ **Custom Domain**: You can add your own domain
✅ **Auto-Deploy**: Every push to `main` branch auto-deploys

### Test Your Live Site:

- [ ] Visit your Vercel URL
- [ ] Test smooth scrolling
- [ ] Check 3D animations load
- [ ] Test contact form (should send emails)
- [ ] Verify responsive design on mobile

## 🔄 Automatic Updates

Now whenever you:
```bash
git push origin main
```

→ Vercel automatically rebuilds and deploys your changes!

## 📝 Making Updates

To update your portfolio in the future:

```bash
# Make changes to your files
# Then commit and push:

git add .
git commit -m "Update portfolio with new skills"
git push origin main

# Vercel will automatically deploy!
```

## 🌐 Custom Domain (Optional)

To use your own domain:

1. Go to Vercel Project Settings → Domains
2. Add your domain
3. Follow DNS instructions
4. Takes ~5-10 minutes to activate

## ✨ Your Portfolio is Live!

You now have:
- ✅ GitHub repository with version control
- ✅ Automatic deployment on every push
- ✅ Free hosting on Vercel
- ✅ Working contact form
- ✅ 3D animations
- ✅ 4 featured projects
- ✅ Professional portfolio live to the world!

Share your portfolio link with everyone! 🎉

---

**Need help?**
- Vercel Support: https://vercel.com/support
- Check deployment logs in Vercel dashboard
- Verify environment variables are set correctly
