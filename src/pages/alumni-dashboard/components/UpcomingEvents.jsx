import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UpcomingEvents = () => {
  const [rsvpStatus, setRsvpStatus] = useState({});

  const events = [
    {
      id: 1,
      title: "Tech Alumni Networking Night",
      date: "2025-10-15",
      time: "6:00 PM - 9:00 PM",
      location: "San Francisco, CA",
      type: "In-Person",
      attendees: 45,
      maxAttendees: 100,
      description: "Join fellow tech alumni for an evening of networking and career discussions.",
      organizer: "Alumni Tech Group"
    },
    {
      id: 2,
      title: "Virtual Career Workshop: AI & Machine Learning",
      date: "2025-10-22",
      time: "2:00 PM - 4:00 PM",
      location: "Online",
      type: "Virtual",
      attendees: 128,
      maxAttendees: 200,
      description: "Learn about the latest trends in AI and ML from industry experts.",
      organizer: "Career Development Committee"
    },
    {
      id: 3,
      title: "Annual Alumni Reunion",
      date: "2025-11-05",
      time: "10:00 AM - 6:00 PM",
      location: "University Campus",
      type: "In-Person",
      attendees: 234,
      maxAttendees: 500,
      description: "Celebrate our shared memories and create new connections at our annual reunion.",
      organizer: "Alumni Relations Office"
    }
  ];

  const handleRSVP = (eventId, status) => {
    setRsvpStatus(prev => ({
      ...prev,
      [eventId]: status
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Upcoming Events</h3>
        <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1 transition-academic">
          <span>View All</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
      <div className="space-y-4">
        {events?.map((event) => (
          <div key={event?.id} className="border border-border rounded-lg p-4 hover:shadow-academic transition-academic">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-foreground text-sm">{event?.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event?.type === 'Virtual' ?'bg-blue-100 text-blue-600' :'bg-green-100 text-green-600'
                  }`}>
                    {event?.type}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} />
                    <span>{formatDate(event?.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{event?.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={12} />
                    <span>{event?.location}</span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {event?.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {event?.attendees}/{event?.maxAttendees} attending
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {rsvpStatus?.[event?.id] ? (
                      <div className="flex items-center space-x-1">
                        <Icon name="Check" size={14} className="text-success" />
                        <span className="text-xs text-success font-medium">
                          {rsvpStatus?.[event?.id] === 'going' ? 'Going' : 'Interested'}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1">
                        <Button
                          variant="outline"
                          size="xs"
                          onClick={() => handleRSVP(event?.id, 'going')}
                        >
                          Going
                        </Button>
                        <Button
                          variant="ghost"
                          size="xs"
                          onClick={() => handleRSVP(event?.id, 'interested')}
                        >
                          Interested
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full bg-muted rounded-full h-1">
              <div 
                className="bg-primary h-1 rounded-full transition-all duration-500"
                style={{ width: `${(event?.attendees / event?.maxAttendees) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;