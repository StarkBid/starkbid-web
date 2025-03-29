"use client";
import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { nftItems } from "@/constants/data";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  // FIXME: Custom search handlers
  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // FIXME: Reduced threshold for better mobile experience
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      //FIXME: Reduced threshold for better mobile experience
      prevSlide();
    }
  };

  //FIXME: Mouse swipe handlers
  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setMouseDown(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mouseDown) {
      setEndX(e.pageX);
    }
  };

  const handleMouseUp = () => {
    if (mouseDown) {
      if (startX - endX > 50) {
        //FIXME: Reduced threshold for better responsiveness
        nextSlide();
      }
      if (startX - endX < -50) {
        //FIXME: Reduced threshold for better responsiveness
        prevSlide();
      }
      setMouseDown(false);
    }
  };

  const handleMouseLeave = () => {
    setMouseDown(false);
  };

  const goToSlide = (index: any) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActiveIndex(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % nftItems.length;
    goToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + nftItems.length) % nftItems.length;
    goToSlide(newIndex);
  };

  // FIXME: carousel for auto advancing, I can increase or decrease the time based on preferencr
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div
      className="mt-4 pb-6 sm:mt-6 md:mt-[22px] relative bg-black overflow-hidden rounded-xl w-full max-w-[1320px] mx-auto"
      style={{ height: "clamp(400px, 50vw, 525px)" }}
    >
      <div
        className="relative w-full h-full"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {nftItems.map((nft, index) => (
            <div
              key={nft.id}
              className="flex-shrink-0 w-full h-full relative"
              style={{
                backgroundImage: `url(/svgs/hero-bg.svg)`,
                backgroundSize: "cover",
                backgroundPositionY: "28%",
              }}
            >
              {/* Gradient overlay - positioned on top of the image */}
              <div
                className="absolute top-0 right-0 bottom-0 w-full md:w-4/5 lg:w-3/4 z-10"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(16, 18, 19, 0.95) 45%, rgba(16, 18, 19, 0) 70%)",
                  pointerEvents: "none", // Ensures clicks pass through to elements beneath
                }}
              ></div>

              {/* Content overlay */}
              <div className="absolute top-0 right-0 bottom-0 w-full sm:w-3/4 md:w-1/2 lg:w-[40%] z-20 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12">
                <h1 className="text-xl sm:text-2xl md:text-[24px] font-bold text-white mb-4 sm:mb-6">
                  {nft.title}
                </h1>

                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <span className="text-gray-400 text-sm sm:text-base mr-2">
                      Creator
                    </span>
                    <div className="flex items-center">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-600 mr-2 flex items-center justify-center text-xs text-white">
                        {nft.creator?.charAt(0) || "A"}
                      </div>
                      <span className="text-white text-sm sm:text-base">
                        {nft.creator || "Anonymous"}
                      </span>
                      {nft.verified && (
                        <div className="ml-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <Heart size={16} className="text-white" />
                  </div>
                </div>

                <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-3 sm:mb-0">
                    <span className="text-gray-400 text-sm block mb-1">
                      Current Bid
                    </span>
                    <div className="text-lg sm:text-xl font-bold text-white">
                      {nft.currentBid || "N/A"}
                    </div>
                  </div>
                  <button className="px-4 sm:px-7 py-2 rounded-md bg-purple-600 text-white text-sm sm:text-base hover:bg-purple-700 transition-colors">
                    Place a Bid
                  </button>
                </div>

                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {nft.description}{" "}
                  <span className="text-blue-400 cursor-pointer hover:underline">
                    Show More
                  </span>
                </p>

                <div className="flex gap-2 mb-4 sm:mb-6 text-sm sm:text-base">
                  <span className="text-gray-400">{nft.minted} minted</span>|
                  <span className="text-gray-400">{nft.timeLeft}</span>
                </div>

                <div className="flex">
                  <button className="flex-1 bg-white text-black py-2 sm:py-3 px-4 rounded hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base">
                    Mint for Free
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/80 rounded-full flex items-center justify-center text-white z-30 hover:bg-black/70 transition-colors"
          onClick={prevSlide}
        >
          <ArrowLeft size={16} className="sm:hidden" />
          <ArrowLeft size={24} className="hidden sm:block" />
        </button>
        <button
          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/80 rounded-full flex items-center justify-center text-white z-30 hover:bg-black/70 transition-colors"
          onClick={nextSlide}
        >
          <ArrowRight size={16} className="sm:hidden" />
          <ArrowRight size={24} className="hidden sm:block" />
        </button>

        {/* Indicator dots */}
        <div className="absolute sm:bottom-[-1rem] left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-[1000]">
          {nftItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-20 sm:w-20 bg-white"
                  : "w-20 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
