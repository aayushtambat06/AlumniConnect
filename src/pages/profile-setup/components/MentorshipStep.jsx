import React, { useState } from 'react';
import Select from '../../../components/ui/Select';

import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const MentorshipStep = ({ data, onUpdate, onNext, onPrevious }) => {
  const [mentorshipData, setMentorshipData] = useState({
    role: data?.mentorshipRole || '',
    availability: data?.mentorshipAvailability || '',
    preferredFormat: data?.preferredFormat || [],
    areasOfExpertise: data?.areasOfExpertise || [],
    areasOfInterest: data?.areasOfInterest || [],
    timeCommitment: data?.timeCommitment || '',
    experience: data?.mentorshipExperience || '',
    goals: data?.mentorshipGoals || []
  });

  const roleOptions = [
    { value: 'mentor', label: 'I want to be a Mentor', description: 'Share knowledge and guide others' },
    { value: 'mentee', label: 'I want to be a Mentee', description: 'Learn from experienced professionals' },
    { value: 'both', label: 'Both Mentor and Mentee', description: 'Give and receive guidance' },
    { value: 'none', label: 'Not interested right now', description: 'Maybe in the future' }
  ];

  const availabilityOptions = [
    { value: 'very-active', label: 'Very Active (5+ hours/week)' },
    { value: 'active', label: 'Active (2-4 hours/week)' },
    { value: 'moderate', label: 'Moderate (1-2 hours/week)' },
    { value: 'light', label: 'Light (Few hours/month)' },
    { value: 'occasional', label: 'Occasional (As needed)' }
  ];

  const formatOptions = [
    { value: 'video-calls', label: 'Video Calls' },
    { value: 'phone-calls', label: 'Phone Calls' },
    { value: 'messaging', label: 'Text Messaging' },
    { value: 'email', label: 'Email' },
    { value: 'in-person', label: 'In-Person Meetings' },
    { value: 'group-sessions', label: 'Group Sessions' }
  ];

  const expertiseAreas = [
    { value: 'career-development', label: 'Career Development' },
    { value: 'leadership', label: 'Leadership & Management' },
    { value: 'technical-skills', label: 'Technical Skills' },
    { value: 'entrepreneurship', label: 'Entrepreneurship' },
    { value: 'networking', label: 'Professional Networking' },
    { value: 'work-life-balance', label: 'Work-Life Balance' },
    { value: 'industry-transition', label: 'Industry Transition' },
    { value: 'skill-development', label: 'Skill Development' },
    { value: 'job-search', label: 'Job Search Strategy' },
    { value: 'interview-prep', label: 'Interview Preparation' },
    { value: 'salary-negotiation', label: 'Salary Negotiation' },
    { value: 'personal-branding', label: 'Personal Branding' }
  ];

  const timeCommitmentOptions = [
    { value: '1-month', label: '1 Month' },
    { value: '3-months', label: '3 Months' },
    { value: '6-months', label: '6 Months' },
    { value: '1-year', label: '1 Year' },
    { value: 'ongoing', label: 'Ongoing' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const experienceOptions = [
    { value: 'first-time', label: 'First time mentor/mentee' },
    { value: 'some-experience', label: 'Some experience (1-2 relationships)' },
    { value: 'experienced', label: 'Experienced (3-5 relationships)' },
    { value: 'very-experienced', label: 'Very experienced (5+ relationships)' }
  ];

  const goalOptions = [
    { value: 'career-growth', label: 'Career Growth' },
    { value: 'skill-building', label: 'Skill Building' },
    { value: 'networking', label: 'Expand Network' },
    { value: 'leadership', label: 'Develop Leadership' },
    { value: 'give-back', label: 'Give Back to Community' },
    { value: 'learn-industry', label: 'Learn About Industry' },
    { value: 'job-transition', label: 'Job Transition' },
    { value: 'personal-development', label: 'Personal Development' }
  ];

  const handleInputChange = (field, value) => {
    setMentorshipData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    onUpdate({
      mentorshipRole: mentorshipData?.role,
      mentorshipAvailability: mentorshipData?.availability,
      preferredFormat: mentorshipData?.preferredFormat,
      areasOfExpertise: mentorshipData?.areasOfExpertise,
      areasOfInterest: mentorshipData?.areasOfInterest,
      timeCommitment: mentorshipData?.timeCommitment,
      mentorshipExperience: mentorshipData?.experience,
      mentorshipGoals: mentorshipData?.goals
    });
    onNext();
  };

  const isMentor = mentorshipData?.role === 'mentor' || mentorshipData?.role === 'both';
  const isMentee = mentorshipData?.role === 'mentee' || mentorshipData?.role === 'both';
  const isParticipating = mentorshipData?.role && mentorshipData?.role !== 'none';

  return (
    <div className="bg-card rounded-lg p-6 border-academic">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Mentorship Preferences</h3>
        <p className="text-muted-foreground">Help us match you with the right mentorship opportunities.</p>
      </div>
      {/* Role Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-foreground mb-3">
          What's your mentorship interest? <span className="text-destructive">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roleOptions?.map((option) => (
            <div
              key={option?.value}
              className={`
                border rounded-lg p-4 cursor-pointer transition-academic
                ${mentorshipData?.role === option?.value 
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }
              `}
              onClick={() => handleInputChange('role', option?.value)}
            >
              <div className="flex items-start space-x-3">
                <div className={`
                  w-4 h-4 rounded-full border-2 mt-1 flex items-center justify-center
                  ${mentorshipData?.role === option?.value 
                    ? 'border-primary bg-primary' :'border-border'
                  }
                `}>
                  {mentorshipData?.role === option?.value && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{option?.label}</h4>
                  <p className="text-sm text-muted-foreground">{option?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Conditional sections based on role */}
      {isParticipating && (
        <>
          {/* Availability */}
          <div className="mb-6">
            <Select
              label="Availability"
              description="How much time can you dedicate to mentorship?"
              options={availabilityOptions}
              value={mentorshipData?.availability}
              onChange={(value) => handleInputChange('availability', value)}
              required
            />
          </div>

          {/* Preferred Communication Format */}
          <div className="mb-6">
            <Select
              label="Preferred Communication Format"
              description="How would you like to communicate? (Select multiple)"
              options={formatOptions}
              value={mentorshipData?.preferredFormat}
              onChange={(value) => handleInputChange('preferredFormat', value)}
              multiple
              required
            />
          </div>

          {/* Areas of Expertise (for mentors) */}
          {isMentor && (
            <div className="mb-6">
              <Select
                label="Areas of Expertise"
                description="What areas can you provide guidance in?"
                options={expertiseAreas}
                value={mentorshipData?.areasOfExpertise}
                onChange={(value) => handleInputChange('areasOfExpertise', value)}
                multiple
                searchable
                required
              />
            </div>
          )}

          {/* Areas of Interest (for mentees) */}
          {isMentee && (
            <div className="mb-6">
              <Select
                label="Areas of Interest"
                description="What areas would you like guidance in?"
                options={expertiseAreas}
                value={mentorshipData?.areasOfInterest}
                onChange={(value) => handleInputChange('areasOfInterest', value)}
                multiple
                searchable
                required
              />
            </div>
          )}

          {/* Time Commitment */}
          <div className="mb-6">
            <Select
              label="Preferred Time Commitment"
              description="How long would you like mentorship relationships to last?"
              options={timeCommitmentOptions}
              value={mentorshipData?.timeCommitment}
              onChange={(value) => handleInputChange('timeCommitment', value)}
              required
            />
          </div>

          {/* Experience Level */}
          <div className="mb-6">
            <Select
              label="Mentorship Experience"
              description="What's your experience with mentorship?"
              options={experienceOptions}
              value={mentorshipData?.experience}
              onChange={(value) => handleInputChange('experience', value)}
              required
            />
          </div>

          {/* Goals */}
          <div className="mb-6">
            <Select
              label="Mentorship Goals"
              description="What do you hope to achieve through mentorship?"
              options={goalOptions}
              value={mentorshipData?.goals}
              onChange={(value) => handleInputChange('goals', value)}
              multiple
              required
            />
          </div>

          {/* Summary Card */}
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <h5 className="font-medium text-foreground mb-3 flex items-center">
              <Icon name="Users" size={18} className="mr-2" />
              Mentorship Summary
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Role:</span>
                <span className="ml-2 font-medium text-foreground capitalize">
                  {mentorshipData?.role?.replace('-', ' ')}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Availability:</span>
                <span className="ml-2 font-medium text-foreground">
                  {availabilityOptions?.find(opt => opt?.value === mentorshipData?.availability)?.label || 'Not set'}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Communication:</span>
                <span className="ml-2 font-medium text-foreground">
                  {mentorshipData?.preferredFormat?.length} format{mentorshipData?.preferredFormat?.length !== 1 ? 's' : ''} selected
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Focus Areas:</span>
                <span className="ml-2 font-medium text-foreground">
                  {(mentorshipData?.areasOfExpertise?.length + mentorshipData?.areasOfInterest?.length)} area{(mentorshipData?.areasOfExpertise?.length + mentorshipData?.areasOfInterest?.length) !== 1 ? 's' : ''} selected
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Not Interested Message */}
      {mentorshipData?.role === 'none' && (
        <div className="bg-muted/30 rounded-lg p-6 mb-6 text-center">
          <Icon name="Clock" size={48} className="mx-auto text-muted-foreground mb-3" />
          <h4 className="font-medium text-foreground mb-2">No Problem!</h4>
          <p className="text-muted-foreground">
            You can always update your mentorship preferences later from your profile settings. 
            The AlumniConnect community will be here when you're ready.
          </p>
        </div>
      )}
      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrevious} iconName="ArrowLeft" iconPosition="left">
          Previous
        </Button>
        <Button onClick={handleNext} iconName="ArrowRight" iconPosition="right">
          Continue to Privacy
        </Button>
      </div>
    </div>
  );
};

export default MentorshipStep;