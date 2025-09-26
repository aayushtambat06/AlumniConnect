import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const quickActions = [
    {
      icon: 'UserPlus',
      title: 'Create Profile',
      description: 'Build your professional profile in minutes',
      link: '/profile-setup',
      color: 'primary'
    },
    {
      icon: 'Search',
      title: 'Find Alumni',
      description: 'Discover classmates and industry professionals',
      link: '/alumni-directory',
      color: 'secondary'
    },
    {
      icon: 'MessageSquare',
      title: 'Start Mentoring',
      description: 'Share your expertise or find a mentor',
      link: '/mentorship-center',
      color: 'accent'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-accent">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Join thousands of alumni who have accelerated their careers through meaningful connections. Your next opportunity is just one connection away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/alumni-dashboard">
              <Button 
                variant="secondary" 
                size="lg" 
                iconName="Rocket" 
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
                Admin Portal
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {quickActions?.map((action, index) => (
            <Link key={index} to={action?.link} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-academic border border-white/20">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  action?.color === 'primary' ? 'bg-white/20' :
                  action?.color === 'secondary'? 'bg-secondary/20' : 'bg-accent/20'
                }`}>
                  <Icon name={action?.icon} size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-academic">
                  {action?.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {action?.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-accent">
                Why Choose AlumniConnect?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Verified Alumni Network</div>
                    <div className="text-sm text-primary-foreground/80">Connect with authenticated graduates from your institution</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Smart Matching Algorithm</div>
                    <div className="text-sm text-primary-foreground/80">AI-powered recommendations based on your career goals</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Structured Mentorship</div>
                    <div className="text-sm text-primary-foreground/80">Formal programs with clear goals and outcomes</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Career Resources</div>
                    <div className="text-sm text-primary-foreground/80">Exclusive job opportunities and industry insights</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-block bg-white/20 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">94%</div>
                    <div className="text-sm text-primary-foreground/80">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2.5x</div>
                    <div className="text-sm text-primary-foreground/80">Faster Growth</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-sm text-primary-foreground/80">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">45+</div>
                    <div className="text-sm text-primary-foreground/80">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-primary-foreground/90 mb-6">
            Join the network that's transforming careers worldwide
          </p>
          <Link to="/alumni-dashboard">
            <Button 
              size="xl" 
              variant="secondary"
              iconName="ArrowRight" 
              iconPosition="right"
            >
              Get Started Now - It's Free
            </Button>
          </Link>
          <p className="text-sm text-primary-foreground/70 mt-4">
            No credit card required • Join in under 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;