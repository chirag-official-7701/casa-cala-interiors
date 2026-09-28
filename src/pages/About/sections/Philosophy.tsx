import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { ScrollReveal } from '../../../components/animations/ScrollReveal';
import { ImageReveal } from '../../../components/animations/ImageReveal';
import { ABOUT } from '../../../content/about';
import styles from './Philosophy.module.css';

export function Philosophy() {
  const p = ABOUT.philosophy;

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={p.eyebrow}
          title={p.title}
          ghost={p.ghost}
          tone="dark"
          align="center"
          className={styles.head}
        />

        <div className={styles.grid}>
          <ScrollReveal className={styles.media}>
            <ImageReveal
              src={p.images[0].src}
              alt={p.images[0].alt}
              ratio="4 / 5"
              ratioValue={1.25}
              sizes="(max-width: 900px) 100vw, 30vw"
            />
          </ScrollReveal>

          <div className={styles.text}>
            {p.paragraphs.map((para, i) => (
              <ScrollReveal
                as="p"
                key={i}
                delay={0.1 + i * 0.08}
                className={styles.para}
              >
                {para}
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className={styles.media} delay={0.1}>
            <ImageReveal
              src={p.images[1].src}
              alt={p.images[1].alt}
              ratio="4 / 5"
              ratioValue={1.25}
              sizes="(max-width: 900px) 100vw, 30vw"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
