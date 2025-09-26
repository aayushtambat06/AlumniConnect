import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PendingApprovals = () => {
  const [pendingItems, setPendingItems] = useState([
    {
      id: 1,
      type: 'profile_verification',
      user: {
        name: 'Alex Kumar',
        email: 'alex.kumar@email.com',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        batch: '2021',
        degree: 'Computer Science'
      },
      submittedAt: new Date(Date.now() - 3600000),
      priority: 'high'
    },
    {
      id: 2,
      type: 'content_moderation',
      user: {
        name: 'Maria Santos',
        email: 'maria.santos@email.com',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        batch: '2019',
        degree: 'Business Administration'
      },
      content: 'Posted job opportunity with external links',
      submittedAt: new Date(Date.now() - 7200000),
      priority: 'medium'
    },
    {
      id: 3,
      type: 'event_approval',
      user: {
        name: 'James Wilson',
        email: 'james.wilson@email.com',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        batch: '2016',
        degree: 'Engineering'
      },
      content: 'Alumni Tech Conference 2025 - San Francisco',
      submittedAt: new Date(Date.now() - 10800000),
      priority: 'low'
    }
  ]);

  const handleApprove = (id) => {
    setPendingItems(items => items?.filter(item => item?.id !== id));
    console.log('Approved item:', id);
  };

  const handleReject = (id) => {
    setPendingItems(items => items?.filter(item => item?.id !== id));
    console.log('Rejected item:', id);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-error/10 text-error border-error/20';
      case 'medium':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'low':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'profile_verification':
        return 'UserCheck';
      case 'content_moderation':
        return 'Shield';
      case 'event_approval':
        return 'Calendar';
      default:
        return 'Clock';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'profile_verification':
        return 'Profile Verification';
      case 'content_moderation':
        return 'Content Review';
      case 'event_approval':
        return 'Event Approval';
      default:
        return 'Pending Review';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const hours = Math.floor(diff / 3600000);
    
    if (hours < 1) {
      return 'Just now';
    } else if (hours === 1) {
      return '1 hour ago';
    } else {
      return `${hours} hours ago`;
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-academic">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Pending Approvals</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {pendingItems?.length} items require your attention
            </p>
          </div>
          <Button variant="outline" size="sm" iconName="Filter">
            Filter
          </Button>
        </div>
      </div>
      <div className="p-6">
        {pendingItems?.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="CheckCircle" size={48} className="text-success mx-auto mb-4" />
            <h4 className="text-lg font-medium text-foreground mb-2">All caught up!</h4>
            <p className="text-muted-foreground">No pending approvals at the moment.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {pendingItems?.map((item) => (
              <div key={item?.id} className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={item?.user?.avatar}
                      alt={item?.user?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-foreground">{item?.user?.name}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(item?.priority)}`}>
                          {item?.priority} priority
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{item?.user?.email}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>Class of {item?.user?.batch}</span>
                        <span>{item?.user?.degree}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name={getTypeIcon(item?.type)} size={16} className="text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {getTypeLabel(item?.type)}
                    </span>
                  </div>
                </div>
                
                {item?.content && (
                  <div className="mb-4 p-3 bg-muted rounded-lg">
                    <p className="text-sm text-foreground">{item?.content}</p>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Submitted {formatTimeAgo(item?.submittedAt)}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="X"
                      onClick={() => handleReject(item?.id)}
                    >
                      Reject
                    </Button>
                    <Button
                      variant="success"
                      size="sm"
                      iconName="Check"
                      onClick={() => handleApprove(item?.id)}
                    >
                      Approve
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingApprovals;