import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { PageHero } from '../../components/common/PageHero';
import { Container } from '../../components/common/Container';
import { ProjectShowcase } from '../../components/projects/ProjectShowcase';
import { PROJECTS } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <PageTransition>
      <Seo
        title="Projects"
        path="/projects"
        description="Explore Casa Kala's portfolio of residential, commercial and hospitality interior architecture across Dubai and beyond."
      />
      <PageHero
        eyebrow="Our Work"
        title={['Projects']}
        image="1618219740975-d40978bb7378"
        imageAlt="A richly layered interior with warm materials and considered lighting"
      >
        <p className={styles.introText}>
          A portfolio of considered interiors — each a distinct response to its
          site, its purpose and the people who inhabit it.
        </p>
      </PageHero>

      <section className={styles.section}>
        <Container>
          <ProjectShowcase projects={PROJECTS} />
        </Container>
      </section>
    </PageTransition>
  );
}
