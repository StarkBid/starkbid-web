/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import Image from 'next/image';
import { Pencil } from 'lucide-react';


interface Props {
    data: any;
    onEdit: () => void;
}

const ChooseBlockchainSection: FC<Props> = ({ data, onEdit }) => (
    <section className="bg-[#1C1D1F] rounded-lg p-6 mb-4">
        <div className="flex justify-between items-center bg-[#29292A] rounded-lg m-1 p-3">
            <h2 className="text-lg font-medium">Choose Blockchain
                <p className="text-gray-400 mb-6">Please choose a blockchain to continue</p> </h2>
            <button
                className="flex items-center space-x-1 text-sm text-purple-400 bg-[#1C1D1F] p-2"
                onClick={onEdit}
            >
                <Pencil className='w-4 h-4' />
                <span>Edit</span>
            </button>
        </div>

       <div className="flex items-center justify-between mt-6">

  <div className="flex items-center space-x-3">
  <div className="relative w-8 h-8">
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
      className="absolute bottom-0 right-0 w-4 h-4 rounded-full"
    />
  </div>

  <span className="text-white">@radicaldude84</span>
  <span className="text-gray-400">{data.wallet}</span>
</div>

  <div className="flex flex-col items-end space-y-1">
    <span className="bg-[#2DCC7026] text-[#19B360] rounded-full px-3 py-1 text-sm font-medium">
      Connected
    </span>
    <span className="text-gray-300 text-sm">
      {data.blockchain} Blockchain
    </span>
  </div>
</div>

    </section>
);

export default ChooseBlockchainSection;