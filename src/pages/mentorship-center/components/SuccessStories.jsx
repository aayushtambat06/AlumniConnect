import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessStories = ({ stories, onReadMore }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Success Stories</h2>
        <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
          View All Stories
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {stories?.map((story) => (
          <div key={story?.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start space-x-4 mb-4">
              <Image
                src={story?.menteeAvatar}
                alt={story?.menteeName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{story?.menteeName}</h3>
                <p className="text-sm text-muted-foreground">{story?.menteeTitle}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm text-muted-foreground">Mentored by</span>
                  <span className="text-sm font-medium text-primary">{story?.mentorName}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Icon name="Calendar" size={14} />
                <span>{story?.duration}</span>
              </div>
            </div>
            
            <blockquote className="text-muted-foreground italic mb-4 line-clamp-3">
              "{story?.testimonial}"
            </blockquote>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-wrap gap-2">
                {story?.achievements?.slice(0, 2)?.map((achievement, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-success/10 text-success text-xs rounded-full flex items-center space-x-1"
                  >
                    <Icon name="Trophy" size={12} />
                    <span>{achievement}</span>
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={14}
                    className={`${
                      i < story?.rating ? 'text-warning fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="MessageSquare" size={14} />
                  <span>{story?.sessionCount} sessions</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Target" size={14} />
                  <span>{story?.goalsAchieved} goals met</span>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onReadMore(story)}
                iconName="ArrowRight"
                iconPosition="right"
              >
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;