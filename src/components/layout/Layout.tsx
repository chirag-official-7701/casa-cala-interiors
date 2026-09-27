import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProgress } from '../common/ScrollProgress';
import { ScrollToTop } from '../common/ScrollToTop';
import { CustomCursor } from '../common/CustomCursor';
import { RouteFallback } from '../common/RouteFallback';
import { WhatsAppButton } from '../common/WhatsAppButton';

/** App shell: fixed chrome + animated <Outlet> for page transitions. */
export function Layout() {
  const location = useLocation();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <ScrollToTop />
      <Header />
      <main id="main">
        <Suspense fallback={<RouteFallback />}>
          <AnimatePresence mode="wait" initial={false}>
            {/* key on pathname so each route mounts/unmounts for transitions */}
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
