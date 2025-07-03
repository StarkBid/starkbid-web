import StatusFilter from './StatusFilter';
import PriceFilter from './PriceFilter';
import MarketplaceFilter from './MarketplaceFilter';
import TraitsFilter from './TraitsFilter';
import FilterCategory from './FilterCategory';
import React, { useState } from 'react';

export interface FilterState {
  status: 'all' | 'listed' | 'owned_by_you';
  priceRange: {
    min: string;
    max: string;
    currency: string;
  };
  marketplaces: string[];
  traits: Record<string, string[]>;
}

export interface TraitCategory {
  name: string;
  values: { value: string; count: number }[];
}

interface FilterSidebarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  availableTraits: TraitCategory[];
  openSections: {
    status: boolean;
    price: boolean;
    marketplace: boolean;
    traits: boolean;
  };
  onToggleSection: (section: keyof FilterSidebarProps['openSections']) => void;
}

const FiltersSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFiltersChange,
  onClearFilters,
  availableTraits,
  openSections,
  onToggleSection,
}) => {
  // Mock loading y contador
  const [loading] = useState(false); // Cambia a true para simular loading
  const resultCount = 123; // Mock

  return (
    <aside className="w-full sm:w-[320px] max-w-full bg-[#18181B] flex flex-col shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#23232A]">
        <h2 className="text-lg font-semibold text-white">Filters</h2>
        <button
          onClick={onClearFilters}
          className="text-[#8B5CF6] text-sm hover:underline hover:text-[#7c3aed] transition-colors"
        >
          Clear filters
        </button>
      </div>
      {/* Contador y loading */}
      <div className="px-4 pt-2 pb-1 flex items-center gap-2 min-h-[32px]">
        {loading ? (
          <span className="w-5 h-5 border-2 border-[#8B5CF6] border-t-transparent rounded-full animate-spin inline-block" />
        ) : (
          <span className="text-xs text-gray-400">{resultCount} results</span>
        )}
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
            onClear={() => onFiltersChange({ ...filters, status: 'all' })}
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
            onClear={() => onFiltersChange({ ...filters, priceRange: { ...filters.priceRange, min: '', max: '' } })}
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
            onClear={() => onFiltersChange({ ...filters, marketplaces: [] })}
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
            onClear={() => onFiltersChange({ ...filters, traits: {} })}
          />
        </FilterCategory>
      </div>
    </aside>
  );
};

export default FiltersSidebar; 