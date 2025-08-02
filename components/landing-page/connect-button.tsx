import React, { useRef, useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { useAccount, useConnect, Connector } from "@starknet-react/core";
import Image from "next/image";
import UserProfileModal from "./user-profile-modal";

const truncateAddressShort = (address: string) => {
  if (!address) return "";
  return `${address.slice(0, 5)}...`;
};

export function ConnectButton() {
  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle wallet connection
  const handleConnect = (connector: Connector) => {
    connect({ connector });
    setIsModalOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {isConnected && address ? (
        <div className="relative">
          {/* Desktop: Address Button */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hidden md:flex items-center m-2 px-6 py-4 gap-4 bg-[#1C1D1F] text-white rounded-[16px] hover:bg-[#2a2b2e] transition-colors box-shadow: 0px 1.08px 2.16px 0px #1018280A"
          >
            <div>
              <Image
                src="/profile.png"
                alt="profile"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <div className="flex items-center font-semibold text-[16px] gap-2">
              {truncateAddressShort(address)}
              {isDropdownOpen ? <ChevronUp /> : <ChevronDown size={22} />}
            </div>
          </button>

          {/* Mobile: Hamburger Menu */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-[#1C1D1F] text-white rounded-lg hover:bg-[#2a2b2e] transition-colors"
          >
            <Menu size={20} />
          </button>

          {isDropdownOpen && (
            <UserProfileModal
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
              address={address}
            />
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsModalOpen(true)}
          className="font-semibold px-4 py-2 rounded-md hover:bg-[#e5e6e7] transition-colors w-full md:w-auto bg-[#8C62F2] text-white md:bg-white md:text-black"
        >
          Connect Wallet
        </button>
      )}

      {/* Connect Wallet Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[#101213] bg-opacity-50 flex justify-center items-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#101213] text-white rounded-lg p-4 md:p-6 w-full max-w-sm md:w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-semibold">Connect Wallet</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-2xl text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
            </div>

            <div className="space-y-3 md:space-y-4">
              {connectors.map((connector) => {
                const isAvailable = connector.available();
                return (
                  <button
                    key={connector.id}
                    onClick={() => handleConnect(connector)}
                    disabled={!isAvailable}
                    className={`w-full flex items-center gap-3 md:gap-4 p-3 rounded-lg transition-all
                      ${
                        isAvailable
                          ? "hover:bg-[#191c1d] hover:shadow-md cursor-pointer"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                  >
                    {typeof connector.icon === "string" && (
                      <Image
                        width={32}
                        height={32}
                        src={connector.icon}
                        alt={connector.name}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div className="text-left">
                      <div className="font-semibold text-sm md:text-base">{connector.name}</div>
                      <div className="text-xs md:text-sm text-gray-500">
                        {isAvailable ? "Available" : "Not installed"}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
