

"use client";
import { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Eth from "@/public/Eth.png";
import Image1 from "@/public/Frame1.png"
import Image2 from "@/public/Frame2.png"
import Image3 from "@/public/Frame3.png"
import Image4 from "@/public/Frame4.png"


export interface TrendGam {
  id: string;
  title: string;
  floorPrice: number | string;
  totalVolume: number | string;
  image: string | StaticImageData;
}

// Removed the props interface since we're no longer passing sales as props

const BiggestGaming: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sales, setSales] = useState<TrendGam[]>([]);

  useEffect(() => {
    // Use the setCollections function to initialize the sales data
    const collections = [
      {
        id: '1',
        title: 'Daki Da',
        floorPrice: 0.12,
        totalVolume: 207,
        image: Image1
      },
      {
        id: '2',
        title: 'Birds of Damascus',
        floorPrice: 0.12,
        totalVolume: 207,
        image: Image2
      },
      {
        id: '3',
        title: 'Birds of Damascus',
        floorPrice: 0.12,
        totalVolume: 207,
        image: Image3
      },
      {
        id: '4',
        title: 'Birds of Damascus',
        floorPrice: 0.12,
        totalVolume: 207,
        image: Image4
      },
      
    ];
    
    setSales(collections);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 4 + sales.length) % sales.length);
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 4) % sales.length);
  };
 
  const getVisibleSales = () => {
    return sales.length > 4
      ? [...sales, ...sales].slice(currentIndex, currentIndex + 4)
      : sales;
  };
  
  return (
    <div className="w-full bg-[#111111] min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-medium">Biggest NFT Sales</h1>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {getVisibleSales().map((sale) => (
            <div
              key={sale.id}
              className="bg-[#1A1A1A] rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="aspect-square w-full overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={sale.image}
                  alt={sale.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white text-lg mb-4">{sale.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Floor Price</p>
                    <div className="flex items-center text-white">
                      <span className="w-4 h-7 mr-3">
                        <Image
                          width={500}
                          height={500}
                          src={Eth}
                          alt={sale.title}
                          className="w-full h-full object-cover"
                        />
                      </span>
                      {sale.floorPrice}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Total Volume</p>
                    <div className="flex items-center text-white">
                      <span className="w-4 h-7 mr-3">
                        <Image
                          width={500}
                          height={500}
                          src={Eth}
                          alt={sale.title}
                          className="w-full h-full object-cover"
                        />
                      </span>
                      {sale.totalVolume}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiggestGaming ;

