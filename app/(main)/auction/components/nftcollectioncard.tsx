import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

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
    <div className="border border-darkerGray rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 px-1.5 py-2.5 sm:p-3 my-2">
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2 pb-3'>
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image
              src={data.creatorAvatar}
              alt={data.creator}
              width={24}
              height={24}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-gray-400 text-xs sm:text-base">{data.creator}</span>
          {data.isVerified && (
            <Image src={'/verified.png'} alt='verified_icon' width={20} height={20} className='w-4 h-4 sm:w-5 sm:h-5' />
          )}
        </div>
        {/* Like button overlay */}
        <div className="flex w-fit bg-black/50 rounded-full backdrop-blur-sm pb-3">
         <Heart className='h-4 w-4'/>
          <span className="hidden md:block text-xs text-white ml-1">{data.likes}</span>
        </div>
      </div>


      {/* NFT Image */}
      <div className="relative h-[146px] sm:h-[350px] overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Card Content */}
      <div className=" pt-2">
        {/* NFT Title */}
        <h3 className="text-white font-semibold text-xs sm:text-lg mb-2 truncate">{data.title}</h3>

        {/* Bid Info */}
        <div className="flex justify-between items-end sm:mb-2">
          <div className='flex sm:flex-col  text-left justify-between'>
            <p className="text-gray-400 text-xs mb-1.5">Current Bid</p>
            <p className="text-white font-semibold">{data.currentBid}</p>
          </div>
          <div className=" sm:flex-col  text-left justify-between hidden sm:flex">
            <p className="text-gray-400 text-xs mb-1.5">{data.bidCount} bids</p>
            <p className="text-gray-400 text-xs">{data.timeLeft}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCollectionCard;
