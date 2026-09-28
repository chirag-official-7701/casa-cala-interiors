import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { PageHero } from '../../components/common/PageHero';
import { ABOUT } from '../../content/about';
import { Studio } from './sections/Studio';
import { Philosophy } from './sections/Philosophy';
import { VisionValues } from './sections/VisionValues';
import { Team } from './sections/Team';
import { Specialist } from './sections/Specialist';
import styles from './About.module.css';

export default function About() {
  const { hero } = ABOUT;

  return (
    <PageTransition>
      <Seo
        title="About"
        path="/about"
        description="Casa Kala is an Agra-based interior design and turnkey studio — meet the studio, our philosophy, values and the team behind the work."
      />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        image={hero.image}
        imageAlt={hero.imageAlt}
      >
        <p className={styles.tagline}>{hero.tagline}</p>
      </PageHero>

      <Studio />
      <Philosophy />
      <VisionValues />
      <Team />
      <Specialist />
    </PageTransition>
  );
}
