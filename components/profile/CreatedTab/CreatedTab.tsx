'use client';

import React, { useState } from 'react';
import NFTGrid from '../NFTGrid/NFTGrid';
import CreatedFilters from '../CreatedFilters/CreatedFilters';
import { CreatedFiltersState } from '../CreatedFilters/CreatedFilters.types'; 
import { mockNFTs } from '../lib/mockData';

interface CreatedTabProps {
  userAddress: string;
  isOwner: boolean;
}

const CreatedTab: React.FC<CreatedTabProps> = ({ isOwner }) => {
    const [filters, setFilters] = useState<CreatedFiltersState>({
        searchTerm: '',
        sortBy: 'newest',
        priceRange: { min: null, max: null },
        collections: [],
        status: 'all',
        blockchain: 'all',
        marketplaces: {
          marketPlace: false,
          search: false,
          startBid: false,
          openSea: false,
          sudoSwap: false,
          rarible: false
        },
        collectionSort: 'default',
        traits: {}
    });
    
  

  return (
    <div className="mt-6">
      <CreatedFilters
        filters={filters}
        onFiltersChange={setFilters}
        totalCount={mockNFTs.length}
        isOwner={isOwner}
      />
      
      <NFTGrid
        items={mockNFTs}
        loading={false}
        error={null}
        hasMore={false}
        onLoadMore={() => {}}
        emptyState={{
          title: "No Created Items",
          description: isOwner 
            ? "You haven't created any items yet. Start creating your first NFT!" 
            : "This user hasn't created any items yet."
        }}
      />
    </div>
  );
};

export default CreatedTab;