import { motion, useReducedMotion } from 'framer-motion';
import { Image } from '../common/Image';
import { EASE_OUT } from '../../constants/motion';
import styles from './ImageReveal.module.css';
import { cn } from '../../utils/cn';

interface ImageRevealProps {
  src: string;
  alt: string;
  ratio?: string;
  ratioValue?: number;
  sizes?: string;
  priority?: boolean;
  zoomOnHover?: boolean;
  className?: string;
}

/**
 * A masked image reveal: a curtain wipes away to expose the image as it
 * enters the viewport, while the image itself gently settles from a scale-up.
 */
export function ImageReveal({
  src,
  alt,
  ratio,
  ratioValue,
  sizes,
  priority,
  zoomOnHover,
  className,
}: ImageRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Image
        src={src}
        alt={alt}
        ratio={ratio}
        ratioValue={ratioValue}
        sizes={sizes}
        priority={priority}
        zoomOnHover={zoomOnHover}
        className={className}
      />
    );
  }

  return (
    <div className={cn(styles.reveal, className)}>
      <Image
        src={src}
        alt={alt}
        ratio={ratio}
        ratioValue={ratioValue}
        sizes={sizes}
        priority={priority}
        zoomOnHover={zoomOnHover}
      />
      <motion.span
        className={styles.curtain}
        aria-hidden="true"
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASE_OUT }}
      />
    </div>
  );
}
