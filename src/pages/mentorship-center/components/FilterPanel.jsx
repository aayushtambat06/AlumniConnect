import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterPanel = ({ filters, onFilterChange, onClearFilters, isOpen, onToggle }) => {
  const expertiseOptions = [
    { value: 'software-engineering', label: 'Software Engineering' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'product-management', label: 'Product Management' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'finance', label: 'Finance' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'entrepreneurship', label: 'Entrepreneurship' },
    { value: 'design', label: 'Design' }
  ];

  const industryOptions = [
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'education', label: 'Education' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'retail', label: 'Retail' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'media', label: 'Media & Entertainment' }
  ];

  const experienceOptions = [
    { value: '5-10', label: '5-10 years' },
    { value: '10-15', label: '10-15 years' },
    { value: '15-20', label: '15-20 years' },
    { value: '20+', label: '20+ years' }
  ];

  const availabilityOptions = [
    { value: 'immediate', label: 'Available Now' },
    { value: 'within-week', label: 'Within a Week' },
    { value: 'within-month', label: 'Within a Month' },
    { value: 'flexible', label: 'Flexible' }
  ];

  return (
    <div className={`bg-card border border-border rounded-lg transition-academic ${isOpen ? 'block' : 'hidden lg:block'}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              iconName="X"
              iconPosition="left"
            >
              Clear All
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              iconName={isOpen ? "ChevronUp" : "ChevronDown"}
              className="lg:hidden"
            />
          </div>
        </div>

        <div className="space-y-6">
          {/* Search */}
          <div>
            <Input
              type="search"
              placeholder="Search mentors..."
              value={filters?.search}
              onChange={(e) => onFilterChange('search', e?.target?.value)}
              className="w-full"
            />
          </div>

          {/* Expertise */}
          <div>
            <Select
              label="Expertise Area"
              options={expertiseOptions}
              value={filters?.expertise}
              onChange={(value) => onFilterChange('expertise', value)}
              searchable
              clearable
              placeholder="Select expertise..."
            />
          </div>

          {/* Industry */}
          <div>
            <Select
              label="Industry"
              options={industryOptions}
              value={filters?.industry}
              onChange={(value) => onFilterChange('industry', value)}
              searchable
              clearable
              placeholder="Select industry..."
            />
          </div>

          {/* Experience Level */}
          <div>
            <Select
              label="Experience Level"
              options={experienceOptions}
              value={filters?.experience}
              onChange={(value) => onFilterChange('experience', value)}
              placeholder="Select experience..."
            />
          </div>

          {/* Availability */}
          <div>
            <Select
              label="Availability"
              options={availabilityOptions}
              value={filters?.availability}
              onChange={(value) => onFilterChange('availability', value)}
              placeholder="Select availability..."
            />
          </div>

          {/* Location */}
          <div>
            <Input
              label="Location"
              type="text"
              placeholder="Enter city or country..."
              value={filters?.location}
              onChange={(e) => onFilterChange('location', e?.target?.value)}
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Minimum Rating
            </label>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1]?.map((rating) => (
                <Checkbox
                  key={rating}
                  label={
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)]?.map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={`${
                              i < rating ? 'text-warning fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm">& up</span>
                    </div>
                  }
                  checked={filters?.minRating === rating}
                  onChange={(e) => onFilterChange('minRating', e?.target?.checked ? rating : null)}
                />
              ))}
            </div>
          </div>

          {/* Additional Options */}
          <div className="border-t border-border pt-4">
            <label className="block text-sm font-medium text-foreground mb-3">
              Additional Options
            </label>
            <div className="space-y-2">
              <Checkbox
                label="Available for video calls"
                checked={filters?.videoCallsAvailable}
                onChange={(e) => onFilterChange('videoCallsAvailable', e?.target?.checked)}
              />
              <Checkbox
                label="Currently accepting mentees"
                checked={filters?.acceptingMentees}
                onChange={(e) => onFilterChange('acceptingMentees', e?.target?.checked)}
              />
              <Checkbox
                label="Same university alumni"
                checked={filters?.sameUniversity}
                onChange={(e) => onFilterChange('sameUniversity', e?.target?.checked)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;