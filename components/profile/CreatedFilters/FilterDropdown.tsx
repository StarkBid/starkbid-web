'use client';

import React, { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { CreatedFiltersState } from './CreatedFilters.types';
import Image from 'next/image';

interface FilterDropdownProps {
    filters: CreatedFiltersState;
    onChange: (newFilters: CreatedFiltersState) => void;
    isOwner: boolean;
}

const chainIcons = {
    starknet: '/eth.png',
    ethereum: '/starknet.png',
};


const FilterDropdown: React.FC<FilterDropdownProps> = ({
    filters,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [sections, setSections] = useState({
        blockchain: true,
        collection: false,
        marketplace: false,
        traits: false,
    });

    const toggleSection = (section: keyof typeof sections) => {
        setSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const handleBlockchainChange = (blockchain: string, isChecked: boolean) => {
        onChange({
            ...filters,
            blockchain: isChecked ? blockchain as CreatedFiltersState['blockchain'] : 'all',
        });
    };

    const handleStatusChange = (status: string) => {
        onChange({
            ...filters,
            status: status as CreatedFiltersState['status'],
        });
    };

    const handleMarketplaceChange = (marketplace: string, isChecked: boolean) => {
        console.log(marketplace, isChecked);
    };



    return (
        <div className="relative">
            <button
                className="flex items-center gap-2 bg-[#1C1D1F] border border-[#2D2E32] rounded-lg px-4 py-2 text-white hover:bg-[#2D2E32] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-[#101213] border border-[#101213] rounded-lg shadow-lg z-10 p-4 space-y-6">
                    {/* Status Section */}
                    <div>
                        {/* Filter and Clear Filters side-by-side */}
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="text-white font-medium">Filter</h4>
                            <h4 className="text-[#8C62F2] cursor-pointer">
                                <u>Clear Filters</u>
                            </h4>
                        </div>

                        <h4 className="text-white font-medium my-4">Status</h4>

                        {/* 3-column grid for status options */}
                        <div className="grid grid-cols-3 gap-2 text-[14px]">
                            {['all', 'live auction', 'buy now'].map((status) => (
                                <div
                                    key={status}
                                    className={`cursor-pointer text-center p-[0.5px] rounded border ${filters.status === status
                                            ? 'bg-[#1C1D1F] border-[#8C62F2]'
                                            : 'bg-[#2A2B2E] border-[#2A2B2E]'
                                        }`}
                                    onClick={() => handleStatusChange(status)}
                                >
                                    <span className="text-white capitalize">{status}</span>
                                </div>
                            ))}
                        </div>

                    </div>


                    {/* Blockchain Section */}
                    <div className="border-t border-[#2D2E32] pt-4">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleSection('blockchain')}
                        >
                            <h4 className="text-white font-medium mb-3">Blockchain</h4>
                            <ChevronDown
                                className={`w-4 h-4 text-white transition-transform ${sections.blockchain ? 'rotate-180' : ''
                                    }`}
                            />
                        </div>

                        {sections.blockchain && (
                            <div className="space-y-3">
                                {['starknet', 'ethereum'].map((chain) => (
                                    <label
                                        key={chain}
                                        className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-[#2D2E32]"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={filters.blockchain === chain}
                                            onChange={(e) => handleBlockchainChange(chain, e.target.checked)}
                                            className="w-4 h-4 rounded border border-[#292929] bg-transparent appearance-none cursor-pointer 
                       checked:after:bg-purple-500 checked:border-purple-500 
                       relative
                       checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:bg-purple
                       checked:after:text-xs
                       checked:after:left-[1px] checked:after:top-[-2px]"
                                        />
                                        <Image
                                            src={chainIcons[chain as keyof typeof chainIcons]}
                                            alt={`${chain} logo`}
                                            width={5} height={5}
                                            className="w-5 h-5"

                                        />
                                        <span className="text-white capitalize">{chain}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>


                    {/* Collections Section */}
                    <div className="border-t border-[#2D2E32] pt-4">
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection('collection')}>
                            <h4 className="text-white font-medium mb-3">Collections</h4>
                            <ChevronDown className={`w-4 h-4 text-white transition-transform ${sections.collection ? 'rotate-180' : ''}`} />
                        </div>
                        {sections.collection && (
                            <div className="space-y-3">
                                {/* Currency Dropdown */}
                                <div>
                                    <label className="block text-sm text-[#8E9BAE] mb-1">Currency</label>
                                    <select
                                        className="w-full bg-[#1C1D1F] text-white text-sm px-3 py-2 rounded border border-[#2D2E32] focus:outline-none"
                                        defaultValue="ETH"
                                    >
                                        <option value="ETH">ETH</option>
                                        <option value="USDC">USDC</option>
                                        <option value="DAI">DAI</option>
                                    </select>
                                </div>

                                {/* Min to Max Input */}
                                <div>
                                    <label className="block text-sm text-[#8E9BAE] mb-1">Price Range</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            placeholder="Min"
                                            className="w-1/2 px-2 py-1 text-sm bg-[#1C1D1F] border border-[#2D2E32] rounded text-white placeholder-gray-500"
                                        />
                                        <span className="text-white text-sm">to</span>
                                        <input
                                            type="number"
                                            placeholder="Max"
                                            className="w-1/2 px-2 py-1 text-sm bg-[#1C1D1F] border border-[#2D2E32] rounded text-white placeholder-gray-500"
                                        />
                                    </div>
                                </div>

                                {/* Apply Button */}
                                <div className="pt-2">
                                    <button
                                        className="w-full bg-[#1C1D1F] text-white text-sm py-2 rounded hover:bg-purple-700 transition-colors"
                                        onClick={() => {
                                            // Implement apply price filter logic here
                                            console.log('Apply clicked');
                                        }}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Marketplace Section */}
                    <div className="border-t border-[#2D2E32] pt-4">
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection('marketplace')}>
                            <h4 className="text-white font-medium mb-3">Marketplace</h4>
                            <ChevronDown className={`w-4 h-4 text-white transition-transform ${sections.marketplace ? 'rotate-180' : ''}`} />
                        </div>
                        {sections.marketplace && (
                            <div className="flex flex-wrap gap-4 mt-2">
                                {[
                                    { name: 'StartBid', icon: '/starkbid.png' },
                                    { name: 'OpenSea', icon: '/opensea.png' },
                                    { name: 'SudoSwap', icon: '/sudoswap.png' },
                                    { name: 'Rarible', icon: '/rarible.png' },
                                ].map(({ name, icon }) => (
                                    <label
                                        key={name}
                                        className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-[#2D2E32] cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            onChange={(e) => handleMarketplaceChange(name.toLowerCase(), e.target.checked)}
                                            className="w-4 h-4 rounded border border-[#292929] bg-transparent appearance-none cursor-pointer 
          checked:after:bg-purple-500 checked:border-purple-500 
          relative
          checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:bg-purple
          checked:after:text-xs
          checked:after:left-[1px] checked:after:top-[-2px]"
                                        />
                                        <Image
                                            src={icon}
                                            alt={`${name} icon`}
                                            width={16}
                                            height={16}
                                            className="w-4 h-4"
                                        />
                                        <span className="text-white text-sm">{name}</span>
                                    </label>
                                ))}
                            </div>
                        )}

                    </div>

                    {/* Traits Section */}
                    <div className="border-t border-[#2D2E32] pt-4">
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection('traits')}>
                            <h4 className="text-white font-medium">Properties / Traits</h4>
                            <ChevronDown className={`w-4 h-4 text-white transition-transform ${sections.traits ? 'rotate-180' : ''}`} />
                        </div>
                        {sections.traits && (
                            <div className="mt-2">
                                <p className="text-sm text-gray-400">[Insert trait filters here]</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;