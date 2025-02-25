"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const collections = [
    {
        name: "Daki Da",
        image: "/nft1.png",
        floorPrice: "0.12 ETH",
        totalVolume: "207 ETH",
    },
    {
        name: "Birds of Damascus",
        image: "/nft2.png",
        floorPrice: "0.12 ETH",
        totalVolume: "207 ETH",
    },
    {
        name: "Birds of Damascus",
        image: "/nft3.png",
        floorPrice: "0.12 ETH",
        totalVolume: "207 ETH",
    },
    {
        name: "Birds of Damascus",
        image: "/nft4.png",
        floorPrice: "0.12 ETH",
        totalVolume: "207 ETH",
    },
    {
        name: "Birds of Damascus",
        image: "/nft5.jpeg",
        floorPrice: "0.12 ETH",
        totalVolume: "207 ETH",
    },
    {
        name: "Birds of Damascus",
        image: "/nft5.jpeg",
        floorPrice: "0.12 ETH",
        totalVolume: "207 ETH",
    },
    {
        name: "Birds of Damascus",
        image: "/nft5.jpeg",
        floorPrice: "0.12 ETH",
        totalVolume: "207 ETH",
    },
    {
        name: "Birds of Damascus",
        image: "/nft5.jpeg",
        floorPrice: "0.12 ETH",
        totalVolume: "207 ETH",
    },
    {
        name: "Birds of Damascus",
        image: "/nft5.jpeg",
        floorPrice: "0.12 ETH",
        totalVolume: "207 ETH",
    },
];

export default function NotableCollections() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: string) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative w-full p-4 bg-gray-900 text-white">
            <h2 className="text-xl font-bold mb-4">Notable Collections</h2>
            <div className="relative">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 z-10 p-2 bg-gray-800 rounded-full top-1/2 -translate-y-1/2"
                >
                    <ChevronLeft size={24} />
                </button>
                <motion.div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
                >
                    {collections.map((collection, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[250px] bg-gray-800 p-4 rounded-lg shadow-lg"
                        >
                            <img
                                src={collection.image}
                                alt={collection.name}
                                className="w-full h-40 object-cover rounded-md mb-2"
                            />
                            <h3 className="font-semibold">{collection.name}</h3>
                            <div className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
                                {/* Headings */}
                                <div>Floor Price</div>
                                <div>Total Volume</div>

                                {/* Values with ETH logo */}
                                <div className="flex items-center gap-1">
                                    <img src="/eth_l.png" alt="ETH" className="w-4 h-4" />
                                    {collection.floorPrice}
                                </div>
                                <div className="flex items-center gap-1">
                                    <img src="/eth_l.png" alt="ETH" className="w-4 h-4" />
                                    {collection.totalVolume}
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 z-10 p-2 bg-gray-800 rounded-full top-1/2 -translate-y-1/2"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}
