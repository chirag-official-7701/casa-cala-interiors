import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { PageHero } from '../../components/common/PageHero';
import { Container } from '../../components/common/Container';
import { Button } from '../../components/common/Button';
import { ServiceItem } from '../../components/services/ServiceItem';
import { SERVICES } from '../../data/services';
import { SERVICES_PAGE } from '../../content/services';
import { ROUTES } from '../../constants/routes';
import styles from './Services.module.css';

export default function Services() {
  const { seo, hero, cta } = SERVICES_PAGE;
  return (
    <PageTransition>
      <Seo title={seo.title} path="/services" description={seo.description} />
      <PageHero
        eyebrow={hero.eyebrow}
        title={[...hero.title]}
        image={hero.image}
        imageAlt={hero.imageAlt}
      >
        <p className={styles.introText}>{hero.intro}</p>
      </PageHero>

      <section className={styles.list}>
        <Container>
          <div className={styles.items}>
            {SERVICES.map((service, i) => (
              <ServiceItem key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className={styles.cta}>
            <p className={styles.ctaText}>{cta.text}</p>
            <Button to={ROUTES.contact} withArrow>
              {cta.buttonLabel}
            </Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
