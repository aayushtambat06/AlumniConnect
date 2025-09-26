import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps, completedSteps }) => {
  const steps = [
    { id: 1, title: 'Basic Info', icon: 'User' },
    { id: 2, title: 'Career Timeline', icon: 'Briefcase' },
    { id: 3, title: 'Skills & Expertise', icon: 'Award' },
    { id: 4, title: 'Mentorship', icon: 'Users' },
    { id: 5, title: 'Privacy & Preview', icon: 'Shield' }
  ];

  const completionPercentage = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className="bg-card rounded-lg p-6 mb-6 border-academic">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Profile Setup Progress</h2>
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">{completionPercentage}%</div>
          <div className="text-sm text-muted-foreground">Complete</div>
        </div>
      </div>
      <div className="w-full bg-muted rounded-full h-2 mb-6">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
      <div className="flex justify-between items-center">
        {steps?.map((step, index) => (
          <div key={step?.id} className="flex flex-col items-center space-y-2">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center transition-academic
              ${currentStep === step?.id 
                ? 'bg-primary text-primary-foreground pulse-connection' 
                : currentStep > step?.id 
                  ? 'bg-success text-success-foreground' 
                  : 'bg-muted text-muted-foreground'
              }
            `}>
              {currentStep > step?.id ? (
                <Icon name="Check" size={18} />
              ) : (
                <Icon name={step?.icon} size={18} />
              )}
            </div>
            <div className={`
              text-xs font-medium text-center max-w-16
              ${currentStep === step?.id ? 'text-primary' : 'text-muted-foreground'}
            `}>
              {step?.title}
            </div>
            {index < steps?.length - 1 && (
              <div className={`
                absolute w-16 h-0.5 mt-5 ml-10 hidden sm:block
                ${currentStep > step?.id ? 'bg-success' : 'bg-muted'}
              `} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;