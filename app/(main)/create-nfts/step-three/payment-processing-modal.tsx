"use client";
import { motion } from "framer-motion";

interface PaymentProcessingModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onClose: () => void;
}

export default function PaymentProcessingModal({
  isOpen,
  onCancel,
  onClose,
}: PaymentProcessingModalProps) {
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
        className="bg-[#1C1D1F] p-4 sm:p-6 rounded-lg shadow-lg z-10 w-full max-w-md max-h-[90vh] sm:max-h-[80vh] overflow-y-auto border-[2px] border-[#292929] relative"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl text-center font-bold mb-3 sm:mb-4 text-white">
          Processing Transaction!
        </h2>
        <p className="text-sm sm:text-base text-[#A3A3A3] mb-6 sm:mb-8 text-center">
          Please send transaction with your wallet to proceed
        </p>
        <div className="flex justify-center mb-6 sm:mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-t-4 border-l-4 border-white border-opacity-50"></div>
          </motion.div>
        </div>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-purple text-white font-semibold py-3 sm:py-4 px-4 rounded-md text-sm sm:text-base"
          onClick={onCancel}
        >
          Cancel Transaction
        </motion.button>
      </motion.div>
    </div>
  );
}
