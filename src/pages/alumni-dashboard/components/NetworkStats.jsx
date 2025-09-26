import React from 'react';
import Icon from '../../../components/AppIcon';

const NetworkStats = () => {
  const stats = [
    {
      id: 1,
      title: "Total Connections",
      value: "247",
      change: "+12",
      changeType: "increase",
      icon: "Users",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Profile Views",
      value: "89",
      change: "+23",
      changeType: "increase",
      icon: "Eye",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      title: "Messages",
      value: "34",
      change: "+5",
      changeType: "increase",
      icon: "MessageSquare",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 4,
      title: "Network Score",
      value: "8.7",
      change: "+0.3",
      changeType: "increase",
      icon: "TrendingUp",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats?.map((stat) => (
        <div key={stat?.id} className={`${stat?.bgColor} rounded-xl p-4 border border-border hover:shadow-academic transition-academic`}>
          <div className="flex items-center justify-between mb-3">
            <div className={`${stat?.color} p-2 rounded-lg bg-white`}>
              <Icon name={stat?.icon} size={20} />
            </div>
            <div className={`flex items-center space-x-1 text-xs font-medium ${
              stat?.changeType === 'increase' ? 'text-success' : 'text-error'
            }`}>
              <Icon 
                name={stat?.changeType === 'increase' ? 'TrendingUp' : 'TrendingDown'} 
                size={12} 
              />
              <span>{stat?.change}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{stat?.value}</h3>
            <p className="text-sm text-muted-foreground">{stat?.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NetworkStats;