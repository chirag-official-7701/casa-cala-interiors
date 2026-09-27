import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { PageHero } from '../../components/common/PageHero';
import { Container } from '../../components/common/Container';
import { Button } from '../../components/common/Button';
import { ServiceItem } from '../../components/services/ServiceItem';
import { SERVICES } from '../../data/services';
import { ROUTES } from '../../constants/routes';
import styles from './Services.module.css';

export default function Services() {
  return (
    <PageTransition>
      <Seo
        title="Services"
        path="/services"
        description="From interior design and space planning to turnkey delivery, Casa Kala offers complete design and execution across residential, commercial and hospitality."
      />
      <PageHero
        eyebrow="What We Do"
        title={['Our Services']}
        image="1615529182904-14819c35db37"
        imageAlt="A calm, considered interior with layered natural materials"
      >
        <p className={styles.introText}>
          A complete design offering — from first concept to the final styled
          detail — delivered by one accountable studio.
        </p>
      </PageHero>

      <section className={styles.list}>
        <Container>
          <div className={styles.items}>
            {SERVICES.map((service, i) => (
              <ServiceItem key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className={styles.cta}>
            <p className={styles.ctaText}>
              Not sure where to begin? Tell us about your space and we’ll guide
              you to the right approach.
            </p>
            <Button to={ROUTES.contact} withArrow>
              Start a Conversation
            </Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
