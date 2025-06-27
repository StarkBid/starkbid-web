'use client';

import React from 'react';
import { formatDistanceToNow } from 'date-fns';

interface NFTCardMetaProps {
  viewCount: number;
  lastSale?: {
    price: string;
    date: Date;
  };
  createdAt: Date;
  mintCount?: number;
}

const NFTCardMeta: React.FC<NFTCardMetaProps> = ({
  viewCount,
  lastSale,
  createdAt,
  mintCount,
}) => {
  return (
    <div className="mt-3 pt-3 border-t border-[#2D2E32] text-xs text-[#8E9BAE]">
      <div className="flex justify-between">
        {lastSale ? (
          <span>Sold {formatDistanceToNow(new Date(lastSale.date))} ago</span>
        ) : (
          <span>Created {formatDistanceToNow(new Date(createdAt))} ago</span>
        )}
        
        {mintCount && (
          <span>{mintCount} minted</span>
        )}
      </div>
      
      <div className="mt-1 flex justify-between">
        <span>{viewCount.toLocaleString()} views</span>
        {lastSale && (
          <span>{lastSale.price} ETH</span>
        )}
      </div>
    </div>
  );
};

export default NFTCardMeta;