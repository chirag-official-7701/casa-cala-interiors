import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { ImageReveal } from '../../../components/animations/ImageReveal';
import { ScrollReveal } from '../../../components/animations/ScrollReveal';
import { HOME } from '../../../content/home';
import styles from './Philosophy.module.css';

export function Philosophy() {
  const c = HOME.philosophy;
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.media}>
            <ImageReveal
              src={c.images[0].src}
              alt={c.images[0].alt}
              ratio="4 / 5"
              ratioValue={1.25}
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className={styles.mediaAccent} aria-hidden="true">
              <ImageReveal
                src={c.images[1].src}
                alt={c.images[1].alt}
                ratio="1 / 1"
                ratioValue={1}
                sizes="30vw"
              />
            </div>
          </div>

          <div className={styles.content}>
            <SectionHeading eyebrow={c.eyebrow} title={[...c.title]} />
            <ScrollReveal delay={0.1}>
              <p className={styles.lead}>{c.lead}</p>
            </ScrollReveal>

            <ul className={styles.pillars}>
              {c.pillars.map((p, i) => (
                <ScrollReveal
                  as="li"
                  key={p.title}
                  delay={0.1 + i * 0.08}
                  className={styles.pillar}
                >
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <p className={styles.pillarText}>{p.text}</p>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
