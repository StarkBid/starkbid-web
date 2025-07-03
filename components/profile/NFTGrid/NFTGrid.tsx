'use client';

import React from 'react';
import NFTCard from '../NFTCard/NFTCard';
import { NFTGridProps } from './NFTGrid.types';
import { useInfiniteGrid } from '../hooks/useInfiniteGrid';
import { motion, AnimatePresence } from 'framer-motion';

const NFTGrid: React.FC<NFTGridProps> = ({
  items,
  loading,
  error,
  hasMore,
  onLoadMore,
  emptyState,
  gridColsClass,
}) => {
  const { lastItemRef } = useInfiniteGrid({
    loading,
    hasMore,
    loadMore: onLoadMore,
  });

  if (error) {
    return (
      <div 
        className="text-center py-12 text-red-500"
        role="alert"
        aria-live="assertive"
      >
        <h3 className="text-lg font-medium mb-2">Error loading items</h3>
        <p className="text-sm">{error}</p>
        <button
          onClick={() => onLoadMore()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          aria-label="Retry loading items"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (loading && items.length === 0) {
    return (
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        aria-busy="true"
        aria-live="polite"
      >
        {Array(8).fill(0).map((_, i) => (
          <div 
            key={`skeleton-${i}`}
            className="bg-[#1C1D1F] rounded-lg animate-pulse h-[350px]"
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div 
        className="text-center py-12"
        aria-live="polite"
      >
        <h3 className="text-xl font-medium text-white">{emptyState.title}</h3>
        <p className="text-[#8E9BAE] mt-2">{emptyState.description}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div 
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${gridColsClass || 'lg:grid-cols-4'} gap-6`}
        aria-busy={loading ? "true" : "false"}
      >
        <AnimatePresence initial={false}>
          {items.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              ref={index === items.length - 1 ? lastItemRef : null}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              layout
            >
              <NFTCard nft={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {loading && items.length > 0 && (
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${gridColsClass || 'lg:grid-cols-4'} gap-6`}
          aria-live="polite"
        >
          {Array(4).fill(0).map((_, i) => (
            <div 
              key={`loading-${i}`}
              className="bg-[#1C1D1F] rounded-lg animate-pulse h-[350px]"
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      {!loading && !hasMore && items.length > 0 && (
        <div 
          className="text-center py-4 text-[#8E9BAE] text-sm"
          aria-live="polite"
        >
          You&apos;ve reached the end of the list
        </div>
      )}
    </div>
  );
};

export default NFTGrid;