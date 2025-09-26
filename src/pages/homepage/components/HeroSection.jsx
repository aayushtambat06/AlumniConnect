import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Professional Alumni Network
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-accent leading-tight mb-6">
              Your Network is Your
              <span className="block text-accent"> Net Worth</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Transform from individual graduates into a powerful professional network. Connect, mentor, and grow with fellow alumni in the premium destination for career success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/alumni-dashboard">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  iconName="Users" 
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Join Alumni Network
                </Button>
              </Link>
              <Link to="/admin-dashboard">
                <Button 
                  variant="outline" 
                  size="lg" 
                  iconName="Settings" 
                  iconPosition="left"
                  className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10"
                >
                  Admin Access
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} />
                <span>Secure Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={16} />
                <span>Verified Alumni</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Globe" size={16} />
                <span>Global Network</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Icon name="Users" size={32} className="mx-auto mb-2" />
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm opacity-90">Active Alumni</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Icon name="Handshake" size={32} className="mx-auto mb-2" />
                  <div className="text-2xl font-bold">15K+</div>
                  <div className="text-sm opacity-90">Connections Made</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Icon name="GraduationCap" size={32} className="mx-auto mb-2" />
                  <div className="text-2xl font-bold">5K+</div>
                  <div className="text-sm opacity-90">Mentorships</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Icon name="TrendingUp" size={32} className="mx-auto mb-2" />
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm opacity-90">Career Growth</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center pulse-connection">
              <Icon name="Zap" size={24} color="var(--color-accent-foreground)" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <Icon name="Heart" size={16} color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;