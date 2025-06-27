'use client';

import { useState } from 'react';

export const useNFTInteractions = (nftId: string) => {
  const [isLiked, setIsLiked] = useState(false);
  const [viewCount, setViewCount] = useState(0);

  const likeNFT = () => {
    setIsLiked(prev => !prev);
  };

  const shareNFT = () => {
    console.log(`Sharing NFT ${nftId}`);
  };

  const viewNFT = () => {
    setViewCount(prev => prev + 1);
  };

  return {
    likeNFT,
    shareNFT,
    viewNFT,
    isLiked,
    viewCount,
  };
};