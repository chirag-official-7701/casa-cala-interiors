import { Container } from '../../../components/common/Container';
import { ScrollReveal } from '../../../components/animations/ScrollReveal';
import styles from './Stats.module.css';

const STATS = [
  { value: '15', suffix: '+', label: 'Years of practice' },
  { value: '120', suffix: '+', label: 'Projects delivered' },
  { value: '9', suffix: '', label: 'Design awards' },
  { value: '98', suffix: '%', label: 'Referred by clients' },
];

export function Stats() {
  return (
    <section className={styles.section} aria-label="Studio at a glance">
      <Container>
        <ul className={styles.grid}>
          {STATS.map((s, i) => (
            <ScrollReveal
              as="li"
              key={s.label}
              delay={i * 0.08}
              className={styles.item}
            >
              <span className={styles.value}>
                {s.value}
                <span className={styles.suffix}>{s.suffix}</span>
              </span>
              <span className={styles.label}>{s.label}</span>
            </ScrollReveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
