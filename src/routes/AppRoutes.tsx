import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

/* Home is eagerly loaded (it is the most common entry & the LCP target).
   All other routes are code-split so the initial bundle stays lean. */
import Home from '../pages/Home/Home';

const About = lazy(() => import('../pages/About/About'));
const Projects = lazy(() => import('../pages/Projects/Projects'));
const ProjectDetails = lazy(
  () => import('../pages/ProjectDetails/ProjectDetails'),
);
const Services = lazy(() => import('../pages/Services/Services'));
const Brands = lazy(() => import('../pages/Brands/Brands'));
const Innovation = lazy(() => import('../pages/Innovation/Innovation'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetails />} />
        <Route path="services" element={<Services />} />
        <Route path="brands" element={<Brands />} />
        <Route path="innovation" element={<Innovation />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
