// components/NFTCollectionSection.tsx
import React from 'react';
import NFTCollectionCard from './nftcollectioncard';

const NFTCollectionSection = () => {
  // Sample data - replace with your actual images
  const nftCollectionData = [
    {
      id: 1,
      title: "The Seal Man",
      creator: "JacksonRio",
      creatorAvatar: "/creator_nft.png",
      isVerified: true,
      currentBid: "0.556 ETH",
      bidCount: 24,
      timeLeft: "1d 5h left",
      image: "/chicken.png", // Replace with actual image path
      likes: 56
    },
    {
      id: 2,
      title: "The Seal Man",
      creator: "JacksonRio",
      creatorAvatar: "/creator_nft.png",
      isVerified: true,
      currentBid: "0.556 ETH",
      bidCount: 24,
      timeLeft: "1d 5h left",
      image: "/building.png", // Replace with actual image path
      likes: 42
    },
    {
      id: 3,
      title: "The Seal Man",
      creator: "JacksonRio",
      creatorAvatar: "/creator_nft.png",
      isVerified: true,
      currentBid: "0.556 ETH",
      bidCount: 24,
      timeLeft: "1d 5h left",
      image: "/hand.png", // Replace with actual image path
      likes: 73
    },
    {
      id: 4,
      title: "The Seal Man",
      creator: "JacksonRio",
      creatorAvatar: "/creator_nft.png",
      isVerified: true,
      currentBid: "0.556 ETH",
      bidCount: 24,
      timeLeft: "1d 5h left",
      image: "/vr.png", // Replace with actual image path
      likes: 38
    }
  ];

  return (
    <div className="w-full px-4 sm:px-0 py-8 md:py-12">
      {/* Section Header */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-2">More from this collection</h2>
        <p className="text-gray-400 text-sm">Browse through other similar arts from this collection</p>
      </div>

      {/* NFT Cards Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {nftCollectionData.map((nft) => (
          <NFTCollectionCard key={nft.id} data={nft} />
        ))}
      </div> */}

      {/* Alternative with more spacing and better breakpoints */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8">
  {nftCollectionData.map((nft) => (
    <NFTCollectionCard key={nft.id} data={nft} />
  ))}
</div> */}


      {/* If you want even larger cards, use this version */}

      <div className="w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {nftCollectionData.map((nft) => (
            <NFTCollectionCard key={nft.id} data={nft} />
          ))}
        </div>
      </div>



    </div>
  );
};

export default NFTCollectionSection;
