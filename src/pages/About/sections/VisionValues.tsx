import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { ScrollReveal } from '../../../components/animations/ScrollReveal';
import { ImageReveal } from '../../../components/animations/ImageReveal';
import { ABOUT } from '../../../data/about';
import styles from './VisionValues.module.css';

export function VisionValues() {
  const { vision, values } = ABOUT;

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          title={['Vision', '& Values']}
          ghost={vision.ghost}
          align="center"
          className={styles.head}
        />

        <div className={styles.grid}>
          {/* Vision */}
          <div className={styles.vision}>
            <h3 className={styles.subhead}>{vision.eyebrow}</h3>
            <ScrollReveal delay={0.05}>
              <p className={styles.statement}>{vision.statement}</p>
            </ScrollReveal>
            <ScrollReveal className={styles.visionMedia} delay={0.1}>
              <ImageReveal
                src={vision.image}
                alt={vision.imageAlt}
                ratio="3 / 2"
                ratioValue={0.667}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </ScrollReveal>
          </div>

          {/* Values */}
          <div className={styles.values}>
            <h3 className={styles.subhead}>{values.eyebrow}</h3>
            <p className={styles.intro}>{values.intro}</p>
            <ul className={styles.list}>
              {values.items.map((v, i) => (
                <ScrollReveal
                  as="li"
                  key={v.title}
                  delay={i * 0.06}
                  className={styles.item}
                >
                  <span className={styles.itemTitle}>{v.title}</span>
                  <span className={styles.itemText}>{v.text}</span>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
