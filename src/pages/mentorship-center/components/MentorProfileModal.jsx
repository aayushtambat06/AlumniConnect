import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MentorProfileModal = ({ mentor, isOpen, onClose, onConnect, onScheduleCall }) => {
  if (!isOpen || !mentor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-background border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Mentor Profile</h2>
          <Button variant="ghost" size="sm" onClick={onClose} iconName="X" />
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Info */}
            <div className="lg:col-span-1">
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <Image
                    src={mentor?.avatar}
                    alt={mentor?.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-4 border-white ${
                    mentor?.isOnline ? 'bg-success' : 'bg-gray-300'
                  }`} />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">{mentor?.name}</h3>
                <p className="text-lg text-muted-foreground mb-1">{mentor?.title}</p>
                <p className="text-muted-foreground mb-4">{mentor?.company}</p>
                
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={`${
                          i < Math.floor(mentor?.rating) ? 'text-warning fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{mentor?.rating}</span>
                  <span className="text-sm text-muted-foreground">({mentor?.reviewCount} reviews)</span>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="MapPin" size={16} />
                    <span>{mentor?.location}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>{mentor?.experience} years experience</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Users" size={16} />
                    <span>{mentor?.menteeCount} current mentees</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button
                    variant="default"
                    fullWidth
                    iconName="MessageSquare"
                    iconPosition="left"
                    onClick={() => onConnect(mentor)}
                  >
                    Send Message
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Video"
                    iconPosition="left"
                    onClick={() => onScheduleCall(mentor)}
                  >
                    Schedule Call
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Right Column - Detailed Info */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* About */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">About</h4>
                  <p className="text-muted-foreground leading-relaxed">{mentor?.fullBio}</p>
                </div>
                
                {/* Expertise */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor?.expertise?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-accent/10 text-accent-foreground text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Mentoring Style */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Mentoring Style</h4>
                  <p className="text-muted-foreground">{mentor?.mentoringStyle}</p>
                </div>
                
                {/* Availability */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Availability</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{mentor?.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{mentor?.timezone}</span>
                    </div>
                  </div>
                </div>
                
                {/* Recent Reviews */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Recent Reviews</h4>
                  <div className="space-y-4">
                    {mentor?.recentReviews?.map((review, index) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <Image
                            src={review?.avatar}
                            alt={review?.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-medium text-foreground">{review?.name}</span>
                              <div className="flex items-center">
                                {[...Array(5)]?.map((_, i) => (
                                  <Icon
                                    key={i}
                                    name="Star"
                                    size={12}
                                    className={`${
                                      i < review?.rating ? 'text-warning fill-current' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review?.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{review?.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfileModal;