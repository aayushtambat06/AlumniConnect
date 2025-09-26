import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import MentorCard from './components/MentorCard';
import FilterPanel from './components/FilterPanel';
import MentorshipStats from './components/MentorshipStats';
import FeaturedMentors from './components/FeaturedMentors';
import MentorshipPrograms from './components/MentorshipPrograms';
import SuccessStories from './components/SuccessStories';
import MentorProfileModal from './components/MentorProfileModal';

const MentorshipCenter = () => {
  const [filters, setFilters] = useState({
    search: '',
    expertise: '',
    industry: '',
    experience: '',
    availability: '',
    location: '',
    minRating: null,
    videoCallsAvailable: false,
    acceptingMentees: false,
    sameUniversity: false
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');

  // Mock data for mentorship stats
  const mentorshipStats = {
    activeMentors: "2,847",
    successfulMatches: "15,632",
    avgResponseTime: "< 2 hours",
    averageRating: "4.8/5"
  };

  // Mock data for featured mentors
  const featuredMentors = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior Software Engineer",
      company: "Google",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
      rating: 4.9,
      reviewCount: 127,
      expertise: ["Software Engineering", "Machine Learning", "Career Growth"],
      location: "San Francisco, CA",
      menteeCount: 23,
      isOnline: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Product Manager",
      company: "Microsoft",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      rating: 4.8,
      reviewCount: 89,
      expertise: ["Product Management", "Strategy", "Leadership"],
      location: "Seattle, WA",
      menteeCount: 18,
      isOnline: false
    },
    {
      id: 3,
      name: "Emily Johnson",
      title: "Data Science Director",
      company: "Netflix",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      rating: 5.0,
      reviewCount: 156,
      expertise: ["Data Science", "Analytics", "Team Management"],
      location: "Los Angeles, CA",
      menteeCount: 31,
      isOnline: true
    }
  ];

  // Mock data for all mentors
  const allMentors = [
    {
      id: 4,
      name: "David Kim",
      title: "Senior UX Designer",
      company: "Apple",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      rating: 4.7,
      reviewCount: 73,
      expertise: ["UX Design", "Product Design", "Design Systems"],
      location: "Cupertino, CA",
      experience: 8,
      menteeCount: 15,
      availability: "Available",
      bio: "Passionate about creating user-centered designs that solve real problems. I love mentoring designers who want to grow their skills and advance their careers.",
      isOnline: true,
      fullBio: `I'm a Senior UX Designer at Apple with over 8 years of experience in creating intuitive and impactful user experiences. My journey started as a graphic designer, and I've worked my way up through various roles in startups and big tech companies.\n\nI specialize in user research, interaction design, and design systems. I'm passionate about mentoring the next generation of designers and helping them navigate the challenges of building a successful design career.\n\nIn my mentoring approach, I focus on practical skills, portfolio development, and career strategy. I believe in hands-on learning and provide real-world projects and feedback to help mentees grow.`,
      mentoringStyle: "I believe in a collaborative and hands-on approach to mentoring. I provide practical guidance, real-world examples, and actionable feedback to help mentees achieve their goals.",
      timezone: "PST (UTC-8)",
      recentReviews: [
        {
          name: "Alex Thompson",
          avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
          rating: 5,
          date: "2 weeks ago",
          comment: "David\'s guidance helped me land my dream job at a top tech company. His portfolio review was incredibly detailed and actionable."
        },
        {
          name: "Maria Garcia",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
          rating: 5,
          date: "1 month ago",
          comment: "Excellent mentor! David's insights into design systems and user research methodologies were invaluable for my career growth."
        }
      ]
    },
    {
      id: 5,
      name: "Jennifer Walsh",title: "Marketing Director",company: "Spotify",avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
      rating: 4.6,
      reviewCount: 92,
      expertise: ["Digital Marketing", "Brand Strategy", "Growth Marketing"],
      location: "New York, NY",experience: 12,menteeCount: 27,availability: "Within a week",bio: "Experienced marketing leader with a track record of driving growth for consumer brands. I enjoy helping marketers develop strategic thinking and execution skills.",
      isOnline: false,
      fullBio: `I'm a Marketing Director at Spotify with over 12 years of experience in digital marketing, brand strategy, and growth marketing. I've helped launch successful campaigns for major consumer brands and have a deep understanding of what it takes to build and scale marketing teams.\n\nMy expertise spans across performance marketing, content strategy, brand positioning, and marketing analytics. I'm passionate about mentoring marketers at all levels, from recent graduates to mid-career professionals looking to make the jump to senior roles.\n\nI focus on strategic thinking, data-driven decision making, and building strong marketing fundamentals. My mentees often go on to secure leadership roles at top companies.`,
      mentoringStyle: "I take a strategic approach to mentoring, focusing on developing critical thinking skills and providing frameworks that can be applied across different marketing challenges.",timezone: "EST (UTC-5)",
      recentReviews: [
        {
          name: "James Wilson",avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",rating: 5,date: "3 weeks ago",comment: "Jennifer's strategic insights transformed how I approach marketing campaigns. Her mentorship was instrumental in my promotion to Senior Marketing Manager."
        }
      ]
    },
    {
      id: 6,
      name: "Robert Taylor",
      title: "Finance VP",
      company: "Goldman Sachs",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      rating: 4.9,
      reviewCount: 134,
      expertise: ["Investment Banking", "Financial Analysis", "Career Strategy"],
      location: "New York, NY",
      experience: 15,
      menteeCount: 42,
      availability: "Flexible",
      bio: "Senior finance executive with extensive experience in investment banking and corporate finance. I help finance professionals navigate complex career decisions.",
      isOnline: true,
      fullBio: `I'm a Vice President at Goldman Sachs with over 15 years of experience in investment banking, corporate finance, and financial analysis. I've worked on numerous high-profile deals and have extensive experience in mentoring junior analysts and associates.\n\nMy expertise includes financial modeling, valuation, deal structuring, and client relationship management. I'm passionate about helping finance professionals develop the technical and soft skills needed to succeed in competitive financial markets.\n\nI believe in providing honest feedback, sharing real-world experiences, and helping mentees build the confidence and skills needed to advance their careers in finance.`,
      mentoringStyle: "I provide direct, honest feedback and focus on building both technical competencies and professional presence. I share real deal experiences and industry insights.",
      timezone: "EST (UTC-5)",
      recentReviews: [
        {
          name: "Sarah Kim",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
          rating: 5,
          date: "1 week ago",
          comment: "Robert\'s mentorship was crucial in helping me transition from corporate finance to investment banking. His industry insights are unmatched."
        }
      ]
    }
  ];

  // Mock data for mentorship programs
  const mentorshipPrograms = [
    {
      id: 1,
      title: "Tech Leadership Accelerator",
      description: "A comprehensive program designed for mid-level engineers transitioning to leadership roles.",
      icon: "Code",
      duration: "12 weeks",
      participants: 45,
      startDate: "Jan 15, 2025",
      mentorCount: 12,
      status: "active",
      skills: ["Leadership", "Technical Strategy", "Team Management"],
      mentorAvatars: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
      ]
    },
    {
      id: 2,
      title: "Product Management Bootcamp",
      description: "Intensive program covering product strategy, user research, and go-to-market planning.",
      icon: "Target",
      duration: "8 weeks",
      participants: 32,
      startDate: "Feb 1, 2025",
      mentorCount: 8,
      status: "upcoming",
      skills: ["Product Strategy", "User Research", "Analytics"],
      mentorAvatars: [
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
      ]
    }
  ];

  // Mock data for success stories
  const successStories = [
    {
      id: 1,
      menteeName: "Alex Thompson",
      menteeTitle: "Software Engineer at Meta",
      menteeAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
      mentorName: "Sarah Chen",
      duration: "6 months",
      testimonial: "Sarah\'s mentorship was transformative. She helped me develop technical leadership skills and navigate the complexities of working at a large tech company. Her guidance was instrumental in my recent promotion to Senior Engineer.",
      achievements: ["Promotion to Senior", "Led 3 major projects"],
      rating: 5,
      sessionCount: 24,
      goalsAchieved: 8
    },
    {
      id: 2,
      menteeName: "Maria Garcia",
      menteeTitle: "Product Manager at Airbnb",
      menteeAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
      mentorName: "Michael Rodriguez",
      duration: "4 months",
      testimonial: "Michael\'s strategic insights and practical advice helped me transition from engineering to product management. His mentorship gave me the confidence to take on challenging projects and build strong stakeholder relationships.",
      achievements: ["Career Transition", "Launched 2 features"],
      rating: 5,
      sessionCount: 16,
      goalsAchieved: 6
    }
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      expertise: '',
      industry: '',
      experience: '',
      availability: '',
      location: '',
      minRating: null,
      videoCallsAvailable: false,
      acceptingMentees: false,
      sameUniversity: false
    });
  };

  const handleViewProfile = (mentor) => {
    setSelectedMentor(mentor);
    setIsProfileModalOpen(true);
  };

  const handleConnect = (mentor) => {
    // Mock connection logic
    console.log('Connecting to mentor:', mentor?.name);
    // In a real app, this would open a messaging interface or send a connection request
  };

  const handleScheduleCall = (mentor) => {
    // Mock scheduling logic
    console.log('Scheduling call with mentor:', mentor?.name);
    // In a real app, this would open a calendar scheduling interface
  };

  const handleJoinProgram = (program) => {
    // Mock program joining logic
    console.log('Joining program:', program?.title);
    // In a real app, this would handle program enrollment
  };

  const handleReadMore = (story) => {
    // Mock story reading logic
    console.log('Reading story:', story?.menteeName);
    // In a real app, this would open a detailed story view
  };

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'experience', label: 'Most Experienced' },
    { value: 'availability', label: 'Available Now' }
  ];

  // Filter mentors based on current filters
  const filteredMentors = allMentors?.filter(mentor => {
    if (filters?.search && !mentor?.name?.toLowerCase()?.includes(filters?.search?.toLowerCase()) &&
        !mentor?.title?.toLowerCase()?.includes(filters?.search?.toLowerCase()) &&
        !mentor?.company?.toLowerCase()?.includes(filters?.search?.toLowerCase())) {
      return false;
    }
    if (filters?.expertise && !mentor?.expertise?.some(skill => 
        skill?.toLowerCase()?.includes(filters?.expertise?.toLowerCase()))) {
      return false;
    }
    if (filters?.location && !mentor?.location?.toLowerCase()?.includes(filters?.location?.toLowerCase())) {
      return false;
    }
    if (filters?.minRating && mentor?.rating < filters?.minRating) {
      return false;
    }
    if (filters?.acceptingMentees && mentor?.menteeCount >= 50) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-accent">
                Mentorship Center
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Connect with experienced alumni mentors who can guide your career journey. 
                Find the perfect mentor match based on your goals, industry, and interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" iconName="Search" iconPosition="left">
                  Find a Mentor
                </Button>
                <Button variant="outline" size="lg" iconName="UserPlus" iconPosition="left">
                  Become a Mentor
                </Button>
              </div>
            </div>
            
            <MentorshipStats stats={mentorshipStats} />
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Mentors */}
          <FeaturedMentors 
            mentors={featuredMentors}
            onViewProfile={handleViewProfile}
            onConnect={handleConnect}
          />

          {/* Mentorship Programs */}
          <MentorshipPrograms 
            programs={mentorshipPrograms}
            onJoinProgram={handleJoinProgram}
          />

          {/* Success Stories */}
          <SuccessStories 
            stories={successStories}
            onReadMore={handleReadMore}
          />

          {/* Browse All Mentors Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Browse All Mentors</h2>
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e?.target?.value)}
                  className="px-3 py-2 border border-border rounded-lg text-sm bg-background"
                >
                  {sortOptions?.map(option => (
                    <option key={option?.value} value={option?.value}>
                      {option?.label}
                    </option>
                  ))}
                </select>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  iconName="Filter"
                  iconPosition="left"
                  className="lg:hidden"
                >
                  Filters
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filter Panel */}
              <div className="lg:col-span-1">
                <FilterPanel
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                  isOpen={isFilterOpen}
                  onToggle={() => setIsFilterOpen(!isFilterOpen)}
                />
              </div>

              {/* Mentors Grid */}
              <div className="lg:col-span-3">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredMentors?.length} mentors
                  </p>
                </div>
                
                <div className="space-y-6">
                  {filteredMentors?.length > 0 ? (
                    filteredMentors?.map((mentor) => (
                      <MentorCard
                        key={mentor?.id}
                        mentor={mentor}
                        onViewProfile={handleViewProfile}
                        onConnect={handleConnect}
                      />
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Icon name="Users" size={48} className="text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">No mentors found</h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your filters to see more results.
                      </p>
                      <Button variant="outline" onClick={handleClearFilters}>
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Mentor Profile Modal */}
      <MentorProfileModal
        mentor={selectedMentor}
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onConnect={handleConnect}
        onScheduleCall={handleScheduleCall}
      />
    </div>
  );
};

export default MentorshipCenter;