"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"
import Image from "next/image"

interface NFTCollection {
  id: number
  name: string
  image: string
  floorPrice: string
  totalVolume: string
}

const collections: NFTCollection[] = [
  {
    id: 1,
    name: "Daki Da",
    image: "/nft-collection/DakiDa.svg",
    floorPrice: "0.12 ETH",
    totalVolume: "207 ETH",
  },
  {
    id: 2,
    name: "Birds of Damascus",
    image: "/nft-collection/damascus.svg",
    floorPrice: "0.12 ETH",
    totalVolume: "207 ETH",
  },
  {
    id: 3,
    name: "Birds of Damascus",
    image: "/nft-collection/damascus2.svg",
        floorPrice: "0.12 ETH",
    totalVolume: "207 ETH",
  },
  {
    id: 4,
    name: "Birds of Damascus",
    image: "/nft-collection/damascus3.svg",
    floorPrice: "0.12 ETH",
    totalVolume: "207 ETH",
  },
  {
    id: 5,
    name: "Birds of Damascus",
    image: "/nft-collection/damascus4.jpeg",
    floorPrice: "0.12 ETH",
    totalVolume: "207 ETH",
  },
]

export default function TrendingSection() {
  const [position, setPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current
      const scrollAmount = direction === "left" ? -container.offsetWidth : container.offsetWidth
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      setPosition((prev) => prev + (direction === "left" ? -1 : 1))
    }
  }

  return (
    <div className="w-full bg-black p-8">
      <h2 className="text-2xl font-semibold text-white mb-6">Trending in Gaming</h2>

      <div className="relative">
        <motion.div ref={containerRef} className="flex overflow-x-hidden gap-4 pb-4">
          <AnimatePresence>
            {collections.map((collection) => (
              <motion.div
                key={collection.id}
                className="flex-none w-[300px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium mb-3">{collection.name}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-sm">Floor Price</p>
                        <p className="text-white">{collection.floorPrice}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Total Volume</p>
                        <p className="text-white">{collection.totalVolume}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("left")}
            className="bg-gray-700 p-2 rounded-lg text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("right")}
            className="bg-gray-700 p-2 rounded-lg text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

