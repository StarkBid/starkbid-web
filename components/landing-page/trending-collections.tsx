"use client";

import { trendingCollections } from "@/constants/data";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { ViewAllButton } from "../ui/Button";

// constants
const TIMEFRAMES = ["1h", "6h", "24h", "3d", "7d"];
const BLOCKCHAINS = ["Ethereum", "Bitcoin", "Solana", "Polygon"];

// Reusable button styles
const getTabButtonStyles = (isActive: boolean) => `
  text-[20px] px-4 py-2 rounded-md 
  ${isActive 
    ? "text-white font-bold bg-[#1C1D1F]" 
    : "text-gray-500"}
`;

const TimeframeSelector: React.FC<{
  timeframe: string;
  onTimeframeChange: (frame: string) => void;
}> = ({ timeframe, onTimeframeChange }) => (
  <div className="flex space-x-2 h-full bg-[#272729] p-1 rounded-md">
    {TIMEFRAMES.map((frame) => (
      <button
        key={frame}
        className={`px-5 py-2 rounded-md ${
          timeframe === frame ? "bg-[#101213] text-white" : ""
        }`}
        onClick={() => onTimeframeChange(frame)}
      >
        {frame}
      </button>
    ))}
  </div>
);

const BlockchainDropdown: React.FC<{
  blockchain: string;
  onBlockchainChange: (chain: string) => void;
}> = ({ blockchain, onBlockchainChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-full">
      <button
        className="flex items-center h-full bg-[#272729] px-4 py-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {blockchain}
        <ChevronDownIcon className="ml-2 w-5 h-5" />
      </button>
      {isOpen && (
        <div className="absolute top-full mt-4 right-0 bg-[#272729] p-2 rounded-lg shadow-lg z-10">
          {BLOCKCHAINS.map((chain) => (
            <button
              key={chain}
              className="w-full text-left px-4 py-2 hover:bg-[#101213]"
              onClick={() => {
                onBlockchainChange(chain);
                setIsOpen(false);
              }}
            >
              {chain}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const CollectionTableRow: React.FC<(typeof trendingCollections)[0]> = ({
  id,
  icon,
  name,
  floorPrice,
  volume,
  topOffer,
  change,
  sales,
  holder,
  rate,
}) => (
  <tr className="hover:bg-zinc-900 transition-colors duration-300">
    <td className="px-4 py-4 text-[#8E9BAE]">{id}</td>
    <td className="px-4 py-4">
      <div className="flex items-center ">
        <div className="relative mr-3 shrink-0">
          <Image
            src={icon}
            width={70}
            height={70}
            alt={name}
            className="w-[70px] h-[70px] rounded-full"
          />
          <div className="w-5 h-5 absolute bottom-0 right-0 flex justify-center items-center rounded-full bg-white">
            <Image
              src="/collections_icons/eth.svg"
              width={12}
              height={12}
              alt="Ethereum"
              className="w-full h-full"
            />
          </div>
        </div>
        <span className="whitespace-nowrap">{name}</span>
      </div>
    </td>
    <td className="px-4 py-4 whitespace-nowrap">{floorPrice}</td>
    <td className="px-4 py-4 whitespace-nowrap">{volume}</td>
    <td className="px-4 py-4 whitespace-nowrap">{topOffer}</td>
    <td
      className={`px-4 py-4 whitespace-nowrap ${
        change.startsWith("+") ? "text-green-500" : "text-red-500"
      }`}
    >
      {change}
    </td>
    <td className="px-4 py-4 whitespace-nowrap">{sales}</td>
    <td className="px-4 py-4 w-fit">
      <div className="flex flex-col w-fit">
        <span>{holder}%</span>
        <span className="text-[#A3A3A3] text-sm">{rate}</span>
      </div>
    </td>
  </tr>
);

const TrendingCollections: React.FC = () => {
  const [activeTab, setActiveTab] = useState("collections");
  const [timeframe, setTimeframe] = useState<string>("1h");
  const [blockchain, setBlockchain] = useState<string>("Ethereum");

  return (
    <div className="bg-black text-white p-6 rounded-lg w-full max-w-[1419] mx-auto">
      <div className="w-full mx-auto">
        {/* Tabs */}
        <div className="flex gap-[1em] mb-8">
          <button
            className={getTabButtonStyles(activeTab === "collections")}
            onClick={() => setActiveTab("collections")}
          >
            Collections
          </button>
          <button
            className={getTabButtonStyles(activeTab === "marketPlaces")}
            onClick={() => setActiveTab("marketPlaces")}
          >
            Marketplaces
          </button>
        </div>

        {/* Header and Filters */}
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold">Trending Collections</h2>
          <div className="flex gap-3 items-center h-12 flex-wrap">
            <TimeframeSelector 
              timeframe={timeframe} 
              onTimeframeChange={setTimeframe} 
            />
            <BlockchainDropdown 
              blockchain={blockchain} 
              onBlockchainChange={setBlockchain} 
            />
            <ViewAllButton />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[1200px] xl:min-w-0">
            <thead className="border-b-[0.3px] border-zinc-500 text-white/60 text-left uppercase">
              <tr>
                {[
                  "#", "Collection", "Floor Price", "Volume", "Top Offer", 
                  "Floor Id", "Sales", "Holders"
                ].map((header) => (
                  <th key={header} className="font-light py-5 px-4">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {trendingCollections.map((collection) => (
                <CollectionTableRow key={collection.id} {...collection} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-10">
          <ViewAllButton />
        </div>
      </div>
    </div>
  );
};

export default TrendingCollections;