import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { FeaturedProjects } from '../../components/projects/FeaturedProjects';
import { Hero } from './sections/Hero';
import { TrackRecords } from './sections/TrackRecords';
import { Philosophy } from './sections/Philosophy';
import { Process } from './sections/Process';
import { Testimonials } from './sections/Testimonials';
import { ServicesPreview } from './sections/ServicesPreview';
import { PROJECTS } from '../../data/projects';
import { HOME } from '../../content/home';
import { ROUTES } from '../../constants/routes';
import { SITE } from '../../constants/site';
import styles from './Home.module.css';

export default function Home() {
  const featured = PROJECTS.slice(0, 4);
  const { featured: featuredCopy } = HOME;

  return (
    <PageTransition>
      <Seo title={SITE.name} path="/" />
      <Hero />

      {/* Featured projects — editorial showcase */}
      <section className={styles.featured}>
        <Container>
          <div className={styles.featuredHead}>
            <SectionHeading
              eyebrow={featuredCopy.eyebrow}
              title={[...featuredCopy.title]}
              ghost={featuredCopy.ghost}
            />
            <p className={styles.featuredIntro}>{featuredCopy.intro}</p>
          </div>
        </Container>
        <Container>
          <FeaturedProjects projects={featured} />
          <div className={styles.featuredCta}>
            <Button to={ROUTES.projects} withArrow>
              {featuredCopy.ctaLabel}
            </Button>
          </div>
        </Container>
      </section>

      <TrackRecords />
      <Philosophy />
      <Process />
      <Testimonials />
      <ServicesPreview />
    </PageTransition>
  );
}
