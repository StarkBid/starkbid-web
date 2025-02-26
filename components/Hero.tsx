"use client";

import { useState, useEffect } from "react";
import { FC } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NextIcon, PrevIcon } from "../public/icons/icons";

const slides = [
  {
    id: 1,
    title: "Rarity Spectrum",
    description:
      "A color-coded NFT project where each artwork’s rarity is determined by its unique hue combinations and metadata traits.",
    image: "/hero-image.png",
    bid: "0.125ETH",
  },
  {
    id: 2,
    title: "Unique Artworks",
    description:
      "A color-coded NFT project where each artwork’s rarity is determined by its unique hue combinations and metadata traits.",
    image: "/hero-image.png",
    bid: "0.15ETH",
  },
  {
    id: 3,
    title: "Unique Artworks",
    description:
      "Discover unique artworks with distinct metadata traits in our exclusive collection.",
    image: "/hero-image.png",
    bid: "0.15ETH",
  },
  {
    id: 4,
    title: "Unique Artworks",
    description:
      "Discover unique artworks with distinct metadata traits in our exclusive collection.",
    image: "/hero-image.png",
    bid: "0.15ETH",
  },
];

const Hero: FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeSlide, isPaused]);

  const pauseAutoSlide = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 20000);
  };

  return (
    <div className="text-white pt-4 flex items-center px-5 justify-center w-full">
      <div className="w-6xl 2xl:max-w-[2560px] w-full">
        <div className="lg:flex lg:items-center lg:gap-2">
          <button
            onClick={() => {
              handlePrev();
              pauseAutoSlide();
            }}
            aria-label="Previous slide"
            className="p-[14px] rounded-lg bg-white/10 hover:bg-white/20 transition-colors lg:block hidden"
          >
            <PrevIcon />
          </button>
          <div
            className="bg-[url('/noise.png')] bg-cover bg-center bg-no-repeat xl:pt-20 xl:px-20 lg:pt-10 lg:px-10 md:px-6 md:py-10 px-4 py-10 rounded-[18px]"
            role="region"
            aria-label="Image carousel"
            tabIndex={0}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="lg:grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 w-full flex flex-col-reverse ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[activeSlide].id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, y: 50 }}
                  className="self-center text-center lg:text-left max-w-xl lg:min-h-[72px] min-h-[213px] flex flex-col xl:gap-4 lg:gap-2"
                >
                  <p className="font-medium text-sm leading-6 text-white/60">COLLECTIONS</p>
                  <h1 className="font-bold 2xl:text-[60px] xl:text-[45px] lg:text-[35px] md:text-[30px] text-[28px] leading-[63.9px]">
                    {slides[activeSlide].title}
                  </h1>
                  <p className="font-semibold 2xl:text-lg xl:text-base">
                    {slides[activeSlide].description}
                  </p>
                  <div>
                    <motion.button
                      className="bg-[#FAFAFA] lg:py-3 lg:px-5 px-[14px] py-2 rounded-lg text-black"
                      whileHover={{ scale: 1.05 }}
                    >
                      Bid Now for {slides[activeSlide].bid}
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[activeSlide].image}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex justify-center"
                >
                  <Image
                    src={slides[activeSlide].image}
                    alt={slides[activeSlide].title}
                    width={619}
                    height={386}
                    priority
                    className="max-w-full h-auto 2xl:w-[1000px] 2xl:h-[600px]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex justify-center mt-5 space-x-2">
              {slides.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-1 rounded transition-all lg:mt-14 ${
                    index === activeSlide
                      ? "bg-white lg:w-[200px] md:w-[100px] w-[50px]"
                      : "bg-white/20 lg:w-14 md:w-10 w-5"
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => {
                    setActiveSlide(index);
                    pauseAutoSlide();
                  }}
                />
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              handleNext();
              pauseAutoSlide();
            }}
            aria-label="Next slide"
            className="p-[14px] rounded-lg bg-white/10 hover:bg-white/20 transition-colors lg:block hidden"
          >
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;