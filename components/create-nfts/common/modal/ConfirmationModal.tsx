import { motion } from 'framer-motion';
import { FC } from 'react';

interface Props {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: FC<Props> = ({ title, description, onConfirm, onCancel }) => (

  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="fixed inset-0 bg-black opacity-50" onClick={onCancel}></div>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className="bg-[#1C1D1F] border-[2px] border-[#292929] p-6 rounded-lg shadow-lg z-10 w-full max-w-md max-h-[80vh] overflow-y-auto text-center relative"
    >
      <button
        className="absolute top-4 right-4 hover:text-[#8e9bae36]  hover:text-white bg-[#8E9BAE] bg-opacity-20 p-1 rounded-full"
        onClick={onCancel}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      <h2 className="text-xl font-bold mb-4 sm:text-2xl text-white">{title}</h2>
      <p className="text-[#A3A3A3] mb-8">
        {description}
      </p>
      <div className="flex justify-between space-x-4">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-1/2 bg-[#292929] text-white font-semibold py-3 px-4 rounded-md text-sm sm:text-base"
          onClick={onCancel}
        >
          Close and Continue
        </motion.button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-1/2 bg-purple text-white font-semibold py-3 px-4 rounded-md text-sm sm:text-base"
          onClick={onConfirm}
        >
          Confirm
        </motion.button>
      </div>
    </motion.div>
  </div>
);

export default ConfirmationModal;