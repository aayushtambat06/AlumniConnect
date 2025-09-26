import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const SavedSearches = ({ savedSearches, onLoadSearch, onSaveCurrentSearch, onDeleteSearch, currentSearchQuery }) => {
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSaveSearch = () => {
    if (searchName?.trim() && currentSearchQuery?.trim()) {
      onSaveCurrentSearch(searchName?.trim(), currentSearchQuery);
      setSearchName('');
      setShowSaveDialog(false);
    }
  };

  const handleLoadSearch = (search) => {
    onLoadSearch(search?.query, search?.filters);
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (savedSearches?.length === 0 && !currentSearchQuery) {
    return null;
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Bookmark" size={18} color="var(--color-primary)" />
          <h3 className="text-sm font-medium text-foreground">Saved Searches</h3>
          {savedSearches?.length > 0 && (
            <span className="text-xs text-muted-foreground">({savedSearches?.length})</span>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          {currentSearchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSaveDialog(true)}
              iconName="Plus"
              iconPosition="left"
            >
              Save Current
            </Button>
          )}
          
          {savedSearches?.length > 3 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            >
              {isExpanded ? 'Show Less' : 'Show All'}
            </Button>
          )}
        </div>
      </div>
      {/* Saved Searches List */}
      {savedSearches?.length > 0 && (
        <div className="space-y-2">
          {(isExpanded ? savedSearches : savedSearches?.slice(0, 3))?.map((search) => (
            <div
              key={search?.id}
              className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-academic group"
            >
              <div className="flex-1 cursor-pointer" onClick={() => handleLoadSearch(search)}>
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="text-sm font-medium text-foreground">{search?.name}</h4>
                  <span className="text-xs text-muted-foreground">
                    {search?.resultCount} results
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  "{search?.query}" • Saved {formatDate(search?.savedAt)}
                </p>
              </div>
              
              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-academic">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLoadSearch(search)}
                  iconName="Search"
                  className="px-2"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDeleteSearch(search?.id)}
                  iconName="Trash2"
                  className="px-2 text-error hover:text-error"
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Save Search Dialog */}
      {showSaveDialog && (
        <div className="mt-4 p-4 bg-muted rounded-lg border border-border">
          <h4 className="text-sm font-medium text-foreground mb-3">Save Current Search</h4>
          <div className="space-y-3">
            <Input
              label="Search Name"
              placeholder="Enter a name for this search"
              value={searchName}
              onChange={(e) => setSearchName(e?.target?.value)}
              className="text-sm"
            />
            <div className="flex items-center space-x-2">
              <Button
                variant="default"
                size="sm"
                onClick={handleSaveSearch}
                disabled={!searchName?.trim()}
                iconName="Save"
                iconPosition="left"
              >
                Save Search
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowSaveDialog(false);
                  setSearchName('');
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedSearches;