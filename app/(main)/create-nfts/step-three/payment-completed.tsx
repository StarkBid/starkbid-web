"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ConfettiImage from "@/public/svgs/confetti.svg";

interface TransactionCompletedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TransactionCompletedModal({ isOpen, onClose }: TransactionCompletedModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="bg-[#1A1A1A] border-[2px] border-[#292929] p-4 sm:p-6 rounded-lg shadow-lg z-10 w-full max-w-md max-h-[90vh] sm:max-h-[80vh] overflow-y-auto text-center"
      >
        <div className="flex justify-center mb-4 sm:mb-6">
          <Image src={ConfettiImage} alt="Confetti" width={60} height={60} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">Transaction Completed!</h2>
        <p className="text-sm sm:text-base text-[#A3A3A3] mb-6 sm:mb-8">
          Your collection has been successfully created. You are now ready to start add NFTs to this collection.
        </p>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-purple text-white font-semibold py-3 sm:py-4 px-4 rounded-md text-sm sm:text-base"
          onClick={onClose}
        >
          Close and Continue
        </motion.button>
      </motion.div>
    </div>
  );
}