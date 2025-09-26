import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ProgressIndicator from './components/ProgressIndicator';
import BasicInfoStep from './components/BasicInfoStep';
import CareerTimelineStep from './components/CareerTimelineStep';
import SkillsStep from './components/SkillsStep';
import MentorshipStep from './components/MentorshipStep';
import PrivacyPreviewStep from './components/PrivacyPreviewStep';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    // Basic Info
    firstName: '',
    lastName: '',
    email: 'john.doe@email.com',
    phone: '',
    location: '',
    graduationYear: '',
    degree: '',
    major: '',
    profilePhoto: '',
    bio: '',
    linkedinUrl: '',
    websiteUrl: '',
    
    // Career Timeline
    experiences: [],
    
    // Skills
    skills: [],
    industries: [],
    
    // Mentorship
    mentorshipRole: '',
    mentorshipAvailability: '',
    preferredFormat: [],
    areasOfExpertise: [],
    areasOfInterest: [],
    timeCommitment: '',
    mentorshipExperience: '',
    mentorshipGoals: [],
    
    // Privacy
    profileVisibility: 'alumni-only',
    showEmail: false,
    showPhone: false,
    showLocation: true,
    showExperience: true,
    showSkills: true,
    allowMessages: true,
    allowConnectionRequests: true,
    showInDirectory: true,
    emailNotifications: true,
    mentorshipVisible: true
  });

  const [completedSteps, setCompletedSteps] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 5;

  // Calculate completed steps based on data
  useEffect(() => {
    let completed = 0;
    
    // Step 1: Basic Info
    if (profileData?.firstName && profileData?.lastName && profileData?.phone && 
        profileData?.location && profileData?.graduationYear && profileData?.degree && 
        profileData?.major && profileData?.bio) {
      completed++;
    }
    
    // Step 2: Career Timeline
    if (profileData?.experiences && profileData?.experiences?.length > 0) {
      completed++;
    }
    
    // Step 3: Skills
    if (profileData?.skills && profileData?.skills?.length > 0 && 
        profileData?.industries && profileData?.industries?.length > 0) {
      completed++;
    }
    
    // Step 4: Mentorship
    if (profileData?.mentorshipRole) {
      completed++;
    }
    
    // Step 5: Privacy (always considered complete when reached)
    if (currentStep >= 5) {
      completed = 5;
    }
    
    setCompletedSteps(completed);
  }, [profileData, currentStep]);

  const handleStepUpdate = (stepData) => {
    setProfileData(prev => ({ ...prev, ...stepData }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = async () => {
    setIsLoading(true);
    
    // Simulate API call to save profile
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message and redirect
      navigate('/alumni-dashboard', { 
        state: { 
          message: 'Profile setup completed successfully! Welcome to AlumniConnect.',
          type: 'success'
        }
      });
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfoStep
            data={profileData}
            onUpdate={handleStepUpdate}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <CareerTimelineStep
            data={profileData}
            onUpdate={handleStepUpdate}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <SkillsStep
            data={profileData}
            onUpdate={handleStepUpdate}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 4:
        return (
          <MentorshipStep
            data={profileData}
            onUpdate={handleStepUpdate}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 5:
        return (
          <PrivacyPreviewStep
            data={profileData}
            onUpdate={handleStepUpdate}
            onPrevious={handlePrevious}
            onComplete={handleComplete}
          />
        );
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    const titles = {
      1: 'Basic Information',
      2: 'Career Timeline',
      3: 'Skills & Expertise',
      4: 'Mentorship Preferences',
      5: 'Privacy & Preview'
    };
    return titles?.[currentStep];
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Setting up your profile...</h3>
              <p className="text-muted-foreground">This will just take a moment.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 font-accent">
              Complete Your Profile
            </h1>
            <p className="text-lg text-muted-foreground">
              Let's build your professional story and connect you with the right opportunities
            </p>
          </div>

          {/* Progress Indicator */}
          <ProgressIndicator 
            currentStep={currentStep}
            totalSteps={totalSteps}
            completedSteps={completedSteps}
          />

          {/* Step Content */}
          <div className="mb-8">
            {renderCurrentStep()}
          </div>

          {/* Help Section */}
          <div className="bg-muted/30 rounded-lg p-6 text-center">
            <Icon name="HelpCircle" size={32} className="mx-auto text-primary mb-3" />
            <h4 className="font-medium text-foreground mb-2">Need Help?</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Our support team is here to help you create the perfect profile.
            </p>
            <div className="flex justify-center space-x-3">
              <Button variant="outline" size="sm" iconName="MessageSquare" iconPosition="left">
                Live Chat
              </Button>
              <Button variant="outline" size="sm" iconName="Mail" iconPosition="left">
                Email Support
              </Button>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <h5 className="font-medium text-foreground mb-1">Connect</h5>
              <p className="text-sm text-muted-foreground">
                Find and connect with alumni from your field
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="GraduationCap" size={24} className="text-primary" />
              </div>
              <h5 className="font-medium text-foreground mb-1">Learn</h5>
              <p className="text-sm text-muted-foreground">
                Get mentorship and guidance from experienced professionals
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="TrendingUp" size={24} className="text-primary" />
              </div>
              <h5 className="font-medium text-foreground mb-1">Grow</h5>
              <p className="text-sm text-muted-foreground">
                Advance your career with exclusive opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;