import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: 'user_registration',
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        batch: '2019'
      },
      action: 'registered as a new alumni member',
      timestamp: new Date(Date.now() - 300000),
      icon: 'UserPlus',
      color: 'success'
    },
    {
      id: 2,
      type: 'mentorship_match',
      user: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        batch: '2015'
      },
      action: 'was matched with a mentee in Software Engineering',
      timestamp: new Date(Date.now() - 900000),
      icon: 'Users',
      color: 'primary'
    },
    {
      id: 3,
      type: 'content_report',
      user: {
        name: 'Emily Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        batch: '2020'
      },
      action: 'reported inappropriate content for review',
      timestamp: new Date(Date.now() - 1800000),
      icon: 'AlertTriangle',
      color: 'warning'
    },
    {
      id: 4,
      type: 'event_creation',
      user: {
        name: 'David Park',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        batch: '2012'
      },
      action: 'created a new networking event "Tech Alumni Meetup 2025"',
      timestamp: new Date(Date.now() - 3600000),
      icon: 'Calendar',
      color: 'primary'
    },
    {
      id: 5,
      type: 'profile_verification',
      user: {
        name: 'Lisa Thompson',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        batch: '2018'
      },
      action: 'completed profile verification process',
      timestamp: new Date(Date.now() - 7200000),
      icon: 'CheckCircle',
      color: 'success'
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'success':
        return 'bg-success/10 text-success';
      case 'warning':
        return 'bg-warning/10 text-warning';
      case 'error':
        return 'bg-error/10 text-error';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    
    if (minutes < 60) {
      return `${minutes}m ago`;
    } else {
      return `${hours}h ago`;
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-academic">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
          <button className="text-primary hover:text-primary/80 text-sm font-medium transition-academic">
            View All
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities?.map((activity) => (
            <div key={activity?.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src={activity?.user?.avatar}
                    alt={activity?.user?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${getColorClasses(activity?.color)}`}>
                    <Icon name={activity?.icon} size={12} />
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-foreground">{activity?.user?.name}</span>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                    Class of {activity?.user?.batch}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{activity?.action}</p>
                <span className="text-xs text-muted-foreground">
                  {formatTimeAgo(activity?.timestamp)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;