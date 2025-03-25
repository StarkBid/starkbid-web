import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">
      
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/image/Heroimage.png"
          alt="Hero"
          className="absolute object-contain h-full"
          style={{ 
            height: '180%',
            width: 'auto',
            left: '-1px',
            top: '-60px',
          }}
        />
      </div>
         
      
      <div className="absolute inset-0 bg-gradient-to-l from-[#101213] via-[#101213]/80 to-transparent" />
      <div className='absolute  flex flex-row ml-[0.5rem] justify-center items-center gap-[50rem] mt-[13rem]'>
           <div className='bg-[#000000] rounded-full w-10 h-10 flex items-center justify-center '>

              <img src="/image/right.png" alt="" className='w-[1.2rem] h-[1.2rem]' />
           </div>
           <div >
            <img src="/image/left.png" alt=""  className='bg-[#000000] rounded-full w-10 h-10'/>

           </div>
         </div>

      <div className="absolute left-[30rem] top-0 bottom-0 flex items-center pl-12  pr-6 w-[50%] text-white z-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-1xl font-bold leading-tight">The Pink-Blackened Horned Knight</h1>

          
          <div className="flex items-center gap-[9rem]">
            <div className='flex items-center gap-3'>
              <h4 className="text-[#8E9BAE] text-[12px]">Creator</h4>
              <img src="/image/group.png" alt="creator" className="w-6 h-6" />
              <h4 className='text-[12px]'>Jacksonito</h4>
             <img src="/image/vector.png" alt="verified" className="w-4 h-4"/>

            </div>
            <div>
              <img src="/image/heart.png" alt="" />
            </div>
          </div>
           
          <div className='flex flex-row gap-[9rem] items-center '>
              <div>
              <h4 className=" mb-1 text-[14px]">Current Bid</h4>
              <h3 className="text-xl font-semibold mb-3">0.956 ETH</h3>

              </div>
             <div >
                <button className="bg-[#8C62F2]  rounded-xl py-2 px-4 w-fit font-semibold">
                  Place a Bid

                </button>
            </div>
          </div>

          <p className="text-[12px]  text-[#ffffff]">
            The pink-blackened horned knight is an embodiment of <br /> peace, unity and strength. Striking look of  intricate carvings <br /> that tell the stories of ancestors long past. Every ancient <br /> story from... <span className="text-[#ffffff] cursor-pointer">Show more</span>
          </p>

          <div className="flex gap-4 text-[#ffffff] text-sm">
           <span>24 minted</span>
            <span>|</span>
           <span>1d 9h left</span>
         </div>

        
          <button className="bg-[#ffffff] text-black font-semibold py-2 px-4 rounded-xl w-[22rem]">
            Mint for Free
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
