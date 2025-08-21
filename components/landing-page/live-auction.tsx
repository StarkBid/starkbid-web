"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LiveAuction = () => {
  const sections = useMemo(
    () => [
      {
        title: "Exclusive Artworks",
        description: "Own rare and limited-edition digital masterpieces.",
        name: "artwork",
      },
      {
        title: "Music & Lyrics NFTs",
        description:
          "Buy and sell original music, lyrics, and soundtracks as NFTs.",
        name: "music",
      },
      {
        title: "Gaming Collectibles",
        description: "Trade in-game assets and rare collectibles.",
        name: "gaming",
      },
    ],
    [] // no deps, so this array is created only once
  );

  const nft = [
    {
      nftImg: "/live-auction.png",
      nftAlt: "artwork",
      userImg: "/avatar.png",
      userAlt: "user",
      user: "Jacksonito",
      isVerified: true,
      bidAmount: "0.965ETH",
      title: "Muititude #Facetag",
      description:
        "This information would contain a short description of the displayed NFT.",
    },
    {
      nftImg: "/live-auction.png",
      nftAlt: "music",
      userImg: "/avatar.png",
      userAlt: "user",
      user: "Jacksonito",
      isVerified: true,
      bidAmount: "0.965ETH",
      title: "Muititude #Facetag",
      description:
        "This information would contain a short description of the displayed NFT.",
    },
    {
      nftImg: "/live-auction.png",
      nftAlt: "gaming",
      userImg: "/avatar.png",
      userAlt: "user",
      user: "Jacksonito",
      isVerified: true,
      bidAmount: "0.965ETH",
      title: "Muititude #Facetag",
      description:
        "This information would contain a short description of the displayed NFT.",
    },
  ];

  const [isActive, setIsActive] = useState(sections[0].name);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % sections.length; // move to next index, loop back
      setIsActive(sections[index].name);
    }, 6000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [sections]);

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row gap-16 px-4">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col justify-start gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold leading-tight text-green-400">
              <span className="text-green">● </span> Live Auctions
            </h2>
            <p className="text-lg text-gray-300 max-w-md">
              Participate in real-time bidding wars on the most sought-after
              NFTs.
            </p>
          </div>

          {sections.map((item) => (
            <div key={item.name} onClick={() => setIsActive(item.name)}>
              <div
                className={`flex flex-col gap-2 pl-6 transition-all duration-300 ease-in-out ${
                  isActive === item.name
                    ? "border-l-4 border-green"
                    : "border-none"
                }`}
              >
                <h3
                  className={`text-2xl font-semibold transition-colors duration-500 ${
                    isActive === item.name
                      ? ""
                      : "text-[#8E9BAE] cursor-pointer"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-gray-400 text-base transition-all duration-500 ease-in-out ${
                    isActive === item.name ? "" : "hidden"
                  }`}
                >
                  {item.description}
                </p>
                <button
                  className={`w-fit mt-2 px-5 py-3 rounded-lg bg-[#1C1D1F] text-green-400 hover:underline transition-all duration-500 ease-in-out ${
                    isActive === item.name ? "" : "hidden"
                  }`}
                >
                  See More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col">
          {/* NFT Card */}
          <AnimatePresence mode="wait">
            {nft.map((item) => (
              <motion.div
                key={item.nftAlt}
                className={`relative rounded-xl overflow-hidden bg-gray-900 shadow-2xl w-full max-w-[683px] mx-auto ${
                  isActive === item.nftAlt ? "block" : "hidden"
                }`}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {/* NFT Image */}
                <Image
                  src={item.nftImg}
                  alt={item.nftAlt}
                  width={683}
                  height={591}
                  className="object-cover w-full h-full"
                  priority
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  {/* Top Info (currently empty) */}
                  <div className="flex justify-between items-start">
                    {/* (Add anything if needed later) */}
                  </div>

                  {/* Bottom Info */}
                  <div className="flex flex-col gap-4">
                    {/* User Info and Live Bid */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Image
                          src={item.userImg}
                          alt={item.userAlt}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span className="text-base">
                          By <strong>{item.user}</strong>
                        </span>
                        {item.isVerified ? (
                          <Image
                            src="/tick.png"
                            alt="Verified Tick"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        ) : null}
                      </div>

                      {/* Live Bid */}
                      <div className="flex flex-col items-end">
                        <div className="px-3 py-1 rounded-full text-base mb-1">
                          <span className="text-green">● </span>Live Bid
                        </div>
                        <h2 className="text-white font-bold text-xl">
                          {item.bidAmount}
                        </h2>
                      </div>
                    </div>

                    {/* Timer */}
                    <div className="flex flex-wrap gap-4 rounded-lg w-fit">
                      {[
                        { label: "days", value: "2" },
                        { label: "hrs", value: "20" },
                        { label: "mins", value: "10" },
                        { label: "secs", value: "18" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center justify-center bg-light_grey p-4 rounded-md min-w-[60px]"
                        >
                          <span className="text-xl font-bold">
                            {item.value}
                          </span>
                          <span className="text-[10px] uppercase">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Title and Place Bid Button */}
                    <div className="flex justify-between items-center p-4 rounded-lg">
                      <div>
                        <h1 className="text-xl font-bold mb-1">{item.title}</h1>
                        <p className="text-gray-300 text-base">
                          {item.description}
                        </p>
                      </div>

                      <button className="bg-purple hover:bg-purple/80 w-[165px] h-[50px] text-white text-sm font-semibold rounded-lg">
                        Place a Bid
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {/* Indicator */}
          <div className="flex gap-2 justify-center pt-6 sm:pt-2">
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => setIsActive(section.name)}
                className={`w-[84px] h-[5px] rounded-[30px] transition-colors duration-500 ease-in-out ${
                  isActive === section.name ? "bg-white" : "bg-[#1C1D1F]"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAuction;
