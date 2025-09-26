import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ searchQuery, onSearchChange, onSearch, suggestions = [], recentSearches = [] }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e?.target?.value;
    onSearchChange(value);
    setShowSuggestions(value?.length > 0);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    const totalItems = suggestions?.length + (recentSearches?.length > 0 ? recentSearches?.length + 1 : 0);

    switch (e?.key) {
      case 'ArrowDown':
        e?.preventDefault();
        setSelectedIndex(prev => (prev < totalItems - 1 ? prev + 1 : -1));
        break;
      case 'ArrowUp':
        e?.preventDefault();
        setSelectedIndex(prev => (prev > -1 ? prev - 1 : totalItems - 1));
        break;
      case 'Enter':
        e?.preventDefault();
        if (selectedIndex >= 0) {
          const allItems = [...suggestions, ...(recentSearches?.length > 0 ? ['divider', ...recentSearches] : [])];
          const selectedItem = allItems?.[selectedIndex];
          if (selectedItem !== 'divider') {
            onSearchChange(selectedItem);
            onSearch(selectedItem);
          }
        } else {
          onSearch(searchQuery);
        }
        setShowSuggestions(false);
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef?.current && !searchRef?.current?.contains(event?.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const allSuggestions = [...suggestions];
  const hasRecentSearches = recentSearches?.length > 0;

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search alumni by name, company, skills, or location..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="pl-12 pr-4 py-3 text-lg"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Icon name="Search" size={20} color="var(--color-muted-foreground)" />
        </div>
        {searchQuery && (
          <button
            onClick={() => {
              onSearchChange('');
              setShowSuggestions(false);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-muted rounded-full p-1 transition-academic"
          >
            <Icon name="X" size={16} color="var(--color-muted-foreground)" />
          </button>
        )}
      </div>
      {showSuggestions && (allSuggestions?.length > 0 || hasRecentSearches) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-academic-hover z-50 max-h-80 overflow-y-auto">
          <div className="py-2">
            {allSuggestions?.map((suggestion, index) => (
              <button
                key={`suggestion-${index}`}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`w-full text-left px-4 py-2 hover:bg-muted transition-academic flex items-center space-x-3 ${
                  selectedIndex === index ? 'bg-muted' : ''
                }`}
              >
                <Icon name="Search" size={16} color="var(--color-muted-foreground)" />
                <span className="text-sm text-foreground">{suggestion}</span>
              </button>
            ))}

            {hasRecentSearches && (
              <>
                <div className="border-t border-border my-2"></div>
                <div className="px-4 py-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Recent Searches</span>
                </div>
                {recentSearches?.map((search, index) => (
                  <button
                    key={`recent-${index}`}
                    onClick={() => handleSuggestionClick(search)}
                    className={`w-full text-left px-4 py-2 hover:bg-muted transition-academic flex items-center space-x-3 ${
                      selectedIndex === allSuggestions?.length + 1 + index ? 'bg-muted' : ''
                    }`}
                  >
                    <Icon name="Clock" size={16} color="var(--color-muted-foreground)" />
                    <span className="text-sm text-foreground">{search}</span>
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;