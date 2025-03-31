import React, { useRef, useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, Connector } from "@starknet-react/core";
import Image from "next/image";

// Function to truncate address for display
const truncateAddress = (address: string) => {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export function ConnectButton() {
  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
  
  // Handle wallet disconnection
  const handleDisconnect = () => {
    disconnect();
    setIsDropdownOpen(false);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      {isConnected && address ? (
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 bg-[#1C1D1F] text-white px-4 py-2 rounded-md hover:bg-[#2a2b2e] transition-colors"
          >
            <Image src="/1.png" alt="profile" width={20} height={23} className="rounded-full" />
            {truncateAddress(address)}
            <span 
              className={`border-white border-b-2 border-r-2 inline-block w-2 h-2 transform 
                ${isDropdownOpen ? 'rotate-45 mb-1' : '-rotate-45'}`}
            />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#1C1D1F] overflow-hidden rounded-md shadow-lg z-10">
              <button 
                onClick={handleDisconnect}
                className="w-full text-left px-4 py-2 hover:bg-[#2a2b2e] transition-colors"
              >
                Disconnect Wallet
              </button>
            </div>
          )}
        </div>
      ) : (
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black px-4 py-2 rounded-md hover:bg-[#e5e6e7] transition-colors"
        >
          Connect Wallet
        </button>
      )}
      
      {/* Connect Wallet Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-[#101213] bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-[#101213] text-white rounded-lg p-6 w-96 max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Connect Wallet</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-2xl text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
            </div>
            
            <div className="space-y-4">
              {connectors.map((connector) => {
                const isAvailable = connector.available();
                return (
                  <button
                    key={connector.id}
                    onClick={() => handleConnect(connector)}
                    disabled={!isAvailable}
                    className={`w-full flex items-center gap-4 p-3 rounded-lg  transition-all 
                      ${isAvailable 
                        ? 'hover:bg-[#191c1d] hover:shadow-md cursor-pointer' 
                        : 'opacity-50 cursor-not-allowed'}`}
                  >
                    {typeof connector.icon === 'string' && (
                      <img 
                        src={connector.icon} 
                        alt={connector.name} 
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div className="text-left">
                      <div className="font-semibold">{connector.name}</div>
                      <div className="text-sm text-gray-500">
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