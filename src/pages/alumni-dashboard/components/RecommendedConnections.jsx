import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecommendedConnections = () => {
  const [connectionRequests, setConnectionRequests] = useState({});

  const recommendations = [
    {
      id: 1,
      name: "Amanda Foster",
      title: "Senior Product Manager at Spotify",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
      mutualConnections: 8,
      location: "New York, NY",
      graduationYear: "2018",
      matchReason: "Same major and industry",
      skills: ["Product Management", "Analytics", "Strategy"],
      company: "Spotify"
    },
    {
      id: 2,
      name: "James Patterson",
      title: "Lead Data Scientist at Airbnb",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      mutualConnections: 12,
      location: "San Francisco, CA",
      graduationYear: "2017",
      matchReason: "Similar career path",
      skills: ["Machine Learning", "Python", "Statistics"],
      company: "Airbnb"
    },
    {
      id: 3,
      name: "Priya Sharma",
      title: "UX Design Lead at Adobe",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      mutualConnections: 6,
      location: "Seattle, WA",
      graduationYear: "2019",
      matchReason: "Shared interests in design",
      skills: ["UI/UX Design", "Figma", "User Research"],
      company: "Adobe"
    }
  ];

  const handleConnect = (userId) => {
    setConnectionRequests(prev => ({
      ...prev,
      [userId]: 'sent'
    }));
  };

  const handleDismiss = (userId) => {
    setConnectionRequests(prev => ({
      ...prev,
      [userId]: 'dismissed'
    }));
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Recommended Connections</h3>
        <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1 transition-academic">
          <span>View All</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
      <div className="space-y-4">
        {recommendations?.map((person) => (
          <div key={person?.id} className="border border-border rounded-lg p-4 hover:shadow-academic transition-academic">
            <div className="flex items-start space-x-4">
              <div className="relative">
                <Image
                  src={person?.avatar}
                  alt={person?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-2 border-card flex items-center justify-center">
                  <Icon name="Plus" size={12} color="white" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{person?.name}</h4>
                  <span className="text-xs text-muted-foreground">Class of {person?.graduationYear}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">{person?.title}</p>
                
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={12} />
                    <span>{person?.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={12} />
                    <span>{person?.mutualConnections} mutual connections</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {person?.skills?.slice(0, 3)?.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="text-xs text-primary mb-3">
                  <Icon name="Target" size={12} className="inline mr-1" />
                  {person?.matchReason}
                </p>
                
                <div className="flex items-center space-x-2">
                  {connectionRequests?.[person?.id] === 'sent' ? (
                    <div className="flex items-center space-x-1 text-success">
                      <Icon name="Check" size={16} />
                      <span className="text-sm font-medium">Request Sent</span>
                    </div>
                  ) : connectionRequests?.[person?.id] === 'dismissed' ? (
                    <span className="text-sm text-muted-foreground">Dismissed</span>
                  ) : (
                    <>
                      <Button
                        variant="default"
                        size="sm"
                        iconName="UserPlus"
                        iconPosition="left"
                        onClick={() => handleConnect(person?.id)}
                      >
                        Connect
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDismiss(person?.id)}
                      >
                        Dismiss
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedConnections;