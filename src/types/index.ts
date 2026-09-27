/* Shared domain & UI types for MERIDIAN. */

export interface GalleryImage {
  src: string;
  alt: string;
  /** Optional intrinsic ratio hint for layout (e.g. 'portrait' | 'landscape'). */
  orientation?: 'portrait' | 'landscape' | 'square';
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: string;
  year: number;
  /** Short teaser used in listings. */
  excerpt: string;
  /** Full descriptive paragraph(s) for the detail page. */
  description: string;
  /** The studio's design intent for this project. */
  philosophy: string;
  heroImage: string;
  thumbnail: string;
  gallery: GalleryImage[];
  stats: ProjectStat[];
  /** Featured layout variant for the editorial home showcase. */
  featuredLayout?: 'wide' | 'tall' | 'split' | 'standard';
}

export interface Service {
  id: string;
  number: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

/** A single track-record statistic shown in the "Track Records" section. */
export interface TrackRecord {
  /** The numeric target (animated count-up). */
  value: number;
  /** Suffix appended after the number, e.g. '+' or '%'. */
  suffix: string;
  label: string;
}

/** A client testimonial shown in the "What Our Clients Say" carousel. */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  /** Rating out of 5. */
  rating: number;
  quote: string;
  /** Pre-formatted display date, e.g. 'September 2026'. */
  date: string;
  /** Avatar background colour (on-brand hex). */
  accent: string;
}

export interface NavItem {
  label: string;
  to: string;
  /** Marks pages that are teaser/coming-soon. */
  comingSoon?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'instagram' | 'linkedin' | 'facebook' | 'pinterest';
}

/** Contact form data shape — mirrors the service layer contract. */
export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';
