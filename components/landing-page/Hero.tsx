"use client";
import Image from "next/image";
import { useState } from "react";



const slides = [
  { id: 1, img: "/image/heroimage.png", title: "The Pink-Blackened Horned Knight", bid: "0.956 ETH" }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const newIndex = (prev + 1) % slides.length;
      console.log(`Next button clicked. New index: ${newIndex}`);
      return newIndex;
    });
  };

  
  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const newIndex = (prev - 1 + slides.length) % slides.length;
      console.log(`Previous button clicked. New index: ${newIndex}`);
      return newIndex;
    });
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">
      
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={slides[currentSlide].img}
          alt="Hero"
          className="absolute object-contain h-full"
          style={{ height: "30rem", width: "auto", left: "-10px", top: "-40px" }}
        />
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-l from-[#101213] via-[#101213]/80 to-transparent" />

      
      <div className="absolute flex flex-row justify-between items-center px-4 w-full top-1/2 transform -translate-y-1/2">
        
        <button onClick={prevSlide} className="bg-[#000000] rounded-full w-10 h-10 flex items-center justify-center">
          <img src="/image/right.png" alt="Previous" className="w-[1.2rem] h-[1.2rem]" />
        </button>

        
        <button onClick={nextSlide} className="bg-[#000000] rounded-full w-10 h-10 flex items-center justify-center">
          <img src="/image/left.png" alt="Next" className="w-[2rem] h-[3rem]" />
        </button>
      </div>

      
      <div className="absolute left-[55rem] top-0 bottom-0 flex items-center pl-12 pr-6 w-[50%] text-white z-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold leading-tight">{slides[currentSlide].title}</h1>

          
          <div className="flex items-center gap-[9rem]">
            <div className="flex items-center gap-3">
              <h4 className="text-[#8E9BAE] text-[13px]">Creator</h4>
              <img src="/image/group.png" alt="creator" className="w-6 h-6" />
              <h4 className="text-[13px]">Jacksonito</h4>
              <img src="/image/vector.png" alt="verified" className="w-4 h-4" />
            </div>

            
            <div className="flex items-center">
              <button
                onClick={() => console.log("Heart button clicked!")}
                style={{ border: "none", background: "none", cursor: "pointer" }}
              >
                <img src="/image/heart.png" alt="Like" />
              </button>
            </div>
          </div>

          
          <div className="flex flex-row gap-[9rem] items-center text-1xl">
            <div>
              <h4 className="mb-1 text-[14px]">Current Bid</h4>
              <h3 className="text-xl font-semibold mb-3">{slides[currentSlide].bid}</h3>
            </div>
            <div>
              <button className="bg-[#8C62F2] rounded-xl py-2 px-4 w-fit font-semibold">Place a Bid</button>
            </div>
          </div>

          
          <p className="text-[14px] text-[#ffffff]">
            The pink-blackened horned knight is an embodiment of <br /> peace, unity, and strength. Striking look of intricate carvings <br />
            that tell the stories of ancestors long past. Every ancient <br />
            story from... <span className="text-[#ffffff] cursor-pointer">Show more</span>
          </p>

          
          <div className="flex gap-4 text-[#ffffff] text-sm">
            <span>24 minted</span>
            <span>|</span>
            <span>1d 9h left</span>
          </div>

          
          <button className="bg-[#ffffff] text-black font-semibold py-2 px-4 rounded-xl w-[22rem]">Mint for Free</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;



