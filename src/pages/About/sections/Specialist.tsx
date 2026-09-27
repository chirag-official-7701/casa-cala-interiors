import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { ScrollReveal } from '../../../components/animations/ScrollReveal';
import { ImageReveal } from '../../../components/animations/ImageReveal';
import { ABOUT } from '../../../data/about';
import styles from './Specialist.module.css';

export function Specialist() {
  const s = ABOUT.specialist;

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          title={s.title}
          ghost={s.ghost}
          align="center"
          className={styles.head}
        />
        <ScrollReveal delay={0.05}>
          <p className={styles.subtitle}>{s.subtitle}</p>
        </ScrollReveal>
        <ScrollReveal className={styles.media} delay={0.1}>
          <ImageReveal
            src={s.image}
            alt={s.imageAlt}
            ratio="16 / 7"
            ratioValue={0.4375}
            sizes="(max-width: 1200px) 100vw, 1100px"
          />
        </ScrollReveal>
      </Container>
    </section>
  );
}
