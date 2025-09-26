import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SuccessStoriesCarousel = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "Sarah Chen",
      graduationYear: "2018",
      currentRole: "Senior Product Manager at Google",
      previousRole: "Junior Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      quote: `AlumniConnect transformed my career trajectory. Through the mentorship program, I connected with a Google PM who guided me through my transition from development to product management. The network opened doors I never knew existed.`,
      achievement: "300% salary increase in 3 years",
      connections: 47,
      mentorships: 12
    },
    {
      id: 2,
      name: "Marcus Johnson",
      graduationYear: "2015",
      currentRole: "Founder & CEO at TechStart",
      previousRole: "Marketing Analyst",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      quote: `The alumni network became my co-founding team. I met my CTO and lead engineer through AlumniConnect. We've raised $2.5M in seed funding and our startup is now valued at $15M. None of this would have been possible without these connections.`,
      achievement: "Built $15M valued startup",
      connections: 89,
      mentorships: 23
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      graduationYear: "2012",
      currentRole: "Chief Medical Officer at HealthTech Inc",
      previousRole: "Resident Physician",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      quote: `From a resident physician to CMO in 8 years - the alumni network provided mentorship from healthcare executives who helped me navigate the intersection of medicine and technology. I now mentor 15+ young doctors making similar transitions.`,
      achievement: "Youngest CMO in company history",
      connections: 156,
      mentorships: 34
    },
    {
      id: 4,
      name: "James Rodriguez",
      graduationYear: "2019",
      currentRole: "Investment Director at Goldman Sachs",
      previousRole: "Financial Analyst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      quote: `The finance alumni network is incredibly strong. Senior alumni provided interview prep, industry insights, and referrals that fast-tracked my career. I went from analyst to director in just 4 years, which typically takes 7-8 years.`,
      achievement: "Fast-tracked promotion by 3 years",
      connections: 73,
      mentorships: 18
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [successStories?.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories?.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories?.length) % successStories?.length);
  };

  const currentData = successStories?.[currentStory];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-accent">
            From Classmates to Career Catalysts
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how our alumni transformed their careers through meaningful connections, mentorship, and the power of professional networking.
          </p>
        </div>

        <div className="relative">
          {/* Main Story Card */}
          <div className="bg-card rounded-2xl shadow-academic p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left - Story Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <Image
                      src={currentData?.image}
                      alt={currentData?.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-accent"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" size={16} color="white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{currentData?.name}</h3>
                    <p className="text-muted-foreground">Class of {currentData?.graduationYear}</p>
                    <p className="text-sm text-primary font-medium">{currentData?.currentRole}</p>
                  </div>
                </div>

                <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{currentData?.quote}"
                </blockquote>

                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} color="var(--color-success)" />
                    <span>{currentData?.achievement}</span>
                  </div>
                </div>

                {/* Career Journey */}
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">Career Journey</h4>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Started as</div>
                      <div className="font-medium text-foreground">{currentData?.previousRole}</div>
                    </div>
                    <Icon name="ArrowRight" size={20} color="var(--color-primary)" />
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Now</div>
                      <div className="font-medium text-primary">{currentData?.currentRole}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Impact Metrics */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{currentData?.connections}</div>
                    <div className="text-sm text-muted-foreground">Network Connections</div>
                  </div>
                  <div className="bg-secondary/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-secondary">{currentData?.mentorships}</div>
                    <div className="text-sm text-muted-foreground">People Mentored</div>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-lg p-6 text-center">
                  <Icon name="Award" size={32} color="var(--color-accent)" className="mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Key Achievement</h4>
                  <p className="text-accent font-medium">{currentData?.achievement}</p>
                </div>

                <div className="text-center">
                  <Button variant="outline" iconName="ExternalLink" iconPosition="right">
                    Read Full Story
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              size="sm"
              iconName="ChevronLeft"
              iconPosition="left"
              onClick={prevStory}
            >
              Previous
            </Button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {successStories?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-academic ${
                    index === currentStory ? 'bg-primary' : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              iconName="ChevronRight"
              iconPosition="right"
              onClick={nextStory}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;