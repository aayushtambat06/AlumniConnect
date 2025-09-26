import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedMentors = ({ mentors, onViewProfile, onConnect }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Featured Mentors</h2>
        <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors?.map((mentor) => (
          <div key={mentor?.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-academic-hover transition-academic">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <Image
                  src={mentor?.avatar}
                  alt={mentor?.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
                <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                  Featured
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-1">{mentor?.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{mentor?.title}</p>
              <p className="text-sm text-muted-foreground mb-4">{mentor?.company}</p>
              
              <div className="flex items-center justify-center space-x-1 mb-4">
                <Icon name="Star" size={16} className="text-warning fill-current" />
                <span className="text-sm font-medium">{mentor?.rating}</span>
                <span className="text-sm text-muted-foreground">({mentor?.reviewCount} reviews)</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {mentor?.expertise?.slice(0, 2)?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-accent/10 text-accent-foreground text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} />
                  <span>{mentor?.menteeCount}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={14} />
                  <span>{mentor?.location}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onViewProfile(mentor)}
                  fullWidth
                >
                  View Profile
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  iconName="MessageSquare"
                  iconPosition="left"
                  onClick={() => onConnect(mentor)}
                  fullWidth
                >
                  Connect
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMentors;