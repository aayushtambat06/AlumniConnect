import React from 'react';
import Header from '../../components/ui/Header';
import WelcomeSection from './components/WelcomeSection';
import QuickActions from './components/QuickActions';
import NetworkStats from './components/NetworkStats';
import RecentConnections from './components/RecentConnections';
import AchievementProgress from './components/AchievementProgress';
import UpcomingEvents from './components/UpcomingEvents';
import ActivityFeed from './components/ActivityFeed';
import RecommendedConnections from './components/RecommendedConnections';

const AlumniDashboard = () => {
  // Mock user data
  const currentUser = {
    name: "Michael Rodriguez",
    lastActive: "Today at 2:30 PM",
    connectionCount: 247,
    profileViews: 89,
    networkScore: 8.7
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <WelcomeSection user={currentUser} />
          
          {/* Quick Actions */}
          <QuickActions />
          
          {/* Network Statistics */}
          <NetworkStats />
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Connections */}
              <RecentConnections />
              
              {/* Upcoming Events */}
              <UpcomingEvents />
              
              {/* Recommended Connections */}
              <RecommendedConnections />
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Achievement Progress */}
              <AchievementProgress />
              
              {/* Activity Feed */}
              <ActivityFeed />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AlumniDashboard;