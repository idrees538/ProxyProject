import React from "react";
import exportfile from "../images/Exportfile.png";
import strip from "../images/stripe.png";
import visa from "../images/visa.png";
import bitpay from "../images/bitpay.png";
import applepay from "../images/applepay.png";
import bitcoin from "../images/bitcoin.png";
function SettingCard() {
  return (
    <section className="flex flex-col m-auto p-auto">
      <div className=" flex flex-col overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-col gap-5 md:flex-row gap-x-[30px] flex-nowrap  ">
          {/*1  */}
          <div className="inline-block">
            <h1 className=" text-white font-bold text-lg pb-3">
              Site Settings
            </h1>
            <div className=" w-full md:w-[520px] h-[350px] overflow-hidden p-7 rounded-lg shadow-md bg-[#000300] hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className=" flex flex-col gap-5">
                <input
                  className="  md:w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                  placeholder="Website Title"
                  type="text"
                />
                <textarea
                  className="w-full px-4 py-2  md:ml-0 md:mt-2 lg:mt-0 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                  placeholder="Meta Description"
                  type="text"
                  rows={3}
                />
              </div>

              <div className=" flex justify-between pt-2 pl-5 pr-5">
                <div>
                  <div>
                    <p className=" text-white"> Favicon</p>
                  </div>
                  <div className=" cursor-pointer bg-blue-800 h-[3rem] w-[5rem] border border-[#00B795]">
                    <img
                      className=" p-[8px] pl-[25px]"
                      src={exportfile}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <p className=" text-white"> Favicon</p>
                  </div>
                  <div className=" cursor-pointer bg-blue-800 h-[3rem] w-[5rem] border border-[#00B795]">
                    <img
                      className=" p-[8px] pl-[25px]"
                      src={exportfile}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <button className=" bg-[#00B795] mt-5 ml-[88px] md:ml-[130px] text-xs md:text-sm w-[180px] px-3 py-[10px] rounded-lg">
                Save
              </button>
            </div>
          </div>

          {/* 2 */}
          <div className="inline-block md:px-1 ">
            <h1 className=" text-white font-bold text-lg pb-3">Stats</h1>
            <div className=" overflow-y-scroll hide-scroll-bar flex flex-col gap-5 w-[400px] md:w-[520px] h-[350px] overflow-hidden p-5 pt-9 text-white rounded-lg shadow-md bg-[#000300] hover:shadow-xl transition-shadow duration-300 ease-in-out">
             
              <div className=" flex gap-4">
               
                <div className=" mt-2">
                  <input
                    
                    aria-describedby="helper-checkbox-text"
                    type="checkbox"
                    value=""
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>

                <div className=" h-[40px] w-[60px] border-2 border-white rounded-lg p-2">
                  <img src={strip} alt="" />
                </div>

                <div>
                  <input
                    className=" w-full md:w-[370px] h-[40px] px-2 ml-[-4px]  rounded-lg bg-transparent border border-gray-300 hover:border-blue-500"
                    placeholder="0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
                    type="text"
                  />
                </div>

              </div>

              <div className=" flex gap-4">
         
               <div className=" mt-2">
                 <input
                  
                   aria-describedby="helper-checkbox-text"
                   type="checkbox"
                   value=""
                   className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                 />
               </div>

               <div className=" h-[40px] w-[60px] border-2 border-white rounded-lg p-2 pl-4">
                 <img className="h-6 w-6" src={bitcoin} alt="" />
               </div>

               <div>
                 <input
                   className="w-full md:w-[370px] h-[40px] px-2 ml-[-4px]  rounded-lg bg-transparent border border-gray-300 hover:border-blue-500"
                   placeholder="0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
                   type="text"
                 />
               </div>

             </div>

             <div className=" flex gap-4">
         
         <div className=" mt-2">
           <input
             
             aria-describedby="helper-checkbox-text"
             type="checkbox"
             value=""
             className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
           />
         </div>

         <div className=" h-[40px] w-[60px] border-2 border-white rounded-lg p-2">
           <img src={visa} alt="" />
         </div>

         <div>
           <input
             className="w-full md:w-[370px] h-[40px] px-2 ml-[-4px]  rounded-lg bg-transparent border border-gray-300 hover:border-blue-500"
             placeholder="0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
             type="text"
           />
         </div>

             </div>

             <div className=" flex gap-4">
         
         <div className=" mt-2">
           <input
             
             aria-describedby="helper-checkbox-text"
             type="checkbox"
             value=""
             className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
           />
         </div>

         <div className=" h-[40px] w-[60px] border-2 border-white rounded-lg p-2">
           <img src={bitpay} alt="" />
         </div>

         <div>
           <input
             className=" w-full md:w-[370px] h-[40px] px-2 ml-[-4px]  rounded-lg bg-transparent border border-gray-300 hover:border-blue-500"
             placeholder="0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
             type="text"
           />
         </div>

             </div>

             <div className=" flex gap-4">
         
         <div className=" mt-2">
           <input
             
             aria-describedby="helper-checkbox-text"
             type="checkbox"
             value=""
             className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
           />
         </div>
         <div className=" h-[40px] w-[60px] border-2 border-white rounded-lg p-2">
           <img src={applepay} alt="" />
         </div>

         <div>
           <input
             className=" w-full md:w-[370px] h-[40px] px-2 ml-[-4px]  rounded-lg bg-transparent border border-gray-300 hover:border-blue-500"
             placeholder="0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
             type="text"
           />
         </div>

             </div>
            </div>
          </div>

          
        </div> 

      </div>
     
    </section>
  );
}

export default SettingCard;

//
