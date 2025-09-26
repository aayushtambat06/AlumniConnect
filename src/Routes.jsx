import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AdminDashboard from './pages/admin-dashboard';
import ProfileSetup from './pages/profile-setup';
import AlumniDirectory from './pages/alumni-directory';
import AlumniDashboard from './pages/alumni-dashboard';
import MentorshipCenter from './pages/mentorship-center';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/alumni-directory" element={<AlumniDirectory />} />
        <Route path="/alumni-dashboard" element={<AlumniDashboard />} />
        <Route path="/mentorship-center" element={<MentorshipCenter />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
