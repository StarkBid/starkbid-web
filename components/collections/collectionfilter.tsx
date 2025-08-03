"use client";
import { useState } from "react";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

interface CollectionFiltersProps {
    onFilterChange: (filters: {
        activeTab: string;
        searchQuery: string;
        blockchain: string;
    }) => void;
}

export default function CollectionFilters({ onFilterChange }: CollectionFiltersProps) {
    const [activeTab, setActiveTab] = useState("trending");
    const [blockchain, setBlockchain] = useState("Ethereum");
    const [showTrendingDropdown, setShowTrendingDropdown] = useState(false);
    const [showBlockchainDropdown, setShowBlockchainDropdown] = useState(false);
    const [selectedTrending, setSelectedTrending] = useState("Trending");
    const [timeFilter, setTimeFilter] = useState('1h');
    const [searchQuery, setSearchQuery] = useState("");

    // Time filter options
    const timeOptions = [
        { value: '1h', label: '1h' },
        { value: '6h', label: '6h' },
        { value: '24h', label: '24h' },
        { value: '3d', label: '3d' },
        { value: '7d', label: '7d' },
    ];

    // Trending filter options
    const trendingOptions = [
        { value: "trending", label: "Hot" },
        { value: "top-gainers", label: "Top" },
        { value: "top-losers", label: "Down" },
    ];

    // Blockchain options
    const blockchainOptions = [
        { value: "ethereum", label: "Ethereum" },
        { value: "starknet", label: "Starknet" },
        { value: "solana", label: "Solana" },
        { value: "aztec", label: "Aztec" },
    ];

    const handleTrendingSelect = (option: { value: string; label: string }) => {
        setSelectedTrending(option.label);
        setActiveTab(option.value);
        setShowTrendingDropdown(false);
        onFilterChange({ activeTab: option.value, searchQuery, blockchain });
    };

    const handleBlockchainSelect = (chain: string) => {
        setBlockchain(chain);
        setShowBlockchainDropdown(false);
        onFilterChange({ activeTab, searchQuery, blockchain: chain });
    };

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        onFilterChange({ activeTab, searchQuery: value, blockchain });
    };

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        onFilterChange({ activeTab: tab, searchQuery, blockchain });
    };

    return (
        <div className="bg-black text-white w-full pt-8 relative">
            {/* Click outside to close dropdowns */}
            {(showTrendingDropdown || showBlockchainDropdown) && (
                <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => {
                        setShowTrendingDropdown(false);
                        setShowBlockchainDropdown(false);
                    }}
                />
            )}

            <div className="block md:hidden">
                <div className="px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            {trendingOptions.map((option) => (
                                <button
                                    key={option.value}
                                    className={`py-2 text-sm font-medium ${activeTab === option.value ? "bg-[#1C1D1F]" : "bg-none"
                                        } text-white px-4 rounded-md`}
                                    onClick={() => handleTabChange(option.value)}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                        
                        <button className="p-2">
                            <Image 
                                src="/filter.png" 
                                alt="Filter" 
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>
                </div>

                {/* Search bar */}
                <div className="px-4 py-3">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={16} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by NFTs"
                            className="w-full pl-10 pr-4 py-3 rounded-md bg-[#1C1D1F] text-white placeholder-gray-400 focus:outline-none"
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                        />
                    </div>
                </div>

                {/* Collection title */}
                <div className="px-4 py-3">
                    <h2 className="text-lg font-medium">
                        {trendingOptions.find(option => option.value === activeTab)?.label} Collections
                    </h2>
                </div>

                {/* Time filters and blockchain dropdown in column layout */}
                <div className="px-4 space-y-4">
                    {/* Time period filters */}
                    <div className="flex items-center justify-between py-1 px-2 bg-[#1C1D1F] rounded-md">
                        {timeOptions.map(option => (
                            <button
                                key={option.value}
                                className={`flex-1 py-2 rounded-md text-sm font-medium ${timeFilter === option.value ? 'bg-black text-white' : 'text-gray-300 hover:text-white'}`}
                                onClick={() => setTimeFilter(option.value)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>

                    {/* Blockchain dropdown and View all button */}
                    <div className="flex items-center gap-3 w-full">
                        <div className="relative flex-1">
                            <button
                                className="flex items-center justify-between py-2.5 px-4 bg-[#1C1D1F] rounded-md text-sm w-full"
                                onClick={() => {
                                    setShowBlockchainDropdown(!showBlockchainDropdown);
                                    setShowTrendingDropdown(false);
                                }}
                            >
                                <span className="text-white">{blockchain}</span>
                                <ChevronDown size={16} className="ml-2 text-gray-400" />
                            </button>
                            {showBlockchainDropdown && (
                                <div className="absolute left-0 top-full mt-2 w-full bg-[#1C1D1F] rounded-md shadow-xl z-[100] border border-gray-600">
                                    {blockchainOptions.map((option, index) => (
                                        <button
                                            key={option.value}
                                            className={`block px-4 py-3 text-sm text-white hover:bg-[#292929] w-full text-left transition-colors ${
                                                index === 0 ? 'rounded-t-md' : ''
                                            } ${
                                                index === blockchainOptions.length - 1 ? 'rounded-b-md' : ''
                                            }`}
                                            onClick={() => handleBlockchainSelect(option.label)}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button className="flex items-center justify-center py-2.5 px-4 bg-[#1C1D1F] rounded-md text-sm text-white flex-1">
                            <span>View all</span>
                            <ArrowRight size={16} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden md:block">
                {/* Top navigation */}
                <div className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                        {trendingOptions.map((option) => (
                            <button
                                key={option.value}
                                className={`py-2 text-sm font-medium ${activeTab === option.value ? "bg-[#1C1D1F]" : "bg-none"
                                    } text-white px-4 rounded-md`}
                                onClick={() => handleTabChange(option.value)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search and filter section */}
                <div className="px-4 py-3">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Search bar */}
                        <div className="relative w-full md:w-[30%]">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search size={16} className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by Collections"
                                className="w-full pl-10 pr-4 py-2 rounded-md bg-[#1C1D1F] text-white placeholder-gray-400 focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e.target.value)}
                            />
                        </div>

                        {/* Filter buttons */}
                        <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
                            {/* Filters dropdown */}
                            <button className="flex items-center justify-between py-3 px-8 bg-[#1C1D1F] rounded-md text-xs">
                                <span>Filters</span>
                                <ChevronDown size={14} className="ml-2" />
                            </button>

                            {/* Trending dropdown */}
                            <div className="relative">
                                <button
                                    className="flex items-center justify-between py-3 px-8 bg-[#1C1D1F] rounded-md text-xs"
                                    onClick={() => {
                                        setShowTrendingDropdown(!showTrendingDropdown);
                                        setShowBlockchainDropdown(false);
                                    }}
                                >
                                    <span>{selectedTrending}</span>
                                    <ChevronDown size={14} className="ml-2" />
                                </button>
                                {showTrendingDropdown && (
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-[#1C1D1F] rounded-md shadow-xl z-50 border border-gray-600">
                                        {trendingOptions.map((option, index) => (
                                            <button
                                                key={option.value}
                                                className={`block px-4 py-3 text-sm text-white hover:bg-[#292929] w-full text-left transition-colors ${
                                                    index === 0 ? 'rounded-t-md' : ''
                                                } ${
                                                    index === trendingOptions.length - 1 ? 'rounded-b-md' : ''
                                                }`}
                                                onClick={() => handleTrendingSelect(option)}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="px-4 py-3">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                            {/* Collection title */}
                            <div className="flex items-center mb-4 md:mb-0">
                                {trendingOptions.find(option => option.value === activeTab)?.label}
                                <span className="ml-2 text-sm text-gray-400">5,700 Creators</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                {/* Time period filters */}
                                <div className="flex items-center justify-between py-1 px-1 bg-[#1C1D1F] rounded-md text-xs overflow-hidden">
                                    {timeOptions.map(option => (
                                        <button
                                            key={option.value}
                                            className={`px-3 py-2 rounded-lg text-xs ${timeFilter === option.value ? 'bg-black' : ''}`}
                                            onClick={() => setTimeFilter(option.value)}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                                {/* Blockchain dropdown */}
                                <div className="relative">
                                    <button
                                        className="flex items-center justify-between py-3 px-8 bg-[#1C1D1F] rounded-md text-xs"
                                        onClick={() => {
                                            setShowBlockchainDropdown(!showBlockchainDropdown);
                                            setShowTrendingDropdown(false);
                                        }}
                                    >
                                        <span>{blockchain}</span>
                                        <ChevronDown size={14} className="ml-2" />
                                    </button>
                                    {showBlockchainDropdown && (
                                        <div className="absolute right-0 top-full mt-2 w-48 bg-[#1C1D1F] rounded-md shadow-xl z-50 border border-gray-600">
                                            {blockchainOptions.map((option, index) => (
                                                <button
                                                    key={option.value}
                                                    className={`block px-4 py-3 text-sm text-white hover:bg-[#292929] w-full text-left transition-colors ${
                                                        index === 0 ? 'rounded-t-md' : ''
                                                    } ${
                                                        index === blockchainOptions.length - 1 ? 'rounded-b-md' : ''
                                                    }`}
                                                    onClick={() => handleBlockchainSelect(option.label)}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}