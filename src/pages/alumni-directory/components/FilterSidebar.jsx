import React, { useState } from 'react';

import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ filters, onFiltersChange, onClearFilters, isOpen, onToggle }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const industryOptions = [
    { value: 'technology', label: 'Technology' },
    { value: 'finance', label: 'Finance' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales' },
    { value: 'operations', label: 'Operations' }
  ];

  const locationOptions = [
    { value: 'san-francisco', label: 'San Francisco, CA' },
    { value: 'new-york', label: 'New York, NY' },
    { value: 'los-angeles', label: 'Los Angeles, CA' },
    { value: 'chicago', label: 'Chicago, IL' },
    { value: 'boston', label: 'Boston, MA' },
    { value: 'seattle', label: 'Seattle, WA' },
    { value: 'austin', label: 'Austin, TX' },
    { value: 'denver', label: 'Denver, CO' },
    { value: 'atlanta', label: 'Atlanta, GA' },
    { value: 'remote', label: 'Remote' }
  ];

  const graduationYearOptions = [
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
    { value: '2017', label: '2017' },
    { value: '2016', label: '2016' },
    { value: '2015-earlier', label: '2015 & Earlier' }
  ];

  const skillsOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'react', label: 'React' },
    { value: 'node-js', label: 'Node.js' },
    { value: 'data-analysis', label: 'Data Analysis' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'project-management', label: 'Project Management' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'business-strategy', label: 'Business Strategy' }
  ];

  const handleFilterChange = (key, value) => {
    const updatedFilters = { ...localFilters, [key]: value };
    setLocalFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const handleClearAll = () => {
    const clearedFilters = {
      industry: [],
      location: [],
      graduationYear: [],
      skills: [],
      availableForMentorship: false,
      openToOpportunities: false
    };
    setLocalFilters(clearedFilters);
    onClearFilters();
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (localFilters?.industry?.length > 0) count += localFilters?.industry?.length;
    if (localFilters?.location?.length > 0) count += localFilters?.location?.length;
    if (localFilters?.graduationYear?.length > 0) count += localFilters?.graduationYear?.length;
    if (localFilters?.skills?.length > 0) count += localFilters?.skills?.length;
    if (localFilters?.availableForMentorship) count += 1;
    if (localFilters?.openToOpportunities) count += 1;
    return count;
  };

  const activeCount = getActiveFilterCount();

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={onToggle}
          iconName="Filter"
          iconPosition="left"
          className="w-full"
        >
          Filters {activeCount > 0 && `(${activeCount})`}
        </Button>
      </div>
      {/* Filter Sidebar */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block bg-card border border-border rounded-lg p-6 space-y-6`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
          {activeCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Industry Filter */}
        <div className="space-y-3">
          <Select
            label="Industry"
            placeholder="Select industries"
            options={industryOptions}
            value={localFilters?.industry || []}
            onChange={(value) => handleFilterChange('industry', value)}
            multiple
            searchable
            clearable
          />
        </div>

        {/* Location Filter */}
        <div className="space-y-3">
          <Select
            label="Location"
            placeholder="Select locations"
            options={locationOptions}
            value={localFilters?.location || []}
            onChange={(value) => handleFilterChange('location', value)}
            multiple
            searchable
            clearable
          />
        </div>

        {/* Graduation Year Filter */}
        <div className="space-y-3">
          <Select
            label="Graduation Year"
            placeholder="Select years"
            options={graduationYearOptions}
            value={localFilters?.graduationYear || []}
            onChange={(value) => handleFilterChange('graduationYear', value)}
            multiple
            clearable
          />
        </div>

        {/* Skills Filter */}
        <div className="space-y-3">
          <Select
            label="Skills"
            placeholder="Select skills"
            options={skillsOptions}
            value={localFilters?.skills || []}
            onChange={(value) => handleFilterChange('skills', value)}
            multiple
            searchable
            clearable
          />
        </div>

        {/* Availability Filters */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground">Availability</h4>
          <div className="space-y-3">
            <Checkbox
              label="Available for Mentorship"
              checked={localFilters?.availableForMentorship || false}
              onChange={(e) => handleFilterChange('availableForMentorship', e?.target?.checked)}
            />
            <Checkbox
              label="Open to Opportunities"
              checked={localFilters?.openToOpportunities || false}
              onChange={(e) => handleFilterChange('openToOpportunities', e?.target?.checked)}
            />
          </div>
        </div>

        {/* Mobile Close Button */}
        <div className="lg:hidden pt-4 border-t border-border">
          <Button
            variant="outline"
            onClick={onToggle}
            iconName="X"
            iconPosition="left"
            fullWidth
          >
            Close Filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;