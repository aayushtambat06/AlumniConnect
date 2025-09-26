import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const AlumniCard = ({ alumni, onConnect, onViewProfile, onSaveProfile, isSaved = false }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(alumni?.isConnected || false);

  const handleConnect = async () => {
    if (isConnected) return;
    
    setIsConnecting(true);
    try {
      await onConnect(alumni?.id);
      setIsConnected(true);
    } catch (error) {
      console.error('Connection failed:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleSave = () => {
    onSaveProfile(alumni?.id, !isSaved);
  };

  const getConnectionStatusColor = () => {
    if (isConnected) return 'text-success';
    if (alumni?.mutualConnections > 0) return 'text-primary';
    return 'text-muted-foreground';
  };

  const getConnectionStatusText = () => {
    if (isConnected) return 'Connected';
    if (alumni?.mutualConnections > 0) return `${alumni?.mutualConnections} mutual`;
    return 'Connect';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-academic-hover transition-academic group">
      {/* Header with Save Button */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 bg-muted border border-border rounded-full flex items-center justify-center">
              <Icon name="User" size={24} color="var(--color-muted-foreground)" />
            </div>
            {alumni?.isOnline && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card"></div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground hover:text-primary cursor-pointer transition-academic" onClick={() => onViewProfile(alumni?.id)}>
              {alumni?.name}
            </h3>
            <p className="text-sm text-muted-foreground">{alumni?.currentRole}</p>
            <p className="text-sm text-muted-foreground">{alumni?.company}</p>
          </div>
        </div>
        <button
          onClick={handleSave}
          className="opacity-0 group-hover:opacity-100 transition-academic p-2 hover:bg-muted rounded-lg"
        >
          <Icon 
            name={isSaved ? "Bookmark" : "BookmarkPlus"} 
            size={18} 
            color={isSaved ? "var(--color-accent)" : "var(--color-muted-foreground)"} 
          />
        </button>
      </div>
      {/* Location and Graduation */}
      <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center space-x-1">
          <Icon name="MapPin" size={14} />
          <span>{alumni?.location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="GraduationCap" size={14} />
          <span>Class of {alumni?.graduationYear}</span>
        </div>
      </div>
      {/* Skills */}
      {alumni?.skills && alumni?.skills?.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {alumni?.skills?.slice(0, 3)?.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
            {alumni?.skills?.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                +{alumni?.skills?.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}
      {/* Badges */}
      <div className="flex items-center space-x-3 mb-4">
        {alumni?.availableForMentorship && (
          <div className="flex items-center space-x-1 text-xs text-success">
            <Icon name="Users" size={12} />
            <span>Mentor</span>
          </div>
        )}
        {alumni?.openToOpportunities && (
          <div className="flex items-center space-x-1 text-xs text-primary">
            <Icon name="Briefcase" size={12} />
            <span>Open to Work</span>
          </div>
        )}
        {alumni?.recentActivity && (
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Icon name="Activity" size={12} />
            <span>Active recently</span>
          </div>
        )}
      </div>
      {/* Connection Status */}
      <div className="flex items-center justify-between">
        <div className={`flex items-center space-x-1 text-xs ${getConnectionStatusColor()}`}>
          <Icon name="Users" size={12} />
          <span>{getConnectionStatusText()}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewProfile(alumni?.id)}
            iconName="Eye"
            iconPosition="left"
          >
            View
          </Button>
          <Button
            variant={isConnected ? "secondary" : "default"}
            size="sm"
            onClick={handleConnect}
            loading={isConnecting}
            disabled={isConnected}
            iconName={isConnected ? "Check" : "UserPlus"}
            iconPosition="left"
          >
            {isConnected ? "Connected" : "Connect"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;