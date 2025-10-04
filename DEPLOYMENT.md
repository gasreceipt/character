# Deploy Character Forge to GitHub

Follow these steps to deploy your Character Forge project to GitHub:

## 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `character-forge` (or your preferred name)
5. Add description: "AI-powered character generation platform built with Next.js"
6. Choose "Public" (or Private if you prefer)
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click "Create repository"

## 2. Connect Local Repository to GitHub

Replace `YOUR-USERNAME` with your actual GitHub username:

```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/YOUR-USERNAME/character-forge.git

# Push your code to GitHub
git push -u origin main
```

## 3. Deploy to Vercel (Recommended for Next.js)

Vercel is the easiest way to deploy Next.js applications:

### Option A: Deploy via GitHub Integration
1. Go to [vercel.com](https://vercel.com)
2. Sign up/in with your GitHub account
3. Click "New Project"
4. Import your `character-forge` repository
5. Configure environment variables:
   - Add `GOOGLE_API_KEY` with your Google Generative AI API key
6. Click "Deploy"

### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (will prompt for configuration)
vercel

# For subsequent deployments
vercel --prod
```

## 4. Alternative Deployment Options

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables in Netlify dashboard

### Railway
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Add `GOOGLE_API_KEY` environment variable
4. Deploy automatically

### DigitalOcean App Platform
1. Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
2. Create new App
3. Connect your GitHub repository
4. Configure environment variables

## 5. Environment Variables Setup

For any deployment platform, you'll need to set:

```
GOOGLE_API_KEY=your_google_generative_ai_api_key_here
```

## 6. Custom Domain (Optional)

Once deployed, you can add a custom domain:
- Vercel: Project Settings → Domains
- Netlify: Site Settings → Domain management
- Update your DNS provider to point to the platform

## 7. Continuous Deployment

All these platforms support automatic deployments when you push to GitHub:
- Push to `main` branch = automatic production deployment
- Create pull requests for staging/preview deployments

## Quick Commands Summary

```bash
# 1. Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/character-forge.git
git push -u origin main

# 2. Deploy to Vercel (easiest)
npx vercel

# 3. For future updates
git add .
git commit -m "Update: description of changes"
git push
# (Automatic deployment triggers)
```

Your Character Forge platform will be live and accessible worldwide! 🚀