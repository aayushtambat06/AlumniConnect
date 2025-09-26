import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WelcomeSection = ({ user }) => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-xl p-6 text-primary-foreground mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border-2 border-primary-foreground/20"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-primary flex items-center justify-center">
              <Icon name="Check" size={12} color="white" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {user?.name}!</h1>
            <p className="text-primary-foreground/80 text-sm">
              Last active: {user?.lastActive} • {user?.connectionCount} connections
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{user?.profileViews}</div>
            <div className="text-xs text-primary-foreground/80">Profile Views</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{user?.networkScore}</div>
            <div className="text-xs text-primary-foreground/80">Network Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;