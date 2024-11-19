import MainLayout from '../components/layout/MainLayout';
import ErrorBoundary from '../components/common/ErrorBoundary';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  CircularProgress,
  Box
} from '@mui/material';
import GalleryPage from '../pages/GalLeryPage';
import DonatePage from '../pages/DonatePage';
import ThankYouPage from '../pages/ThankyouPage';

// Lazy-loaded pages
const HomePage = lazy(() => import('../pages/HomePage'));
const TeamPage = lazy(() => import('../pages/TeamPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const SponsorPage = lazy(() => import('../pages/SponsorPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

// Layout Components

function LoadingFallback() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <MainLayout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/sponsor" element={<SponsorPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
