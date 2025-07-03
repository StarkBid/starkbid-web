import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterCategoryProps {
  title: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const FilterCategory: React.FC<FilterCategoryProps> = ({ title, isOpen, onToggle, children }) => (
  <div className="mb-4 border-b border-[#23232A] pb-4">
    <button
      className="flex items-center justify-between w-full text-left text-white font-medium py-2 px-1 focus:outline-none"
      onClick={onToggle}
      aria-expanded={isOpen}
      type="button"
    >
      <span className="flex-1 text-left">{title}</span>
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <div className="mt-2">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default FilterCategory; 