import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { ScrollReveal } from '../../../components/animations/ScrollReveal';
import { ImageReveal } from '../../../components/animations/ImageReveal';
import { ABOUT } from '../../../data/about';
import styles from './Studio.module.css';

export function Studio() {
  const s = ABOUT.studio;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <SectionHeading eyebrow={s.eyebrow} title={s.title} ghost={s.ghost} />
            <ScrollReveal delay={0.1}>
              <p className={styles.lead}>{s.lead}</p>
            </ScrollReveal>
            {s.body.map((p, i) => (
              <ScrollReveal
                as="p"
                key={i}
                delay={0.15 + i * 0.05}
                className={styles.body}
              >
                {p}
              </ScrollReveal>
            ))}

            <ul className={styles.tags}>
              {s.disciplines.map((d, i) => (
                <ScrollReveal
                  as="li"
                  key={d}
                  delay={0.2 + i * 0.04}
                  className={styles.tag}
                >
                  {d}
                </ScrollReveal>
              ))}
            </ul>
          </div>

          <ScrollReveal className={styles.media}>
            <ImageReveal
              src={s.image}
              alt={s.imageAlt}
              ratio="4 / 5"
              ratioValue={1.25}
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
