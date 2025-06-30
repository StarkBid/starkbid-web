import React from 'react';
import SearchInput from './SearchInput';
import SortDropdown from './SortDropdown';
import FiltersButton from './FiltersButton';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="mb-6">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-4 w-[44rem]">
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className="flex items-center space-x-4">
          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          <FiltersButton />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-4">
        {/* Search Input - Full width on mobile */}
        <div className="w-full">
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        
        {/* Filters and Sort - Stacked on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 sm:space-x-4">
          <FiltersButton />
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm whitespace-nowrap">Sort by:</span>
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;