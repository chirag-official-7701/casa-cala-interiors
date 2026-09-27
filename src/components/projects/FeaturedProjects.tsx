import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../../types';
import { ImageReveal } from '../animations/ImageReveal';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ROUTES } from '../../constants/routes';
import { cn } from '../../utils/cn';
import styles from './FeaturedProjects.module.css';

interface FeaturedProjectsProps {
  projects: Project[];
}

/**
 * The home showcase. Each project is a full editorial row with an oversized
 * index, an overlapping info card and an alternating image side — deliberately
 * not a uniform card grid.
 */
export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <div className={styles.list}>
      {projects.map((project, i) => {
        const flipped = i % 2 === 1;
        return (
          <article
            key={project.id}
            className={cn(styles.row, flipped && styles.flipped)}
          >
            <Link
              to={ROUTES.projectDetail(project.slug)}
              className={cn(styles.media, 'zoomParent')}
              tabIndex={-1}
              aria-hidden="true"
            >
              <ImageReveal
                src={project.heroImage}
                alt={`${project.title}, ${project.location}`}
                ratio="4 / 3"
                ratioValue={0.75}
                sizes="(max-width: 900px) 100vw, 58vw"
                zoomOnHover
              />
            </Link>

            <ScrollReveal className={styles.info} delay={0.05}>
              <span className={styles.index} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className={styles.meta}>
                <span>{project.category}</span>
                <span className={styles.sep} aria-hidden="true" />
                <span>{project.location}</span>
                <span className={styles.sep} aria-hidden="true" />
                <span>{project.year}</span>
              </div>
              <h3 className={styles.title}>
                <Link to={ROUTES.projectDetail(project.slug)}>
                  {project.title}
                </Link>
              </h3>
              <p className={styles.excerpt}>{project.excerpt}</p>
              <Link
                to={ROUTES.projectDetail(project.slug)}
                className={styles.link}
              >
                View Project
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </ScrollReveal>
          </article>
        );
      })}
    </div>
  );
}
