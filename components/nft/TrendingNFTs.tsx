"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { nftData } from "./data";
import NFTCard from "./NFTCard";

const TrendingNFTs = () => {
  const [activeTab, setActiveTab] = useState("trending");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Trending"); 
  const [filterOption, setFilterOption] = useState("All"); 
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Filter and sort NFTs
  const filteredNFTs = useMemo(() => {
   
    let result = nftData.filter((nft) => {
      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase();
      return (
        nft.title.toLowerCase().includes(query) ||
        nft.creatorName.toLowerCase().includes(query) ||
        (nft.tags && nft.tags.some((tag) => tag.toLowerCase().includes(query)))
      );
    });

    
    switch (filterOption) {
      case "LowPrice":
        result = result.filter((nft) => nft.currentBid <= 100); 
        break;
      case "HighPrice":
        result = result.filter((nft) => nft.currentBid > 100); 
        break;
      case "All":
      default:
        break; 
    }

   
    switch (sortOption) {
      case "Newest":
        return [...result].sort((a, b) => b.minted - a.minted);
      case "Oldest":
        return [...result].sort((a, b) => a.minted - b.minted);
      case "Trending":
      default:
        return [...result].sort((a, b) => b.likes - a.likes);
    }
  }, [searchQuery, sortOption, filterOption]); 

 
  const displayedNFTs = useMemo(() => {
    if (activeTab === "trending") {
      return filteredNFTs;
    } else if (activeTab === "top") {
      return [...filteredNFTs].sort((a, b) => b.currentBid - a.currentBid);
    }
    return filteredNFTs;
  }, [filteredNFTs, activeTab]);

  return (
    <div className="bg-black text-white p-6 max-w-[1419px] mx-auto">
      <div className="flex flex-col mb-6">
        <div className="flex gap-3 sm:gap-4 mb-4 md:mb-6">
          <button
            className={`px-4 py-2 text-base sm:text-lg font-medium rounded-lg ${
              activeTab === "trending"
                ? "text-white bg-[#1C1D1F]"
                : "text-gray-400 bg-transparent"
            }`}
            onClick={() => setActiveTab("trending")}
          >
            Trending
          </button>
          <button
            className={`px-4 py-2 text-base sm:text-lg font-medium rounded-lg ${
              activeTab === "top"
                ? "text-white bg-[#1C1D1F]"
                : "text-gray-400 bg-transparent"
            }`}
            onClick={() => setActiveTab("top")}
          >
            Top
          </button>
        </div>

        {/* Search and Controls Row */}
        <div className="flex gap-3 items-center">
          <div className="flex-1 md:flex-none md:w-[60%] relative">
            <svg 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by NFTs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#1C1D1F] text-white placeholder-gray-500 text-sm pl-10 pr-4 py-2 rounded-md outline-none border border-[#292929] w-full"
            />
          </div>

          <div className="flex gap-3">
            <div className="relative">
              <button
                onClick={() => {
                  setShowSortDropdown(!showSortDropdown);
                  setShowFilterDropdown(false);
                }}
                className="md:hidden bg-[#1C1D1F] border border-[#292929] rounded-md p-2 flex items-center justify-center w-10 h-10"
              >
                <Image 
                  src="/droplet.png" 
                  alt="Sort" 
                  width={20} 
                  height={20}
                />
              </button>
              
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="hidden md:block bg-[#1C1D1F] text-white text-sm px-4 py-2 rounded-md outline-none border border-[#292929]"
              >
                <option value="Trending">Trending</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>

              {showSortDropdown && (
                <div className="md:hidden absolute top-12 right-0 bg-[#1C1D1F] border border-[#292929] rounded-md py-2 z-10 min-w-32">
                  <button
                    onClick={() => {
                      setSortOption("Trending");
                      setShowSortDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#292929] ${
                      sortOption === "Trending" ? "text-white" : "text-gray-400"
                    }`}
                  >
                    Trending
                  </button>
                  <button
                    onClick={() => {
                      setSortOption("Newest");
                      setShowSortDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#292929] ${
                      sortOption === "Newest" ? "text-white" : "text-gray-400"
                    }`}
                  >
                    Newest
                  </button>
                  <button
                    onClick={() => {
                      setSortOption("Oldest");
                      setShowSortDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#292929] ${
                      sortOption === "Oldest" ? "text-white" : "text-gray-400"
                    }`}
                  >
                    Oldest
                  </button>
                </div>
              )}
            </div>

            {/* Filter Control */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowFilterDropdown(!showFilterDropdown);
                  setShowSortDropdown(false);
                }}
                className="md:hidden bg-[#1C1D1F] border border-[#292929] rounded-md p-2 flex items-center justify-center w-10 h-10"
              >
                <Image 
                  src="/filter.png" 
                  alt="Filter" 
                  width={20} 
                  height={20}
                />
              </button>
              
              <select
                value={filterOption}
                onChange={(e) => setFilterOption(e.target.value)}
                className="hidden md:block bg-[#1C1D1F] text-white text-sm px-4 py-2 rounded-md outline-none border border-[#292929]"
              >
                <option value="All">All</option>
                <option value="LowPrice">Low Price</option>
                <option value="HighPrice">High Price</option>
              </select>

              {showFilterDropdown && (
                <div className="md:hidden absolute top-12 right-0 bg-[#1C1D1F] border border-[#292929] rounded-md py-2 z-10 min-w-32">
                  <button
                    onClick={() => {
                      setFilterOption("All");
                      setShowFilterDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#292929] ${
                      filterOption === "All" ? "text-white" : "text-gray-400"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => {
                      setFilterOption("LowPrice");
                      setShowFilterDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#292929] ${
                      filterOption === "LowPrice" ? "text-white" : "text-gray-400"
                    }`}
                  >
                    Low Price
                  </button>
                  <button
                    onClick={() => {
                      setFilterOption("HighPrice");
                      setShowFilterDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#292929] ${
                      filterOption === "HighPrice" ? "text-white" : "text-gray-400"
                    }`}
                  >
                    High Price
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {(showSortDropdown || showFilterDropdown) && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => {
            setShowSortDropdown(false);
            setShowFilterDropdown(false);
          }}
        />
      )}

      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        {activeTab === "trending" ? "Trending NFTs" : "Top NFTs"}{" "}
        <span className="text-gray-400 text-sm sm:text-base ml-2">
          {displayedNFTs.length} Items
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {displayedNFTs.map((nft) => (
          <NFTCard key={nft.id} {...nft} />
        ))}
      </div>
    </div>
  );
};

export default TrendingNFTs;