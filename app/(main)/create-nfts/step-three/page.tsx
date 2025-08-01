"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BackButton from "@/components/create-nfts/common/BackButton";
import Image from "next/image";
import LazyBoysAvatar from "@/public/avatars/lazy-boys.svg";
import IceFletcherAvatar from "@/public/avatars/ice.png";
import UtopiaDreamsAvatar from "@/public/avatars/utopia.png";
import CreateCollectionModal from "./create-collection-modal";
import PaymentProcessingModal from "./payment-processing-modal";
import TransactionFailedModal from "./transaction-failed";

interface Collection {
  value: string;
  label: string;
  avatar: string;
  items: string;
}

interface BiddingType {
  value: string;
  label: string;
}

// Removed unused CollectionData interface

export default function AddToCollection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [isBiddingTypeOpen, setIsBiddingTypeOpen] = useState(false);
  const [selectedBiddingType, setSelectedBiddingType] = useState<BiddingType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isTransactionFailed, setIsTransactionFailed] = useState(false);

  const collections: Collection[] = [
    { value: "lazy-boys", label: "Lazy Boys Don't Lie", avatar: LazyBoysAvatar, items: "5,000 items" },
    { value: "ice-fletcher", label: "Ice Fletcher", avatar: IceFletcherAvatar, items: "5,000 items" },
    { value: "utopia-dreams", label: "Utopia Dreams", avatar: UtopiaDreamsAvatar, items: "5,000 items" },
  ];

  const biddingTypes: BiddingType[] = [
    { value: "public", label: "Public" },
    { value: "private", label: "Private" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleBiddingTypeDropdown = () => {
    setIsBiddingTypeOpen(!isBiddingTypeOpen);
  };

  const handleOptionClick = (collection: Collection) => {
    setSelectedCollection(collection);
    setIsOpen(false);
  };

  const handleBiddingTypeClick = (biddingType: BiddingType) => {
    setSelectedBiddingType(biddingType);
    setIsBiddingTypeOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateCollection = (collectionData: {
    name: string;
    number: string;
    description: string;
    url: string;
    coverPhoto: File | null;
  }) => {
    if (!collectionData.coverPhoto) {
      console.error("Cover photo is required.");
      return;
    }
  
    collections.push({
      value: collectionData.url,
      label: collectionData.name,
      avatar: URL.createObjectURL(collectionData.coverPhoto),
      items: "0 items",
    });
    setSelectedCollection({
      value: collectionData.url,
      label: collectionData.name,
      avatar: URL.createObjectURL(collectionData.coverPhoto),
      items: "0 items",
    });
  };

  const handleNext = () => {
    if (selectedCollection) {
      setIsProcessingPayment(true);
      setTimeout(() => {
        setIsProcessingPayment(false);
        setIsTransactionFailed(true);
      }, 5000);
    }
  };

  const handleCloseTransactionFailed = () => {
    setIsTransactionFailed(false);
  };

  const handleRetry = () => {
    setIsTransactionFailed(false);
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      console.log("Transaction successful after retry");
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
       
        <div className="mb-4 sm:mb-6">
          <BackButton className="text-sm sm:text-base" />
        </div>

        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
            Add To Collection
          </h1>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Please select the collection you want to add this NFT to or just create a new one.
          </p>
        </div>

      
        <div className="mb-6 sm:mb-8 bg-gray-400/10 px-3 sm:px-4 py-4 sm:py-5 rounded-md">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-purple overflow-hidden">
                <Image
                  src="/avatars/create-nft-pfp.png"
                  alt="User avatar"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center mb-1">
                <p className="text-sm sm:text-base font-bold text-white truncate">
                  @radicaldude84
                </p>
              </div>
              <p className="text-xs sm:text-sm text-white font-semibold truncate">
                352by_fc76
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <span className="inline-block text-xs bg-green text-black px-2 py-1 rounded-full font-medium">
                Connected
              </span>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Ethereum Blockchain
              </p>
            </div>
          </div>
        </div>

       
        <div className="mb-6 sm:mb-8">
          <label className="block text-sm sm:text-base font-medium text-white mb-2 sm:mb-3">
            Select a Collection
          </label>
          <div className="relative">
            <div
              className="flex items-center justify-between bg-[#292929] border border-darkerGray rounded-md py-3 px-3 sm:px-4 cursor-pointer min-h-[48px] sm:min-h-[52px]"
              onClick={toggleDropdown}
            >
              {selectedCollection ? (
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={selectedCollection.avatar}
                      alt={selectedCollection.label}
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm sm:text-base truncate">{selectedCollection.label}</span>
                  <span className="ml-auto text-gray-400 text-xs sm:text-sm flex-shrink-0">{selectedCollection.items}</span>
                </div>
              ) : (
                <span className="text-gray-400 text-sm sm:text-base">Select...</span>
              )}
              <svg
                className={`h-4 w-4 text-gray-400 transition duration-300 flex-shrink-0 ${
                  isOpen ? "transform rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-10 w-full bg-[#292929] border border-darkerGray rounded-md mt-2 py-2 max-h-60 overflow-y-auto"
              >
                {collections.map((collection) => (
                  <div
                    key={collection.value}
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 cursor-pointer hover:bg-white hover:bg-opacity-10"
                    onClick={() => handleOptionClick(collection)}
                  >
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={collection.avatar}
                        alt={collection.label}
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm sm:text-base truncate flex-1">{collection.label}</span>
                    <span className="text-gray-400 text-xs sm:text-sm flex-shrink-0">{collection.items}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Please Select a list from collections you generated.
          </p>
        </div>

 
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="flex-1 h-px bg-gray-600"></div>
          <span className="px-4 text-sm sm:text-base text-gray-400">Or</span>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

       
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
            Create New Collection (ERC-721)
          </h2>
          
      
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm sm:text-base font-medium text-white mb-2">
                Starting Price *
              </label>
              <input
                type="text"
                placeholder="e.g. 0.90"
                className="w-full bg-[#292929] border border-darkerGray rounded-md py-3 px-3 sm:px-4 text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
              />
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                This is the starting price of the assets, users can not bid below it.
              </p>
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-white mb-2">
                Bidding Type *
              </label>
              <div className="relative">
                <div
                  className="flex items-center justify-between bg-[#292929] border border-darkerGray rounded-md py-3 px-3 sm:px-4 cursor-pointer min-h-[48px] sm:min-h-[52px]"
                  onClick={toggleBiddingTypeDropdown}
                >
                  {selectedBiddingType ? (
                    <span className="text-sm sm:text-base text-white">{selectedBiddingType.label}</span>
                  ) : (
                    <span className="text-gray-400 text-sm sm:text-base">Select...</span>
                  )}
                  <svg
                    className={`h-4 w-4 text-gray-400 transition duration-300 flex-shrink-0 ${
                      isBiddingTypeOpen ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {isBiddingTypeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-10 w-full bg-[#292929] border border-darkerGray rounded-md mt-2 py-2 max-h-60 overflow-y-auto"
                  >
                    {biddingTypes.map((biddingType) => (
                      <div
                        key={biddingType.value}
                        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 cursor-pointer hover:bg-white hover:bg-opacity-10"
                        onClick={() => handleBiddingTypeClick(biddingType)}
                      >
                        <span className="text-sm sm:text-base truncate flex-1">{biddingType.label}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                Please choose if this collection bidding is going to be public or private.
              </p>
            </div>
          </div>
        </div>

      
        <div className="space-y-3 sm:space-y-4">
          <motion.button
            type="button"
            className="w-full bg-[#292929] hover:bg-[#3a3a3a] text-white font-medium py-3 sm:py-4 px-4 rounded-md transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={openModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Create New Collection
          </motion.button>

          <motion.button
            type="submit"
            className="w-full bg-purple hover:bg-purple/90 text-white font-medium py-3 sm:py-4 px-4 rounded-md transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
          >
            Next
          </motion.button>
        </div>

        <CreateCollectionModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onCreate={handleCreateCollection}
        />
      </div>

      <PaymentProcessingModal
        isOpen={isProcessingPayment}
        onCancel={() => setIsProcessingPayment(false)}
        onClose={() => setIsProcessingPayment(false)}
      />

      <TransactionFailedModal
        isOpen={isTransactionFailed}
        onClose={handleCloseTransactionFailed}
        onRetry={handleRetry}
      />
    </div>
  );
}