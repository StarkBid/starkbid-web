"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";

const ProgressBar = () => {
  const pathname = usePathname();
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = useMemo(
    () => [
      { title: "Choose Blockchain", path: "/create-nfts/step-one", step: 1 },
      { title: "Create", path: "/create-nfts/step-two", step: 2 },
      { title: "Add To Collection", path: "/create-nfts/step-three", step: 3 },
      { title: "Final Review", path: "/create-nfts/step-four", step: 4 },
    ],
    []
  );

  useEffect(() => {
    const index = steps.findIndex((step) => pathname.endsWith(step.path));
    if (index !== -1 && stepRefs.current[index]) {
      stepRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [pathname, steps]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full overflow-x-auto remove-scrollbar lg:container lg:px-20"
    >
    
      <div className="lg:hidden flex items-center justify-center mt-10 px-4">
        <div className="flex items-center space-x-2 w-full max-w-sm">
          {steps.map(({ step }, index) => {
            const activeIndex = steps.findIndex((step) => pathname.endsWith(step.path));
            const isActive = index === activeIndex;
            const isCompleted = index < activeIndex;

            return (
              <motion.div
                key={step}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex-1"
              >
                <motion.div
                  className="h-1 rounded-full"
                  animate={{
                    backgroundColor: isActive || isCompleted ? "#A855F7" : "#374151",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

     
      <div className="hidden lg:flex min-w-[640px] sm:min-w-full items-center mt-10 justify-between px-4 lg:px-0">
        {steps.map(({ title, step }, index) => {
          const activeIndex = steps.findIndex((step) =>
            pathname.endsWith(step.path)
          );
          const isActive = index === activeIndex;
          const isCompleted = index < activeIndex;

          return (
            <motion.div
              key={step}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="w-1/4 px-1 flex-shrink-0"
            >
              <motion.div
                className="w-full h-1 rounded-md"
                animate={{
                  backgroundColor:
                    isActive || isCompleted ? "#A855F7" : "#1e293b",
                  scale: isActive ? 1.01 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.p
                className="hidden lg:block text-xs lg:text-sm text-ash font-semibold mt-4"
                animate={{ opacity: isActive || isCompleted ? 1 : 0.6 }}
              >
                Step {step}
              </motion.p>
              <motion.p
                className="hidden lg:block text-sm lg:text-base mt-1 font-semibold"
                animate={{
                  color: isActive || isCompleted ? "#ffffff" : "#94a3b8",
                }}
              >
                {title}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProgressBar;
