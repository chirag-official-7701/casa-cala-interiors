import { SITE } from '../../constants/site';

interface SeoProps {
  title: string;
  description?: string;
  /** Path only, e.g. '/projects' — combined with SITE.url for canonical/OG. */
  path?: string;
  image?: string;
  /** 'website' | 'article'. */
  type?: string;
  /** Discourage indexing (e.g. 404). */
  noindex?: boolean;
}

/**
 * SEO metadata. Uses React 19's native support for hoisting <title>/<meta>/
 * <link> to <head> — no helmet dependency required.
 */
export function Seo({
  title,
  description = SITE.description,
  path = '/',
  image = SITE.ogImage,
  type = 'website',
  noindex = false,
}: SeoProps) {
  const fullTitle =
    title === SITE.name
      ? `${SITE.name} — ${SITE.tagline}`
      : `${title} · ${SITE.name}`;
  const url = `${SITE.url}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE.url}${image}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.legalName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
}
