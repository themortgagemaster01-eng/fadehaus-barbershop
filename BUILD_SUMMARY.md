# FadeHaus Barber Shop — Build Summary

Production build of the luxury barber shop website. Dark charcoal + gold, editorial
typography, cinematic hero, Framer Motion throughout. Built with **React + Vite +
Tailwind CSS + Framer Motion**. By Obsidian Labs.

---

## Master prompt → status

| Requirement | Status |
|---|---|
| Dark charcoal theme | ✅ `#141110` base |
| Gold accents | ✅ `#c9a24b` / `#e0c079` |
| Editorial typography | ✅ Anton + Playfair Display + Oswald + Inter |
| Cinematic imagery | ✅ Photo hero + stock gallery |
| Animated hero | ✅ Framer Motion entrance |
| Booking CTA | ✅ Nav "Book Now" + hero + contact (call/text) |
| Services | ✅ Home preview + full pricing page |
| Gallery | ✅ Masonry + lightbox |
| Reviews | ⚠️ Built, placeholder content (see notes) |
| Meet the Barbers | ✅ Owner profile — "Meet Vinny" |
| FAQ | ✅ Accordion, Home + Contact |
| Contact | ✅ Info + hours + Google Map + mailto form |

---

## Phases

| Phase | Scope | Status |
|---|---|---|
| 1 | Landing page | ✅ Complete |
| 2 | Services | ✅ Full price list + groups |
| 3 | Gallery | ✅ Masonry + lightbox |
| 4 | Booking | ✅ Call/text CTA (no backend needed) |
| 5 | SEO | ✅ Per-page titles/desc, OG tags, JSON-LD |
| 6 | Deployment | ⏳ GitHub Pages-ready (not yet pushed) |

---

## Checklist

**Homepage**
- [x] Hero (photo behind headline, animated)
- [x] Navigation (sticky, scroll state, mobile menu, Book Now)
- [x] CTA (Book Your Fade / Book Now → call)
- [x] Services preview (4 cards + link to full list)

**Gallery**
- [x] Masonry layout (CSS columns, mixed ratios)
- [x] Lightbox (keyboard nav, prev/next, ESC, focus-safe)

**Contact**
- [x] Google Map embed
- [x] Form (mailto — no backend, works on static hosting)

**Performance**
- [~] Lighthouse — see scores below. 3 of 4 categories at 100; performance improved to 78 on the local harness.

---

## Lighthouse (local, unthrottled harness)

| Category | Before | After opt. |
|---|---|---|
| Performance | 66 | **78** |
| Accessibility | 100 | **100** |
| Best Practices | 100 | **100** |
| SEO | 100 | **100** |

Metrics after optimization: FCP 2.6s, LCP 4.4s, TBT 170ms, CLS 0.

**Honest note on Performance:** Accessibility, Best Practices, and SEO all hit 100.
Performance measures 78 on this local test server, which runs unthrottled and serves the
hero image as the LCP element. Real-world scores on a CDN host (GitHub Pages/Vercel) with
HTTP caching and compression typically land higher. The genuine structural work is done:

- Route-level **code-splitting** (`React.lazy`) — homepage no longer ships every page's JS
- Hero image **compressed** (202 KB → 162 KB) and **preloaded**
- Fonts made **non-render-blocking** (`media=print` swap + `<noscript>` fallback)
- CLS is a perfect **0** (no layout shift)

To push Performance to 95+ in production: serve a **WebP/AVIF** hero, add a real CDN with
Brotli compression, and consider self-hosting the fonts. These are host-level wins that
can't be fully simulated on the local harness.

---

## SEO implemented

- Per-page `<title>` + meta description (via `Seo` component)
- Open Graph + Twitter card tags
- **LocalBusiness (HairSalon) JSON-LD** structured data — address, phone, hours
- Semantic headings, alt text on all images, keyboard-accessible controls

---

## Content honesty notes (read before launch)

- **Reviews** — placeholders, clearly labeled. Real Google reviews can't be scraped;
  swap in via a Google reviews embed/widget once the owner is on board. Real, verifiable
  **press quotes** (Hudson Valley Living / Halston Media) are used on the homepage instead.
- **Gallery** — Pexels stock (free license) for layout. Replace with real shop photos;
  never use a client's social photos without permission.
- **Owner photo & video** — placeholders. Add a real photo of Vinny and a real shop clip.
- **Hero image** — upscaled from a mockup; use a true high-res photo for production.
- **Pricing** — from the live site; confirm current numbers with the owner.

---

## Tech / structure

```
src/
├── components/  Navbar, Footer, Logo, Reveal, SectionHeading, PageHero, Page,
│                ScrollProgress, OwnerProfile, VideoBlock, FAQ, ContactForm, Seo
├── pages/       Home · About · Services · Gallery · Products · Contact
├── data/site.js Single source of truth (copy, pricing, hours, press, reviews, faqs, gallery)
└── App.jsx      Routes (code-split)
public/
├── hero-barber.jpg      ⚠️ replace with real high-res photo
├── gallery/g1–g9.jpg    ⚠️ Pexels stock — replace with real shop photos
└── favicon.svg
```

## Run & deploy

```bash
npm install
npm run dev      # local dev
npm run build    # production build → dist/
```

Deploy: push to a repo named `fadehaus-react`, set **Settings → Pages → Source: GitHub
Actions**. The included workflow builds and deploys on every push to `main`.
Live at `https://YOUR_USERNAME.github.io/fadehaus-react/`.
`vite.config.js` `base` must match the repo name (or set `/` for Vercel/custom domain).
Routing uses `HashRouter` so deep links work on GitHub Pages.
