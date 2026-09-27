import { useState } from 'react';
import { buildImageUrl, buildSrcSet, buildBlurUrl } from '../../utils/image';
import { cn } from '../../utils/cn';
import styles from './Image.module.css';

interface ImageProps {
  /** Unsplash photo id or absolute URL. */
  src: string;
  alt: string;
  /** CSS aspect-ratio, e.g. '4 / 5' or '16 / 9'. */
  ratio?: string;
  /** Numeric ratio (h/w) used to size the srcset crops. */
  ratioValue?: number;
  className?: string;
  /** sizes attribute for responsive selection. */
  sizes?: string;
  /** The hero/LCP image should load eagerly with high priority. */
  priority?: boolean;
  /** Enable a subtle zoom when a parent .zoomParent is hovered. */
  zoomOnHover?: boolean;
}

/**
 * Performance-first image: responsive srcset, blur-up LQIP placeholder,
 * lazy loading by default, and a graceful fallback if the source fails.
 */
export function Image({
  src,
  alt,
  ratio = '4 / 3',
  ratioValue,
  className,
  sizes = '100vw',
  priority = false,
  zoomOnHover = false,
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const blur = buildBlurUrl(src);
  const srcSet = buildSrcSet(src, ratioValue);

  return (
    <div
      className={cn(styles.wrapper, zoomOnHover && styles.zoom, className)}
      style={{
        aspectRatio: ratio,
        backgroundImage: errored ? undefined : `url(${blur})`,
      }}
      data-loaded={loaded}
      data-errored={errored}
    >
      {!errored && (
        <img
          className={styles.img}
          src={buildImageUrl(src, { w: priority ? 1920 : 1440 })}
          srcSet={srcSet || undefined}
          sizes={sizes}
          alt={alt}
          width={1600}
          height={ratioValue ? Math.round(1600 * ratioValue) : 1200}
          loading={priority ? 'eager' : 'lazy'}
          // fetchpriority is valid HTML; React passes it through lowercased.
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      )}
      {errored && <span className={styles.fallback} aria-hidden="true" />}
    </div>
  );
}
