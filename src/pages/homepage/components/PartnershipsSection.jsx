import React from 'react';
import Icon from '../../../components/AppIcon';

const PartnershipsSection = () => {
  const universities = [
    {
      name: "Stanford University",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=100&fit=crop",
      alumni: "12,847",
      established: "2019"
    },
    {
      name: "MIT",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=100&fit=crop",
      alumni: "8,923",
      established: "2020"
    },
    {
      name: "Harvard University",
      logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=200&h=100&fit=crop",
      alumni: "15,234",
      established: "2018"
    },
    {
      name: "UC Berkeley",
      logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=100&fit=crop",
      alumni: "9,567",
      established: "2021"
    },
    {
      name: "Carnegie Mellon",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=100&fit=crop",
      alumni: "6,789",
      established: "2020"
    },
    {
      name: "University of Chicago",
      logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=100&fit=crop",
      alumni: "7,432",
      established: "2019"
    }
  ];

  const corporatePartners = [
    { name: "Google", icon: "Globe" },
    { name: "Microsoft", icon: "Monitor" },
    { name: "Apple", icon: "Smartphone" },
    { name: "Amazon", icon: "Package" },
    { name: "Meta", icon: "Share2" },
    { name: "Tesla", icon: "Zap" },
    { name: "Goldman Sachs", icon: "TrendingUp" },
    { name: "McKinsey", icon: "BarChart3" }
  ];

  const achievements = [
    {
      icon: "Award",
      title: "Best Alumni Platform 2024",
      organization: "EdTech Excellence Awards",
      color: "accent"
    },
    {
      icon: "Shield",
      title: "Privacy & Security Certified",
      organization: "ISO 27001 Compliance",
      color: "success"
    },
    {
      icon: "Users",
      title: "Top Networking Platform",
      organization: "Professional Network Awards",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* University Partnerships */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-accent">
            Trusted by Leading Universities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partnering with top institutions worldwide to create the most comprehensive alumni networking platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {universities?.map((university, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-academic hover:shadow-academic-hover transition-academic">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
                  <Icon name="GraduationCap" size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{university?.name}</h3>
                  <p className="text-sm text-muted-foreground">Partner since {university?.established}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} color="var(--color-primary)" />
                  <span className="text-foreground">{university?.alumni} Alumni</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                  <span className="text-success">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Partners */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-accent">
            Where Our Alumni Work
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our network spans across Fortune 500 companies and innovative startups worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
          {corporatePartners?.map((partner, index) => (
            <div key={index} className="bg-card rounded-lg p-4 text-center hover:bg-primary/5 transition-academic">
              <Icon name={partner?.icon} size={24} color="var(--color-muted-foreground)" className="mx-auto mb-2" />
              <div className="text-xs font-medium text-muted-foreground">{partner?.name}</div>
            </div>
          ))}
        </div>

        {/* Recognition & Awards */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-accent">
              Industry Recognition
            </h3>
            <p className="text-muted-foreground">
              Recognized for excellence in alumni networking and professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements?.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  achievement?.color === 'accent' ? 'bg-accent/10' :
                  achievement?.color === 'success'? 'bg-success/10' : 'bg-primary/10'
                }`}>
                  <Icon 
                    name={achievement?.icon} 
                    size={28} 
                    color={
                      achievement?.color === 'accent' ? 'var(--color-accent)' :
                      achievement?.color === 'success' ? 'var(--color-success)' :
                      'var(--color-primary)'
                    }
                  />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{achievement?.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement?.organization}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <Icon name="Shield" size={32} color="var(--color-success)" className="mx-auto mb-2" />
            <div className="font-semibold text-foreground">Secure Platform</div>
            <div className="text-sm text-muted-foreground">End-to-end encryption</div>
          </div>
          <div className="text-center">
            <Icon name="Clock" size={32} color="var(--color-primary)" className="mx-auto mb-2" />
            <div className="font-semibold text-foreground">99.9% Uptime</div>
            <div className="text-sm text-muted-foreground">Reliable service</div>
          </div>
          <div className="text-center">
            <Icon name="HeadphonesIcon" size={32} color="var(--color-secondary)" className="mx-auto mb-2" />
            <div className="font-semibold text-foreground">24/7 Support</div>
            <div className="text-sm text-muted-foreground">Always here to help</div>
          </div>
          <div className="text-center">
            <Icon name="Globe" size={32} color="var(--color-accent)" className="mx-auto mb-2" />
            <div className="font-semibold text-foreground">Global Network</div>
            <div className="text-sm text-muted-foreground">45+ countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;