"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import Arrow from "@/public/arrow.png";
import { NFTCardProps, nftData } from "@/constants/data";
import Link from "next/link";

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
        <Link href={"/profile"} className="group flex items-center gap-2">
          <Image
            src={`/${creatorIcon}`}
            alt={creatorName}
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="text-white font-medium group-hover:underline">
            {creatorName}
          </span>
          {isVerified && <MdVerified className="text-purple" size={16} />}
        </Link>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="text-ash hover:text-red-500 transition-colors"
        >
          {isLiked ? (
            <BsHeartFill className="text-ash" size={20} />
          ) : (
            <BsHeart size={20} />
          )}
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
          className={`px-4 transition-all duration-300 ease-in-out ${
            isHovered ? "scale-[1.03] " : ""
          }`}
        />
        {isHovered && (
          <Link
            href={"/auction"}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 border border-soft_grey bg-white text-black px-4 py-2 rounded-md text-sm font-medium z-10 transition-all duration-300 opacity-100 shadow-md hover:bg-gray-100"
          >
            Place a Bid
          </Link>
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
  const [activeTab, setActiveTab] = useState("trending");

  return (
    <div className="bg-black text-white p-6 max-w-[1419] mx-auto ">
      <div className="flex gap-[1em] mb-4 sm:mb-8">
        <button
          className={`px-2 py-1 text-[16px] font-semibold sm:font-bold sm:text-xl ${
            activeTab === "trending"
              ? "text-white bg-[#1C1D1F] px-4 py-2 rounded-md"
              : "text-gray-500 "
          }`}
          onClick={() => setActiveTab("trending")}
        >
          Trending
        </button>
        <button
          className={`px-2 py-1 text-[16px] font-semibold sm:font-bold sm:text-xl ${
            activeTab === "top"
              ? "text-white bg-deepGray px-4 py-2 rounded-md"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("top")}
        >
          Top
        </button>
      </div>

      <div className="flex gap-[10px] items-center mb-6">
        <h2 className="text-[16px] font-semibold sm:text-3xl sm:font-bold">
          Trending NFTs
        </h2>
        <p className="text-[#8E9BAE] text-[14px] sm:text-[16px] font-semibold">
          1540 items
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {nftData.map((nft) => (
          <NFTCard key={nft.id} {...nft} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href="/nfts"
          className="bg-deepGray hover:bg-zinc-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
        >
          View all NFTs
          <Image src={Arrow} alt="arrow icon" />
        </Link>
      </div>
    </div>
  );
};

export default TrendingNFTs;
