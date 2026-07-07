# Deployment Guide — The Greatest Sign Maker

Choose your deployment method below. All options are free (or have a generous free tier).

---

## Option 1: Netlify Drop (Fastest — 2 minutes)

**Best for:** Quick testing, getting live immediately

1. **Build the project:**
   ```bash
   npm run build
   ```
   This generates a `dist/` folder with your compiled site.

2. **Go to Netlify Drop:**
   Open [drop.netlify.com](https://drop.netlify.com) in your browser

3. **Drag and drop:**
   Drag the `dist/` folder into the browser window

4. **Done!**
   You get a live URL like `https://xxx.netlify.app` in ~10 seconds

**Pros:** Instant, no account setup, no configuration needed
**Cons:** URL is random (xxx.netlify.app), no auto-deploys on code changes, can't use custom domain easily

---

## Option 2: Netlify + GitHub (Recommended — 5 minutes)

**Best for:** Serious deployment, auto-deploys on every push

### Step 1: Create GitHub Repository

```bash
cd /Users/ian/Desktop/the-greatest-sign-maker/the-greatest-sign-maker
git remote add origin https://github.com/YOUR_USERNAME/the-greatest-sign-maker.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Select GitHub (authorize if needed)
4. Select the `the-greatest-sign-maker` repository
5. Use these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**

### Step 3: Add Environment Variable

1. In Netlify dashboard, go to **Site Settings → Build & Deploy → Environment**
2. Click **"Edit variables"**
3. Add new variable:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** Your API key from [aistudio.google.com](https://aistudio.google.com)
4. Trigger a **Manual Deploy** to rebuild with the new key

### Step 4: Optional — Add Custom Domain

1. In Site Settings → Domain Management
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `greatestsignmaker.com`)
4. Follow DNS setup instructions

**Pros:** Auto-deploys on push, professional URL, can use custom domain, includes analytics
**Cons:** Requires GitHub account + Netlify account (both free)

**From now on:** Every time you `git push origin main`, Netlify auto-builds and deploys in ~2 minutes

---

## Option 3: Vercel (Alternative to Netlify)

**Best for:** If you prefer Vercel's platform (slightly faster builds)

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select your GitHub repo
4. Vercel auto-detects React + Vite settings
5. Add environment variable `GEMINI_API_KEY`
6. Click **"Deploy"**

Same workflow as Netlify, different platform. Choose whichever you prefer.

---

## Option 4: GitHub Pages (Free, Static Only)

**Best for:** Free hosting, doesn't need backend

```bash
# Build
npm run build

# Push dist folder to gh-pages branch
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin main

# In GitHub repo settings:
# Settings → Pages → Source → Deploy from a branch → gh-pages branch
```

**Pros:** Free forever, no external dependencies
**Cons:** Static only (Gemini API calls work from frontend, but slower), no CDN

---

## Quick Deployment Checklist

Before deploying, verify:

- [ ] Run `npm run build` locally — no errors
- [ ] Check `dist/` folder is created
- [ ] Test locally: `npm run dev` works on `localhost:3002`
- [ ] Have your Gemini API key ready (from [aistudio.google.com](https://aistudio.google.com))
- [ ] Test AI Workshop form locally

---

## Post-Deployment Verification

After your site is live, check:

1. **Visit your live URL** (e.g., `https://greatestsignmaker.netlify.app`)
2. **Test navigation:** Click through all sections, verify smooth scroll works
3. **Test AI Workshop:**
   - Fill in Business Name, Type, and Vibe
   - Click "Generate Concept"
   - Should show a colorful concept card (or error if API key missing)
4. **Test external links:** Click Instagram, Twitter, MBA.com links
5. **Check responsive design:** View on mobile (use Chrome DevTools)
6. **Check console for errors:** Open DevTools (F12) → Console tab, look for red errors

---

## Troubleshooting

### Build fails with "Port already in use"
```bash
# Kill existing process
kill -9 $(lsof -t -i :3002)
npm run build
```

### Gemini API not responding after deploy
- Verify you set the `GEMINI_API_KEY` environment variable in your hosting platform
- Check the key is valid at [aistudio.google.com](https://aistudio.google.com)
- Netlify: Settings → Build & Deploy → Environment → verify key is there
- Vercel: Project Settings → Environment Variables → verify key is there

### Images not loading
- Check `imageConfig.ts` — all URLs should be full HTTPS paths
- Test URLs in browser directly to verify they're accessible
- Use a CDN or image hosting service (Cloudinary, Vercel Blob, etc.)

### Build size too large
Current build is ~220KB JS (acceptable). If you need to optimize:
```bash
npm run build -- --sourcemap
# Check dist/ folder size with: du -sh dist/
```

---

## Environment Variables Explained

### Local Development (`.env.local`)
```
GEMINI_API_KEY=sk-proj-xxx...
```
File is `.gitignore`'d — only you see it locally.

### Production (Netlify/Vercel/etc.)
Set via dashboard (NOT in `.env.local` — that doesn't deploy).

**Why separate?** Security — you never commit API keys to GitHub.

---

## Custom Domain Setup (Netlify Example)

If you own `greatestsignmaker.com`:

1. **Netlify:** Site Settings → Domain Management → "Add custom domain"
2. **Enter:** `greatestsignmaker.com`
3. **Netlify shows:** DNS records to add (or use Netlify nameservers)
4. **Update your domain registrar** (GoDaddy, Namecheap, etc.) with Netlify's DNS records
5. **Wait 10 minutes–48 hours** for DNS to propagate
6. **Verify:** https://greatestsignmaker.com should show your site

---

## Maintenance After Deploy

### Weekly
- Check deployment logs (Netlify Dashboard → Deploys)
- Test AI Workshop if you're actively using it

### When you update code
```bash
git add .
git commit -m "Update: [what changed]"
git push origin main
# Netlify auto-deploys in ~2 minutes
# Check Netlify Dashboard → Deploys to verify
```

### Monthly
- Review analytics (Netlify Analytics or Google Analytics)
- Update sign archive if adding new concepts
- Check for broken links

---

## Support

- **Netlify Issues:** [docs.netlify.com](https://docs.netlify.com)
- **Gemini API Issues:** [ai.google.dev](https://ai.google.dev)
- **React Issues:** [react.dev/docs](https://react.dev/docs)

---

**Recommended:** Use **Netlify + GitHub** (Option 2) for best experience.

Good luck! 🚀
