'use client';

import { useState, useEffect, useCallback } from 'react';
import { CreatedFiltersState } from '../CreatedFilters/CreatedFilters.types';
import { NFT } from '../NFTCard/NFTCard.types';

const MOCK_NFTS: NFT[] = Array(20).fill(0).map((_, i) => ({
  id: `nft-${i}`,
  tokenId: `${i}`,
  name: `NFT ${i + 1}`,
  description: `This is a description for NFT ${i + 1}`,
  image: `/nft.png`,
  collection: {
    id: `collection-${i % 3}`,
    name: `Collection ${i % 3 + 1}`,
    slug: `collection-${i % 3 + 1}`,
  },
  price: {
    eth: (0.01 * (i + 1)).toFixed(3),
    usd: (30 * (i + 1)).toFixed(2),
  },
  creator: {
    address: '0x9d863ed03...3ba8',
    username: 'Cattie Negtar',
    avatar: '/nft3.png',
  },
  stats: {
    viewCount: 100 + i * 20,
    likeCount: 10 + i * 2,
    shareCount: 5 + i,
  },
  lastSale: i % 2 === 0 ? {
    price: (0.02 * (i + 1)).toFixed(3),
    date: new Date(Date.now() - (i * 86400000)),
    buyer: '0x123...456',
  } : undefined,
  createdAt: new Date(Date.now() - (i * 86400000)),
  updatedAt: new Date(),
  status: i % 2 === 0 ? 'sold' : 'active',
}));

export const useCreatedItems = (userAddress: string, filters: CreatedFiltersState) => {
  const [items, setItems] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [, setPage] = useState(1);

  const fetchItems = useCallback(async (reset = false) => {
    try {
      setLoading(true);
      setError(null);
      await new Promise(resolve => setTimeout(resolve, 500));

      const filteredItems = MOCK_NFTS.filter(item => {
        if (filters.searchTerm && !item.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
          return false;
        }
        if (filters.blockchain !== 'all' && filters.blockchain !== 'ethereum') {
          return false; 
        }
        if (filters.status !== 'all' && item.status !== filters.status) {
          return false;
        }
        if (filters.priceRange.min && Number(item.price.eth) < filters.priceRange.min) {
          return false;
        }
        if (filters.priceRange.max && Number(item.price.eth) > filters.priceRange.max) {
          return false;
        }
        return true;
      });

      // Sort items
      const sortedItems = [...filteredItems].sort((a, b) => {
        switch (filters.sortBy) {
          case 'newest':
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          case 'oldest':
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          case 'price_low':
            return Number(a.price.eth) - Number(b.price.eth);
          case 'price_high':
            return Number(b.price.eth) - Number(a.price.eth);
          case 'most_viewed':
            return b.stats.viewCount - a.stats.viewCount;
          default:
            return 0;
        }
      });

      const newItems = reset ? sortedItems.slice(0, 8) : [...items, ...sortedItems.slice(items.length, items.length + 8)];
      
      setItems(newItems);
      setHasMore(newItems.length < sortedItems.length);
      if (reset) setPage(1);
    } catch (err) {
      setError('Failed to fetch items');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filters, items]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
      fetchItems(false);
    }
  }, [loading, hasMore, fetchItems]);

  useEffect(() => {
    fetchItems(true);
  }, [userAddress, filters, fetchItems]);

  return {
    items,
    loading,
    error,
    hasMore,
    loadMore,
    totalCount: items.length,
    refetch: () => fetchItems(true),
  };
};