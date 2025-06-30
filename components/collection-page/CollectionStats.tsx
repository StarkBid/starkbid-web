import React from "react";

const CollectionStats: React.FC = () => {
  const stats = [
    { label: "Floor Price", value: "0.0087 ETH" },
    { label: "Top Offer", value: "0.099 ETH" },
    { label: "Volume", value: "112.2 ETH" },
    { label: "Total Assets", value: "3.2K" },
    { label: "Owners", value: "125" },
  ];

  return (
    <div className="py-5 px-6 bg-[#181A1B] rounded-xl shadow my-7">
      <div className="grid grid-cols-5 divide-x divide-dashed divide-[#35373A]">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-2"
          >
            <div className="text-xs text-gray-400 uppercase mb-1 tracking-wide">
              {stat.label}
            </div>
            <div className="text-2xl font-bold text-white  mt-3">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionStats;
