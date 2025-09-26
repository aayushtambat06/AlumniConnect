import React, { useState, useEffect, useMemo } from 'react';

import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SearchBar from './components/SearchBar';
import FilterSidebar from './components/FilterSidebar';
import AlumniCard from './components/AlumniCard';
import SortOptions from './components/SortOptions';
import SavedSearches from './components/SavedSearches';
import MapView from './components/MapView';
import ExportModal from './components/ExportModal';

const AlumniDirectory = () => {
  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    industry: [],
    location: [],
    graduationYear: [],
    skills: [],
    availableForMentorship: false,
    openToOpportunities: false
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // UI State
  const [isLoading, setIsLoading] = useState(false);
  const [savedProfiles, setSavedProfiles] = useState(new Set());
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);

  // Mock Data
  const mockAlumni = [
    {
      id: 1,
      name: "Sarah Chen",
      currentRole: "Senior Software Engineer",
      company: "Google",
      location: "San Francisco, CA",
      graduationYear: 2019,
      skills: ["JavaScript", "React", "Node.js", "Python"],
      availableForMentorship: true,
      openToOpportunities: false,
      isOnline: true,
      mutualConnections: 12,
      isConnected: false,
      recentActivity: true,
      coordinates: { lat: 37.7749, lng: -122.4194 }
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      currentRole: "Product Manager",
      company: "Meta",
      location: "New York, NY",
      graduationYear: 2020,
      skills: ["Product Strategy", "Data Analysis", "Agile", "Leadership"],
      availableForMentorship: true,
      openToOpportunities: true,
      isOnline: false,
      mutualConnections: 8,
      isConnected: true,
      recentActivity: false,
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 3,
      name: "Emily Johnson",
      currentRole: "UX Designer",
      company: "Apple",
      location: "Austin, TX",
      graduationYear: 2021,
      skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
      availableForMentorship: false,
      openToOpportunities: false,
      isOnline: true,
      mutualConnections: 5,
      isConnected: false,
      recentActivity: true,
      coordinates: { lat: 30.2672, lng: -97.7431 }
    },
    {
      id: 4,
      name: "David Kim",
      currentRole: "Data Scientist",
      company: "Netflix",
      location: "Los Angeles, CA",
      graduationYear: 2018,
      skills: ["Machine Learning", "Python", "SQL", "Statistics"],
      availableForMentorship: true,
      openToOpportunities: false,
      isOnline: false,
      mutualConnections: 15,
      isConnected: false,
      recentActivity: false,
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    {
      id: 5,
      name: "Jessica Wang",
      currentRole: "Marketing Director",
      company: "Spotify",
      location: "Seattle, WA",
      graduationYear: 2017,
      skills: ["Digital Marketing", "Brand Strategy", "Analytics", "Content"],
      availableForMentorship: true,
      openToOpportunities: true,
      isOnline: true,
      mutualConnections: 22,
      isConnected: true,
      recentActivity: true,
      coordinates: { lat: 47.6062, lng: -122.3321 }
    },
    {
      id: 6,
      name: "Alex Thompson",
      currentRole: "DevOps Engineer",
      company: "Amazon",
      location: "Denver, CO",
      graduationYear: 2022,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      availableForMentorship: false,
      openToOpportunities: false,
      isOnline: false,
      mutualConnections: 3,
      isConnected: false,
      recentActivity: false,
      coordinates: { lat: 39.7392, lng: -104.9903 }
    }
  ];

  const mockSuggestions = [
    "Software Engineer",
    "Product Manager",
    "Data Scientist",
    "UX Designer",
    "Marketing Manager",
    "DevOps Engineer",
    "Business Analyst",
    "Sales Manager"
  ];

  const mockRecentSearches = [
    "Software Engineer Google",
    "Product Manager Meta",
    "UX Designer Apple"
  ];

  const [savedSearches, setSavedSearches] = useState([
    {
      id: 1,
      name: "Tech Leaders in SF",
      query: "Software Engineer San Francisco",
      filters: { industry: ['technology'], location: ['san-francisco'] },
      resultCount: 45,
      savedAt: "2025-01-20T10:30:00Z"
    },
    {
      id: 2,
      name: "Available Mentors",
      query: "",
      filters: { availableForMentorship: true },
      resultCount: 23,
      savedAt: "2025-01-18T15:45:00Z"
    }
  ]);

  // Filter and sort alumni based on current state
  const filteredAndSortedAlumni = useMemo(() => {
    let filtered = mockAlumni;

    // Apply search filter
    if (searchQuery?.trim()) {
      const query = searchQuery?.toLowerCase();
      filtered = filtered?.filter(alumni =>
        alumni?.name?.toLowerCase()?.includes(query) ||
        alumni?.currentRole?.toLowerCase()?.includes(query) ||
        alumni?.company?.toLowerCase()?.includes(query) ||
        alumni?.location?.toLowerCase()?.includes(query) ||
        alumni?.skills?.some(skill => skill?.toLowerCase()?.includes(query))
      );
    }

    // Apply filters
    if (filters?.industry?.length > 0) {
      // Mock industry filtering based on company
      filtered = filtered?.filter(alumni => {
        const companyIndustryMap = {
          'Google': 'technology',
          'Meta': 'technology',
          'Apple': 'technology',
          'Netflix': 'technology',
          'Spotify': 'technology',
          'Amazon': 'technology'
        };
        return filters?.industry?.includes(companyIndustryMap?.[alumni?.company]);
      });
    }

    if (filters?.location?.length > 0) {
      filtered = filtered?.filter(alumni => {
        const locationMap = {
          'San Francisco, CA': 'san-francisco',
          'New York, NY': 'new-york',
          'Los Angeles, CA': 'los-angeles',
          'Austin, TX': 'austin',
          'Seattle, WA': 'seattle',
          'Denver, CO': 'denver'
        };
        return filters?.location?.includes(locationMap?.[alumni?.location]);
      });
    }

    if (filters?.graduationYear?.length > 0) {
      filtered = filtered?.filter(alumni =>
        filters?.graduationYear?.includes(alumni?.graduationYear?.toString())
      );
    }

    if (filters?.skills?.length > 0) {
      filtered = filtered?.filter(alumni =>
        alumni?.skills?.some(skill =>
          filters?.skills?.some(filterSkill =>
            skill?.toLowerCase()?.includes(filterSkill?.replace('-', ' '))
          )
        )
      );
    }

    if (filters?.availableForMentorship) {
      filtered = filtered?.filter(alumni => alumni?.availableForMentorship);
    }

    if (filters?.openToOpportunities) {
      filtered = filtered?.filter(alumni => alumni?.openToOpportunities);
    }

    // Apply sorting
    switch (sortBy) {
      case 'recent-activity':
        filtered?.sort((a, b) => b?.recentActivity - a?.recentActivity);
        break;
      case 'mutual-connections':
        filtered?.sort((a, b) => b?.mutualConnections - a?.mutualConnections);
        break;
      case 'graduation-year-desc':
        filtered?.sort((a, b) => b?.graduationYear - a?.graduationYear);
        break;
      case 'graduation-year-asc':
        filtered?.sort((a, b) => a?.graduationYear - b?.graduationYear);
        break;
      case 'name-asc':
        filtered?.sort((a, b) => a?.name?.localeCompare(b?.name));
        break;
      case 'name-desc':
        filtered?.sort((a, b) => b?.name?.localeCompare(a?.name));
        break;
      case 'location':
        filtered?.sort((a, b) => a?.location?.localeCompare(b?.location));
        break;
      default: // relevance
        filtered?.sort((a, b) => {
          // Sort by connection status, then mutual connections, then recent activity
          if (a?.isConnected !== b?.isConnected) return b?.isConnected - a?.isConnected;
          if (a?.mutualConnections !== b?.mutualConnections) return b?.mutualConnections - a?.mutualConnections;
          return b?.recentActivity - a?.recentActivity;
        });
    }

    return filtered;
  }, [searchQuery, filters, sortBy]);

  const connectedAlumni = mockAlumni?.filter(alumni => alumni?.isConnected);

  // Event Handlers
  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleConnect = async (alumniId) => {
    // Simulate connection request
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Connection request sent to alumni ${alumniId}`);
  };

  const handleViewProfile = (alumniId) => {
    console.log(`Viewing profile for alumni ${alumniId}`);
    // Navigate to profile page
  };

  const handleSaveProfile = (alumniId, save) => {
    setSavedProfiles(prev => {
      const newSet = new Set(prev);
      if (save) {
        newSet?.add(alumniId);
      } else {
        newSet?.delete(alumniId);
      }
      return newSet;
    });
  };

  const handleSaveCurrentSearch = (name, query) => {
    const newSearch = {
      id: Date.now(),
      name,
      query,
      filters: { ...filters },
      resultCount: filteredAndSortedAlumni?.length,
      savedAt: new Date()?.toISOString()
    };
    setSavedSearches(prev => [newSearch, ...prev]);
  };

  const handleLoadSearch = (query, searchFilters) => {
    setSearchQuery(query);
    setFilters(searchFilters);
  };

  const handleDeleteSearch = (searchId) => {
    setSavedSearches(prev => prev?.filter(search => search?.id !== searchId));
  };

  const handleExport = async (exportData) => {
    // Simulate export
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Exporting data:', exportData);
  };

  const renderAlumniGrid = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...Array(6)]?.map((_, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 animate-pulse">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-muted rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded w-full"></div>
                <div className="h-3 bg-muted rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (filteredAndSortedAlumni?.length === 0) {
      return (
        <div className="text-center py-12">
          <Icon name="Users" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No alumni found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search criteria or filters to find more alumni.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery('');
              setFilters({
                industry: [],
                location: [],
                graduationYear: [],
                skills: [],
                availableForMentorship: false,
                openToOpportunities: false
              });
            }}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Clear All Filters
          </Button>
        </div>
      );
    }

    return (
      <div className={`grid gap-6 ${
        viewMode === 'list' ?'grid-cols-1' :'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
      }`}>
        {filteredAndSortedAlumni?.map((alumni) => (
          <AlumniCard
            key={alumni?.id}
            alumni={alumni}
            onConnect={handleConnect}
            onViewProfile={handleViewProfile}
            onSaveProfile={handleSaveProfile}
            isSaved={savedProfiles?.has(alumni?.id)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold font-accent mb-4">Alumni Directory</h1>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Discover and connect with fellow alumni from your network. 
                Find mentors, explore opportunities, and build meaningful professional relationships.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-4xl mx-auto">
                <SearchBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  onSearch={handleSearch}
                  suggestions={mockSuggestions}
                  recentSearches={mockRecentSearches}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFiltersChange={setFilters}
                onClearFilters={() => setFilters({
                  industry: [],
                  location: [],
                  graduationYear: [],
                  skills: [],
                  availableForMentorship: false,
                  openToOpportunities: false
                })}
                isOpen={isFilterOpen}
                onToggle={() => setIsFilterOpen(!isFilterOpen)}
              />
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Saved Searches */}
              <SavedSearches
                savedSearches={savedSearches}
                onLoadSearch={handleLoadSearch}
                onSaveCurrentSearch={handleSaveCurrentSearch}
                onDeleteSearch={handleDeleteSearch}
                currentSearchQuery={searchQuery}
              />

              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <SortOptions
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  viewMode={viewMode}
                  onViewModeChange={setViewMode}
                  totalResults={filteredAndSortedAlumni?.length}
                />
                
                {connectedAlumni?.length > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => setShowExportModal(true)}
                    iconName="Download"
                    iconPosition="left"
                  >
                    Export Contacts
                  </Button>
                )}
              </div>

              {/* Results */}
              {viewMode === 'map' ? (
                <MapView
                  alumni={filteredAndSortedAlumni}
                  onAlumniSelect={setSelectedAlumni}
                  selectedAlumni={selectedAlumni}
                />
              ) : (
                renderAlumniGrid()
              )}

              {/* Load More Button */}
              {filteredAndSortedAlumni?.length > 0 && !isLoading && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="ChevronDown"
                    iconPosition="right"
                  >
                    Load More Alumni
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions Floating Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <div className="flex flex-col space-y-3">
            <Button
              variant="default"
              size="icon"
              className="rounded-full shadow-academic-hover"
              iconName="MessageSquare"
            />
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full shadow-academic-hover"
              iconName="Users"
            />
          </div>
        </div>
      </main>
      {/* Export Modal */}
      <ExportModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        connectedAlumni={connectedAlumni}
        onExport={handleExport}
      />
    </div>
  );
};

export default AlumniDirectory;