"use client";
import Image from "next/image";
import { useState } from "react";
const nftCollections = [
  {
    name: "Xenos",
    price: "35 ETH",
    volume: { "1h": "50 ETH", "6h": "150 ETH", "24h": "200 ETH" },
    offer: "31 ETH",
    floorId: "+20.40%",
    sales: { "1h": 10, "6h": 50, "24h": 150 },
    holders: "45%",
    chain: "Ethereum",
    img: "https://avatars.githubusercontent.com/u/82640789?v=4",
  },
  {
    name: "Bored Apes",
    price: "40 ETH",
    volume: { "1h": "60 ETH", "6h": "180 ETH", "24h": "220 ETH" },
    offer: "36 ETH",
    floorId: "-10.20%",
    sales: { "1h": 8, "6h": 40, "24h": 120 },
    holders: "50%",
    chain: "Polygon",
    img: "https://avatars.githubusercontent.com/u/82640789?v=4",
  },
  {
    name: "Monalisa",
    price: "28 ETH",
    volume: { "1h": "45 ETH", "6h": "130 ETH", "24h": "190 ETH" },
    offer: "25 ETH",
    floorId: "-5.50%",
    sales: { "1h": 6, "6h": 30, "24h": 100 },
    holders: "35%",
    chain: "Ethereum",
    img: "https://avatars.githubusercontent.com/u/82640789?v=4",
  },
  {
    name: "Bad BUNNIEZ",
    price: "50 ETH",
    volume: { "1h": "80 ETH", "6h": "200 ETH", "24h": "300 ETH" },
    offer: "45 ETH",
    floorId: "+15.75%",
    sales: { "1h": 12, "6h": 60, "24h": 170 },
    holders: "55%",
    chain: "Polygon",
    img: "https://avatars.githubusercontent.com/u/82640789?v=4",
  },
];
function NFTTable() {
  const [selectedTime, setSelectedTime] = useState("1h");
  const [selectedChain, setSelectedChain] = useState("Ethereum");

  const filteredCollections = nftCollections.filter(
    (collection) => collection.chain === selectedChain
  );

  return (
    <div className="min-h-screen bg-gray-900 container mx-auto py-10 text-white p-6">
      {/* Filters */}
      <div className="flex justify-between gap-2 mb-8 items-center ">
        <h1 className="text-2xl font-semibold mb-4 uppercase">
          Top NFT Collections
        </h1>
        <div className="flex gap-x-4">
          {["1h", "6h", "24h","3d","7d"].map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`px-4 py-2 rounded-lg ${
                selectedTime === time
                  ? "bg-white text-black"
                  : "bg-gray-800 text-gray-300"
              } hover:bg-gray-700`}
            >
              {time}
            </button>
          ))}
          <select
            onChange={(e) => setSelectedChain(e.target.value)}
            value={selectedChain}
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg cursor-pointer"
          >
            <option value="Ethereum">Ethereum</option>
            <option value="Polygon">Polygon</option>
          </select>
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg">
            See all →
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-gray-800 text-gray-400 text-left text-sm uppercase">
            <tr>
              <th className="p-4">Collection</th>
              <th className="p-4">Floor Price</th>
              <th className="p-4">Volume</th>
              <th className="p-4">Top Offer</th>
              <th className="p-4">Floor ID</th>
              <th className="p-4">Sales</th>
              <th className="p-4">Holders</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
          {filteredCollections.map((collection, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                <td className="p-4 flex items-center gap-3 font-semibold">
                  <Image src={collection.img} alt={collection.name} width={20} height={20} className="w-20 h-20 rounded-lg" />
                  {collection.name}
                </td>
                <td className="p-4">{collection.price}</td>
                <td className="p-4">{collection.volume[selectedTime]}</td>
                <td className="p-4">{collection.offer}</td>
                <td className={`p-4 ${collection.floorId.includes("-") ? "text-red-500" : "text-green-500"}`}>
                  {collection.floorId}
                </td>
                <td className="p-4">{collection.sales[selectedTime]}</td>
                <td className="p-4">{collection.holders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Leaderboard() {
  return (
    <div className="mx-auto bg-gray-900 items-center justify-items-center h-[100vh]">
      <NFTTable />
    </div>
  );
}
