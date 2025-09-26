import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MentorCard = ({ mentor, onViewProfile, onConnect }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-academic-hover transition-academic">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <Image
            src={mentor?.avatar}
            alt={mentor?.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
            mentor?.isOnline ? 'bg-success' : 'bg-gray-300'
          }`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground truncate">{mentor?.name}</h3>
              <p className="text-sm text-muted-foreground">{mentor?.title}</p>
              <p className="text-sm text-muted-foreground">{mentor?.company}</p>
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Icon name="Star" size={16} className="text-warning fill-current" />
              <span>{mentor?.rating}</span>
              <span>({mentor?.reviewCount})</span>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
              <Icon name="MapPin" size={14} />
              <span>{mentor?.location}</span>
              <span>•</span>
              <Icon name="Clock" size={14} />
              <span>{mentor?.experience} years exp</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {mentor?.expertise?.slice(0, 3)?.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-accent/10 text-accent-foreground text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
              {mentor?.expertise?.length > 3 && (
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                  +{mentor?.expertise?.length - 3} more
                </span>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {mentor?.bio}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} />
                  <span>{mentor?.menteeCount} mentees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{mentor?.availability}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onViewProfile(mentor)}
                >
                  View Profile
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  iconName="MessageSquare"
                  iconPosition="left"
                  onClick={() => onConnect(mentor)}
                >
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;