import type { TrackRecord, Testimonial } from '../types';

/* =========================================================================
   Track record & client testimonials
   -------------------------------------------------------------------------
   Placeholder figures and quotes — refine with your real numbers and
   verbatim client feedback. Numbers animate up when scrolled into view.
   ========================================================================= */

export const TRACK_RECORDS: TrackRecord[] = [
  { value: 35, suffix: '+', label: 'Residential Projects' },
  { value: 15, suffix: '+', label: 'Commercial Projects' },
  { value: 150, suffix: '+', label: 'Projects Nationwide' },
  { value: 150, suffix: '+', label: 'Client Relationships' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-layla',
    name: 'Layla Haddad',
    location: 'Dubai, UAE',
    rating: 5,
    quote:
      'Casa Kala understood our home before we could put it into words. Every room feels calm, considered and completely ours — we never want to leave.',
    date: 'September 2026',
    accent: '#b45f3d',
  },
  {
    id: 't-omar',
    name: 'Omar Al-Farsi',
    location: 'Abu Dhabi, UAE',
    rating: 5,
    quote:
      'From the first sketch to handover, the detail was extraordinary. Our villa now feels grand yet warm — exactly the balance we hoped for.',
    date: 'August 2026',
    accent: '#5b6e64',
  },
  {
    id: 't-priya',
    name: 'Priya Nair',
    location: 'Dubai, UAE',
    rating: 4,
    quote:
      'They transformed a compact apartment into something that feels twice the size. Thoughtful storage, beautiful light — a genuine pleasure to live in.',
    date: 'August 2026',
    accent: '#7a6a58',
  },
  {
    id: 't-yusuf',
    name: 'Yusuf Rahman',
    location: 'Sharjah, UAE',
    rating: 5,
    quote:
      'Our clinic needed to feel precise but reassuring. Casa Kala delivered a space our patients actually enjoy walking into. Bookings have never been better.',
    date: 'July 2026',
    accent: '#4a5568',
  },
  {
    id: 't-elena',
    name: 'Elena Rossi',
    location: 'Dubai, UAE',
    rating: 5,
    quote:
      'A team that listens. The material palette, the joinery, the lighting — all impeccable. Guests always ask who designed it.',
    date: 'July 2026',
    accent: '#8a5a44',
  },
  {
    id: 't-hassan',
    name: 'Hassan Al-Maktoum',
    location: 'Dubai, UAE',
    rating: 4,
    quote:
      'Professional, creative and on schedule. They turned our restaurant concept into a space with real atmosphere — our guests linger far longer now.',
    date: 'June 2026',
    accent: '#63707a',
  },
];
