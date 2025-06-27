'use client';

import React, { useState } from 'react';
import { Heart, Share2, Eye } from 'lucide-react';
import NFTCardImage from './NFTCardImage';
import { NFT } from './NFTCard.types';

interface NFTCardProps {
    nft: NFT;
    onClick?: (nft: NFT) => void;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(nft.stats.likeCount);

    const handleLike = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };

    const handleShare = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (navigator.share) {
            navigator.share({
                title: nft.name,
                text: nft.description || `Check out this NFT: ${nft.name}`,
                url: `${window.location.origin}/nft/${nft.collection.slug}/${nft.tokenId}`, // Example URL
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            alert('Share functionality is not supported in this browser. You can copy the link manually.');
        }
    };

    const handleCardClick = () => {
        if (onClick) {
            onClick(nft);
        }
    };

    return (
        <div
            className="bg-transparent border border-[#2D2E32] rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 cursor-pointer p-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
        >
            <div className="relative">
                <NFTCardImage src={nft.image} alt={nft.name} isHovered={isHovered} />

                {isHovered && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                        <div className="flex space-x-3">
                            <button
                                className={`flex items-center space-x-1 ${isLiked ? 'text-red-500' : 'text-white'}`}
                                onClick={handleLike}
                            >
                                <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
                                <span>{likeCount}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-white" onClick={handleShare}>
                                <Share2 size={18} />
                            </button>
                            <div className="flex items-center space-x-1 text-white">
                                <Eye size={18} />
                                <span>{nft.stats.viewCount}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="">
                <h3 className="text-white font-medium truncate mb-2 mt-1">{nft.name}</h3>

                {/* Current Bid & Price */}
                <div className="flex justify-between items-center mb-1">
                    <p className="text-[#8E9BAE] text-sm font-medium">Current Bid</p>
                    <p className="text-[#8E9BAE] text-sm font-medium">{nft.price.eth} ETH</p>
                </div>

                {/* Likes & Time Left */}
                <div className="flex justify-between items-center text-sm text-white">
                    <p>564 likes</p>
                    <p>24 minted | 1d 9h left</p>
                </div>
            </div>

        </div>
    );
};

export default NFTCard;