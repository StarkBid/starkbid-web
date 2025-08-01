import Image from "next/image";
import { CircleX, PencilLine } from "lucide-react";
import { useDisconnect } from "@starknet-react/core";
import Link from "next/link";
import { useState, useEffect } from "react";

type UserProfileModalProps = {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (open: boolean) => void;
  address: string;
};

const UserProfileModal = ({
  isDropdownOpen,
  setIsDropdownOpen,
  address,
}: UserProfileModalProps) => {
  const [isVerified, setIsVerified] = useState(false);

  const NavigationMenu = [
    {
      name: "Profile",
      icon: (
        <Image
          src="/svgs/profile.svg"
          alt="profile"
          width={24}
          height={24}
          quality={90}
        />
      ),
      route: "",
    },
    {
      name: "NFTs",
      icon: (
        <Image
          src="/svgs/nfts.svg"
          alt="nfts"
          width={24}
          height={24}
          quality={90}
        />
      ),
      route: "",
    },
    {
      name: "Collections",
      icon: (
        <Image
          src="/svgs/collections.svg"
          alt="collections"
          width={24}
          height={24}
          quality={90}
        />
      ),
      route: "",
    },
    {
      name: "Notification",
      icon: (
        <Image
          src="/svgs/notification.svg"
          alt="notification"
          width={24}
          height={24}
          quality={90}
        />
      ),
      route: "",
    },
    {
      name: "Activity",
      icon: (
        <Image
          src="/svgs/activity.svg"
          alt="activity"
          width={24}
          height={24}
          quality={90}
        />
      ),
      route: "",
    },
    {
      name: "Offers/Bids",
      icon: (
        <Image
          src="/svgs/offers.svg"
          alt="offers"
          width={24}
          height={24}
          quality={90}
        />
      ),
      route: "",
    },
    {
      name: "Settings",
      icon: (
        <Image
          src="/svgs/settings.svg"
          alt="settings"
          width={24}
          height={24}
          quality={90}
        />
      ),
      route: "",
    },
  ];

  const { disconnect } = useDisconnect();

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isDropdownOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;

      // Prevent scrolling on the body
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        // Restore scrolling when modal closes
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";

        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isDropdownOpen]);

  const handleDisconnect = () => {
    disconnect();
    setIsDropdownOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        console.log("Copied!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const truncateAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 10)}...${address.slice(-4)}`;
  };

  // Handle backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1000] backdrop-blur-[1px] flex items-start justify-end p-0"
      onClick={handleBackdropClick}
    >
      <div className="mt-10 mr-0 bg-[#101213] rounded-l-[12px] px-4 md:px-[25px] py-6 md:py-[35px] border-l-[4px] border-t-[4px] border-b-[4px] border-[#292929] max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden scrollbar-hide w-full max-w-sm md:w-auto md:max-w-md lg:max-w-lg">
        <div className="w-full md:w-[341px] flex flex-col gap-[20px] md:gap-[25px]">
          <div className="flex justify-between">
            <div className="flex gap-[12px] md:gap-[15px] items-center">
              <div>
                <Image
                  src="/profile.png"
                  alt="profile"
                  width={50}
                  height={50}
                  className="rounded-full md:w-[60px] md:h-[60px]"
                />
              </div>
              <div className="flex flex-col gap-[4px] md:gap-[5px]">
                <div className="font-semibold text-[16px] md:text-[20px] font-sans flex items-center gap-[8px] md:gap-[10px]">
                  <div>Randy Inor</div>
                  {isVerified ? (
                    <Image
                      src="/verification.png"
                      alt="verified"
                      width={20}
                      height={20}
                      className="md:w-6 md:h-6"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="font-semibold text-[14px] md:text-[16px] text-[#8E9BAE]">
                  {truncateAddress(address)}
                </div>
              </div>
            </div>
            <div className="cursor-pointer">
              <CircleX onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
            </div>
          </div>
          <div className="bg-[#1C1D1F] h-[70px] md:h-[83px] px-[16px] md:px-[20px] py-[8px] md:py-[10px] flex justify-between rounded-[10px]">
            <div className="flex flex-col justify-center items-center gap-[8px] md:gap-[10px]">
              <div className="font-sans font-medium text-[14px] md:text-[16px] text-[#8E9BAE]">
                Total Value
              </div>
              <div className="font-sans font-bold text-[16px] md:text-[20px]">0.12 ETH</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[8px] md:gap-[10px]">
              <div className="font-sans font-medium text-[14px] md:text-[16px] text-[#8E9BAE]">
                Owned Items
              </div>
              <div className="font-sans font-bold text-[16px] md:text-[20px]">4</div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] md:gap-[20px]">
            {NavigationMenu.map((item) => (
              <Link href={item.route} key={item.name}>
                <div className="flex gap-[8px] md:gap-[10px] items-center">
                  <div className="w-5 h-5 md:w-6 md:h-6">{item.icon}</div>
                  <div className="font-sans font-medium text-[16px] md:text-[20px]">
                    {item.name}
                  </div>
                </div>
              </Link>
            ))}
            <div
              className="flex gap-[8px] md:gap-[10px] items-center cursor-pointer"
              onClick={() => handleDisconnect()}
            >
              <Image
                src="/svgs/logout.svg"
                alt="logout"
                width={20}
                height={20}
                quality={90}
                className="md:w-6 md:h-6"
              />
              <div className="font-sans font-medium text-[16px] md:text-[20px]">Logout</div>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] md:gap-[16px]">
            <div className="text-[#8E9BAE] text-[12px] md:text-[14px] font-sans">
              Connected Wallet
            </div>
            <div className="relative p-[1px]">
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <rect
                  x="0.5"
                  y="0.5"
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
              <div className="relative flex flex-col gap-3 md:gap-4 p-3 md:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[8px] md:gap-[10px]">
                    <div>
                      <Image
                        src="/svgs/metamasks-icon.svg"
                        alt="img"
                        width={50}
                        height={50}
                        className="md:w-[60px] md:h-[60px]"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] md:gap-[10px]">
                      <div className="flex gap-[8px] md:gap-[10px] items-baseline">
                        <div className="font-sans font-bold text-[14px] md:text-[16px]">
                          MetaMask
                        </div>
                        <div className="text-[12px] md:text-[14px] text-[#8E9BAE] font-sans font-medium">
                          Ethereum{" "}
                          <span className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] bg-[#54BD48] rounded-full inline-block"></span>
                        </div>
                      </div>
                      <div className="text-[12px] md:text-[14px] text-[#8E9BAE] font-sans font-medium">
                        {truncateAddress(address)}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1C1D1F] p-[6px] md:p-[8.18px] rounded-[4px] md:rounded-[5.11px] flex flex-col gap-[12px] md:gap-[16.96px]">
                    <div
                      className="cursor-pointer"
                      onClick={() => copyToClipboard()}
                    >
                      <Image
                        src="/svgs/copy.svg"
                        alt="copy"
                        width={12}
                        height={12}
                        className="md:w-[13.57px] md:h-[13.57px]"
                      />
                    </div>
                    <div className="cursor-pointer">
                      <Image
                        src="/svgs/internet.svg"
                        alt="internet"
                        width={12}
                        height={12}
                        className="md:w-[13.57px] md:h-[13.57px]"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="bg-[#1C1D1F] py-[10px] md:py-[12.93px] px-[16px] md:px-[19.4px] flex justify-center items-center gap-[5px] md:gap-[6.47px] rounded-[6px] md:rounded-[7px] w-full h-[40px] md:h-[45px]">
                    <PencilLine size={20} className="md:w-6 md:h-6" />
                    <div className="font-sans font-bold text-[14px] md:text-[16px]">
                      Manage Wallet
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            {!isVerified && (
              <div>
                <div>
                  <Image src="/verify.png" alt="img" width={340} height={108} className="w-full md:w-[340px] md:h-[108px]" />
                </div>
                <div className="bg-[#1C1D1F] py-[12px] md:py-[14px] px-[16px] md:px-[18px] flex flex-col gap-[8px] md:gap-[10px] rounded-b-[10px]">
                  <div className="font-sans font-semibold text-[16px] md:text-[20px]">
                    Verify Account
                  </div>
                  <div className="font-sans text-[12px] md:text-[14px] text-[#8E9BAE]">
                    Verify your account to gain more presence on Starknet
                  </div>
                  <div>
                    <button
                      className="bg-[#272729] w-full py-[8px] md:py-[10px] px-[24px] md:px-[30px] rounded-[8px] md:rounded-[10px] text-[14px] md:text-[16px] font-sans font-semibold cursor-pointer"
                      onClick={() => setIsVerified(true)}
                    >
                      Create Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
