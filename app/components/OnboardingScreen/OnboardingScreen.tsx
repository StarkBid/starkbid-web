
import Image from "next/image"
export default function OnboardingScreen(){
return (
    <>
    <div className="flex justify-center items-center max-h-screen  mt-[40%]">
    <div className="relative w-[375px] h-[600px] mx-auto overflow-hidden rounded-xl">
      {/* Background Image */}
      <div className="absolute inset-">
        <Image
          src="/nft.png"
          alt="NFT Background"
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

      {/* Content Section */}
      <div className="absolute bottom-0 w-full p-6 text-white">
        <h1 className="text-2xl font-bold leading-snug">
          The Future of NFT Auctions Starts Here
        </h1>
        <p className="text-sm mt-2 text-gray-300">
          Join a next-gen marketplace where art meets competition. Place your bids and own unique digital pieces.
        </p>
        <button className="mt-4 w-full bg-purple-600 text-white font-semibold py-3 rounded-lg">
          Connect wallet
        </button>
        <p className="mt-3 text-center text-gray-400">Other options</p>
      </div>
    </div>
</div>


    
    
    </>
)

}