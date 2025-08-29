"use client";
import Image from "next/image";
import { ChevronDown, PencilLine } from "lucide-react";
import { useAccount } from "@starknet-react/core";

export default function WalletPage() {
  const { address } = useAccount();

  const copyToClipboard = () => {
    if (!address) {
      console.error("Address is undefined");
      return;
    }

    navigator.clipboard
      .writeText(address)
      .then(() => {
        console.log("Copied!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const truncateAddress = (address: string | undefined) => {
    if (!address) return "";
    return `${address.slice(0, 10)}...${address.slice(-4)}`;
  };

  return (
    <div>
      <div className="flex flex-col gap-[10px]">
        <div className="font-bold text-[20px] text-white font-sans">Wallet</div>
        <p className="text-[14px] text-[#8E9BAE] font-sans">
          Select and manage your notification preferences to control how and
          when you receive updates to your email and in-app.
        </p>
      </div>
      <div className="flex flex-col gap-[30px] pt-[30px]">
        <div>
          <hr className="border-[1px] border-[#292929]" />
        </div>
        <div className="flex justify-between bg-[#8C62F2] rounded-[10px] px-8 py-8">
          <div className="flex flex-col gap-[30px]">
            <div className="font-medium text-white text-[20px]">
              Available balance
            </div>
            <div className="font-bold text-white text-[80px] font-sans">
              00.25 ETH
            </div>
          </div>
          <div className="flex flex-col gap-[80px]">
            <div className="font-medium text-white text-[20px]">
              Outstanding
            </div>
            <div>
              <button className="bg-white flex items-center gap-[5px] rounded-[45px] border-[1px] border-white text-black py-[20px] px-[17px]">
                <Image
                  src="/svgs/ethereum-logo.svg"
                  alt="logo"
                  width={26.25}
                  height={26.25}
                />
                ETH
                <ChevronDown size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="text-[#8E9BAE] text-[14px] font-sans">
            Connected Wallet
          </div>
          <div className="relative p-[1px]">
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <rect
                x="0"
                y="0"
                width="calc(100% - 1px)"
                height="calc(100% - 1px)"
                rx="10"
                ry="10"
                fill="none"
                stroke="#292929"
                strokeWidth="1"
                strokeDasharray="7,7"
                shapeRendering="crispEdges"
              />
            </svg>
            <div className="relative flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <div>
                    <Image
                      src="/svgs/metamasks-icon.svg"
                      alt="img"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex gap-[10px] items-baseline">
                      <div className="font-sans font-bold text-[16px]">
                        MetaMask
                      </div>
                      <div className="text-[14px] text-[#8E9BAE] font-sans font-medium">
                        Ethereum{" "}
                        <span className="w-[10px] h-[10px] bg-[#54BD48] rounded-full inline-block"></span>
                      </div>
                    </div>
                    <div className="text-[14px] text-[#8E9BAE] font-sans font-medium">
                      {truncateAddress(address)}
                    </div>
                  </div>
                </div>
                <div className="bg-[#1C1D1F] p-[8.18px] rounded-[5.11px] flex items-center gap-[10.22px]">
                  <div
                    className="cursor-pointer"
                    onClick={() => copyToClipboard()}
                  >
                    <Image
                      src="/svgs/copy.svg"
                      alt="copy"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="cursor-pointer">
                    <Image
                      src="/svgs/internet.svg"
                      alt="internet"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-[#1C1D1F] py-[12.93px] px-[19.4px] flex justify-center items-center gap-[6.47px] rounded-[7px] w-full h-[45px]">
                  <PencilLine size={24} />
                  <div className="font-sans font-bold text-[16px]">
                    Manage Wallet
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
