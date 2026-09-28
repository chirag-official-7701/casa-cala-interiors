/* =========================================================================
   404 (NOT FOUND) PAGE — CONTENT CONFIG
   ========================================================================= */

export const NOT_FOUND = {
  seo: { title: 'Page Not Found' },
  code: '404',
  eyebrow: 'Page Not Found',
  title: ['This page has', 'wandered off.'],
  text: 'The page you are looking for may have moved or no longer exists. Let’s get you back to something beautiful.',
  primaryCta: { label: 'Back Home', to: '/' },
  secondaryCta: { label: 'View Projects', to: '/projects' },
} as const;
