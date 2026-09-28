import { motion, useReducedMotion } from 'framer-motion';
import { Container } from './Container';
import { Button } from './Button';
import { TextReveal } from '../animations/TextReveal';
import { ScrollReveal } from '../animations/ScrollReveal';
import { EASE_OUT } from '../../constants/motion';
import { COMING_SOON } from '../../content/common';
import styles from './ComingSoonSection.module.css';

interface ComingSoonSectionProps {
  eyebrow: string;
  /** Title lines (masked reveal). */
  title: string[];
  message: string;
  /** Optional focus themes shown as an animated list. */
  themes?: string[];
}

/**
 * A deliberate, premium teaser — an animated aperture visual, a large serif
 * headline and a "Coming Soon" status. Designed to feel intentional, not
 * unfinished.
 */
export function ComingSoonSection({
  eyebrow,
  title,
  message,
  themes,
}: ComingSoonSectionProps) {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section}>
      <div className={styles.visual} aria-hidden="true">
        {[0, 1, 2].map((ring) => (
          <motion.span
            key={ring}
            className={styles.ring}
            initial={reduce ? undefined : { scale: 0.6, opacity: 0 }}
            animate={
              reduce
                ? undefined
                : { scale: [0.9, 1.1, 0.9], opacity: [0.15, 0.4, 0.15] }
            }
            transition={{
              duration: 6 + ring * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: ring * 0.6,
            }}
            style={{ inset: `${ring * 8}%` }}
          />
        ))}
        <motion.span
          className={styles.core}
          initial={reduce ? undefined : { scale: 0.8, opacity: 0 }}
          animate={reduce ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE_OUT }}
        />
      </div>

      <Container className={styles.inner}>
        <span className={styles.status}>
          <span className={styles.pulse} aria-hidden="true" />
          {COMING_SOON.status}
        </span>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <TextReveal as="h1" lines={title} immediate className={styles.title} />
        <ScrollReveal delay={0.1}>
          <p className={styles.message}>{message}</p>
        </ScrollReveal>

        {themes && (
          <ScrollReveal delay={0.2}>
            <ul className={styles.themes}>
              {themes.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.3} className={styles.actions}>
          <Button to={COMING_SOON.primaryCta.to} tone="dark" withArrow>
            {COMING_SOON.primaryCta.label}
          </Button>
          <Button to={COMING_SOON.secondaryCta.to} variant="ghost" tone="dark">
            {COMING_SOON.secondaryCta.label}
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
