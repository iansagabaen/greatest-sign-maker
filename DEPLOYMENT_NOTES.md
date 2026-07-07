# Netlify + GitHub Continuous Deployment Setup

_For: Localemaps AI_

---

## Step 1: Push to GitHub

```bash
# If you don't have a remote yet, add it:
git remote add origin https://github.com/iansagabaen/localemaps-ai.git

# Push to GitHub:
git push -u origin main
```

**Note:** If the repo is private, make sure it's set to private in GitHub settings.

---

## Step 2: Connect GitHub to Netlify

1. **In Netlify Dashboard:**
   - Click "Add new site" → "Import an existing project"
   - Select "GitHub"
   - Authorize Netlify to access your GitHub account
   - Select the `localemaps-ai` repository

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - (Netlify should auto-detect from `netlify.toml`)

3. **Environment Variables:**
   - Add to Netlify Project Settings → Environment variables:
   ```
   API_KEY = <your Gemini API key>
   SUPABASE_URL = <your Supabase project URL>
   SUPABASE_ANON_KEY = <your Supabase anon key>
   ```

4. **Deploy:**
   - Netlify auto-deploys main branch
   - Each push to `main` triggers a new build
   - You get a unique preview URL for each deployment
   - Production URL: `https://localemaps-ai.netlify.app` (or your custom domain)

---

## Step 3: Test Continuous Deployment

1. Make a small change locally:
   ```bash
   echo "# Updated on $(date)" >> README.md
   git add README.md
   git commit -m "Test deployment"
   git push origin main
   ```

2. Watch the build in Netlify:
   - Go to Netlify project dashboard
   - Click "Deploys" tab
   - Watch the build progress in real-time

3. Once deployed, your site is live at the Netlify URL

---

## Workflow for Future Updates

Every time you push to GitHub:
```bash
# Make changes, test locally
npm run dev

# Commit & push
git add .
git commit -m "Fix: [description]"
git push origin main

# Netlify auto-builds and deploys
# → Your wife sees the changes live in ~2 minutes
```

---

## Rollback (if needed)

If a deployment breaks:
- Go to Netlify Deploys tab
- Click the previous working deployment
- Click "Publish" to roll back instantly

---

## Custom Domain (Optional)

After your wife tests and approves:
- Buy domain (namecheap, Google Domains, etc.)
- In Netlify: Site settings → Domain management → Add domain
- Follow DNS setup instructions

**Suggested domain:** `localemaps.app` or `localemaps.co`

---

## Monitoring

Check Netlify dashboard for:
- Deploy history (each push to main)
- Build logs (if a build fails)
- Performance analytics (how fast your site loads)
- Bandwidth usage (free tier is generous)

---

## Notes

- **Free tier is plenty** for testing and personal use (100 GB/month bandwidth)
- **Builds are instant** (usually 1-2 minutes)
- **No downtime** between deployments — Netlify blue/green deploys
- **Environment variables are secure** — stored encrypted, never exposed in build logs

Ready to test? Push to GitHub, connect Netlify, and share the link with your wife!
