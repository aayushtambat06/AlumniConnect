import React from 'react';
import Button from '../../../components/ui/Button';

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: 'Send Announcement',
      description: 'Broadcast message to all alumni',
      icon: 'Megaphone',
      variant: 'default',
      onClick: () => console.log('Send announcement')
    },
    {
      id: 2,
      title: 'Approve Pending',
      description: '12 profiles awaiting verification',
      icon: 'CheckCircle',
      variant: 'success',
      onClick: () => console.log('Approve pending')
    },
    {
      id: 3,
      title: 'Moderate Content',
      description: '3 reports need attention',
      icon: 'Shield',
      variant: 'warning',
      onClick: () => console.log('Moderate content')
    },
    {
      id: 4,
      title: 'Export Data',
      description: 'Download alumni database',
      icon: 'Download',
      variant: 'outline',
      onClick: () => console.log('Export data')
    },
    {
      id: 5,
      title: 'Create Event',
      description: 'Schedule new alumni gathering',
      icon: 'Calendar',
      variant: 'default',
      onClick: () => console.log('Create event')
    },
    {
      id: 6,
      title: 'System Settings',
      description: 'Configure platform preferences',
      icon: 'Settings',
      variant: 'ghost',
      onClick: () => console.log('System settings')
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg shadow-academic">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Common administrative tasks
        </p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions?.map((action) => (
            <div
              key={action?.id}
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-academic cursor-pointer group"
              onClick={action?.onClick}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <Button
                  variant={action?.variant}
                  size="icon"
                  iconName={action?.icon}
                  className="group-hover:scale-105 transition-academic"
                />
                <div>
                  <h4 className="font-medium text-foreground text-sm mb-1">
                    {action?.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {action?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;