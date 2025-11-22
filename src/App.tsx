import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@lib/queryClient';
import { AppLayout } from '@components/layout/AppLayout';
import { Home } from '@pages/Home';
import { ProjectsPage } from '@pages/Projects';
import { CertificatesPage } from '@pages/Certificates';
import { BlogPage } from '@pages/Blog';
import { ContactPage } from '@pages/Contact';
import { AdminDashboard } from '@pages/AdminDashboard';
import { FAQPage } from '@pages/FAQ';
import { TermsPage } from '@pages/Terms';
import { PrivacyPage } from '@pages/Privacy';
import { MaintenancePage } from '@pages/Maintenance';
import { ErrorPage } from '@pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, 
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'certificates', element: <CertificatesPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'admin', element: <AdminDashboard /> },
      { path: 'patchnotes', element: <MaintenancePage /> }
    ],
    errorElement: <ErrorPage />
  },
  { path: '*', element: <ErrorPage /> }
]);

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
