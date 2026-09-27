import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { PageHero } from '../../components/common/PageHero';
import { Container } from '../../components/common/Container';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { SectionHeading } from '../../components/common/SectionHeading';
import { ProjectGallery } from '../../components/projects/ProjectGallery';
import { ProjectNotFound } from './ProjectNotFound';
import { getProjectBySlug, getAdjacentProjects } from '../../data/projects';
import { ROUTES } from '../../constants/routes';
import { buildImageUrl } from '../../utils/image';
import styles from './ProjectDetails.module.css';

export default function ProjectDetails() {
  const { slug = '' } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <ProjectNotFound />;
  }

  const adjacent = getAdjacentProjects(slug);

  return (
    <PageTransition>
      <Seo
        title={project.title}
        path={ROUTES.projectDetail(project.slug)}
        description={project.excerpt}
        image={buildImageUrl(project.heroImage, { w: 1200 })}
        type="article"
      />

      <PageHero
        eyebrow={`${project.category} · ${project.year}`}
        title={[project.title]}
        image={project.heroImage}
        imageAlt={`${project.title}, ${project.location}`}
      >
        <Link to={ROUTES.projects} className={styles.back}>
          <ArrowLeft size={16} strokeWidth={1.5} />
          All Projects
        </Link>
      </PageHero>

      {/* Overview: meta rail + description */}
      <section className={styles.overview}>
        <Container>
          <div className={styles.overviewGrid}>
            <dl className={styles.metaRail} aria-label="Project details">
              <Meta label="Location" value={project.location} />
              <Meta label="Year" value={String(project.year)} />
              <Meta label="Category" value={project.category} />
            </dl>
            <div className={styles.lead}>
              <ScrollReveal>
                <p className={styles.leadText}>{project.description}</p>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats band */}
      <section className={styles.statsBand}>
        <Container>
          <ul className={styles.stats}>
            {project.stats.map((stat, i) => (
              <ScrollReveal
                as="li"
                key={stat.label}
                delay={i * 0.07}
                className={styles.stat}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </ScrollReveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Design philosophy */}
      <section className={styles.philosophy}>
        <Container>
          <div className={styles.philosophyGrid}>
            <SectionHeading
              eyebrow="Design Philosophy"
              title={['The Approach']}
            />
            <ScrollReveal delay={0.1}>
              <p className={styles.philosophyText}>{project.philosophy}</p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className={styles.gallerySection}>
        <Container>
          <span className={styles.galleryLabel}>Gallery</span>
          <ProjectGallery images={project.gallery} />
        </Container>
      </section>

      {/* Prev / Next navigation */}
      {adjacent && (
        <nav className={styles.pager} aria-label="Project navigation">
          <Link
            to={ROUTES.projectDetail(adjacent.prev.slug)}
            className={styles.pagerLink}
          >
            <span className={styles.pagerDir}>
              <ArrowLeft size={16} strokeWidth={1.5} />
              Previous
            </span>
            <span className={styles.pagerTitle}>{adjacent.prev.title}</span>
          </Link>
          <Link
            to={ROUTES.projectDetail(adjacent.next.slug)}
            className={`${styles.pagerLink} ${styles.pagerNext}`}
          >
            <span className={styles.pagerDir}>
              Next
              <ArrowRight size={16} strokeWidth={1.5} />
            </span>
            <span className={styles.pagerTitle}>{adjacent.next.title}</span>
          </Link>
        </nav>
      )}
    </PageTransition>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.meta}>
      <dt className={styles.metaLabel}>{label}</dt>
      <dd className={styles.metaValue}>{value}</dd>
    </div>
  );
}
