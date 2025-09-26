import React, { useState } from 'react';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PrivacyPreviewStep = ({ data, onUpdate, onPrevious, onComplete }) => {
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: data?.profileVisibility || 'alumni-only',
    showEmail: data?.showEmail || false,
    showPhone: data?.showPhone || false,
    showLocation: data?.showLocation || true,
    showExperience: data?.showExperience || true,
    showSkills: data?.showSkills || true,
    allowMessages: data?.allowMessages || true,
    allowConnectionRequests: data?.allowConnectionRequests || true,
    showInDirectory: data?.showInDirectory || true,
    emailNotifications: data?.emailNotifications || true,
    mentorshipVisible: data?.mentorshipVisible || true
  });

  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const visibilityOptions = [
    { 
      value: 'public', 
      label: 'Public', 
      description: 'Visible to everyone on the internet',
      icon: 'Globe'
    },
    { 
      value: 'alumni-only', 
      label: 'Alumni Only', 
      description: 'Only visible to verified alumni',
      icon: 'Users'
    },
    { 
      value: 'connections-only', 
      label: 'Connections Only', 
      description: 'Only visible to your connections',
      icon: 'UserCheck'
    },
    { 
      value: 'private', 
      label: 'Private', 
      description: 'Not visible in searches or directory',
      icon: 'Lock'
    }
  ];

  const handlePrivacyChange = (field, value) => {
    setPrivacySettings(prev => ({ ...prev, [field]: value }));
  };

  const handleComplete = () => {
    onUpdate(privacySettings);
    onComplete();
  };

  const getCompletionPercentage = () => {
    const requiredFields = [
      data?.firstName, data?.lastName, data?.phone, data?.location,
      data?.graduationYear, data?.degree, data?.major, data?.bio
    ];
    const optionalFields = [
      data?.profilePhoto, data?.linkedinUrl, data?.websiteUrl,
      data?.experiences?.length > 0, data?.skills?.length > 0
    ];
    
    const requiredComplete = requiredFields?.filter(Boolean)?.length;
    const optionalComplete = optionalFields?.filter(Boolean)?.length;
    
    return Math.round(((requiredComplete * 10) + (optionalComplete * 5)) / 130 * 100);
  };

  const ProfilePreview = () => (
    <div className="bg-background border border-border rounded-lg p-6">
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-muted border-2 border-border">
          {data?.profilePhoto ? (
            <Image 
              src={data?.profilePhoto} 
              alt="Profile preview" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Icon name="User" size={32} className="text-muted-foreground" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground">
            {data?.firstName} {data?.lastName}
          </h3>
          <p className="text-primary font-medium">
            {data?.experiences?.[0]?.title || 'Professional'} at {data?.experiences?.[0]?.company || 'Company'}
          </p>
          <p className="text-muted-foreground text-sm">
            {privacySettings?.showLocation && data?.location}
          </p>
          <p className="text-muted-foreground text-sm">
            Class of {data?.graduationYear} • {data?.degree} in {data?.major}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" iconName="MessageSquare">
            Message
          </Button>
          <Button size="sm" iconName="UserPlus">
            Connect
          </Button>
        </div>
      </div>

      {privacySettings?.showExperience && data?.bio && (
        <div className="mb-6">
          <h4 className="font-medium text-foreground mb-2">About</h4>
          <p className="text-muted-foreground text-sm">{data?.bio}</p>
        </div>
      )}

      {privacySettings?.showExperience && data?.experiences?.length > 0 && (
        <div className="mb-6">
          <h4 className="font-medium text-foreground mb-3">Experience</h4>
          <div className="space-y-3">
            {data?.experiences?.slice(0, 2)?.map((exp, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Briefcase" size={16} className="text-primary" />
                </div>
                <div>
                  <h5 className="font-medium text-foreground">{exp?.title}</h5>
                  <p className="text-sm text-primary">{exp?.company}</p>
                  <p className="text-xs text-muted-foreground">{exp?.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {privacySettings?.showSkills && data?.skills?.length > 0 && (
        <div className="mb-6">
          <h4 className="font-medium text-foreground mb-3">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {data?.skills?.slice(0, 6)?.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm rounded-full"
              >
                {skill?.name}
              </span>
            ))}
            {data?.skills?.length > 6 && (
              <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                +{data?.skills?.length - 6} more
              </span>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          {privacySettings?.showEmail && (
            <span className="flex items-center">
              <Icon name="Mail" size={14} className="mr-1" />
              {data?.email}
            </span>
          )}
          {privacySettings?.showPhone && (
            <span className="flex items-center">
              <Icon name="Phone" size={14} className="mr-1" />
              {data?.phone}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {data?.linkedinUrl && (
            <Icon name="Linkedin" size={16} className="text-muted-foreground" />
          )}
          {data?.websiteUrl && (
            <Icon name="Globe" size={16} className="text-muted-foreground" />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-card rounded-lg p-6 border-academic">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Privacy Settings & Profile Preview</h3>
        <p className="text-muted-foreground">Configure your privacy preferences and preview your profile.</p>
      </div>
      {/* Completion Status */}
      <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-success">Profile Completion</h4>
          <span className="text-2xl font-bold text-success">{getCompletionPercentage()}%</span>
        </div>
        <div className="w-full bg-success/20 rounded-full h-2">
          <div 
            className="bg-success h-2 rounded-full transition-all duration-500"
            style={{ width: `${getCompletionPercentage()}%` }}
          />
        </div>
        <p className="text-sm text-success mt-2">
          Great job! Your profile is ready to make connections.
        </p>
      </div>
      {/* Privacy Settings */}
      <div className="mb-8">
        <h4 className="text-lg font-medium text-foreground mb-4">Privacy Settings</h4>
        
        {/* Profile Visibility */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-3">
            Profile Visibility
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {visibilityOptions?.map((option) => (
              <div
                key={option?.value}
                className={`
                  border rounded-lg p-3 cursor-pointer transition-academic
                  ${privacySettings?.profileVisibility === option?.value 
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }
                `}
                onClick={() => handlePrivacyChange('profileVisibility', option?.value)}
              >
                <div className="flex items-start space-x-3">
                  <Icon name={option?.icon} size={18} className="text-primary mt-0.5" />
                  <div>
                    <h5 className="font-medium text-foreground">{option?.label}</h5>
                    <p className="text-xs text-muted-foreground">{option?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Information Visibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Checkbox
            label="Show email address"
            checked={privacySettings?.showEmail}
            onChange={(e) => handlePrivacyChange('showEmail', e?.target?.checked)}
          />
          <Checkbox
            label="Show phone number"
            checked={privacySettings?.showPhone}
            onChange={(e) => handlePrivacyChange('showPhone', e?.target?.checked)}
          />
          <Checkbox
            label="Show location"
            checked={privacySettings?.showLocation}
            onChange={(e) => handlePrivacyChange('showLocation', e?.target?.checked)}
          />
          <Checkbox
            label="Show work experience"
            checked={privacySettings?.showExperience}
            onChange={(e) => handlePrivacyChange('showExperience', e?.target?.checked)}
          />
          <Checkbox
            label="Show skills"
            checked={privacySettings?.showSkills}
            onChange={(e) => handlePrivacyChange('showSkills', e?.target?.checked)}
          />
          <Checkbox
            label="Show mentorship preferences"
            checked={privacySettings?.mentorshipVisible}
            onChange={(e) => handlePrivacyChange('mentorshipVisible', e?.target?.checked)}
          />
        </div>

        {/* Communication Settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Checkbox
            label="Allow direct messages"
            checked={privacySettings?.allowMessages}
            onChange={(e) => handlePrivacyChange('allowMessages', e?.target?.checked)}
          />
          <Checkbox
            label="Allow connection requests"
            checked={privacySettings?.allowConnectionRequests}
            onChange={(e) => handlePrivacyChange('allowConnectionRequests', e?.target?.checked)}
          />
          <Checkbox
            label="Show in alumni directory"
            checked={privacySettings?.showInDirectory}
            onChange={(e) => handlePrivacyChange('showInDirectory', e?.target?.checked)}
          />
          <Checkbox
            label="Email notifications"
            checked={privacySettings?.emailNotifications}
            onChange={(e) => handlePrivacyChange('emailNotifications', e?.target?.checked)}
          />
        </div>
      </div>
      {/* Profile Preview */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-medium text-foreground">Profile Preview</h4>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            iconName={isPreviewMode ? "Edit" : "Eye"}
            iconPosition="left"
          >
            {isPreviewMode ? "Edit Settings" : "Preview Profile"}
          </Button>
        </div>
        
        {isPreviewMode ? (
          <ProfilePreview />
        ) : (
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <Icon name="Eye" size={48} className="mx-auto text-muted-foreground mb-3" />
            <h5 className="font-medium text-foreground mb-2">Profile Preview</h5>
            <p className="text-muted-foreground mb-4">
              See how your profile will appear to other alumni based on your privacy settings.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsPreviewMode(true)}
              iconName="Eye"
              iconPosition="left"
            >
              Preview Profile
            </Button>
          </div>
        )}
      </div>
      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrevious} iconName="ArrowLeft" iconPosition="left">
          Previous
        </Button>
        <Button 
          onClick={handleComplete} 
          iconName="Check" 
          iconPosition="left"
          className="bg-success hover:bg-success/90 text-success-foreground"
        >
          Complete Profile Setup
        </Button>
      </div>
    </div>
  );
};

export default PrivacyPreviewStep;