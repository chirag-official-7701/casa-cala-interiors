import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { ImageReveal } from '../../../components/animations/ImageReveal';
import { ScrollReveal } from '../../../components/animations/ScrollReveal';
import styles from './Philosophy.module.css';

const PILLARS = [
  {
    title: 'Materiality',
    text: 'Honest, tactile materials chosen to age with grace.',
  },
  {
    title: 'Craftsmanship',
    text: 'An obsession with the details you feel more than see.',
  },
  {
    title: 'Functionality',
    text: 'Spaces that make everyday life feel effortless.',
  },
  {
    title: 'Sustainability',
    text: 'Considered choices that respect people and place.',
  },
];

export function Philosophy() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.media}>
            <ImageReveal
              src="1615529182904-14819c35db37"
              alt="A serene interior detail with layered natural textures"
              ratio="4 / 5"
              ratioValue={1.25}
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className={styles.mediaAccent} aria-hidden="true">
              <ImageReveal
                src="1600210492486-724fe5c67fb0"
                alt=""
                ratio="1 / 1"
                ratioValue={1}
                sizes="30vw"
              />
            </div>
          </div>

          <div className={styles.content}>
            <SectionHeading
              eyebrow="Our Philosophy"
              title={['Designing Spaces', 'With Purpose.']}
            />
            <ScrollReveal delay={0.1}>
              <p className={styles.lead}>
                We approach every project as a study in how people live, work
                and feel. Architecture, light and material are composed with
                intent — creating interiors that are quietly beautiful and
                deeply human.
              </p>
            </ScrollReveal>

            <ul className={styles.pillars}>
              {PILLARS.map((p, i) => (
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
