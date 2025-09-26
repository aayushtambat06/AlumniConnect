import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecentConnections = () => {
  const recentConnections = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Engineer at Google",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      connectedDate: "2 days ago",
      mutualConnections: 12,
      isOnline: true
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Product Manager at Microsoft",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      connectedDate: "5 days ago",
      mutualConnections: 8,
      isOnline: false
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "UX Designer at Adobe",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      connectedDate: "1 week ago",
      mutualConnections: 15,
      isOnline: true
    },
    {
      id: 4,
      name: "David Kim",
      title: "Data Scientist at Netflix",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      connectedDate: "1 week ago",
      mutualConnections: 6,
      isOnline: false
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Recent Connections</h3>
        <Link 
          to="/alumni-directory" 
          className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1 transition-academic"
        >
          <span>View All</span>
          <Icon name="ArrowRight" size={16} />
        </Link>
      </div>
      <div className="space-y-4">
        {recentConnections?.map((connection) => (
          <div key={connection?.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-academic">
            <div className="relative">
              <Image
                src={connection?.avatar}
                alt={connection?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              {connection?.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card"></div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground text-sm truncate">{connection?.name}</h4>
              <p className="text-muted-foreground text-xs truncate">{connection?.title}</p>
              <div className="flex items-center space-x-3 mt-1">
                <span className="text-xs text-muted-foreground">{connection?.connectedDate}</span>
                <span className="text-xs text-muted-foreground">
                  {connection?.mutualConnections} mutual connections
                </span>
              </div>
            </div>
            
            <button className="p-2 hover:bg-muted rounded-lg transition-academic">
              <Icon name="MessageSquare" size={16} className="text-muted-foreground" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentConnections;