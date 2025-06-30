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
          <div className="flex items-center gap-2">
            <Image
              src={`/${creatorIcon}`}
              alt={creatorName}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-white text-sm font-medium">
              {creatorName}
            </span>
            {isVerified && <MdVerified className="text-purple-500" size={14} />}
          </div>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="text-red-400 hover:text-red-500 transition-colors"
          >
            {isLiked ? (
              <BsHeartFill className="text-[#ED434C] bg-red-400" size={16} />
            ) : (
              <BsHeart size={16} />
            )}
          </button>
        </div>
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={`/${image}`}
            alt={title}
            fill
            className="object-cover transition-all rounded-xl duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-bold text-base mb-2">{title}</h3>

       
        <div className="flex justify-between items-center">
        <div className="text-gray-400 text-xs mb-2">Current Bid</div>
          <div className="text-gray-400 text-xs">{likes} likes</div>
        </div>

        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <div className="text-white font-bold text-sm">{currentBid} ETH</div>
          <div className="">
            <span className="border-r-2 pr-2">{minted} minted</span>
            <span className="pl-2" >{timeLeft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;