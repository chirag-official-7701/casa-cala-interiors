/** Centralised route paths — import these instead of hardcoding strings. */
export const ROUTES = {
  home: '/',
  about: '/about',
  projects: '/projects',
  projectDetail: (slug: string) => `/projects/${slug}`,
  services: '/services',
  brands: '/brands',
  innovation: '/innovation',
  contact: '/contact',
} as const;
