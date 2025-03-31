"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header with logo */}
      <header className="p-4 md:p-6">
        <Link href="/" className="flex items-center gap-x-2">
          <Image src="/svgs/logo.svg" alt="StarkBid Logo" width={30} height={30} quality={90} />
          <p className="text-2xl font-bold">Starkbid</p>
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <motion.div
          className="w-full max-w-4xl flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="grid grid-cols-4 gap-2 mb-12 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Puzzle pieces */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-lg flex ${
                  i === 3
                    ? "bg-transparent border-2 border-dashed border-[#a855f7]"
                    : "bg-gradient-to-br from-[#a855f7] to-[#6b21a8]"
                }`}
                initial={{
                  x: i === 3 ? 100 : 0,
                  y: i === 3 ? -100 : 0,
                  opacity: i === 3 ? 0 : 1,
                  rotate: i === 3 ? 45 : 0,
                }}
                animate={{
                  x: i === 3 ? [100, 0] : [0, i % 2 === 0 ? -5 : 5, 0],
                  y: i === 3 ? [-100, 0] : [0, i % 3 === 0 ? 5 : -5, 0],
                  opacity: 1,
                  rotate: i === 3 ? [45, 0] : 0,
                }}
                transition={{
                  x:
                    i === 3
                      ? { delay: 1.5, duration: 0.8, type: "spring" }
                      : {
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "mirror",
                          delay: i * 0.1,
                        },
                  y:
                    i === 3
                      ? { delay: 1.5, duration: 0.8, type: "spring" }
                      : {
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "mirror",
                          delay: i * 0.1,
                        },
                  opacity: { delay: i === 3 ? 1.5 : 0, duration: 0.5 },
                  rotate: i === 3 ? { delay: 1.5, duration: 0.8, type: "spring" } : { duration: 0 },
                }}
              >
                {i === 3 && <div className="w-full h-full flex items-center justify-center text-2xl font-bold">?</div>}
              </motion.div>
            ))}

            {/* 404 overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <div className="text-6xl md:text-7xl font-bold text-white opacity-90">404</div>
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Missing Piece
          </motion.h2>

          <motion.p
            className="text-gray-400 mb-8 max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            We couldn&apos;t find this piece of the StarkBid puzzle. The page you&apos;re looking for is missing from
            our collection.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <Link
              href="/"
              className="px-6 py-3 bg-[#1E1E1E] border border-[#a855f7] rounded-lg font-medium hover:bg-[#581c87] transition-all"
            >
              Return Home
            </Link>

            <Link
              href="/explore"
              className="px-6 py-3 bg-[#9333ea] rounded-lg font-medium hover:bg-[#7e22ce] transition-all"
            >
              Explore NFTs
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

