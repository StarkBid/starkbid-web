/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import Image from "next/image";
import { Pencil, Dot } from 'lucide-react';

interface Props { data: any; onEdit: () => void; }
const AddToCollectionSection: FC<Props> = ({ data, onEdit }) => (
  <section className="bg-[#1C1D1F] rounded-lg px-2 py-2.5 mb-6">
        <div className="flex justify-between items-start bg-[#29292A] rounded-lg m-1 p-3 gap-3 sm:gap-0">

      <div className="flex flex-col">
        <h2 className="text-[30px] font-bold text-white">
          Add To Collection
        </h2>
        <p className="text-[#8E9BAE] text-[14px] mt-1 whitespace-normal break-words w-[90%] md:w-[80%]">
          Please select the collection you want to add this NFT to or just create a new one.
        </p>
      </div>
      <button
        className="flex items-center space-x-1 text-xs sm:text-sm text-purple-400 bg-[#1C1D1F] px-2 sm:px-3 py-1.5 rounded-lg hover:bg-[#25262A] transition-colors"
        onClick={onEdit}
      >
        <Pencil className="w-4 h-4" />
        <span>Edit</span>
      </button>
    </div>
    <div className="mt-6 mx-3 flex flex-col sm:flex-row sm:items-start sm:space-x-4">
      <div className='flex  space-x-3'>
        <Image
          width={133}
          height={90}
          src={data.collection.thumbnail}
          alt="collection thumb"
          className="w-[133px] h-[90px] rounded-md"
        />

        <div className="flex flex-col flex-1 mt-4 sm:mt-0">
          <div className="flex justify-between items-center">
            <span className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 font-semibold">
              <span className="text-[14px]">{data.collection.name}</span>
              <div className="flex items-center">
                <Dot className="text-[#54BD48] h-[40px] w-[40px] text-[14px]" />
                <span className="text-[14px]">#{data.collection.id}</span>
              </div>
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-2">
            <div>
              <span className="block font-semibold text-[#8E9BAE] whitespace-normal break-words text-[14px]">
                {data.collection.description}
              </span>
            </div>
            <div className='block md:hidden'>
              <span className="text-white text-[14px] block">#{data.collection.id}</span>
              <span className="text-white text-[14px] block">{data.collection.link}</span>
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
          <span className="text-white text-[14px] block">#{data.collection.id}</span>
          <span className="text-white text-[14px] block">{data.collection.link}</span>
        </div>
      </div>
    </div>






  </section>
);

export default AddToCollectionSection;