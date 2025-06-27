'use client';

import React from 'react';
import { CreatedFiltersState } from './CreatedFilters.types';
import FilterDropdown from './FilterDropdown';
import PriceDropdown from './PriceDropDown';

interface CreatedFiltersProps {
  filters: CreatedFiltersState;
  onFiltersChange: (newFilters: CreatedFiltersState) => void;
  totalCount: number;
  isOwner: boolean;
}

const CreatedFilters: React.FC<CreatedFiltersProps> = ({
  filters,
  onFiltersChange,
  isOwner,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, searchTerm: e.target.value });
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div className="w-full md:w-[60%]">
          <input
            type="text"
            placeholder="Search by NFTs"
            className="w-full bg-[#1C1D1F] border border-[#2D2E32] rounded-lg px-4 py-3 text-white placeholder-[#8E9BAE] focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={filters.searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="flex gap-3 items-center justify-end w-full md:w-[40%]">
          <PriceDropdown
            value={filters.sortBy}
            onChange={(sortBy) => {
              if (["newest", "oldest", "price_low", "price_high", "most_viewed"].includes(sortBy)) {
                onFiltersChange({
                  ...filters,
                  sortBy: sortBy as "newest" | "oldest" | "price_low" | "price_high" | "most_viewed",
                });
              }
            }}
          />
          <FilterDropdown
            filters={filters}
            onChange={onFiltersChange}
            isOwner={isOwner}
          />
        </div>
      </div>
      
    </div>
  );
};

export default CreatedFilters;