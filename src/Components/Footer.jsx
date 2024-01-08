import React from 'react';
import devca from "../images/Devca.png";
import send from "../images/Send.png";

function Footer() {
  return (
    <div className=' md:flex md:grid-cols-3 justify-around p-[1rem]  md:pt-[4rem] pb-[2rem] text-white'>

        {/* 1 */}
        <div className='  lg:ml-[8rem] md:mt-[2rem]'>
               <img className=' h-5 w-[3.5rem] cursor-pointer' src={devca} alt="" />
                <span className=' text-sm text-white'>All right reserved.</span>
        </div>

        {/* 2 */}
       <div className=' mt-[1rem] md:mt-0'>
        <div className=' grid grid-cols-3 gap-20'>
            <div className=' flex flex-col gap-2'>
                <h1 className=' text-sm font-bold'>Resources</h1>
                <span className=' text-xs ml-1 hover:scale-110 cursor-pointer'>resource 1</span>
                <span className=' text-xs ml-1 hover:scale-110 cursor-pointer'>resource 1</span>
                <span className=' text-xs ml-1 hover:scale-110 cursor-pointer'>resource 1</span>
                <span className=' text-xs ml-1 hover:scale-110 cursor-pointer'>resource 1</span>
            </div>
            <div className=' flex flex-col gap-2'>
                <h1 className=' text-sm font-bold'>Company</h1>
                <span className=' text-xs ml-1 hover:scale-110 cursor-pointer'>resource 1</span>
                <span className=' text-xs ml-1 hover:scale-110 cursor-pointer'>resource 1</span>
                <span className=' text-xs ml-1 hover:scale-110 cursor-pointer'>resource 1</span>
                <span className=' text-xs ml-1 hover:scale-110 cursor-pointer'>resource 1</span>
            </div>
            <div className=' flex flex-col gap-2'>
                <h1 className=' text-sm font-bold '>Socials</h1>
                <span className=' text-xs ml-1 hover:scale-110 cursor-pointer'>resource 1</span>
                <span className=' text-xs ml-1 hover:scale-110 cursor-pointer'>resource 1</span>
                <span className=' text-xs ml-1 hover:scale-110 cursor-pointer'>resource 1</span>
                <span className=' text-xs ml-1 hover:scale-110 cursor-pointer'>resource 1</span>
            </div>
               
        </div>
       </div>

        {/* 3 */}
        <div className=' flex gap-5 mt-[4rem] justify-center md:justify-normal'>
            <div className=' h-6 w-6 rounded-full bg-white hover:bg-[#7D83FF] hover:scale-150 opacity-40'>
            <img className=" h-3 w-3 m-[5px] mt-[6px]" src={send} alt="" />
            </div>
            <div className=' h-6 w-6 rounded-full bg-white hover:bg-[#7D83FF] hover:scale-150 opacity-40'>
            <img className=" h-3 w-3 m-[5px] mt-[6px]" src={send} alt="" />
            </div>
            <div className=' h-6 w-6 rounded-full bg-white hover:bg-[#7D83FF] hover:scale-150 opacity-40'>
            <img className=" h-3 w-3 m-[5px] mt-[6px]" src={send} alt="" />
            </div>
            <div className=' h-6 w-6 rounded-full bg-white hover:bg-[#7D83FF] hover:scale-150 opacity-40'>
            <img className=" h-3 w-3 m-[5px] mt-[6px]" src={send} alt="" />
            </div>
        </div>

    </div>
   
  )
}

export default Footer
