import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MentorshipPrograms = ({ programs, onJoinProgram }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Mentorship Programs</h2>
        <Button variant="outline" size="sm" iconName="Plus" iconPosition="left">
          Create Program
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs?.map((program) => (
          <div key={program?.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{program?.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    program?.status === 'active' ?'bg-success/10 text-success' 
                      : program?.status === 'upcoming' ?'bg-warning/10 text-warning' :'bg-muted text-muted-foreground'
                  }`}>
                    {program?.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{program?.description}</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                <Icon name={program?.icon} size={24} className="text-primary" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{program?.duration}</div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{program?.participants}</div>
                <div className="text-sm text-muted-foreground">Participants</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} />
                <span>Starts {program?.startDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={14} />
                <span>{program?.mentorCount} mentors</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {program?.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-accent/10 text-accent-foreground text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {program?.mentorAvatars?.slice(0, 3)?.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`Mentor ${index + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  {program?.mentorAvatars?.length > 3 && (
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-muted flex items-center justify-center text-xs font-medium">
                      +{program?.mentorAvatars?.length - 3}
                    </div>
                  )}
                </div>
              </div>
              
              <Button
                variant={program?.status === 'active' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onJoinProgram(program)}
                disabled={program?.status === 'completed'}
              >
                {program?.status === 'active' ? 'Join Now' : program?.status === 'upcoming' ? 'Register' : 'View Details'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorshipPrograms;