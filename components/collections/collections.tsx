"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { collectionsData } from "@/lib/collections-data";

interface CollectionsPageProps {
    activeTab: string;
    searchQuery: string;
    blockchain: string;
}

export default function CollectionsPage({ activeTab, searchQuery, blockchain }: CollectionsPageProps) {
    const [visibleCount, setVisibleCount] = useState(40);
    // const totalCollections = collectionsData.length;

    const loadMore = () => {
        setVisibleCount((prev) => prev + 40);
    };

    // Filter and sort collections based on props
    const filteredCollections = collectionsData
        .filter((collection) => {
            const matchesSearch = collection.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesBlockchain = blockchain ? collection.blockchain === blockchain : true;

            if (activeTab === "top-gainers") {
                return matchesSearch && matchesBlockchain && collection.change.startsWith("+");
            } else if (activeTab === "top-losers") {
                return matchesSearch && matchesBlockchain && collection.change.startsWith("-");
            }
            return matchesSearch && matchesBlockchain;
        })
        .sort((a, b) => {
            if (activeTab === "top-gainers" || activeTab === "top-losers") {
                const aChange = parseFloat(a.change);
                const bChange = parseFloat(b.change);
                return activeTab === "top-gainers" ? bChange - aChange : aChange - bChange;
            }
            return a.id - b.id;
        });

    const visibleCollections = filteredCollections.slice(0, visibleCount);
    const hasMoreCollections = visibleCount < filteredCollections.length;

    return (
        <div className="bg-black text-white min-h-screen">
            <div className="py-4 md:py-8">
                <div className="w-full overflow-x-auto">
                    <table className="w-full min-w-[800px] border-collapse">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-700">
                                <th className="py-2 md:py-3 text-left px-2 md:px-3 w-12 md:w-16 sticky left-0 bg-black z-30 text-xs md:text-sm">#</th>
                                <th className="py-2 md:py-3 sticky text-left bg-black z-30 min-w-[200px] md:min-w-[250px] text-xs md:text-sm">
                                    COLLECTION
                                </th>

                                <th className="py-2 md:py-3 text-left whitespace-nowrap min-w-[90px] text-xs md:text-sm">FLOOR PRICE</th>
                                <th className="py-2 md:py-3 text-left whitespace-nowrap min-w-[80px] text-xs md:text-sm">VOLUME</th>
                                <th className="py-2 md:py-3 text-left whitespace-nowrap min-w-[70px] text-xs md:text-sm">SALES</th>
                                <th className="py-2 md:py-3 text-left whitespace-nowrap min-w-[90px] text-xs md:text-sm">TOP OFFER</th>
                                <th className="py-2 md:py-3 text-right pr-2 md:pr-4 whitespace-nowrap min-w-[80px] text-xs md:text-sm">HOLDERS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visibleCollections.map((collection) => (
                                <tr key={collection.id} className="border-b border-gray-800 hover:bg-gray-900 group">
                                    <td className="py-3 md:py-4 pl-2 md:pl-4 sticky left-0 bg-black z-50 group-hover:bg-gray-900 group-hover:z-40 text-xs md:text-sm">{collection.id}</td>
                                    <td className="py-3 md:py-4 sticky bg-black z-30 group-hover:bg-gray-900 group-hover:z-40">
                                        <div className="flex gap-2 md:gap-3 items-center">
                                            <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                                                <Image
                                                    src={collection.image}
                                                    alt={collection.name}
                                                    width={60}
                                                    height={60}
                                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                                                />
                                                <Image
                                                    src={collection.chainicon}
                                                    alt={`${collection.name} blockchain icon`}
                                                    width={60}
                                                    height={60}
                                                    className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3"
                                                />
                                            </div>
                                            <div className="text-sm md:text-lg font-semibold truncate min-w-0">{collection.name}</div>
                                        </div>
                                    </td>

                                    <td className="py-3 md:py-4 group-hover:bg-gray-900 text-xs md:text-sm px-2">{collection.floorPrice}</td>
                                    <td className="py-3 md:py-4 group-hover:bg-gray-900 text-xs md:text-sm px-2">{collection.volume}</td>
                                    <td className={`py-3 md:py-4 group-hover:bg-gray-900 text-xs md:text-sm px-2 ${
                                        collection.change?.startsWith("+")
                                            ? "text-green"
                                            : collection.change?.startsWith("-")
                                                ? "text-red"
                                                : ""
                                    }`}>{collection.change}</td>
                                    <td className="py-3 md:py-4 group-hover:bg-gray-900 text-xs md:text-sm px-2">{collection.topOffer}</td>
                                    <td className="py-3 md:py-4 text-right pr-2 group-hover:bg-gray-900">
                                        <div className="flex flex-col items-end">
                                            <div className="text-xs md:text-sm">{collection.holders}</div>
                                            <div className="text-xs text-gray-500">{collection.holdersDetail}</div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-6 md:mt-8 text-center text-gray-400 text-sm md:text-base px-4">
                    Showing {visibleCollections.length} of {filteredCollections.length} collections
                </div>
                {hasMoreCollections && (
                    <div className="my-6 md:my-8 flex justify-center px-4">
                        <button
                            onClick={loadMore}
                            className="text-white bg-[#1C1D1F] py-2 px-4 rounded-lg hover:bg-[#2a2b2e] transition-colors flex items-center text-sm md:text-base"
                        >
                            <span>See more</span>
                            <ArrowRight size={16} className="ml-2" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}