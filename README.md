# Casa Kala — Interiors · Spaces · Living

A premium, production-ready website for **Casa Kala**, a Dubai-based interior
design and turnkey studio. Built as an editorial, magazine-style experience —
cinematic imagery, elegant serif typography, generous whitespace and restrained,
purposeful motion.

The visual language takes cues from luxury interior/architecture studios (large
imagery, "ghost" watermark headings, numbered editorial sections, overlapping
image + info compositions) rendered in a sophisticated warm-neutral palette with
a single terracotta accent and the champagne-gold **CK** brand monogram.

---

## 1. Final Folder Structure

```text
casa-kala/  (dir: meridian-studio)
├── index.html                 # Shell: fonts (preconnect), base meta, CDN preconnect
├── public/
│   ├── favicon.svg            # Brand monogram on a charcoal tile (also apple-touch-icon)
│   ├── logo-mark.svg          # Casa Kala CK monogram (used in header/footer logo)
│   ├── logo-full.svg          # Full stacked lockup: monogram + wordmark + tagline
│   ├── images/projects/       # Real project photography, one folder per project
│   │   └── <slug>/            #   hero.jpg + 1..4.jpg per project (12 projects)
│   ├── robots.txt             # Crawl rules + sitemap pointer
│   └── sitemap.xml            # All routes, ready for search engines
├── src/
│   ├── assets/                # Local static assets (images/fonts if self-hosted)
│   ├── components/
│   │   ├── animations/        # ScrollReveal, TextReveal, ImageReveal, PageTransition
│   │   ├── common/            # Button, Container, SectionHeading, Image, Seo,
│   │   │                      #   PageHero, ComingSoonSection, CustomCursor,
│   │   │                      #   ScrollProgress, ScrollToTop, ErrorBoundary,
│   │   │                      #   RouteFallback, WhatsAppButton
│   │   ├── forms/             # ContactForm (+ accessible Field wrapper)
│   │   ├── layout/            # Header, Footer, Layout (app shell)
│   │   ├── navigation/        # Logo, MobileMenu
│   │   ├── projects/          # ProjectShowcase (projects page), FeaturedProjects
│   │   │                      #   (home), ProjectGallery, + legacy ProjectCard/Grid
│   │   └── services/          # ServiceItem
│   ├── constants/             # site.ts, routes.ts, motion.ts
│   ├── data/                  # ← ALL EDITABLE CONTENT lives here
│   │   ├── projects.ts        #   Projects (single source of truth)
│   │   ├── about.ts           #   About page copy, values, team, images
│   │   ├── testimonials.ts    #   Track-record stats + client testimonials
│   │   ├── services.ts        #   Services & process steps
│   │   └── navigation.ts      #   Primary nav
│   ├── hooks/                 # useScrolled, useScrollProgress,
│   │                          #   useLockBodyScroll, useMediaQuery
│   ├── pages/                 # Home, About, Projects, ProjectDetails, Services,
│   │                          #   Brands, Innovation, Contact, NotFound
│   │   ├── Home/sections/     #   Hero, TrackRecords, Philosophy, Process,
│   │   │                      #     Testimonials, ServicesPreview (+ legacy Stats)
│   │   └── About/sections/    #   Studio, Philosophy, VisionValues, Team, Specialist
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
repeated project/service/team markup** — everything derives from `src/data/*`.

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

## 3. Pages & Key Sections

- **Home** — cinematic hero, featured projects (editorial showcase),
  **Track Records** (animated count-up stat circles), philosophy, process,
  **What Our Clients Say** (testimonial carousel), services preview.
- **About** (`/about`) — hero, The Studio, Our Philosophy, Vision & Values,
  Management Team, The Specialists. All copy is config-driven (see §5).
- **Projects** (`/projects`) — full-width editorial `ProjectShowcase` rows:
  two staggered landscape images per project with a dark info card overlapping
  the seam and an oversized ghost title, alternating sides.
- **Project detail** (`/projects/<slug>`) — hero, description, stats, gallery,
  prev/next navigation.
- **Services**, **Brands**, **Innovation**, **Contact**, plus a **404** route.
- **Floating WhatsApp** "Start a chat" button on every page (see §6).

---

## 4. Important Design Decisions

- **Token-driven design system.** All color, type scale (fluid `clamp()`),
  spacing, motion easings/durations and layout live in `styles/tokens.css`.
- **Warm-neutral palette + one accent.** Bone/sand/charcoal/ink neutrals with a
  single terracotta accent, used sparingly. The site alternates light editorial
  sections with cinematic dark sections (never fully dark).
- **Brand identity.** The champagne-gold **CK** monogram (`logo-mark.svg`) pairs
  with an uppercase, letter-spaced "CASA KALA" wordmark + tagline lockup that
  adapts to light (header) and dark (footer) backgrounds.
- **Two typefaces only.** Fraunces for editorial headings, Inter for UI/body.
- **Editorial, not card-grid.** Featured work and the projects page use
  overlapping image + info compositions with oversized ghost titles; services are
  numbered alternating rows — deliberately magazine-like.
- **Signature "ghost" headings.** Oversized outlined watermark text sits behind
  section titles (`SectionHeading`).
- **Motion is purposeful & accessible.** Masked text/image reveals, count-up
  numbers, hover zoom, animated nav underline, page transitions and a
  scroll-progress bar — all disabled/neutralised under `prefers-reduced-motion`.
- **Data/UI separation.** Projects, about content, testimonials and services are
  typed data; components are generic and content-agnostic.
- **Graceful failure.** Error boundary, 404 route, project-not-found state,
  image error fallbacks, and full form validation states.

---

## 5. Editing Content (no code changes)

**All content lives in `src/data/`** and `src/constants/site.ts`.

- **Projects:** `src/data/projects.ts`. Append a `Project` object (typed) and it
  automatically appears in the home showcase and projects page, gets a detail
  page at `/projects/<slug>`, and joins prev/next navigation.
- **About page:** `src/data/about.ts` — a dedicated, heavily-commented config for
  every heading, paragraph, tagline, discipline tag, value, and team member
  (names, roles, credentials, bios, photos). Edit strings only; layout updates
  automatically.
- **Track record & testimonials:** `src/data/testimonials.ts` — the four stat
  numbers and the client testimonials.
- **Services & process:** `src/data/services.ts`.
- **Navigation:** `src/data/navigation.ts`.
- **Studio details** (name, email, phone, address, socials, WhatsApp number):
  `src/constants/site.ts`.

### Images

`src/utils/image.ts` resolves image values. It supports three kinds transparently:

1. **Local assets** — a path under `/public`, e.g.
   `/images/projects/grand-palazzo-villa/hero.jpg`. Served as-is.
2. **Any external URL** — a full `https://…` URL is passed through untouched.
3. **Unsplash photo IDs** — expanded into optimized URLs with responsive
   `srcset` and blur placeholders (used by some template/demo sections).

Project photography lives in `public/images/projects/<slug>/` (`hero.jpg` +
`1..4.jpg`). To swap a project's images, replace those files (keep the names) or
point the `heroImage`/`gallery` paths in `projects.ts` elsewhere.

### Logo

- `public/logo-mark.svg` — the CK monogram used in the header/footer logo. Swap
  this one file (same name) to change the mark everywhere.
- `public/logo-full.svg` — the full stacked lockup (light backgrounds).
- `public/favicon.svg` inlines the monogram on a charcoal tile; if you change the
  mark and want the favicon to match, update it too.

---

## 6. WhatsApp Chat Button

A floating "Start a chat" button (`components/common/WhatsAppButton.tsx`) appears
site-wide and opens a direct WhatsApp chat, pre-filled with a short message. The
number lives in one place — `src/constants/site.ts` → `whatsapp` (full
international format, digits only, no `+` or spaces). Example: a UK number `+44`
becomes `44…`; India `+91` becomes `91…`.

---

## 7. How to Run Locally

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

## 8. Connecting the Contact Form to an API

The UI never talks to the network directly — it calls the service layer in
`src/services/contact.ts`. To go live:

1. Copy `.env.example` → `.env.local`.
2. Set `VITE_CONTACT_ENDPOINT=https://your-api.example.com/contact`.

When the variable is present, `submitContact()` POSTs the sanitized JSON payload
to your endpoint and surfaces success/error states. When absent, the form runs in
a safe simulated mode (no network call). Payload shape (`ContactPayload`):
`name, email, phone, projectType, budget, message` — all sanitized (angle
brackets stripped) and validated via the pure `validateContact()` util.

---

## 9. Performance Optimizations

- **Code splitting:** every route except Home is lazy-loaded; vendors split into
  `react` and `motion` chunks (see `vite.config.ts`).
- **Image performance:** responsive `srcset` + `sizes` (Unsplash), blur-up LQIP
  placeholders, `loading="lazy"` by default, `fetchpriority="high"` + eager load
  only for LCP hero images, `decoding="async"`, and explicit `width`/`height` to
  avoid CLS. Local project images are size-optimized (≤1600px wide).
- **Font strategy:** `preconnect` to Google Fonts + `display=swap` (non-blocking).
- **Efficient motion:** reveals animate once (`viewport={{ once: true }}`);
  count-ups use `requestAnimationFrame`; scroll listeners are passive +
  rAF-throttled; the custom cursor writes to the DOM directly (no re-renders).
- **Reduced motion:** honored throughout, plus a global CSS safety net.
- **Lean deps:** no UI/CSS framework; CSS Modules are code-split per route.

Production build is warning-free and type-checked.

---

## 10. Content To Finalize

Several sections ship with **placeholder copy** drafted from the design intent —
review and replace with real details:

- **Projects** — titles, locations, years, descriptions and stats in
  `projects.ts` were drafted from the imagery; refine with real brief details.
- **About** — team members are role-based placeholders (no photos); add real
  names, bios, photos and links in `about.ts`.
- **Track record & testimonials** — the stat numbers and quotes in
  `testimonials.ts` are illustrative.
- **WhatsApp number** — confirm the country code in `site.ts`.

---

## 11. Recommended Future Improvements

- **Self-host fonts** (subset `.woff2`) to remove the third-party font request.
- **Real CMS** (e.g. Sanity/Contentful) behind the same `data/` contracts.
- **Lightbox** for the project gallery + keyboard-navigable image viewer.
- **Image pipeline:** `<picture>`-based AVIF/WebP for the local project photos.
- **Prerender / SSG** so metadata and content are in the initial HTML for SEO.
- **Analytics + form spam protection** (honeypot/Turnstile) on the contact API.
- **Tests:** unit tests for `validateContact`/`image` utils and a Playwright
  smoke suite for the core routes.

---

Built with care — designed to look like a real studio site, engineered to be
maintainable.
