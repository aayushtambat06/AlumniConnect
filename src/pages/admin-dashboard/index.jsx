import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import StatsCard from './components/StatsCard';
import ActivityFeed from './components/ActivityFeed';
import QuickActions from './components/QuickActions';
import SystemHealth from './components/SystemHealth';
import PendingApprovals from './components/PendingApprovals';
import EngagementChart from './components/EngagementChart';

const AdminDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [adminUser] = useState({
    name: 'Dr. Jennifer Martinez',
    role: 'Alumni Relations Director',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    lastLogin: new Date(Date.now() - 1800000)
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const statsData = [
    {
      title: 'Total Alumni',
      value: '12,847',
      change: '+5.2%',
      changeType: 'increase',
      icon: 'Users',
      color: 'primary'
    },
    {
      title: 'Active This Month',
      value: '8,234',
      change: '+12.8%',
      changeType: 'increase',
      icon: 'UserCheck',
      color: 'success'
    },
    {
      title: 'New Connections',
      value: '1,456',
      change: '+8.4%',
      changeType: 'increase',
      icon: 'Link',
      color: 'primary'
    },
    {
      title: 'Mentorship Matches',
      value: '342',
      change: '+15.6%',
      changeType: 'increase',
      icon: 'GraduationCap',
      color: 'success'
    },
    {
      title: 'Events This Month',
      value: '28',
      change: '+3.7%',
      changeType: 'increase',
      icon: 'Calendar',
      color: 'primary'
    },
    {
      title: 'Pending Reviews',
      value: '15',
      change: '-22.1%',
      changeType: 'decrease',
      icon: 'Clock',
      color: 'warning'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={32} color="white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">Welcome back, {adminUser?.name}</h1>
                    <p className="text-primary-foreground/80 text-lg">{adminUser?.role}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-primary-foreground/80">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>{formatTime(currentTime)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} />
                    <span>{formatDate(currentTime)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Activity" size={16} />
                    <span>Last login: {formatTime(adminUser?.lastLogin)}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <Button variant="secondary" iconName="Download" iconPosition="left">
                  Export Report
                </Button>
                <Button variant="outline" iconName="Settings" iconPosition="left">
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            {statsData?.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat?.title}
                value={stat?.value}
                change={stat?.change}
                changeType={stat?.changeType}
                icon={stat?.icon}
                color={stat?.color}
              />
            ))}
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Left Column - Charts and Analytics */}
            <div className="lg:col-span-2 space-y-8">
              <EngagementChart />
              <SystemHealth />
            </div>

            {/* Right Column - Activity and Actions */}
            <div className="space-y-8">
              <ActivityFeed />
              <QuickActions />
            </div>
          </div>

          {/* Full Width - Pending Approvals */}
          <div className="mb-8">
            <PendingApprovals />
          </div>

          {/* Additional Management Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-academic hover:shadow-academic-hover transition-academic cursor-pointer">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">User Management</h3>
                  <p className="text-sm text-muted-foreground">Manage alumni profiles</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">12,847</div>
              <div className="text-sm text-muted-foreground">Total registered users</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-academic hover:shadow-academic-hover transition-academic cursor-pointer">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-success/10 text-success rounded-lg flex items-center justify-center">
                  <Icon name="MessageSquare" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Content Moderation</h3>
                  <p className="text-sm text-muted-foreground">Review reported content</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">3</div>
              <div className="text-sm text-muted-foreground">Items pending review</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-academic hover:shadow-academic-hover transition-academic cursor-pointer">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-warning/10 text-warning rounded-lg flex items-center justify-center">
                  <Icon name="Calendar" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Event Management</h3>
                  <p className="text-sm text-muted-foreground">Organize alumni events</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">28</div>
              <div className="text-sm text-muted-foreground">Events this month</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-academic hover:shadow-academic-hover transition-academic cursor-pointer">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 text-accent-foreground rounded-lg flex items-center justify-center">
                  <Icon name="BarChart3" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Analytics</h3>
                  <p className="text-sm text-muted-foreground">Platform insights</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">94.2%</div>
              <div className="text-sm text-muted-foreground">User satisfaction</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;