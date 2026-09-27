import type { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { ScrollReveal } from '../animations/ScrollReveal';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  projects: Project[];
}

/**
 * Asymmetric editorial grid: two columns where the right column is offset
 * downward and orientations alternate, creating a magazine-like rhythm rather
 * than a uniform card wall.
 */
export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className={styles.grid}>
      {projects.map((project, i) => {
        const portrait = i % 2 === 1;
        return (
          <ScrollReveal key={project.id} className={styles.cell}>
            <ProjectCard
              project={project}
              orientation={portrait ? 'portrait' : 'landscape'}
              offset={i % 2 === 1}
              priority={i < 2}
            />
          </ScrollReveal>
        );
      })}
    </div>
  );
}
