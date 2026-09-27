# Meridian — Interior Architecture Studio

A premium, production-ready website for a fictional high-end interior architecture
studio. Built as an editorial, magazine-style experience — cinematic imagery,
elegant serif typography, generous whitespace and restrained, purposeful motion.

The visual language takes cues from luxury interior/architecture studios (large
imagery, "ghost" watermark headings, numbered editorial sections, overlapping
image + info compositions) rendered in a sophisticated warm-neutral palette with
a single terracotta accent.

---

## 1. Final Folder Structure

```text
meridian-studio/
├── index.html                 # Shell: fonts (preconnect), base meta, CDN preconnect
├── public/
│   ├── favicon.svg            # Brand mark
│   ├── robots.txt             # Crawl rules + sitemap pointer
│   └── sitemap.xml            # All routes, ready for search engines
├── src/
│   ├── assets/                # Local static assets (images/fonts if self-hosted)
│   ├── components/
│   │   ├── animations/        # ScrollReveal, TextReveal, ImageReveal, PageTransition
│   │   ├── common/            # Button, Container, SectionHeading, Image, Seo,
│   │   │                      #   PageHero, ComingSoonSection, CustomCursor,
│   │   │                      #   ScrollProgress, ScrollToTop, ErrorBoundary,
│   │   │                      #   RouteFallback
│   │   ├── forms/             # ContactForm (+ accessible Field wrapper)
│   │   ├── layout/            # Header, Footer, Layout (app shell)
│   │   ├── navigation/        # Logo, MobileMenu
│   │   ├── projects/          # ProjectCard, ProjectGrid, ProjectGallery,
│   │   │                      #   FeaturedProjects
│   │   └── services/          # ServiceItem
│   ├── constants/             # site.ts, routes.ts, motion.ts
│   ├── data/                  # projects.ts, services.ts, navigation.ts  ← content
│   ├── hooks/                 # useScrolled, useScrollProgress,
│   │                          #   useLockBodyScroll, useMediaQuery
│   ├── pages/                 # Home, Projects, ProjectDetails, Services,
│   │                          #   Brands, Innovation, Contact, NotFound
│   │   └── Home/sections/     # Hero, Stats, Philosophy, Process, ServicesPreview
│   ├── routes/                # AppRoutes.tsx (lazy-loaded routing)
│   ├── services/              # contact.ts (swappable API layer)
│   ├── styles/                # tokens.css (design tokens), global.css (reset/base)
│   ├── types/                 # Shared domain & UI types
│   ├── utils/                 # image, validation, cn, motionTag
│   ├── App.tsx
│   └── main.tsx
├── .env.example               # VITE_CONTACT_ENDPOINT for live form submissions
├── .prettierrc.json
└── vite.config.ts             # Vendor code-splitting config
```

Components are small, single-responsibility and reusable. **No page hardcodes
repeated project/service markup** — everything derives from `src/data/*`.

---

## 2. Technologies Used

| Concern            | Choice                                                      |
| ------------------ | ----------------------------------------------------------- |
| Framework          | React 19 + TypeScript (strict)                              |
| Build tool         | Vite                                                        |
| Routing            | React Router (lazy routes, code splitting)                  |
| Animation          | Framer Motion (reduced-motion aware)                        |
| Icons              | lucide-react                                                |
| Styling            | CSS Modules + a token-driven design system (CSS variables)  |
| SEO metadata       | React 19 native `<title>/<meta>` hoisting (no helmet dep)   |
| Fonts              | Fraunces (serif display) + Inter (sans) via Google Fonts    |
| Lint / Format      | oxlint + Prettier                                           |

No UI kit, no CSS framework, no state-management library — intentionally lean.

---

## 3. Important Design Decisions

- **Token-driven design system.** All color, type scale (fluid `clamp()`),
  spacing, motion easings/durations and layout live in `styles/tokens.css`. Change
  the brand in one place.
- **Warm-neutral palette + one accent.** Bone/sand/charcoal/ink neutrals with a
  single terracotta accent, used sparingly. The site alternates light editorial
  sections with cinematic dark sections (never fully dark).
- **Two typefaces only.** Fraunces for editorial headings, Inter for UI/body.
- **Editorial, not card-grid.** Featured work uses overlapping image + info
  compositions with oversized indices; the projects page uses an asymmetric,
  offset grid; services are numbered alternating rows — deliberately magazine-like.
- **Signature "ghost" headings.** Oversized outlined watermark text sits behind
  section titles (`SectionHeading`), echoing high-end studio sites.
- **Motion is purposeful & accessible.** Masked text/image reveals, subtle hover
  zoom, animated nav underline, page transitions and a scroll-progress bar — all
  disabled/neutralised under `prefers-reduced-motion`.
- **Data/UI separation.** Projects and services are typed data; components are
  generic and content-agnostic.
- **Graceful failure.** Error boundary, 404 route, project-not-found state,
  image error fallbacks, and full form validation states.

---

## 4. How to Run Locally

Requires Node 18+ (developed on Node 22).

```bash
cd meridian-studio
npm install
npm run dev          # http://localhost:5173
```

Other scripts:

```bash
npm run build        # type-check + production build to dist/
npm run preview      # preview the production build
npm run lint         # oxlint
npm run typecheck    # tsc project references
npm run format       # Prettier write
```

---

## 5. How to Replace Project Images / Content

**All content lives in `src/data/`** — no markup changes required.

- **Projects:** edit `src/data/projects.ts`. Append a `Project` object (typed) and
  it automatically appears in the home showcase, the projects grid, gets a detail
  page at `/projects/<slug>`, and joins prev/next navigation.
- **Services & process:** edit `src/data/services.ts`.
- **Navigation:** edit `src/data/navigation.ts`.
- **Studio details** (name, email, phone, address, socials): `src/constants/site.ts`.

**Images.** Every image is referenced by an Unsplash photo ID (or a full URL)
through `src/utils/image.ts`, which generates optimized URLs, responsive
`srcset`, and blur placeholders. To use your own CDN or local assets:

- Drop-in replacement: pass a full `https://…` URL as the image value — the
  helper detects non-Unsplash URLs and passes them through untouched.
- Local assets: import from `src/assets/images/` and pass the imported URL.
- To globally change sizing/quality, edit `SRCSET_WIDTHS` / defaults in
  `utils/image.ts`.

---

## 6. How to Connect the Contact Form to an API Later

The UI never talks to the network directly — it calls the service layer in
`src/services/contact.ts`. To go live:

1. Copy `.env.example` → `.env.local`.
2. Set `VITE_CONTACT_ENDPOINT=https://your-api.example.com/contact`.

That's it. When the variable is present, `submitContact()` POSTs the sanitized
JSON payload to your endpoint and surfaces success/error states in the UI. When
it's absent, the form runs in a safe simulated mode (no network call). Swap the
`fetch` for your SDK/provider inside that one function if needed — no component
changes.

Payload shape (`ContactPayload`): `name, email, phone, projectType, budget,
message`. All fields are sanitized (angle brackets stripped) before leaving the
client, and validated via the pure `validateContact()` util.

---

## 7. Performance Optimizations Implemented

- **Code splitting:** every route except Home is lazy-loaded; vendors split into
  `react` and `motion` chunks (see `vite.config.ts`). Initial JS ≈ 16 KB gzip.
- **Image performance:** responsive `srcset` + `sizes`, blur-up LQIP placeholders,
  `loading="lazy"` by default, `fetchpriority="high"` + eager load only for LCP
  hero images, `decoding="async"`, and explicit `width`/`height` to avoid CLS.
- **Font strategy:** `preconnect` to Google Fonts + `display=swap` (non-blocking).
- **Image CDN preconnect** to speed up the LCP hero.
- **Efficient motion:** reveals animate once (`viewport={{ once: true }}`);
  scroll listeners are passive + rAF-throttled; the custom cursor writes to the
  DOM directly (no React re-renders); `motion()` components are cached to avoid
  remounts.
- **Reduced motion:** honored throughout, plus a global CSS safety net.
- **Lean deps:** no UI/CSS framework; CSS Modules are code-split per route.

Production build is warning-free and type-checked.

---

## 8. Recommended Future Improvements

- **Self-host fonts** (subset `.woff2`) to remove the third-party font request and
  further improve LCP/privacy.
- **Real CMS** (e.g. Sanity/Contentful) behind the same `data/` contracts.
- **Lightbox** for the project gallery + keyboard-navigable image viewer.
- **Image pipeline:** migrate to a `<picture>`-based AVIF/WebP pipeline or a
  build-time image plugin if serving your own assets.
- **Prerender / SSG** (e.g. `vite-plugin-ssr` / a static export) so metadata and
  content are in the initial HTML for the best SEO and social previews.
- **Analytics + form spam protection** (honeypot/Turnstile) on the contact API.
- **Tests:** unit tests for `validateContact`/`image` utils and a Playwright smoke
  suite for the core routes.
- **CMS-driven sitemap** generation at build time instead of the static file.

---

Built with care — designed to look like a real studio site, engineered to be
maintainable.
