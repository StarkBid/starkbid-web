import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

interface NFTCardData {
  id: number;
  title: string;
  creator: string;
  creatorAvatar: string;
  isVerified: boolean;
  currentBid: string;
  bidCount: number;
  timeLeft: string;
  image: string;
  likes: number;
}

interface NFTCollectionCardProps {
  data: NFTCardData;
}

const NFTCollectionCard: React.FC<NFTCollectionCardProps> = ({ data }) => {
  return (
    <div className="border border-darkerGray rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 p-1.5 sm:p-3 my-2">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2 pb-3">
          <div className="rounded-full overflow-hidden">
            <Image
              src={data.creatorAvatar}
              alt={data.creator}
              width={24}
              height={24}
              className="w-4 h-4 sm:w-6 sm:h-6 object-cover"
            />
          </div>
          <span className="text-gray-400 text-[10px] sm:text-sm">
            {data.creator}
          </span>
          {data.isVerified && (
            <Image
              src={"/verified.png"}
              alt="verified_icon"
              width={20}
              height={20}
              className="w-2.5 h-2.5 sm:w-5 sm:h-5"
            />
          )}
          {/* Like button overlay */}
        </div>
        <div className="flex w-fit bg-black/50 rounded-full  backdrop-blur-sm pb-3">
          <Heart className="h-3 w-3" />
          <span className="hidden sm:block text-xs text-white ml-1">
            {data.likes}
          </span>
        </div>
      </div>

      {/* NFT Image */}
      <div className="relative aspect-square sm:h-[350px] overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Card Content */}
      <div className="">
        {/* NFT Title */}
        <h3 className="text-white font-semibold text-xs  sm:text-lg my-2 truncate">
          {data.title}
        </h3>

        {/* Bid Info */}
        <div className="flex  justify-between items-center mb-2 w-full">
          <div className="flex md:flex-col justify-between items-center w-full">
            <p className="text-gray-400 text-[10px] text-xs">Current Bid</p>
            <p className="text-white text-xs sm:text-sm font-semibold">{data.currentBid}</p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-gray-400 text-xs">{data.bidCount} bids</p>
            <p className="text-gray-400 text-xs">{data.timeLeft}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCollectionCard;
