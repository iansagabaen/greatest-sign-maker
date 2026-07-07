# The Greatest Sign Maker — Project Guide

## Overview

This is a React 19 + Vite marketing website for Ian Sagabaen's MLB sign-making legacy (2012–2026). It combines storytelling, visual branding, and an AI-powered sign concept generator.

**Status:** Ready to deploy | Local dev running on `localhost:3002`

**Project Location:** `/Users/ian/my-projects/projects/greatest-sign-maker/`
(All Claude work is kept in `/Users/ian/my-projects/` and tracked by git)

**Documentation References:**
- Project status & next actions: `/Users/ian/my-projects/projects.md` (Greatest Sign Maker section)
- Deployment guide (this folder): `DEPLOYMENT.md`
- Research & media coverage: `/Users/ian/my-projects/research/2026-06-21-greatest-sign-maker-digital-assets.md`
- Complete navigation guide: `/Users/ian/my-projects/GREATEST_SIGN_MAKER_DOCS.md`

---

## Quick Start

### Local Development
```bash
npm install
# Create .env.local with your Gemini API key from https://aistudio.google.com
npm run dev
# Opens on localhost:3002
```

### Production Build
```bash
npm run build
# Output: dist/ folder (ready for deployment)
```

### Deploy
1. **Netlify Drop (fastest):** `npm run build` → drag `dist/` to [drop.netlify.com](https://drop.netlify.com)
2. **Netlify + GitHub:** Push to GitHub → connect to Netlify → auto-deploys on push
3. **Vercel:** Same workflow, alternative platform
4. **GitHub Pages:** Run `npm run build`, push `dist/` to repo with GH Pages enabled

**Full deployment guide:** See `README.md`

---

## Project Structure

```
.
├── components/              # React components
│   ├── Navbar.tsx          # Fixed header with smooth scroll nav
│   ├── Hero.tsx            # Landing hero section
│   ├── Origin.tsx          # Origin story (2012–2013)
│   ├── Methodology.tsx     # Design approach & hardware
│   ├── Gallery.tsx         # Sign archive gallery
│   ├── SignGenerator.tsx   # AI concept generator (Gemini)
│   ├── Status.tsx          # Legacy/fandom section
│   ├── Story.tsx           # Extended story template (optional)
│   └── Footer.tsx          # Footer with links
├── services/
│   └── geminiService.ts    # Google Gemini API integration
├── types.ts                # TypeScript types (SectionId, SignConcept, etc.)
├── imageConfig.ts          # Image paths (centralized)
├── App.tsx                 # Main app component
├── index.tsx               # React DOM entry point
├── index.html              # HTML template + Tailwind config
├── index.css               # Global styles + animations
├── vite.config.ts          # Vite build configuration
├── tsconfig.json           # TypeScript config
├── .env.local              # Environment variables (gitignored)
└── .claude/                # Claude Code settings
    └── launch.json         # Dev server config for preview
```

---

## Key Features

### 1. **Hero Section** (Hero.tsx)
- Athletics green/gold branding
- Animated typography (fade-in-up)
- Instagram link + story button
- Background image overlay + gradient

### 2. **Origin Story** (Origin.tsx)
- Timeline narrative (2012–2013)
- MLB.com quote (credibility anchor)
- Image integration
- "First Pitch Promise" narrative

### 3. **Design Methodology** (Methodology.tsx)
- Hardware explanation (20x30 foam core)
- Content strategy (niche + broad balance)
- Legibility approach (broadcast camera distance)

### 4. **Digital Archive** (Gallery.tsx)
- Gallery grid of sign concepts
- Each sign: title, size, context
- Clickable for expanded view (Coming Soon)
- Examples: FRANKIE, La Stella, Stephen Vogt, Coco Crisp, Sean Doolittle

### 5. **AI Workshop** (SignGenerator.tsx)
- Form: Business Name + Type + Vibe
- Calls Gemini API with JSON schema
- Output: Slogan, Visual Style, Color Palette, Typography
- Error handling with brand-appropriate messaging

### 6. **Navigation** (Navbar.tsx)
- Fixed header with brand logo
- Smooth scroll to sections
- Fades from transparent to opaque on scroll
- Responsive mobile menu (button placeholder)

### 7. **Status Section** (Status.tsx)
- Fandom credentials
- Connection to A's community
- Fan culture narrative

---

## Customization Guide

### Colors
Edit `index.html` Tailwind config (within `<script>` tag):
```javascript
colors: {
  'athletics-green': '#003831',    // Primary background
  'athletics-gold': '#EFB21E',     // Accent
  'sign-navy': '#1a2a3a',          // Alt background
  'sign-gold': '#EFB21E',          // Alt accent
  'sign-paper': '#f5f1eb',         // Light background
  'sign-ink': '#2c1810',           // Dark text
}
```

### Images
Update image paths in `imageConfig.ts`:
```typescript
export const IMAGES = {
  heroBackground: 'https://your-image-url.jpg',
  originImage: 'https://...',
  methodologyImage: 'https://...',
  statusImage: 'https://...',
  // Add more as needed
};
```

### AI Prompt
Edit the prompt in `services/geminiService.ts`:
```typescript
contents: `You are The Greatest Sign Maker. Create a sign concept for a client.
// Customize this prompt to change AI behavior
```

### Section Navigation
Sections are defined in `types.ts`:
```typescript
export enum SectionId {
  HERO = 'hero',
  ORIGIN = 'origin',
  METHODOLOGY = 'methodology',
  GALLERY = 'gallery',
  STATUS = 'status',
  WORKSHOP = 'workshop',
}
```
Add new sections here, then create component + add to App.tsx.

---

## Environment Variables

### `.env.local` (Local Development)
```
GEMINI_API_KEY=your_api_key_from_aistudio.google.com
```

### Deployment Environment Variables
When deploying, set `GEMINI_API_KEY` in your hosting platform's environment settings:
- **Netlify:** Site Settings → Build & Deploy → Environment
- **Vercel:** Project Settings → Environment Variables
- **GitHub Pages:** Not supported (static only; requires backend proxy)

**Security note:** API key is embedded in the frontend bundle. This is acceptable for low-traffic sites. For high-traffic production, consider a backend proxy.

---

## Maintenance Tasks

### Weekly
- [ ] Check Gemini API quota/costs (if live)
- [ ] Review console errors (Chrome DevTools)
- [ ] Test AI workshop on deployed site

### Monthly
- [ ] Update gallery with new sign concepts
- [ ] Review analytics (if enabled)
- [ ] Check for broken links (Instagram, Twitter, external)

### Before Deploying
- [ ] Run `npm run build` and check output size
- [ ] Test locally: all navigation, forms, responsive design
- [ ] Verify Gemini API key is set in environment
- [ ] Check image URLs are valid
- [ ] Update social links if changed

---

## Deployment Checklist

### Before First Deploy
- [ ] Run `npm run build` locally and verify `dist/` folder
- [ ] Set `GEMINI_API_KEY` in deployment platform
- [ ] Test AI Workshop form post-deploy
- [ ] Verify all external links work (Instagram, Twitter, MLB.com)
- [ ] Check mobile responsiveness on actual device

### After Deploy
- [ ] Share live URL
- [ ] Monitor for errors (check browser console on live site)
- [ ] Test all interactive features (navigation, AI workshop, links)

---

## Troubleshooting

### Dev Server Won't Start
```bash
# Port already in use? Let Vite auto-select:
PORT=0 npm run dev
# Or check what's using port 3002:
lsof -i :3002
# Kill if needed:
kill -9 <PID>
```

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Gemini API Not Working
- Verify `.env.local` has correct key
- Check API key has Gemini 2.5 Flash enabled
- Test in AI Studio first: https://aistudio.google.com
- Check browser console for exact error

### Images Not Loading
- Verify URLs in `imageConfig.ts` are correct
- Check CORS settings if using external images
- Use full HTTPS URLs, not relative paths

---

## Git Workflow

Initial repo is set up with:
- Remote: Not yet configured
- Branch: `main`
- First commit: "Initial commit: Greatest Sign Maker website..."

### To Connect to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/the-greatest-sign-maker.git
git branch -M main
git push -u origin main
```

### Deployment with Auto-Builds
Connect GitHub repo to Netlify/Vercel → auto-deploys on `git push origin main`

---

## Performance Notes

### Bundle Size
- Current: 219KB JS (68KB gzipped)
- Acceptable for a portfolio site

### Optimization Opportunities (if needed)
- Code split AI Workshop component (lazy load)
- Optimize hero image (use WebP, compress)
- Minify gallery image list
- Remove unused Tailwind utilities

### Analytics
Not currently integrated. To add:
- Netlify Analytics (simple, included)
- Google Analytics (more detailed, free)
- Plausible (privacy-friendly, paid)

---

## Known Limitations

1. **AI Workshop:** Requires valid Gemini API key. If key is invalid/missing, shows: "The spirits of the sign workshop are quiet."
2. **Static Images:** All images must be external URLs or imported in HTML. No local image files supported in this Vite setup.
3. **Mobile Menu:** Navbar button is placeholder. Mobile menu toggle not fully implemented (low priority).
4. **Gallery:** "Click specific signs to see original context" is marked (Coming Soon) — expand modal not implemented.

---

## Next Steps (From projects.md)

1. **Deploy immediately** (5 min to 2 hrs depending on platform)
2. **Add media kit/press page** with MLB.com Cut4 links (1–2 hrs)
3. **Add credibility badges** (As seen in: MLB.com, Oakland A's) (30 min)
4. **Link social profiles** prominently (15 min)
5. **Add snagged baseballs stat** to legacy section (15 min)

See `/Users/ian/my-projects/projects.md` (Greatest Sign Maker section) for full context and research links.

---

## Resources

- **Google Gemini API docs:** https://ai.google.dev/
- **React 19 docs:** https://react.dev/
- **Vite docs:** https://vitejs.dev/
- **Tailwind CSS docs:** https://tailwindcss.com/
- **Original site info:** http://greatestsignmaker.com/faq/
- **Your Instagram:** https://www.instagram.com/greatestsignmaker/
- **Your Twitter:** https://twitter.com/gr8estsignmaker

---

**Last updated:** 2026-06-21
**Maintained by:** Claude Code (Chief of Staff)
