import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Image } from './Image';
import { TextReveal } from '../animations/TextReveal';
import styles from './PageHero.module.css';

interface PageHeroProps {
  eyebrow: string;
  title: string[];
  image: string;
  imageAlt: string;
  children?: ReactNode;
}

/** Shared cinematic page header — dark image hero the nav sits over. */
export function PageHero({
  eyebrow,
  title,
  image,
  imageAlt,
  children,
}: PageHeroProps) {
  const reduce = useReducedMotion();
  return (
    <header className={styles.hero}>
      <div className={styles.bg}>
        <motion.div
          className={styles.bgInner}
          initial={reduce ? undefined : { scale: 1.1 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={image}
            alt={imageAlt}
            ratio="auto"
            priority
            sizes="100vw"
            className={styles.bgImage}
          />
        </motion.div>
        <span className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <motion.span
          className={styles.eyebrow}
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {eyebrow}
        </motion.span>
        <TextReveal as="h1" immediate lines={title} className={styles.title} />
        {children && (
          <motion.div
            className={styles.extra}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </header>
  );
}
