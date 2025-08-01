import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

type Offer = {
    id: number;
    user: string;
    avatar: string;
    isVerified: boolean;
    amount: string;
    usdAmount: string;
    time: string;
};

const DescriptionPage = () => {
    const [isBidsOffersOpen, setIsBidsOffersOpen] = useState(false);
    const [isNftDetailsOpen, setIsNftDetailsOpen] = useState(true);

    const offers: Offer[] = [
        {
            id: 1,
            user: "0x123...456",
            avatar: 'creator_nft.png',
            isVerified: true,
            amount: "1.25 ETH",
            usdAmount: "$3,250",
            time: "2 hours ago"
        },
        {
            id: 2,
            user: "0x789...012",
            avatar: 'creator_nft.png',
            isVerified: true,
            amount: "1.00 ETH",
            usdAmount: "$2,600",
            time: "1 day ago"
        },
        {
            id: 3,
            user: "0x456...789",
            avatar: 'creator_nft.png',
            isVerified: false,
            amount: "0.85 ETH",
            usdAmount: "$2,210",
            time: "2 days ago"
        },
        {
            id: 4,
            user: "0xabc...def",
            avatar: 'creator_nft.png',
            isVerified: true,
            amount: "0.75 ETH",
            usdAmount: "$1,950",
            time: "3 days ago"
        }
    ];

    return (
        <div className="">
            <div className="mb-6 border-b border-gray-700 pb-7 lg:w-1/2">
                <h3 className="text-white text-lg font-semibold mb-4">About This Asset</h3>
                <p className="text-lg leading-loose tracking-wider text-gray-400">
                    The pink-blackened horned knight is an embodiment of peace, unity and
                    strength. Striking look of intricate carvings that tell the stories of ancestors
                    long past. Every ancient story from.
                </p>
            </div>

            <div className="mb-6 lg:w-1/2">
                <h3 className="text-white text-lg font-semibold mb-4">About This Collection</h3>
                <div className="flex items-center gap-3 mb-4">
                    <p className="text-gray-400 text-sm">Collection by</p>
                    <Image src={'/creator_nft.png'} alt="creatornft" width={50} height={50} />
                    <p className="text-white font-medium">x0023y...yrte</p>
                </div>
                <p className="text-lg leading-loose tracking-wider text-gray-400">
                    The pink-blackened horned knight is an embodiment of peace, unity and
                    strength. Striking look of intricate carvings that tell the stories of ancestors
                    long past. Every ancient story from. The pink-blackened horned knight is an
                    embodiment of peace, unity and strength. Striking look of intricate carvings
                    that tell the stories of ancestors long past. Every ancient story from.
                </p>
                <div className="flex items-center pt-4 text-gray-400 text-[1rem]">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Created on 20th February 2024
                </div>
            </div>

            <div className="bg-[#1C1D1F] rounded-lg p-6 lg:w-1/2">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setIsBidsOffersOpen(!isBidsOffersOpen)}
                >
                    <h3 className="text-white text-lg font-semibold">Bids/Offers</h3>
                    <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isBidsOffersOpen ? 'rotate-180' : ''
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                {isBidsOffersOpen && ( (offers.length > 0) ? (
                    <div className="space-y-4 mt-4">
                         {offers.map((offer) => (
                            <div key={offer.id} className="flex items-center justify-between p-4 bg-[#2A2B2F] rounded-lg hover:bg-[#323437] transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#3A3B3F] rounded-full flex items-center justify-center">
                                        <Image
                                            src={offer.avatar}
                                            alt={offer.user}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="text-white font-medium">{offer.user}</p>
                                            {offer.isVerified && (
                                                <Image src={'/verified.png'} alt="verified" width={16} height={16} />
                                            )}
                                        </div>
                                        <p className="text-gray-400 text-sm">{offer.time}</p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-white font-semibold">{offer.amount}</p>
                                    <p className="text-gray-400 text-sm">{offer.usdAmount}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 ) : (
                    <div className="mt-4">
                        <div className="text-center py-8">
                            <div className="w-16 h-16 mx-auto mb-4 bg-[#2A2B2F] rounded-lg flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 3l18 18"
                                    />
                                </svg>
                            </div>

                            <h4 className="text-gray-300 text-base font-medium mb-2">
                                No offers/bids placed yet.
                            </h4>
                            <p className="text-gray-500 text-sm">
                                Make your first bid here!
                            </p>
                        </div>
                    </div>
                 ))}
            </div>


            <div className="bg-[#1C1D1F] p-6 rounded-lg mt-4 lg:w-1/2">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setIsNftDetailsOpen(!isNftDetailsOpen)}
                >
                    <h3 className="text-white text-lg font-semibold">NFT Details</h3>
                    <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isNftDetailsOpen ? 'rotate-180' : ''
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                {isNftDetailsOpen && (
                    <div className="space-y-3 mt-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Token ID</span>
                            <span className="text-[#8C62F2] cursor-pointer hover:underline">45634</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Token Standard</span>
                            <span className="text-white">ERC345</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Collection Number</span>
                            <span className="text-white">#23</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Chain</span>
                            <span className="text-white">Ethereum</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DescriptionPage;
