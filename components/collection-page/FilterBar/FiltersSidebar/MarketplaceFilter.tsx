import React, { useState, useEffect } from 'react';
import { Check, Search, X } from 'lucide-react';

const MARKETPLACES = [
  { id: 'starkbid', name: 'StarkBid', icon: '/icons/starkbid.svg' },
  { id: 'opensea', name: 'OpenSea', icon: '/icons/opensea.svg' },
  { id: 'sudoswap', name: 'SudoSwap', icon: '/icons/sudoswap.svg' },
  { id: 'ramble', name: 'Ramble', icon: '/icons/ramble.svg' },
];

interface MarketplaceFilterProps {
  value: string[];
  onChange: (value: string[]) => void;
  onClear?: () => void;
}

const MarketplaceFilter: React.FC<MarketplaceFilterProps> = ({ value, onChange, onClear }) => {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(handler);
  }, [search]);

  const filtered = MARKETPLACES.filter(mp => mp.name.toLowerCase().includes(debouncedSearch.toLowerCase()));
  const toggle = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter(v => v !== id));
    } else {
      onChange([...value, id]);
    }
  };
  const handleClear = () => {
    setSearch('');
    if (onClear) onClear();
  };
  return (
    <div>
      <div className="flex items-center mb-2 gap-2">
        <div className="relative flex-1">
          <input
            className="w-full bg-[#18181B] border border-[#23232A] focus:border-[#8B5CF6] text-white rounded-[8px] px-3 py-2 pr-8 focus:outline-none placeholder-gray-400 transition-colors"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Search size={18} className="absolute right-3 top-3 text-gray-400" />
        </div>
        {(!!search || value.length > 0) && (
          <button
            className="ml-2 text-gray-400 hover:text-white p-1 rounded-full border border-[#23232A]"
            onClick={handleClear}
            title="Clear selected"
            type="button"
          >
            <X size={16} />
          </button>
        )}
      </div>
      <div className="space-y-2">
        {filtered.map(mp => (
          <label key={mp.id} className="flex items-center gap-3 cursor-pointer group">
            <span
              className={`w-6 h-6 flex items-center justify-center rounded-[8px] border-2 transition-colors duration-150
                ${value.includes(mp.id)
                  ? 'bg-[#8B5CF6] border-[#8B5CF6]'
                  : 'bg-transparent border-[#23232A] group-hover:border-[#8B5CF6]'}
              `}
              onClick={() => toggle(mp.id)}
              tabIndex={0}
              role="checkbox"
              aria-checked={value.includes(mp.id)}
            >
              {value.includes(mp.id) && <Check size={18} className="text-white" />}
            </span>
            <span className="w-6 h-6 flex items-center justify-center">
              <img src={mp.icon} alt={mp.name} className="w-6 h-6" />
            </span>
            <span className="text-white text-sm flex-1">{mp.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceFilter; 