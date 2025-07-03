'use client';

import React from 'react';
import StatusFilter from '../collection-page/FilterBar/FiltersSidebar/StatusFilter';
import PriceFilter from '../collection-page/FilterBar/FiltersSidebar/PriceFilter';
import MarketplaceFilter from '../collection-page/FilterBar/FiltersSidebar/MarketplaceFilter';
import TraitsFilter from '../collection-page/FilterBar/FiltersSidebar/TraitsFilter';
import FilterCategory from '../collection-page/FilterBar/FiltersSidebar/FilterCategory';
import { FilterState, TraitCategory } from '../collection-page/FilterBar/FiltersSidebar';

interface ProfileFiltersProps {
  isOpen: boolean;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  availableTraits: TraitCategory[];
  openSections: {
    status: boolean;
    price: boolean;
    marketplace: boolean;
    traits: boolean;
  };
  onToggleSection: (section: keyof ProfileFiltersProps['openSections']) => void;
  onClearFilters: () => void;
  onClose: () => void;
}

const ProfileFilters: React.FC<ProfileFiltersProps> = ({
  isOpen,
  filters,
  onFiltersChange,
  availableTraits,
  openSections,
  onToggleSection,
  onClearFilters,
  onClose,
}) => {
  return (
    <div 
      className={`w-full sm:w-[320px] max-w-full bg-[#101213] flex flex-col shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 relative">
        <h2 className="text-lg font-semibold text-white">Filters</h2>
        <button
          onClick={onClearFilters}
          className="text-[#8B5CF6] text-sm hover:underline hover:text-[#7c3aed] transition-colors"
        >
          Clear filters
        </button>
        {/* Botón X solo en mobile */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 md:hidden text-gray-400 hover:text-white"
          aria-label="Close sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
      
      {/* Filtros */}
      <div className="p-4 space-y-6">
        <FilterCategory
          title={<span>Status</span>}
          isOpen={openSections.status}
          onToggle={() => onToggleSection('status')}
        >
          <StatusFilter
            value={filters.status}
            onChange={status => onFiltersChange({ ...filters, status })}
          />
        </FilterCategory>
        
        <FilterCategory
          title={<span>Price</span>}
          isOpen={openSections.price}
          onToggle={() => onToggleSection('price')}
        >
          <PriceFilter
            value={filters.priceRange}
            onChange={priceRange => onFiltersChange({ ...filters, priceRange })}
          />
        </FilterCategory>
        
        <FilterCategory
          title={<span>Market Place</span>}
          isOpen={openSections.marketplace}
          onToggle={() => onToggleSection('marketplace')}
        >
          <MarketplaceFilter
            value={filters.marketplaces}
            onChange={marketplaces => onFiltersChange({ ...filters, marketplaces })}
          />
        </FilterCategory>
        
        <FilterCategory
          title={<span>Properties/Traits</span>}
          isOpen={openSections.traits}
          onToggle={() => onToggleSection('traits')}
        >
          <TraitsFilter
            value={filters.traits}
            onChange={traits => onFiltersChange({ ...filters, traits })}
            availableTraits={availableTraits}
          />
        </FilterCategory>
      </div>
    </div>
  );
};

export default ProfileFilters; 