/* Site-wide constants. Business content lives here so it is trivial to swap. */

export const SITE = {
  name: 'Casa Kala',
  legalName: 'Casa Kala Interiors',
  tagline: 'Interiors · Spaces · Living',
  description:
    'Casa Kala is an interior design studio crafting refined residential, commercial and hospitality interiors — thoughtful spaces, lasting impact, places people belong to.',
  url: 'https://casakala.example.com',
  email: 'studio@casakala.design',
  phone: '+971 4 000 0000',
  phoneHref: 'tel:+97140000000',
  /** WhatsApp number in full international format (digits only, no + or spaces). */
  whatsapp: '7701949013',
  location: 'Design District, Dubai, United Arab Emirates',
  locationShort: 'Dubai, UAE',
  ogImage: '/og-image.jpg',
} as const;

export const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
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
  'Under $50k',
  '$50k – $150k',
  '$150k – $500k',
  '$500k – $1M',
  '$1M+',
] as const;
