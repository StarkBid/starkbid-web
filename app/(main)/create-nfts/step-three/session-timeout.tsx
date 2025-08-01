"use client";
import { motion } from "framer-motion";

interface SessionTimeoutModalProps {
  isOpen: boolean;
  onRetry: () => void;
  onClose: () => void;
}

export default function SessionTimeoutModal({ isOpen, onRetry, onClose }: SessionTimeoutModalProps) {
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
        className="bg-[#1A1A1A] border-[2px] border-[#292929] p-4 sm:p-6 rounded-lg shadow-lg z-10 w-full max-w-md max-h-[90vh] sm:max-h-[80vh] overflow-y-auto text-center relative"
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
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white pr-8">
          Session Timeout
        </h2>
        <p className="text-sm sm:text-base text-[#A3A3A3] mb-6 sm:mb-8">
          Your session timed out. Please start the transaction process again.
        </p>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-purple text-white font-semibold py-3 sm:py-4 px-4 rounded-md text-sm sm:text-base"
          onClick={onRetry}
        >
          Retry Transaction
        </motion.button>
      </motion.div>
    </div>
  );
}
