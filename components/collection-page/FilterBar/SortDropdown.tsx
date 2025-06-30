import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SortDropdownProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortOptions = [
    'Price: Low to High',
    'Price: High to Low',
    'Recently Created',
    'Oldest',
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-[#1C1D1F]  rounded-lg text-white hover:bg-gray-700 transition-colors"
      >
        <span>{sortBy}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSortBy(option);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;