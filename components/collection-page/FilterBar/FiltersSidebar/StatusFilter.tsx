import React from 'react';
import { X } from 'lucide-react';

interface StatusFilterProps {
  value: 'all' | 'listed' | 'owned_by_you';
  onChange: (value: 'all' | 'listed' | 'owned_by_you') => void;
  onClear?: () => void;
}

const options = [
  { label: 'All', value: 'all' },
  { label: 'Listed', value: 'listed' },
  { label: 'Owned by you', value: 'owned_by_you' },
];

const StatusFilter: React.FC<StatusFilterProps> = ({ value, onChange, onClear }) => (
  <div className="flex gap-2 items-center">
    <div className="flex gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`px-4 py-2 rounded-[9px] border-2 text-sm font-medium transition-colors
            ${value === opt.value
              ? 'bg-[#2E2256] border-[#8B5CF6] text-white'
              : 'bg-[#23232A] border-[#23232A] text-gray-200 hover:border-[#8B5CF6]'}
          `}
          onClick={() => onChange(opt.value as any)}
          type="button"
        >
          {opt.label}
        </button>
      ))}
    </div>
    {value !== 'all' && onClear && (
      <button
        className="text-gray-400 hover:text-white p-1 rounded-full border border-[#23232A] ml-2"
        onClick={onClear}
        title="Clear status"
        type="button"
      >
        <X size={16} />
      </button>
    )}
  </div>
);

export default StatusFilter; 