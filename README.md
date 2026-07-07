# The Greatest Sign Maker

A React 19 + Vite application celebrating Ian Sagabaen's legendary MLB sign-making legacy. Features an interactive AI-powered sign concept generator using Google Gemini API, responsive design with Athletics branding, and a curated gallery of iconic signs.

## Features

- ⚾ **Hero Landing Page** — Iconic Athletics-themed typography and imagery
- 📖 **Origin Story** — The journey from designer to MLB legend (2012-present)
- 🎨 **Design Methodology** — Professional approach to sign creation
- 🖼️ **Digital Archive** — Gallery of 20x30 foam core sign designs
- 🤖 **AI Workshop** — Gemini-powered sign concept generator
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile
- 🎭 **Smooth Animations** — Fade-in effects and scroll-based interactions

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — Lightning-fast build tool
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Google Gemini API** — AI sign concept generation
- **Lucide React** — Icon library

## Development

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Setup
```bash
npm install
```

### Environment Variables
Create a `.env.local` file in the project root:
```
GEMINI_API_KEY=your_gemini_api_key_here
```

Get your API key from [Google AI Studio](https://aistudio.google.com/).

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
7. Add environment variable: `GEMINI_API_KEY` (from Google AI Studio)
8. Deploy!

**Via Netlify Drop (quick):**
1. Run `npm run build`
2. Go to [drop.netlify.com](https://drop.netlify.com)
3. Drag the `dist` folder into the browser
4. Your site is live!

### Option 2: Vercel

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import project from GitHub
4. Set `GEMINI_API_KEY` environment variable
5. Deploy!

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
│   ├── SignGenerator.tsx # AI concept generator
│   ├── Status.tsx      # Legacy/status section
│   ├── Footer.tsx      # Footer
│   └── Story.tsx       # Extended story template
├── services/           # API services
│   └── geminiService.ts # Google Gemini integration
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

### AI Sign Generator
Edit the prompt in `services/geminiService.ts` to customize AI responses.

## License

© 2026 Ian Sagabaen. All rights reserved.

---

**Questions?** Check the FAQ at [greatestsignmaker.com](http://greatestsignmaker.com/faq/) or review the original AI Studio documentation.
