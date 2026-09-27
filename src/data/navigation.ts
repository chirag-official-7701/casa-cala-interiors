import type { NavItem } from '../types';

/** Primary navigation — single source used by header, mobile menu and footer. */
export const NAV_ITEMS: NavItem[] = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'Brands', to: '/brands', comingSoon: true },
  { label: 'Innovation', to: '/innovation', comingSoon: true },
  { label: 'Contact', to: '/contact' },
];
