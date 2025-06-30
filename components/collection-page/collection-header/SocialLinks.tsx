import React from "react";
import {
  FaCopy as Copy,
  FaGlobe as Globe,
  FaInstagram as Instagram,
  FaTwitter as X,
  FaDiscord as Discord,
  FaTelegramPlane as Telegram,
} from "react-icons/fa";
import { Check } from "lucide-react";
import Image from "next/image";

const SocialLinks: React.FC = () => {
  const handleShare = () => {
    // Implement share functionality
    console.log("Share clicked");
  };

  const handleCopy = () => {
    // Copy collection URL to clipboard
    navigator.clipboard.writeText(window.location.href);
    console.log("Link copied to clipboard");
  };

  const handleSocialClick = (platform: string) => {
    // Handle social platform navigation
    console.log(`${platform} clicked`);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Social Buttons - Responsive Layout */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-end mb-4">
        {/* Share Button */}
        <button
          onClick={handleShare}
          className="h-8 sm:h-10 px-2 sm:px-3 flex items-center justify-center transition-colors group"
          title="Share"
        >
          <span className="mr-1 sm:mr-2 text-sm sm:text-base">Share</span>
          <Image
            src={"/share.png"}
            width={20}
            height={20}
            alt=""
            className="w-full h-7 text-white brightness-0 invert"
          />
        </button>

        {/* Copy Link Button */}
        <button
          onClick={handleCopy}
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors group"
          title="Copy Link"
        >
          <Copy className="w-4 h-4 sm:w-6 sm:h-6 text-white hover:text-gray-400" />
        </button>

        {/* Website/Globe */}
        <button
          onClick={() => handleSocialClick("website")}
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors group"
          title="Website"
        >
          <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-gray-400" />
        </button>

        {/* Instagram */}
        <button
          onClick={() => handleSocialClick("instagram")}
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors group"
          title="Instagram"
        >
          <Instagram className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-gray-400" />
        </button>

        {/* X (Twitter) */}
        <button
          onClick={() => handleSocialClick("x")}
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors group"
          title="X (Twitter)"
        >
          <X className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-gray-400" />
        </button>

        {/* Discord */}
        <button
          onClick={() => handleSocialClick("discord")}
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors group"
          title="Discord"
        >
          <Discord className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-gray-400" />
        </button>

        {/* Telegram */}
        <button
          onClick={() => handleSocialClick("telegram")}
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors group"
          title="Telegram"
        >
          <Telegram className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-gray-400" />
        </button>
      </div>

      {/* Info Cards - Responsive Stacking */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-start sm:items-center gap-3 sm:gap-4 lg:gap-6 text-sm text-gray-400 my-5">
        {/* Creator Info */}
        <div className="flex items-center space-x-2 bg-[#1C1D1F] rounded p-2 sm:p-3 w-full sm:w-auto">
          <span className="text-xs sm:text-sm">By</span>
          <span className="text-white font-medium text-xs sm:text-sm">
            Cattie Negtar
          </span>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
          </div>
        </div>

        {/* Blockchain Info */}
        <div className="flex items-center space-x-2 bg-[#1C1D1F] rounded p-2 sm:p-3 w-full sm:w-auto">
          <span className="text-xs sm:text-sm text-white">Ethereum</span>
          <div className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-full h-full text-white">
              <path
                fill="currentColor"
                d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"
              />
            </svg>
          </div>
        </div>

        {/* Date Created */}
        <div className="bg-[#1C1D1F] rounded p-2 sm:p-3 w-full sm:w-auto">
          <span className="text-xs sm:text-sm">Date created </span>
          <span className="text-white ml-2 text-xs sm:text-sm">
            May 15, 2025
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
