import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementProgress = () => {
  const achievements = [
    {
      id: 1,
      title: "Network Builder",
      description: "Connect with 50 alumni",
      progress: 32,
      total: 50,
      icon: "Users",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Mentor",
      description: "Help 5 junior alumni",
      progress: 3,
      total: 5,
      icon: "GraduationCap",
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      id: 3,
      title: "Event Attendee",
      description: "Attend 10 alumni events",
      progress: 7,
      total: 10,
      icon: "Calendar",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ];

  const recentBadges = [
    {
      id: 1,
      name: "Early Adopter",
      description: "Joined in the first month",
      icon: "Star",
      color: "bg-yellow-500",
      earned: "2 days ago"
    },
    {
      id: 2,
      name: "Connector",
      description: "Made 25 connections",
      icon: "Link",
      color: "bg-blue-500",
      earned: "1 week ago"
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Achievement Progress</h3>
      <div className="space-y-4 mb-6">
        {achievements?.map((achievement) => (
          <div key={achievement?.id} className={`${achievement?.bgColor} rounded-lg p-4`}>
            <div className="flex items-center space-x-3 mb-3">
              <div className={`${achievement?.color} p-2 rounded-lg`}>
                <Icon name={achievement?.icon} size={16} color="white" />
              </div>
              <div className="flex-1">
                <h4 className={`font-medium text-sm ${achievement?.textColor}`}>{achievement?.title}</h4>
                <p className="text-xs text-muted-foreground">{achievement?.description}</p>
              </div>
              <span className={`text-sm font-medium ${achievement?.textColor}`}>
                {achievement?.progress}/{achievement?.total}
              </span>
            </div>
            
            <div className="w-full bg-white rounded-full h-2">
              <div 
                className={`${achievement?.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${(achievement?.progress / achievement?.total) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-4">
        <h4 className="font-medium text-foreground mb-3 flex items-center space-x-2">
          <Icon name="Award" size={16} />
          <span>Recent Badges</span>
        </h4>
        
        <div className="space-y-2">
          {recentBadges?.map((badge) => (
            <div key={badge?.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-academic">
              <div className={`${badge?.color} p-2 rounded-full achievement-glow`}>
                <Icon name={badge?.icon} size={14} color="white" />
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-sm text-foreground">{badge?.name}</h5>
                <p className="text-xs text-muted-foreground">{badge?.description}</p>
              </div>
              <span className="text-xs text-muted-foreground">{badge?.earned}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementProgress;