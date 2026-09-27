/* =========================================================================
   Image utilities
   -------------------------------------------------------------------------
   Images are sourced from Unsplash's CDN (stable photo IDs, high quality,
   editorial interior/architecture photography). Every image in the app is a
   bare photo ID or full URL, so replacing them with your own CDN later is a
   one-line change per asset — nothing in the components hardcodes a URL.
   ========================================================================= */

const UNSPLASH_BASE = 'https://images.unsplash.com/';

/** Widths we generate for responsive srcset. */
const SRCSET_WIDTHS = [480, 768, 1024, 1440, 1920] as const;

/**
 * True when the value is already a usable URL/path and should be served as-is:
 * a non-Unsplash absolute URL, or a local/relative asset (e.g. '/images/..').
 * These bypass the Unsplash URL builder entirely.
 */
function isPassthrough(idOrUrl: string): boolean {
  if (/^https?:\/\//.test(idOrUrl)) {
    return !idOrUrl.includes('images.unsplash.com');
  }
  return idOrUrl.startsWith('/') || idOrUrl.startsWith('./');
}

/**
 * Build a single optimized URL from an Unsplash photo id or a full URL.
 * If a non-Unsplash absolute URL is passed, it is returned untouched so you
 * can drop in any CDN.
 */
export function buildImageUrl(
  idOrUrl: string,
  opts: { w?: number; h?: number; q?: number } = {},
): string {
  const { w = 1600, h, q = 72 } = opts;
  // A full non-Unsplash URL, or a local/relative asset path — pass through.
  if (isPassthrough(idOrUrl)) {
    return idOrUrl;
  }
  const id = idOrUrl.replace(UNSPLASH_BASE, '').replace(/^photo-/, '');
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(w),
    q: String(q),
  });
  if (h) params.set('h', String(h));
  return `${UNSPLASH_BASE}photo-${id}?${params.toString()}`;
}

/** Generate a responsive srcset string for the given aspect ratio. */
export function buildSrcSet(idOrUrl: string, ratio?: number): string {
  // Local assets and non-Unsplash URLs have no dynamic resizing — no srcset.
  if (isPassthrough(idOrUrl)) {
    return '';
  }
  return SRCSET_WIDTHS.map((w) => {
    const h = ratio ? Math.round(w * ratio) : undefined;
    return `${buildImageUrl(idOrUrl, { w, h })} ${w}w`;
  }).join(', ');
}

/** A tiny, blurred low-quality placeholder (LQIP) for smooth loading. */
export function buildBlurUrl(idOrUrl: string): string {
  return buildImageUrl(idOrUrl, { w: 32, q: 30 });
}
