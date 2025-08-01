"use client";
import type { FC } from "react";
import { motion } from "framer-motion";

interface ConnectWalletTabProps {
  tabName: string;
  setTabName: (tabName: string) => void;
}

const progressVariants = {
  inactive: { backgroundColor: "#2E2E2E", transition: { duration: 0.3 } },
  active: { backgroundColor: "#7C3AED", transition: { duration: 0.3 } },
};

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ConnectWalletTab: FC<ConnectWalletTabProps> = ({ tabName }) => {
  return (
    <div className="w-full md:pt-24 md:w-4/5 md:mx-auto lg:pt-0">
      <div className="w-full flex items-center justify-between gap-4">
        {[1, 2].map((step) => {
          const isActive = tabName === `step-${step}`;
          const title = step === 1 ? "Connect Wallet" : "Profile Setup";
          return (
            <motion.div key={step} className="w-1/2" layout>
              <motion.div
                className="w-full h-1 rounded-full"
                variants={progressVariants}
                animate={isActive ? "active" : "inactive"}
              />
              <motion.p
                className="text-sm text-ash text-left font-semibold mt-3 hidden md:block"
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                Step {step}
              </motion.p>
              <motion.p
                className={`text-base mt-2 font-semibold text-left hidden md:block ${
                  isActive ? "text-white" : "text-ash"
                }`}
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                {title}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectWalletTab;
