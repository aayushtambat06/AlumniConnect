import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import SuccessStoriesCarousel from './components/SuccessStoriesCarousel';
import FeaturesSection from './components/FeaturesSection';
import PartnershipsSection from './components/PartnershipsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <StatsSection />
        <SuccessStoriesCarousel />
        <FeaturesSection />
        <PartnershipsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;