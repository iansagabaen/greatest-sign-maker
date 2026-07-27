# The Greatest Sign Maker

A React 19 + Vite application archiving Ian Sagabaen's legendary MLB sign-making legacy — storytelling, visual branding, and a curated gallery of iconic signs, with Athletics-themed responsive design.

## Features

- ⚾ **Hero Landing Page** — Iconic Athletics-themed typography and imagery
- 📖 **Origin Story** — The journey from designer to MLB legend (2012-present)
- 🎨 **Design Methodology** — Professional approach to sign creation
- 🖼️ **Digital Archive** — Gallery of 20x30 foam core sign designs
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile
- 🎭 **Smooth Animations** — Fade-in effects and scroll-based interactions

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — Lightning-fast build tool
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Icon library

## Development

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Setup
```bash
npm install
```

### Run Locally
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

This generates optimized files in the `dist/` folder.

## Deployment

### Option 1: Netlify (Recommended)

**Via GitHub:**
1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repo
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Deploy!

**Via Netlify Drop (quick):**
1. Run `npm run build`
2. Go to [drop.netlify.com](https://drop.netlify.com)
3. Drag the `dist` folder into the browser
4. Your site is live!

### Option 2: Vercel

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import project from GitHub
4. Deploy!

### Option 3: GitHub Pages

```bash
npm run build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Then enable GitHub Pages in repo settings (build from `dist` folder).

## Project Structure

```
.
├── components/          # React components
│   ├── Navbar.tsx      # Navigation header
│   ├── Hero.tsx        # Landing hero section
│   ├── Origin.tsx      # Origin story
│   ├── Methodology.tsx  # Design methodology
│   ├── Gallery.tsx     # Sign archive gallery
│   ├── Status.tsx      # Legacy/status section
│   ├── Footer.tsx      # Footer
│   └── Story.tsx       # Extended story template
├── types.ts            # TypeScript type definitions
├── imageConfig.ts      # Image configuration
├── App.tsx            # Main app component
├── index.tsx          # React DOM entry
├── index.html         # HTML template with Tailwind config
├── index.css          # Global styles
└── vite.config.ts     # Vite configuration
```

## Customization

### Colors
Edit Tailwind colors in `index.html`:
- `athletics-green`: `#003831` (primary)
- `athletics-gold`: `#EFB21E` (accent)
- `sign-navy`, `sign-gold`, `sign-paper`, `sign-ink`: Alternative palette

### Images
Update image paths in `imageConfig.ts` to point to your assets.

## License

© 2026 Ian Sagabaen. All rights reserved.

---

**Questions?** Check the FAQ at [greatestsignmaker.com](http://greatestsignmaker.com/faq/) or review the original AI Studio documentation.
