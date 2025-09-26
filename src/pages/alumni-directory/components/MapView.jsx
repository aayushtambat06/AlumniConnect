import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const MapView = ({ alumni, onAlumniSelect, selectedAlumni }) => {
  const [mapCenter] = useState({ lat: 37.7749, lng: -122.4194 }); // San Francisco default

  // Group alumni by location for clustering
  const groupAlumniByLocation = (alumniList) => {
    const locationGroups = {};
    
    alumniList?.forEach(person => {
      const key = `${person?.coordinates?.lat}-${person?.coordinates?.lng}`;
      if (!locationGroups?.[key]) {
        locationGroups[key] = {
          location: person?.location,
          coordinates: person?.coordinates,
          alumni: []
        };
      }
      locationGroups?.[key]?.alumni?.push(person);
    });
    
    return Object.values(locationGroups);
  };

  const locationGroups = groupAlumniByLocation(alumni);

  const handleMarkerClick = (group) => {
    if (group?.alumni?.length === 1) {
      onAlumniSelect(group?.alumni?.[0]);
    } else {
      // For multiple alumni at same location, select the first one
      onAlumniSelect(group?.alumni?.[0]);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="relative h-96 lg:h-[600px]">
        {/* Google Maps Iframe */}
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Alumni Locations Map"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${mapCenter?.lat},${mapCenter?.lng}&z=10&output=embed`}
          className="w-full h-full"
        />
        
        {/* Custom Markers Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {locationGroups?.map((group, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                left: `${50 + (group?.coordinates?.lng - mapCenter?.lng) * 100}%`,
                top: `${50 - (group?.coordinates?.lat - mapCenter?.lat) * 100}%`
              }}
            >
              <button
                onClick={() => handleMarkerClick(group)}
                className="relative bg-primary text-primary-foreground rounded-full p-2 shadow-academic hover:shadow-academic-hover transition-academic hover:scale-110"
              >
                <Icon name="MapPin" size={16} />
                {group?.alumni?.length > 1 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {group?.alumni?.length}
                  </span>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <Button
            variant="secondary"
            size="sm"
            iconName="ZoomIn"
            className="shadow-academic"
          />
          <Button
            variant="secondary"
            size="sm"
            iconName="ZoomOut"
            className="shadow-academic"
          />
          <Button
            variant="secondary"
            size="sm"
            iconName="Locate"
            className="shadow-academic"
          />
        </div>
      </div>
      {/* Selected Alumni Info Panel */}
      {selectedAlumni && (
        <div className="p-4 border-t border-border bg-muted">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="User" size={20} color="var(--color-muted-foreground)" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground">{selectedAlumni?.name}</h4>
              <p className="text-sm text-muted-foreground">{selectedAlumni?.currentRole}</p>
              <p className="text-sm text-muted-foreground">{selectedAlumni?.company}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                iconName="Eye"
                iconPosition="left"
              >
                View Profile
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="UserPlus"
                iconPosition="left"
              >
                Connect
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Location Legend */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">Alumni Location</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-muted-foreground">Multiple Alumni</span>
            </div>
          </div>
          <span className="text-muted-foreground">
            {alumni?.length} alumni across {locationGroups?.length} locations
          </span>
        </div>
      </div>
    </div>
  );
};

export default MapView;