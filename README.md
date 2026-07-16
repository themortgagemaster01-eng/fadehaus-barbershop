# FadeHaus Barber Shop — React Site

Premium multi-page site for **FadeHaus Barber Shop** (Mahopac, NY).
Built with **React + Vite + Tailwind CSS + Framer Motion**. By Obsidian Labs.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Deploy to GitHub Pages
1. Create a repo named **fadehaus-react** and push this project to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push.
4. Live at `https://YOUR_USERNAME.github.io/fadehaus-react/`.

> **Important:** `vite.config.js` sets `base: '/fadehaus-react/'` to match the repo name.
> If your repo has a different name, update `base` to `/<repo-name>/`.
> Deploying to **Vercel** or a **custom domain** instead? Set `base: '/'`.

Routing uses **HashRouter**, so deep links work on GitHub Pages with no 404 redirect hacks.

## Structure
```
src/
├── components/   Navbar, Footer, Logo, Reveal, SectionHeading, PageHero, Page, ScrollProgress
├── pages/        Home (full) · About · Services · Gallery · Products · Contact
├── data/site.js  Single source of truth — all copy, pricing, hours, press, reviews
└── App.jsx       Routes
public/
├── hero-barber.jpg   ⚠️ placeholder — replace with real high-res shop photo
└── favicon.svg
```

## Content notes (read before pitching)
- **Pricing** is from the live site — confirm with owner.
- **Press quotes** are real and verifiable (Hudson Valley Living / Halston Media, Oct 2025).
- **Reviews** are clearly-labeled PLACEHOLDERS. Swap for real Google reviews via an embed
  (Google Places API or a review widget) once the owner is on board — do not present the
  placeholders as real customers.
- **Gallery/Products** use placeholder tiles — never use the client's own social photos
  without permission.

## Design system
Warm charcoal (#141110) + gold leaf (#c9a24b), Anton display / Playfair serif / Oswald labels /
Inter body. Signature motif: the diagonal **barber-pole gold rule** that recurs as a divider.
Motion via Framer Motion (scroll reveals, page transitions, scroll-progress), reduced-motion respected.
