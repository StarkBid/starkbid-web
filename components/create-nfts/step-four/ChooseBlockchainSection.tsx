/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import Image from 'next/image';
import { Pencil } from 'lucide-react';


interface Props {
  data: any;
  onEdit: () => void;
}

const ChooseBlockchainSection: FC<Props> = ({ data, onEdit }) => (
  <section className="bg-[#1C1D1F] rounded-lg px-2 py-2.5 mb-4">
        <div className="flex justify-between items-start bg-[#29292A] rounded-lg m-1 p-3 gap-3 sm:gap-0">

      <div className="flex flex-col flex-1">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-bold text-white">
          Choose Blockchain
        </h2>
        <p className="text-[#8E9BAE] text-xs sm:text-sm md:text-[14px] mt-1">
          Please choose a blockchain to continue
        </p>
      </div>

      <button
        className="flex items-center space-x-1 text-xs sm:text-sm text-purple-400 bg-[#1C1D1F] px-2 sm:px-3 py-1.5 rounded-lg hover:bg-[#25262A] transition-colors"
        onClick={onEdit}
      >
        <Pencil className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>Edit</span>
      </button>
    </div>


    <div className="flex flex-row justify-between items-center mt-4 sm:mt-6 gap-4">

      <div className="flex items-center space-x-3">

        <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px]">
          <Image
            src="/icon9.png"
            alt="avatar"
            width={70}
            height={70}
            className="w-full h-full rounded-full"
          />
          <Image
            src="/eth.png"
            alt="eth"
            width={16}
            height={16}
            className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-white text-sm sm:text-base md:text-[16px] font-medium">@radicaldude84</span>
          <span className="text-white text-sm sm:text-base md:text-[16px]">{data.wallet}</span>
        </div>
      </div>


      <div className="flex flex-col items-end space-y-2 w-full sm:w-auto">
        <span className="bg-[#2DCC7026] text-[#19B360] rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm md:text-[14px]">
          Connected
        </span>
        <span className="text-white text-sm sm:text-base md:text-[16px]">
          {data.blockchain} Blockchain
        </span>
      </div>
    </div>

  </section>
);

export default ChooseBlockchainSection;