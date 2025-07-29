"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Filter from "@/components/nft-explorer/nft-filter-Bar";
import {
  Collection,
  mockCollections,
  sortOptions,
  LoadingState,
} from "@/types/collections.types";

export default function ProfileCollectionsGrid() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [sortFilter, setSortFilter] = useState("newest");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetchCollections = async () => {
    try {
      setLoadingState({ isLoading: true, error: null });

      // Simulate network delay - varies between 800-1200ms
      await new Promise((resolve) =>
        setTimeout(resolve, 800 + Math.random() * 400)
      );

      // Sometimes the API fails - happens in real life
      if (Math.random() < 0.15) {
        throw new Error("Network error");
      }

      setCollections(mockCollections);
      setLoadingState({ isLoading: false, error: null });
    } catch (err) {
      console.log("Fetch error:", err); // Debug
      setLoadingState({
        isLoading: false,
        error: "Something went wrong",
      });
    }
  };

  // TODO: add real API integration
  useEffect(() => {
    fetchCollections();
  }, []);

  const handleCollectionClick = (collection: Collection) => {
    console.log("Collection clicked:", collection); // Debug
    // TODO: add navigation when we have the detail page ready
  };

  // Simple sorting - handle common cases first
  const sortCollections = (collections: Collection[], sortType: string) => {
    if (sortType === "newest") {
      return [...collections].sort((a, b) => parseInt(b.id) - parseInt(a.id));
    }

    if (sortType === "oldest") {
      return [...collections].sort((a, b) => parseInt(a.id) - parseInt(b.id));
    }

    if (sortType === "last_week") {
      // TODO: implement proper date sorting when we have real data
      return [...collections].sort((a, b) => parseInt(b.id) - parseInt(a.id));
    }

    if (sortType === "volume_high") {
      return [...collections].sort(
        (a, b) => parseFloat(b.totalVolume) - parseFloat(a.totalVolume)
      );
    }

    if (sortType === "volume_low") {
      return [...collections].sort(
        (a, b) => parseFloat(a.totalVolume) - parseFloat(b.totalVolume)
      );
    }

    // Fallback
    return collections;
  };

  const sortedCollections = sortCollections(collections, sortFilter);

  // Quick loading skeleton - will improve later
  if (loadingState.isLoading) {
    return (
      <div className="w-full">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="border-2 bg-transparent border-[#23242A] rounded-xl shadow animate-pulse"
              >
                <div className="h-[160px] bg-[#23242A] rounded-t-xl"></div>
                <div className="p-4 space-y-3">
                  <div className="h-6 bg-[#23242A] rounded w-3/4"></div>
                  <div className="flex justify-between bg-[#1C1D1F] p-3 rounded-lg">
                    <div className="space-y-2">
                      <div className="h-4 bg-[#23242A] rounded w-16"></div>
                      <div className="h-6 bg-[#23242A] rounded w-12"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-[#23242A] rounded w-24"></div>
                      <div className="h-6 bg-[#23242A] rounded w-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Basic error state - could be better
  if (loadingState.error) {
    return (
      <div className="w-full">
        <div className="py-8">
          <div className="text-center">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Failed to load collections
            </h3>
            <p className="text-[#8E9BAE] mb-6">{loadingState.error}</p>
            <button
              onClick={fetchCollections}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="py-8">
        <div className="mb-8">
          <div>
            <Filter
              searchTerm=""
              setSearchTerm={() => {}} // TODO: implement search when needed
              sortOption={sortFilter}
              setSortOption={setSortFilter}
              isFiltersOpen={false}
              setIsFiltersOpen={() => {}}
            />
          </div>

          <div className="flex items-center justify-start mt-4 ">
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 text-[#8E9BAE] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
                aria-label="Sort collections by creation date"
                aria-expanded={showSortDropdown}
                aria-haspopup="listbox"
              >
                <span className="text-base font-medium">Created:</span>
                <span className="text-white font-medium">
                  {sortOptions.find((opt) => opt.value === sortFilter)?.label}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showSortDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isClient && showSortDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowSortDropdown(false)}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-[#1C1D1F] border border-[#23242A] rounded-lg shadow-lg z-20 py-2"
                    role="listbox"
                    aria-label="Filter options"
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortFilter(option.value);
                          setShowSortDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-[#23242A] transition-colors focus:outline-none focus:bg-[#23242A] ${
                          sortFilter === option.value
                            ? "text-purple-500 bg-[#23242A]"
                            : "text-white"
                        }`}
                        role="option"
                        aria-selected={sortFilter === option.value}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {sortedCollections.map((collection: Collection) => (
            <div
              key={collection.id}
              className=" border-2 bg-transparent border-[#23242A] rounded-xl shadow hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => handleCollectionClick(collection)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCollectionClick(collection);
                }
              }}
              aria-label={`View ${collection.name} collection`}
            >
              <div className="relative h-[160px] p-3">
                <Image
                  src={collection.bannerImage}
                  alt={`${collection.name} banner`}
                  width={400}
                  height={160}
                  className="w-full h-full object-cover  rounded-xl"
                />

                <div className="absolute -bottom-6 left-7 z-10">
                  <div className="w-20 h-20 rounded-full  overflow-hidden border-[4px] border-[#181A1B] shadow-lg">
                    <Image
                      src={collection.profileImage}
                      alt={`${collection.name} profile`}
                      width={55}
                      height={55}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-10 pb-4 px-4 space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-semibold text-lg truncate">
                    {collection.name}
                  </h3>
                  {isClient && collection.isVerified && (
                    <Image
                      src="/verified.png"
                      alt="Verified collection"
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain flex-shrink-0"
                    />
                  )}
                </div>

                <div className="flex justify-between bg-[#1C1D1F] p-3 rounded-lg">
                  <div>
                    <p className="text-[#A0AEC0] text-sm font-medium mb-1">
                      Owners
                    </p>
                    <p className="text-white font-bold text-xl">
                      {collection.owners.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#A0AEC0] text-sm font-medium mb-1">
                      Total Volume
                    </p>
                    <p className="text-white font-bold text-xl">
                      {collection.totalVolume} ETH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
