import React, { useState, useEffect } from 'react';
import { Check, Search, X } from 'lucide-react';
import { TraitCategory } from './index';

interface TraitsFilterProps {
  value: Record<string, string[]>;
  onChange: (value: Record<string, string[]>) => void;
  availableTraits: TraitCategory[];
  onClear?: () => void;
}

const TraitsFilter: React.FC<TraitsFilterProps> = ({ value, onChange, availableTraits, onClear }) => {
  const [search, setSearch] = useState<Record<string, string>>({});
  const [debouncedSearch, setDebouncedSearch] = useState<Record<string, string>>({});

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(handler);
  }, [search]);

  const handleToggle = (category: string, trait: string) => {
    const current = value[category] || [];
    if (current.includes(trait)) {
      onChange({ ...value, [category]: current.filter(v => v !== trait) });
    } else {
      onChange({ ...value, [category]: [...current, trait] });
    }
  };

  const handleSearch = (category: string, val: string) => {
    setSearch((prev) => ({ ...prev, [category]: val }));
  };

  const hasAnySelected = Object.values(value).some(arr => arr.length > 0);
  const hasAnySearch = Object.values(search).some(val => val.length > 0);

  const handleClear = () => {
    setSearch({});
    if (onClear) onClear();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-2">
        {(hasAnySelected || hasAnySearch) && onClear && (
          <button
            className="text-gray-400 hover:text-white p-1 rounded-full border border-[#23232A]"
            onClick={handleClear}
            title="Clear selected"
            type="button"
          >
            <X size={16} />
          </button>
        )}
      </div>
      {availableTraits.map(cat => {
        const filtered = cat.values.filter(v =>
          !debouncedSearch[cat.name] || v.value.toLowerCase().includes(debouncedSearch[cat.name].toLowerCase())
        );
        return (
          <div key={cat.name}>
            <div className="flex items-center mb-2">
              <span className="text-white text-sm font-medium flex-1">{cat.name}</span>
              <div className="relative w-1/2">
                <input
                  className="w-full bg-[#23232A] border border-[#23232A] text-white rounded-[8px] px-2 py-1 pr-7 text-xs focus:outline-none focus:border-[#8B5CF6] placeholder-gray-400 transition-colors"
                  placeholder="Search"
                  value={search[cat.name] || ''}
                  onChange={e => handleSearch(cat.name, e.target.value)}
                />
                <Search size={14} className="absolute right-2 top-2 text-gray-400" />
              </div>
            </div>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {filtered.map(trait => (
                <label key={trait.value} className="flex items-center gap-2 cursor-pointer text-xs text-gray-200">
                  <span
                    className={`w-5 h-5 flex items-center justify-center rounded-[8px] border-2 transition-colors duration-150
                      ${(value[cat.name] || []).includes(trait.value)
                        ? 'bg-[#8B5CF6] border-[#8B5CF6]'
                        : 'bg-transparent border-[#23232A] hover:border-[#8B5CF6]'}
                    `}
                    onClick={() => handleToggle(cat.name, trait.value)}
                    tabIndex={0}
                    role="checkbox"
                    aria-checked={(value[cat.name] || []).includes(trait.value)}
                  >
                    {(value[cat.name] || []).includes(trait.value) && <Check size={14} className="text-white" />}
                  </span>
                  <span>{trait.value}</span>
                  <span className="ml-auto text-gray-500">{trait.count}</span>
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TraitsFilter; 