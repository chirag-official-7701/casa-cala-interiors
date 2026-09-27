import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { TRACK_RECORDS } from '../../../data/testimonials';
import { EASE_OUT } from '../../../constants/motion';
import styles from './TrackRecords.module.css';

/** Eased count-up that runs once the section scrolls into view. */
function Counter({ target, run }: { target: number; run: boolean }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setN(target);
      return;
    }
    let raf = 0;
    let startTime = 0;
    const duration = 1400;
    const step = (t: number) => {
      if (!startTime) startTime = t;
      const p = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, reduce]);

  return <>{n}</>;
}

export function TrackRecords() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();

  return (
    <section ref={ref} className={styles.section} aria-label="Our track record">
      <Container>
        <SectionHeading
          eyebrow="By The Numbers"
          title={['Track', 'Records']}
          ghost="Records"
          tone="dark"
          align="center"
          className={styles.head}
        />

        <ul className={styles.circles}>
          {TRACK_RECORDS.map((r, i) => (
            <motion.li
              key={r.label}
              className={styles.item}
              style={{ '--i': i } as CSSProperties}
              initial={reduce ? undefined : { opacity: 0, scale: 0.92 }}
              animate={
                reduce || !inView ? undefined : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.12 }}
            >
              <div className={styles.circle}>
                <span className={styles.value}>
                  <Counter target={r.value} run={inView} />
                  <span className={styles.suffix}>{r.suffix}</span>
                </span>
                <span className={styles.label}>{r.label}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
