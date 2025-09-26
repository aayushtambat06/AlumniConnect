import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: "connection",
      user: {
        name: "Alex Thompson",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
        title: "Software Engineer at Apple"
      },
      action: "connected with",
      target: "Maria Garcia",
      timestamp: "2 hours ago",
      icon: "UserPlus",
      color: "text-blue-600"
    },
    {
      id: 2,
      type: "achievement",
      user: {
        name: "Jennifer Liu",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        title: "Product Manager at Meta"
      },
      action: "earned the",
      target: "Mentor Badge",
      timestamp: "4 hours ago",
      icon: "Award",
      color: "text-yellow-600"
    },
    {
      id: 3,
      type: "event",
      user: {
        name: "Robert Kim",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        title: "Data Scientist at Netflix"
      },
      action: "registered for",
      target: "Tech Alumni Networking Night",
      timestamp: "6 hours ago",
      icon: "Calendar",
      color: "text-green-600"
    },
    {
      id: 4,
      type: "post",
      user: {
        name: "Sarah Wilson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        title: "UX Designer at Adobe"
      },
      action: "shared insights about",
      target: "Design Thinking in Tech",
      timestamp: "8 hours ago",
      icon: "FileText",
      color: "text-purple-600"
    },
    {
      id: 5,
      type: "milestone",
      user: {
        name: "David Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        title: "Senior Developer at Google"
      },
      action: "celebrated",
      target: "5 years at Google",
      timestamp: "12 hours ago",
      icon: "Trophy",
      color: "text-orange-600"
    },
    {
      id: 6,
      type: "mentorship",
      user: {
        name: "Lisa Rodriguez",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
        title: "Engineering Manager at Microsoft"
      },
      action: "started mentoring",
      target: "3 new alumni",
      timestamp: "1 day ago",
      icon: "GraduationCap",
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Activity Feed</h3>
        <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1 transition-academic">
          <span>View All</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
      <div className="space-y-4">
        {activities?.map((activity) => (
          <div key={activity?.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-academic">
            <div className="relative">
              <Image
                src={activity?.user?.avatar}
                alt={activity?.user?.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className={`absolute -bottom-1 -right-1 w-5 h-5 bg-card rounded-full border border-border flex items-center justify-center`}>
                <Icon name={activity?.icon} size={10} className={activity?.color} />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1 mb-1">
                <span className="font-medium text-foreground text-sm">{activity?.user?.name}</span>
                <span className="text-muted-foreground text-sm">{activity?.action}</span>
                <span className="font-medium text-foreground text-sm">{activity?.target}</span>
              </div>
              
              <p className="text-xs text-muted-foreground mb-1">{activity?.user?.title}</p>
              <span className="text-xs text-muted-foreground">{activity?.timestamp}</span>
            </div>
            
            <button className="p-1 hover:bg-muted rounded-lg transition-academic">
              <Icon name="MoreHorizontal" size={16} className="text-muted-foreground" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <button className="w-full text-center text-primary hover:text-primary/80 text-sm font-medium py-2 transition-academic">
          Load More Activities
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;