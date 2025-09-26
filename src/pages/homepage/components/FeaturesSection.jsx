import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'Users',
      title: 'Smart Alumni Directory',
      description: 'Advanced search and filtering system with intelligent recommendations and connection suggestions based on shared interests, location, and career paths.',
      link: '/alumni-directory',
      color: 'primary',
      stats: '50K+ Profiles'
    },
    {
      icon: 'GraduationCap',
      title: 'Mentorship Marketplace',
      description: 'Dedicated section for mentor-mentee matching and program management. Connect with industry leaders and guide the next generation.',
      link: '/mentorship-center',
      color: 'secondary',
      stats: '5K+ Active Mentors'
    },
    {
      icon: 'LayoutDashboard',
      title: 'Personalized Dashboard',
      description: 'Your command center with Smart Connection Hub, achievement tracking, activity feeds, and personalized recommendations.',
      link: '/alumni-dashboard',
      color: 'accent',
      stats: 'Real-time Updates'
    },
    {
      icon: 'User',
      title: 'Professional Profiles',
      description: 'Comprehensive profile builder with career timeline, skills showcase, and mentorship preferences. Tell your professional story.',
      link: '/profile-setup',
      color: 'success',
      stats: '95% Completion Rate'
    }
  ];

  const benefits = [
    {
      icon: 'Network',
      title: 'Expand Your Network',
      description: 'Connect with alumni across industries and geographies'
    },
    {
      icon: 'TrendingUp',
      title: 'Accelerate Career Growth',
      description: 'Access opportunities and insights from industry leaders'
    },
    {
      icon: 'Heart',
      title: 'Give Back & Mentor',
      description: 'Share your experience and guide emerging professionals'
    },
    {
      icon: 'Globe',
      title: 'Global Community',
      description: 'Join a worldwide network of successful alumni'
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-accent">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and connections you need to advance your career and build meaningful professional relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features?.map((feature, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-academic hover:shadow-academic-hover transition-academic group">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                feature?.color === 'primary' ? 'bg-primary/10' :
                feature?.color === 'secondary' ? 'bg-secondary/10' :
                feature?.color === 'accent'? 'bg-accent/10' : 'bg-success/10'
              }`}>
                <Icon 
                  name={feature?.icon} 
                  size={24} 
                  color={
                    feature?.color === 'primary' ? 'var(--color-primary)' :
                    feature?.color === 'secondary' ? 'var(--color-secondary)' :
                    feature?.color === 'accent' ? 'var(--color-accent)' :
                    'var(--color-success)'
                  }
                />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-academic">
                {feature?.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {feature?.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  feature?.color === 'primary' ? 'bg-primary/10 text-primary' :
                  feature?.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                  feature?.color === 'accent'? 'bg-accent/10 text-accent' : 'bg-success/10 text-success'
                }`}>
                  {feature?.stats}
                </span>
                
                <Link to={feature?.link}>
                  <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-accent">
              Why Join AlumniConnect?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of alumni who have transformed their careers through meaningful connections and professional growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits?.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon name={benefit?.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{benefit?.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit?.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/alumni-dashboard">
              <Button size="lg" iconName="ArrowRight" iconPosition="right">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;