import { Link2, Contact, User } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { ScrollReveal } from '../../../components/animations/ScrollReveal';
import { ImageReveal } from '../../../components/animations/ImageReveal';
import { ABOUT } from '../../../data/about';
import type { AboutTeamMember } from '../../../data/about';
import { cn } from '../../../utils/cn';
import styles from './Team.module.css';

function MemberPhoto({ member }: { member: AboutTeamMember }) {
  if (member.image) {
    return (
      <ImageReveal
        src={member.image}
        alt={member.name}
        ratio="4 / 5"
        ratioValue={1.25}
        sizes="(max-width: 900px) 100vw, 40vw"
      />
    );
  }
  return (
    <div className={styles.placeholder} aria-hidden="true">
      <User size={72} strokeWidth={1} />
    </div>
  );
}

export function Team() {
  const { team } = ABOUT;

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={team.eyebrow}
          title={team.title}
          ghost={team.ghost}
          tone="dark"
          align="center"
          className={styles.head}
        />

        <div className={styles.list}>
          {team.members.map((m, i) => {
            const flipped = i % 2 === 1;
            return (
              <ScrollReveal
                as="article"
                key={m.name + i}
                className={cn(styles.row, flipped && styles.flipped)}
              >
                <div className={styles.photo}>
                  <MemberPhoto member={m} />
                </div>

                <div className={styles.card}>
                  <span className={styles.eyebrow}>Meet the {m.role}</span>
                  <h3 className={styles.name}>{m.name}</h3>
                  <span className={styles.role}>{m.role}</span>

                  {m.credentials.length > 0 && (
                    <ul className={styles.badges}>
                      {m.credentials.map((c) => (
                        <li key={c} className={styles.badge}>
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}

                  <span className={styles.divider} aria-hidden="true" />

                  {m.bio.map((para, bi) => (
                    <p key={bi} className={styles.bio}>
                      {para}
                    </p>
                  ))}

                  <div className={styles.socials}>
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social}
                        aria-label={`${m.name} — professional profile`}
                      >
                        <Link2 size={18} strokeWidth={1.6} />
                      </a>
                    )}
                    <span className={styles.social} aria-hidden="true">
                      <Contact size={18} strokeWidth={1.6} />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
