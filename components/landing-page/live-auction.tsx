"use client";

import React from "react";
import Image from "next/image";

const LiveAuction = () => {
  return (
    <section className="bg-black text-white pb-40 sm:py-20">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 sm:gap-16 px-4">
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

          <div className="flex flex-col gap-8">
            {/* Exclusive Artworks */}
            <div className="flex flex-col gap-2 border-none sm:border-l-4 sm:border-green sm:pl-6">
              <h3 className="text-2xl font-semibold">Exclusive Artworks</h3>
              <p className="text-gray-400 text-base">
                Own rare and limited-edition digital masterpieces.
              </p>
              <button className="w-fit mt-2 px-5 py-3 rounded-lg bg-[#1C1D1F] text-green-400 hover:underline">
                See More →
              </button>
            </div>

            {/* Music NFTs */}
            <div className="pl-6 hidden sm:block">
              <h3 className="text-2xl font-semibold text-gray-500">
                Music & Lyrics NFTs
              </h3>
            </div>

            {/* Gaming NFTs */}
            <div className="pl-6 hidden sm:block">
              <h3 className="text-2xl font-semibold text-gray-500">
                Gaming Collectibles
              </h3>
            </div>
          </div>
        </div>

        <div className="flex gap-[8px] sm:hidden">
          <button className="h-1 rounded-full transition-all duration-300 w-full bg-white" />
          <button className="h-1 rounded-full transition-all duration-300 w-full bg-[#1C1D1F]" />
          <button className="h-1 rounded-full transition-all duration-300 w-full bg-[#1C1D1F]" />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col">
          {/* NFT Card */}
          <div className="relative rounded-xl sm:overflow-hidden bg-gray-900 shadow-2xl w-full max-w-[683px] mx-auto">
            {/* NFT Image */}
            <Image
              src="/live-auction.png"
              alt="NFT Artwork"
              width={683}
              height={591}
              className="object-cover w-full h-full"
              priority
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

            {/* Overlay Content */}
            <div className="absolute top-[160px] sm:top-0 flex flex-col justify-between p-4">
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
                      src="/avatar.png"
                      alt="User Avatar"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-base">
                      By <strong>Jacksonito</strong>
                    </span>
                    <Image
                      src="/tick.png"
                      alt="Verified Tick"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>

                  {/* Live Bid */}
                  <div className="items-end hidden sm:flex sm:flex-col">
                    <div className="px-3 py-1 rounded-full text-base mb-1">
                      <span className="text-green">● </span>Live Bid
                    </div>
                    <h2 className="text-white font-bold text-xl">0.956 ETH</h2>
                  </div>
                </div>

                {/* Timer */}
                <div className="flex flex-wrap justify-between sm:justify-normal sm:gap-4 rounded-lg w-full sm:w-fit">
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
                      <span className="text-xl font-bold">{item.value}</span>
                      <span className="text-[10px] uppercase">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center sm:hidden">
                  <div className="px-3 py-1 rounded-full text-base mb-1">
                    <span className="text-green">● </span>Live Bid
                  </div>
                  <h2 className="text-white font-bold text-xl">0.956 ETH</h2>
                </div>

                {/* Title and Place Bid Button */}
                <div className="flex justify-between items-center gap-[5px] flex-col sm:flex-row sm:p-4 rounded-lg">
                  <div>
                    <h1 className="text-xl font-bold mb-1">
                      Muittude #Facetag
                    </h1>
                    <p className="text-gray-300 text-base">
                      This information would contain a short description of the
                      displayed NFT.
                    </p>
                  </div>

                  <button className="bg-purple hover:bg-purple/80 w-full sm:w-[165px] h-[50px] text-white text-sm font-semibold rounded-lg">
                    Place a Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          <div className="flex flex-col gap-2 mt-40">
            <h3 className="text-2xl font-semibold">Music & Lyrics NFTs</h3>
            <p className="text-gray-400 text-base">
              Buy and sell original music, lyrics, and soundtracks as NFTs.
            </p>
            <button className="w-fit mt-2 px-5 py-3 rounded-lg bg-[#1C1D1F] text-green-400 hover:underline">
              See More →
            </button>
          </div>
          <div className="flex gap-[8px] my-8">
            <button className="h-1 rounded-full transition-all duration-300 w-full bg-white" />
            <button className="h-1 rounded-full transition-all duration-300 w-full bg-[#1C1D1F]" />
            <button className="h-1 rounded-full transition-all duration-300 w-full bg-[#1C1D1F]" />
          </div>
          <div className="flex-1 flex flex-col">
            {/* NFT Card */}
            <div className="relative rounded-xl sm:overflow-hidden bg-gray-900 shadow-2xl w-full max-w-[683px] mx-auto">
              {/* NFT Image */}
              <Image
                src="/live-auction.png"
                alt="NFT Artwork"
                width={683}
                height={591}
                className="object-cover w-full h-full"
                priority
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute top-[160px] sm:top-0 flex flex-col justify-between p-4">
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
                        src="/avatar.png"
                        alt="User Avatar"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="text-base">
                        By <strong>Jacksonito</strong>
                      </span>
                      <Image
                        src="/tick.png"
                        alt="Verified Tick"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>

                    {/* Live Bid */}
                    <div className="items-end hidden sm:flex sm:flex-col">
                      <div className="px-3 py-1 rounded-full text-base mb-1">
                        <span className="text-green">● </span>Live Bid
                      </div>
                      <h2 className="text-white font-bold text-xl">
                        0.956 ETH
                      </h2>
                    </div>
                  </div>

                  {/* Timer */}
                  <div className="flex flex-wrap justify-between sm:justify-normal sm:gap-4 rounded-lg w-full sm:w-fit">
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
                        <span className="text-xl font-bold">{item.value}</span>
                        <span className="text-[10px] uppercase">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center sm:hidden">
                    <div className="px-3 py-1 rounded-full text-base mb-1">
                      <span className="text-green">● </span>Live Bid
                    </div>
                    <h2 className="text-white font-bold text-xl">0.956 ETH</h2>
                  </div>

                  {/* Title and Place Bid Button */}
                  <div className="flex justify-between items-center gap-[5px] flex-col sm:flex-row sm:p-4 rounded-lg">
                    <div>
                      <h1 className="text-xl font-bold mb-1">
                        Muittude #Facetag
                      </h1>
                      <p className="text-gray-300 text-base">
                        This information would contain a short description of
                        the displayed NFT.
                      </p>
                    </div>

                    <button className="bg-purple hover:bg-purple/80 w-full sm:w-[165px] h-[50px] text-white text-sm font-semibold rounded-lg">
                      Place a Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <div className="flex flex-col gap-2 mt-40">
            <h3 className="text-2xl font-semibold">Gaming Collectibles</h3>
            <p className="text-gray-400 text-base">
              Trade in-game assets and rare collectibles.
            </p>
            <button className="w-fit mt-2 px-5 py-3 rounded-lg bg-[#1C1D1F] text-green-400 hover:underline">
              See More →
            </button>
          </div>
          <div className="flex gap-[8px] my-8">
            <button className="h-1 rounded-full transition-all duration-300 w-full bg-white" />
            <button className="h-1 rounded-full transition-all duration-300 w-full bg-[#1C1D1F]" />
            <button className="h-1 rounded-full transition-all duration-300 w-full bg-[#1C1D1F]" />
          </div>
          <div className="flex-1 flex flex-col">
            {/* NFT Card */}
            <div className="relative rounded-xl sm:overflow-hidden bg-gray-900 shadow-2xl w-full max-w-[683px] mx-auto">
              {/* NFT Image */}
              <Image
                src="/live-auction.png"
                alt="NFT Artwork"
                width={683}
                height={591}
                className="object-cover w-full h-full"
                priority
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute top-[160px] sm:top-0 flex flex-col justify-between p-4">
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
                        src="/avatar.png"
                        alt="User Avatar"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="text-base">
                        By <strong>Jacksonito</strong>
                      </span>
                      <Image
                        src="/tick.png"
                        alt="Verified Tick"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>

                    {/* Live Bid */}
                    <div className="items-end hidden sm:flex sm:flex-col">
                      <div className="px-3 py-1 rounded-full text-base mb-1">
                        <span className="text-green">● </span>Live Bid
                      </div>
                      <h2 className="text-white font-bold text-xl">
                        0.956 ETH
                      </h2>
                    </div>
                  </div>

                  {/* Timer */}
                  <div className="flex flex-wrap justify-between sm:justify-normal sm:gap-4 rounded-lg w-full sm:w-fit">
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
                        <span className="text-xl font-bold">{item.value}</span>
                        <span className="text-[10px] uppercase">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center sm:hidden">
                    <div className="px-3 py-1 rounded-full text-base mb-1">
                      <span className="text-green">● </span>Live Bid
                    </div>
                    <h2 className="text-white font-bold text-xl">0.956 ETH</h2>
                  </div>

                  {/* Title and Place Bid Button */}
                  <div className="flex justify-between items-center gap-[5px] flex-col sm:flex-row sm:p-4 rounded-lg">
                    <div>
                      <h1 className="text-xl font-bold mb-1">
                        Muittude #Facetag
                      </h1>
                      <p className="text-gray-300 text-base">
                        This information would contain a short description of
                        the displayed NFT.
                      </p>
                    </div>

                    <button className="bg-purple hover:bg-purple/80 w-full sm:w-[165px] h-[50px] text-white text-sm font-semibold rounded-lg">
                      Place a Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAuction;
