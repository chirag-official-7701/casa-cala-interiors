import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { PageHero } from '../../components/common/PageHero';
import { Container } from '../../components/common/Container';
import { ProjectShowcase } from '../../components/projects/ProjectShowcase';
import { PROJECTS } from '../../data/projects';
import { PROJECTS_PAGE } from '../../content/projects';
import styles from './Projects.module.css';

export default function Projects() {
  const { seo, hero } = PROJECTS_PAGE;
  return (
    <PageTransition>
      <Seo title={seo.title} path="/projects" description={seo.description} />
      <PageHero
        eyebrow={hero.eyebrow}
        title={[...hero.title]}
        image={hero.image}
        imageAlt={hero.imageAlt}
      >
        <p className={styles.introText}>{hero.intro}</p>
      </PageHero>

      <section className={styles.section}>
        <Container>
          <ProjectShowcase projects={PROJECTS} />
        </Container>
      </section>
    </PageTransition>
  );
}
