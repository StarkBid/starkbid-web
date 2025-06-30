import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

interface NFTCardProps {
  name: string;
  price: string;
  image: string;
  likes: number;
  minted: string;
  timeLeft: string;
  creatorName: string;
  creatorIcon: string;
  isVerified: boolean;
  lastSale?: string;
}

const NFTCard: React.FC<NFTCardProps> = ({
  name,
  price,
  image,
  likes,
  minted,
  timeLeft,
  creatorName,
  creatorIcon,
  isVerified,
  lastSale,
}) => {
  return (
    <div className="bg-[#181A1B] border border-[#23242A] rounded-xl shadow p-4 flex flex-col gap-3 w-96 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105">
      {/* Header */}
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-[#23242A] overflow-hidden">
            <Image
              src={creatorIcon}
              width={32}
              height={32}
              alt={creatorName}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-white font-semibold text-base flex items-center gap-1">
            {creatorName}
            {isVerified && (
              <Image
                src="/verificationIcon.png"
                width={16}
                height={16}
                alt="verified"
                className="object-contain"
              />
            )}
          </span>
        </div>
        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
      </div>

      {/* NFT Image */}
      <div className="w-full aspect-square bg-[#23242A] rounded-xl overflow-hidden flex items-center justify-center relative">
        <Image
          src={image}
          width={400}
          height={400}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
        {lastSale && (
          <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded">
            Last sale {lastSale}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-2 pt-2">
        <h3 className="text-white font-bold text-base mb-1 leading-tight">
          {name}
        </h3>
        <div className="flex justify-between items-center mb-1">
          <div className="text-xs text-gray-400">Current Bid</div>
          <div className="text-xs text-gray-400">{likes} likes</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">{price}</div>
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <span>{minted} minted</span>
            <span className="text-gray-600">|</span>
            <span>{timeLeft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
