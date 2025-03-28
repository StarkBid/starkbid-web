'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import Arrow from '@/public/arrow.png'
import { NFTCardProps, nftData } from '@/constants/data';

const NFTCard: React.FC<NFTCardProps> = ({
  title,
  creatorName,
  creatorIcon,
  isVerified,
  currentBid,
  likes,
  minted,
  timeLeft,
  image,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col rounded-lg overflow-hidden w-full border border-[#292929] transition-colors duration-300 hover:bg-[#292929]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-2">
          <Image
            src={`/${creatorIcon}`}
            alt={creatorName}
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="text-white font-medium">{creatorName}</span>
          {isVerified && <MdVerified className="text-purple" size={16} />}
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="text-ash hover:text-red-500 transition-colors"
        >
          {isLiked ? <BsHeartFill className="text-ash" size={20} /> : <BsHeart size={20} />}
        </button>
      </div>

      <div
        className="relative w-full h-64 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={`/${image}`}
          alt={title}
          fill
          className={`px-4 transition-all duration-300 ease-in-out ${isHovered ? 'scale-[1.03] ' : ''}`}
        />
        {isHovered && (
          <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 border border-soft_grey bg-white text-black px-4 py-2 rounded-md text-sm font-medium z-10 transition-all duration-300 opacity-100 shadow-md hover:bg-gray-100">
            Place a Bid
          </button>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-1">{title}</h3>

        <div className="text-ash text-sm mb-3">Current Bid</div>
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">{currentBid} ETH</div>
          <div className="text-ash text-sm">{likes} likes</div>
        </div>

        <div className="flex justify-between mt-3 text-sm text-ash">
          <div>{minted} minted</div>
          <div>{timeLeft} left</div>
        </div>
      </div>
    </div>
  );
};

const TrendingNFTs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <div className="bg-black text-white p-6 max-w-8xl mx-auto">
      <div className="flex gap-[1em] mb-8">
        <button
          className={`px-2 py-1 ${activeTab === 'trending' ? 'text-white font-bold  text-xl bg-[#1C1D1F] px-4 py-2 rounded-md' : 'text-gray-500  text-xl'}`}
          onClick={() => setActiveTab('trending')}
        >
          Trending
        </button>
        <button
          className={`px-2 py-1 ${activeTab === 'top' ? 'text-white font-bold bg-deepGray px-4 py-2 rounded-md  text-xl' : 'text-gray-500 font-bold  text-xl'}`}
          onClick={() => setActiveTab('top')}
        >
          Top
        </button>
      </div>

      <h2 className="text-3xl font-bold mb-6">Trending NFTs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {nftData.map((nft) => (
          <NFTCard key={nft.id} {...nft} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-deepGray hover:bg-zinc-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
          View all NFTs
          <Image
            src={Arrow}
            alt='arrow icon'
          />
        </button>
      </div>
    </div>
  );
};

export default TrendingNFTs;