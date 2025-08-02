"use client";
import BackButton from "@/components/create-nfts/common/BackButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const StepOne = () => {
  const [selectedBlockChain, setSelectedBlockChain] = useState("");
  const router = useRouter();

  const blockchains = [
    { title: "Starknet", image: "/svgs/starknet-logo.svg", id: 1 },
    { title: "Ethereum", image: "/svgs/ethereum-logo.svg", id: 2 },
    { title: "USDT", image: "/svgs/usdt-logo.svg", id: 3 },
    { title: "Solana", image: "/svgs/solana-logo.svg", id: 4 },
    { title: "Doge", image: "/svgs/dodge-logo.svg", id: 5 },
    { title: "Bitcoin", image: "/svgs/bitcoin-logo.svg", id: 6 },
  ];

  const btnDisabled = selectedBlockChain === "";
  const supportedBlockchains = new Set(["Starknet"]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="w-full h-full min-h-screen bg-black"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-8">
        <BackButton />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
          className="w-full mt-4"
        >
          <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-bold">
            Choose Blockchain
          </h1>
          <p className="text-sm lg:text-base text-ash mt-2 md:mt-3 text-left font-normal">
            Please choose a preferred blockchain to continue.
          </p>
        </motion.div>

        <motion.div
          className="w-full mt-6 md:mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {blockchains.map(({ title, id, image }) => {
            const isSupported = supportedBlockchains.has(title);
            const isSelected = title === selectedBlockChain;
            return (
              <motion.div
                key={id}
                className="w-full"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={isSupported ? { scale: 1.03 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                <div
                  onClick={
                    isSupported ? () => setSelectedBlockChain(title) : undefined
                  }
                  className={`w-full ${
                    isSupported ? "cursor-pointer" : "cursor-not-allowed"
                  } ${
                    isSelected
                      ? "border-purple border-2 md:border-4"
                      : "border-darkerGray border"
                  } rounded-lg flex items-center justify-center h-20 md:h-24 lg:h-52 transition-all duration-300`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={95}
                    height={95}
                    className={`w-8 h-8 md:w-12 md:h-12 lg:w-24 lg:h-24 ${
                      !isSupported ? "grayscale" : ""
                    }`}
                  />
                </div>
                <p className="text-xs md:text-sm text-white text-center mt-2 md:mt-3 lg:text-xl font-bold">
                  {title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="w-full mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
        >
          <button
            onClick={() => router.push("/create-nfts/step-two")}
            disabled={btnDisabled}
            className={`w-full md:w-1/2 order-1 md:order-2 py-3 ${
              btnDisabled
                ? "bg-darkGray cursor-not-allowed"
                : "bg-purple cursor-pointer"
            } text-sm md:text-base text-center rounded-md text-white font-medium`}
          >
            Next
          </button>
          <button
            onClick={() => {
              setSelectedBlockChain("");
            }}
            className="w-full md:w-1/2 order-2 md:order-1 py-3 text-sm md:text-base bg-transparent border border-darkerGray cursor-pointer text-center rounded-md text-white"
          >
            Cancel
          </button>
        </motion.div>

        {/* Footer section for mobile */}
        <div className="mt-8  text-center flex flex-col md:flex-row items-center justify-center md:gap-3">
          <p className="text-sm text-gray-400 mb-2 md:mb-0">
            Can&apos;t find your wallet?
          </p>
          <Link className="text-purple " href="">
            Contact support
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default StepOne;
