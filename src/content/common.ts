/* =========================================================================
   SHARED UI COPY — used by layout chrome and shared components
   (footer, coming-soon teaser). Page-specific copy lives in its own file.
   ========================================================================= */

export const COMING_SOON = {
  status: 'Coming Soon',
  primaryCta: { label: 'Register Your Interest', to: '/contact' },
  secondaryCta: { label: 'Explore Our Work', to: '/projects' },
} as const;

export const FOOTER = {
  eyebrow: 'Let’s begin',
  statement: ['Let’s create something', 'extraordinary.'],
  ctaLabel: 'Start a Conversation',
  columns: {
    explore: 'Explore',
    studio: 'Studio',
    follow: 'Follow',
  },
  /** Rendered as "© {year} {SITE.legalName}. All rights reserved." */
  copyrightYear: 2025,
  credit: 'Designed & built with care.',
} as const;
