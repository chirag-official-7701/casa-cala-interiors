import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { Button } from '../../../components/common/Button';
import { TextReveal } from '../../../components/animations/TextReveal';
import { Image } from '../../../components/common/Image';
import { SITE } from '../../../constants/site';
import { HOME } from '../../../content/home';
import styles from './Hero.module.css';

export function Hero() {
  const reduce = useReducedMotion();
  const c = HOME.hero;

  return (
    <section className={styles.hero} aria-label="Introduction">
      {/* Background image — the LCP asset, loaded eagerly & high priority. */}
      <div className={styles.bg}>
        <motion.div
          className={styles.bgInner}
          initial={reduce ? undefined : { scale: 1.12 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={c.image}
            alt={c.imageAlt}
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
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {c.eyebrowLead} · {SITE.locationShort}
        </motion.span>

        <TextReveal
          as="h1"
          immediate
          className={styles.title}
          lines={[...c.title]}
        />

        <motion.p
          className={styles.lead}
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          {c.lead}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          <Button to={c.primaryCta.to} tone="dark" withArrow>
            {c.primaryCta.label}
          </Button>
          <Button to={c.secondaryCta.to} variant="outline" tone="dark">
            {c.secondaryCta.label}
          </Button>
        </motion.div>
      </div>

      <motion.div
        className={styles.scroll}
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <Link
          to="/projects"
          className={styles.scrollLink}
          aria-label="Scroll to explore"
        >
          <span>{c.scrollLabel}</span>
          <motion.span
            className={styles.scrollIcon}
            animate={reduce ? undefined : { y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <ArrowDown size={16} strokeWidth={1.5} />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}
