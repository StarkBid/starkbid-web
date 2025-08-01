"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MediaUpload from "@/components/create-nfts/step-two/MediaUpload";

interface CreateCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: {
    name: string;
    number: string;
    description: string;
    url: string;
    coverPhoto: File | null;
  }) => void;
}

export default function CreateCollectionModal({
  isOpen,
  onClose,
  onCreate,
}: CreateCollectionModalProps) {
  const [collectionName, setCollectionName] = useState("");
  const [collectionNumber, setCollectionNumber] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  const [collectionURL, setCollectionURL] = useState("");
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | ArrayBuffer | null>(null);
  const [mediaType, setMediaType] = useState<string | null>(null);

  const handleMediaUpload = (file: File) => {
    setMediaFile(file);
    setMediaType(file.type);

    const reader = new FileReader();
    reader.onloadend = () => {
      setMediaPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeMedia = () => {
    setMediaFile(null);
    setMediaPreview(null);
    setMediaType(null);
  };

  const handleCreateCollection = () => {
    if (collectionName && collectionNumber) {
      onCreate({
        name: collectionName,
        number: collectionNumber,
        description: collectionDescription,
        url: collectionURL,
        coverPhoto: mediaFile,
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="bg-[#1C1D1F] border-[#292929] border-[2px] p-4 sm:p-6 rounded-lg shadow-lg z-10 w-full max-w-md max-h-[90vh] sm:max-h-[80vh] overflow-y-auto relative"
      >
        <button
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#67707dc2] hover:text-white bg-[#8E9BAE] bg-opacity-20 p-1 rounded-full"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 pr-8">
          Create Collection (ERC-721)
        </h2>
        <div className="mb-4 sm:mb-6">
          <MediaUpload
            mediaFile={mediaFile}
            mediaPreview={typeof mediaPreview === "string" ? mediaPreview : null}
            mediaType={mediaType}
            onUpload={handleMediaUpload}
            onRemove={removeMedia}
          />
        </div>
        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="collectionName"
            className="block mb-2 text-sm sm:text-base font-medium"
          >
            Collection Name *
          </label>
          <input
            type="text"
            id="collectionName"
            className="w-full bg-transparent text-white border border-[#292929] rounded-md py-2 sm:py-3 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple placeholder-gray-400"
            placeholder="Enter collection name"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
          />
        </div>
        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="collectionNumber"
            className="block mb-2 text-sm sm:text-base font-medium"
          >
            Collection Number *
          </label>
          <input
            type="text"
            id="collectionNumber"
            className="w-full bg-transparent text-white border border-[#292929] rounded-md py-2 sm:py-3 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple placeholder-gray-400"
            placeholder="# enter number"
            value={collectionNumber}
            onChange={(e) => setCollectionNumber(e.target.value)}
          />
        </div>
        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="collectionDescription"
            className="block mb-2 text-sm sm:text-base font-medium"
          >
            Description
          </label>
          <textarea
            id="collectionDescription"
            rows={3}
            className="w-full bg-transparent text-white border border-[#292929] rounded-md py-2 sm:py-3 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple placeholder-gray-400 resize-none"
            placeholder="Tell us more about your collection"
            value={collectionDescription}
            onChange={(e) => setCollectionDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-6 sm:mb-8">
          <label
            htmlFor="collectionURL"
            className="block mb-2 text-sm sm:text-base font-medium"
          >
            Collection URL *
          </label>
          <div className="flex items-center bg-transparent text-white border border-[#292929] rounded-md">
            <span className="px-3 text-xs sm:text-sm text-gray-400">starkbid.com/</span>
            <input
              type="text"
              id="collectionURL"
              className="flex-1 bg-transparent py-2 sm:py-3 px-3 focus:outline-none text-sm sm:text-base placeholder-gray-400"
              placeholder="url link"
              value={collectionURL}
              onChange={(e) => setCollectionURL(e.target.value)}
            />
          </div>
        </div>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-purple text-white font-semibold py-3 sm:py-4 px-4 rounded-md text-sm sm:text-base"
          onClick={handleCreateCollection}
        >
          Create Collection
        </motion.button>
      </motion.div>
    </div>
  );
}