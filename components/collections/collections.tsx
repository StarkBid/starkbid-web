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
            <div className="py-8">
                <div className="w-full overflow-x-auto">
                    <table className="w-full lg:w-full md:w-[1000px] sm:w-[800px] border-collapse">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-700">
                                <th className="py-3 text-left px-3 w-16 sticky left-0 bg-black z-30">#</th>
                                <th className="py-3 sticky text-left bg-black z-30">
                                    COLLECTION
                                </th>
                                <th className="py-3 text-left whitespace-nowrap hidden md:table-cell">COLLECTION ID</th>
                                <th className="py-3 text-left whitespace-nowrap">FLOOR PRICE</th>
                                <th className="py-3 text-left whitespace-nowrap hidden md:table-cell">VOLUME</th>
                                <th className="py-3 text-left whitespace-nowrap hidden md:table-cell">SALES</th>
                                <th className="py-3 text-left whitespace-nowrap hidden md:table-cell">TOP OFFER</th>
                                <th className="py-3 text-right pr-4 whitespace-nowrap hidden md:table-cell">HOLDERS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visibleCollections.map((collection) => (
                                <tr key={collection.id} className="border-b border-gray-800 hover:bg-gray-900 group ">
                                    <td className="py-4 pl-4 sticky left-0 bg-black z-50 group-hover:bg-gray-900 group-hover:z-40 min-w-[100px] sm:w-[150px]">{collection.id}</td>
                                    <td className="py-4 sticky bg-black z-30 min-w-[300px] sm:w-[150px] group-hover:bg-gray-900 group-hover:z-40">
                                        <div className="flex gap-3 items-center">
                                            <div className="relative w-10 h-10">
                                                <Image
                                                    src={collection.image}
                                                    alt={collection.name}
                                                    width={60}
                                                    height={60}
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <Image
                                                    src={collection.chainicon}
                                                    alt={`${collection.name} blockchain icon`}
                                                    width={60}
                                                    height={60}
                                                    className="w-4 h-4 rounded-full bg-white absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3"
                                                />
                                            </div>
                                            <div className="text-lg font-semibold truncate">{collection.name}</div>
                                        </div>
                                    </td>
                                    <td className="py-4 group-hover:bg-gray-900 hidden md:table-cell">{collection.floorId}</td>
                                    <td className="py-4 group-hover:bg-gray-900">{collection.floorPrice}</td>
                                    <td className="py-4 group-hover:bg-gray-900 hidden md:table-cell">{collection.volume}</td>
                                    <td className={`py-4 group-hover:bg-gray-900 hidden md:table-cell ${
                                        collection.change?.startsWith("+")
                                            ? "text-green"
                                            : collection.change?.startsWith("-")
                                                ? "text-red"
                                                : ""
                                    }`}>{collection.change}</td>
                                    <td className="py-4 group-hover:bg-gray-900 hidden md:table-cell">{collection.topOffer}</td>
                                    <td className="py-4 text-right pr-2 group-hover:bg-gray-900 hidden md:table-cell">
                                        <div className="flex flex-col items-end">
                                            <div>{collection.holders}</div>
                                            <div className="text-xs text-gray-500">{collection.holdersDetail}</div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    Showing {visibleCollections.length} of {filteredCollections.length} collections
                </div>
                {hasMoreCollections && (
                    <div className="my-8 flex justify-center">
                        <button
                            onClick={loadMore}
                            className="text-white bg-[#1C1D1F] py-2 px-4 rounded-lg hover:bg-[#2a2b2e] transition-colors flex items-center"
                        >
                            <span>See more</span>
                            <ArrowRight size={16} className="ml-2 md:hidden" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}