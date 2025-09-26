import React from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';


const SortOptions = ({ sortBy, onSortChange, viewMode, onViewModeChange, totalResults }) => {
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'recent-activity', label: 'Recent Activity' },
    { value: 'mutual-connections', label: 'Mutual Connections' },
    { value: 'graduation-year-desc', label: 'Graduation Year (Newest)' },
    { value: 'graduation-year-asc', label: 'Graduation Year (Oldest)' },
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'location', label: 'Location' }
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        {totalResults > 0 ? (
          <span>Showing {totalResults?.toLocaleString()} alumni</span>
        ) : (
          <span>No alumni found</span>
        )}
      </div>
      {/* Sort and View Controls */}
      <div className="flex items-center space-x-4">
        {/* Sort Dropdown */}
        <div className="min-w-48">
          <Select
            placeholder="Sort by"
            options={sortOptions}
            value={sortBy}
            onChange={onSortChange}
            className="text-sm"
          />
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-muted rounded-lg p-1">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('grid')}
            iconName="Grid3X3"
            className="px-3"
          />
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('list')}
            iconName="List"
            className="px-3"
          />
          <Button
            variant={viewMode === 'map' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('map')}
            iconName="Map"
            className="px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default SortOptions;