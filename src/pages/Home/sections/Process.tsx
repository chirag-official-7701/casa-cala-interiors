import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { PROCESS_STEPS } from '../../../data/services';
import { HOME } from '../../../content/home';
import { EASE_OUT, viewportOnce } from '../../../constants/motion';
import styles from './Process.module.css';

export function Process() {
  const reduce = useReducedMotion();
  const c = HOME.process;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <SectionHeading
            eyebrow={c.eyebrow}
            title={[...c.title]}
            ghost={c.ghost}
            tone="dark"
          />
          <p className={styles.intro}>{c.intro}</p>
        </div>

        <ol className={styles.steps}>
          {PROCESS_STEPS.map((step, i) => (
            <motion.li
              key={step.number}
              className={styles.step}
              initial={reduce ? undefined : { opacity: 0, y: 28 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.6,
                ease: EASE_OUT,
                delay: (i % 3) * 0.08,
              }}
            >
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
