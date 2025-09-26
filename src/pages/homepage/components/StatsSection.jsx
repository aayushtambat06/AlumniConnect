import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    alumni: 0,
    connections: 0,
    mentorships: 0,
    placements: 0
  });

  const finalValues = {
    alumni: 52847,
    connections: 18293,
    mentorships: 6741,
    placements: 94
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues)?.map(key => {
      const increment = finalValues?.[key] / steps;
      let currentValue = 0;
      
      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValues?.[key]) {
          currentValue = finalValues?.[key];
          clearInterval(intervals?.find(interval => interval === this));
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals?.forEach(interval => clearInterval(interval));
  }, []);

  const stats = [
    {
      key: 'alumni',
      icon: 'Users',
      label: 'Active Alumni',
      value: counters?.alumni,
      suffix: '+',
      description: 'Verified professionals in our network'
    },
    {
      key: 'connections',
      icon: 'Network',
      label: 'Connections Made',
      value: counters?.connections,
      suffix: '+',
      description: 'Meaningful professional relationships formed'
    },
    {
      key: 'mentorships',
      icon: 'GraduationCap',
      label: 'Mentorship Programs',
      value: counters?.mentorships,
      suffix: '+',
      description: 'Active mentor-mentee relationships'
    },
    {
      key: 'placements',
      icon: 'TrendingUp',
      label: 'Success Rate',
      value: counters?.placements,
      suffix: '%',
      description: 'Career advancement through our platform'
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-accent">
            Success Shared is Success Multiplied
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-time metrics showcasing the power of our alumni network and the impact we're making together in professional growth and career advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat) => (
            <div key={stat?.key} className="bg-card rounded-xl p-6 text-center shadow-academic hover:shadow-academic-hover transition-academic">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name={stat?.icon} size={32} color="var(--color-primary)" />
              </div>
              
              <div className="text-4xl font-bold text-primary mb-2">
                {stat?.value?.toLocaleString()}{stat?.suffix}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {stat?.label}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {stat?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-card rounded-lg p-6 text-center border-l-4 border-accent">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Icon name="MapPin" size={20} color="var(--color-accent)" />
              <span className="text-lg font-semibold text-foreground">Global Reach</span>
            </div>
            <p className="text-sm text-muted-foreground">Alumni across 45+ countries</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 text-center border-l-4 border-secondary">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Icon name="Building" size={20} color="var(--color-secondary)" />
              <span className="text-lg font-semibold text-foreground">Industry Leaders</span>
            </div>
            <p className="text-sm text-muted-foreground">Fortune 500 companies represented</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 text-center border-l-4 border-success">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Icon name="Award" size={20} color="var(--color-success)" />
              <span className="text-lg font-semibold text-foreground">Recognition</span>
            </div>
            <p className="text-sm text-muted-foreground">Top-rated alumni platform 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;