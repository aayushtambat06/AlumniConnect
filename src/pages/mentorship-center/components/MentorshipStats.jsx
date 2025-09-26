import React from 'react';
import Icon from '../../../components/AppIcon';

const MentorshipStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'Users',
      label: 'Active Mentors',
      value: stats?.activeMentors,
      color: 'text-primary'
    },
    {
      icon: 'UserCheck',
      label: 'Successful Matches',
      value: stats?.successfulMatches,
      color: 'text-success'
    },
    {
      icon: 'Clock',
      label: 'Avg Response Time',
      value: stats?.avgResponseTime,
      color: 'text-warning'
    },
    {
      icon: 'Star',
      label: 'Average Rating',
      value: stats?.averageRating,
      color: 'text-accent'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statItems?.map((item, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-3`}>
            <Icon name={item?.icon} size={24} className={item?.color} />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{item?.value}</div>
          <div className="text-sm text-muted-foreground">{item?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MentorshipStats;