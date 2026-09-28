/* Site-wide constants. Business content lives here so it is trivial to swap. */

export const SITE = {
  name: 'Casa Kala',
  legalName: 'Casa Kala Interiors',
  tagline: 'Interiors · Spaces · Living',
  description:
    'Casa Kala is an interior design studio crafting refined residential, commercial and hospitality interiors — thoughtful spaces, lasting impact, places people belong to.',
  url: 'https://casakala.example.com',
  email: 'studio@casakala.design',
  phone: '+91 75007 33639',
  phoneHref: 'tel:+917500733639',
  /** WhatsApp number in full international format (digits only, no + or spaces). */
  whatsapp: '917500733639',
  location: 'Sector-5, Sikandra Road, Agra, Uttar Pradesh, India',
  locationShort: 'Agra, India',
  ogImage: '/og-image.jpg',
} as const;

export const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/khushboo-singh-a826a2321',
    icon: 'linkedin',
  },
  { label: 'Pinterest', href: 'https://pinterest.com', icon: 'pinterest' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
] as const;

export const PROJECT_TYPES = [
  'Residential',
  'Commercial',
  'Hospitality',
  'Retail',
  'Renovation',
  'Other',
] as const;

export const BUDGET_RANGES = [
  'Under ₹10 Lakh',
  '₹10 – 25 Lakh',
  '₹25 – 50 Lakh',
  '₹50 Lakh – 1 Cr',
  '₹1 Cr+',
] as const;
