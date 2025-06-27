'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PriceDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const PriceDropdown: React.FC<PriceDropdownProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'price_low', label: 'Low to High' },
    { value: 'price_high', label: 'High to Low' },
    { value: 'most_viewed', label: 'Most Viewed' },
  ];

  const selectedLabel = options.find(opt => opt.value === value)?.label || 'Sort By';

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 bg-[#1C1D1F] border border-[#2D2E32] rounded-lg px-4 py-2 text-[#8E9BAE] hover:bg-[#2D2E32] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        Price:
        <span className='text-white'>{selectedLabel}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#1C1D1F] border border-[#2D2E32] rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option.value}
              className={`w-full text-left px-4 py-2 hover:bg-[#2D2E32] ${
                value === option.value ? 'text-purple-500' : 'text-white'
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceDropdown;