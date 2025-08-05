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
    <div className="py-4 sm:py-5 px-4 sm:px-6 bg-[#181A1B] rounded-xl shadow my-4 sm:my-7">
      <div className="hidden md:grid md:grid-cols-5 md:divide-x md:divide-dashed md:divide-[#35373A]">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-2"
          >
            <div className="text-xs text-gray-400 uppercase mb-1 tracking-wide">
              {stat.label}
            </div>
            <div className="text-3xl font-bold text-white mt-3">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="hidden sm:grid md:hidden grid-cols-3 gap-6">
        <div className="col-span-3 grid grid-cols-3 divide-x divide-dashed divide-[#35373A]">
          {stats.slice(0, 3).map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-2 py-2"
            >
              <div className="text-xs text-gray-400 uppercase mb-1 tracking-wide text-center">
                {stat.label}
              </div>
              <div className="text-lg font-bold text-white mt-2">{stat.value}</div>
            </div>
          ))}
        </div>
        <div className="col-span-3 grid grid-cols-2 divide-x divide-dashed divide-[#35373A] mt-4 pt-4 border-t border-dashed border-[#35373A]">
          {stats.slice(3).map((stat, index) => (
            <div
              key={index + 3}
              className="flex flex-col items-center justify-center px-2 py-2"
            >
              <div className="text-xs text-gray-400 uppercase mb-1 tracking-wide text-center">
                {stat.label}
              </div>
              <div className="text-2xl font-bold text-white mt-2">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid sm:hidden grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start p-3  rounded-lg"
          >
            <div className="text-xs text-gray-400 uppercase mb-2 tracking-wide text-center">
              {stat.label}
            </div>
            <div className="text-xl font-bold text-white">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionStats;