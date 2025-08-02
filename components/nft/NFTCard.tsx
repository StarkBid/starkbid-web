"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { NFTCardProps } from "@/constants/data";

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

  return (
    <div className="flex flex-col rounded-lg overflow-hidden w-full border border-[#292929] transition-colors duration-300 hover:bg-[#292929]">
      <div className="p-2">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <Image
              src={`/${creatorIcon}`}
              alt={creatorName}
              width={20}
              height={20}
              className="rounded-full sm:w-6 sm:h-6"
            />
            <span className="text-white text-xs sm:text-sm font-medium truncate">
              {creatorName}
            </span>
            {isVerified && <MdVerified className="text-purple-500 flex-shrink-0" size={12} />}
          </div>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="text-red-400 hover:text-red-500 transition-colors flex-shrink-0"
          >
            {isLiked ? (
              <BsHeartFill className="text-[#ED434C]" size={14} />
            ) : (
              <BsHeart size={14} />
            )}
          </button>
        </div>
        <div className="relative w-full h-40 sm:h-64 overflow-hidden">
          <Image
            src={`/${image}`}
            alt={title}
            fill
            className="object-cover transition-all rounded-xl duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className="p-2 sm:p-4">
        <h3 className="text-white font-bold text-sm sm:text-base mb-2 truncate">{title}</h3>

        {/* Mobile: Simple layout - only Current Bid and Amount */}
        <div className="sm:hidden flex justify-between items-center">
          <div className="text-gray-400 text-xs">Current Bid</div>
          <div className="text-white font-bold text-sm">{currentBid} ETH</div>
        </div>

        {/* Desktop: Full layout with all details */}
        <div className="hidden sm:block">
          <div className="flex justify-between items-center mb-1">
            <div className="text-gray-400 text-xs">Current Bid</div>
            <div className="text-gray-400 text-xs">{likes} likes</div>
          </div>

          <div className="flex justify-between items-end">
            <div className="text-white font-bold text-base">{currentBid} ETH</div>
            <div className="text-xs text-gray-400 text-right">
              <span className="border-r-2 pr-2">{minted} minted</span>
              <span className="pl-2">{timeLeft}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;