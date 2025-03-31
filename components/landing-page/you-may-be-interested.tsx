'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ArticleProps, articleData } from '@/constants/data';

const ArticleCard: React.FC<ArticleProps> = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-full overflow-hidden rounded-xl bg-black border border-deepGray flex flex-col transition-colors duration-300 hover:bg-darkGray"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={`/${imageUrl}`}
              alt={title}
              fill
              className={`object-cover transition-all duration-300 ease-in-out ${isHovered ? 'scale-[1.03]' : ''}`}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
        </div>
        {isHovered && (
          <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2  bg-white text-black px-4 py-2 rounded-md text-sm font-medium z-10 transition-all duration-300 hover:text-white opacity-100 shadow-md hover:bg-purple cursor-pointer">
            Read Article
          </button>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Interest: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-8 px-4">
      <div className="max-w-[85.5rem] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className='w-[46%]'>
            <h1 className="text-3xl font-bold mb-3">You might be interested by</h1>
            <p className="text-gray-300">
              We&apos;ve written a few articles about StarkBid and how to run your NFTs better. Stay
              updated with the latest in the world of NFTs, auctions, and blockchain innovations.
            </p>
          </div>
          <button className="bg-deepGray hover:bg-darkGray ease-linear transition-all text-white px-4 py-2 rounded-lg flex items-center">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2em] ">
          {articleData.map(article => (
            <ArticleCard
              key={article.id}
              {...article}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interest;