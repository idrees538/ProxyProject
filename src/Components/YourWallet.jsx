import React from "react";
import "../CSSPages/Offer.css";
import credit from "../images/credit.png";
import { TEChart } from "tw-elements-react";
import chart from "../images/chart.png"
import percentage from "../images/percentage.png";
import vector from "../images/vector.png";
import home from "../images/home.png";
import BarChart from "../Components/BarChart";

function YourWallet() {
  return ( 
      <section className="flex flex-col m-auto p-auto">
        <h1 className="flex py-5 font-bold text-2xl text-white ml-3">
        Your Offer
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap  ">
            {/*1  */}
            <div className="inline-block px-3">
            <h1 className=" text-white font-bold text-xl pb-3">Your Wallet</h1>
              <div className=" h-[17rem] w-[17rem] max-w-xs overflow-hidden rounded-lg shadow-md bg-[#000300] p-1 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className=" h-[8rem] w-[8rem] ml-16">
                  <div className=" flex gap-5 pt-2">
                    <div>
                      <img className=" h-6 w-6 mt-1" src={credit} alt="" />
                    </div>
                    <div className=" flex flex-col">
                      <h1 className=" text-xl font-bold text-white">$350.00</h1>
                      <span className=" text-xs text-white">Balance</span>
                    </div>
                  </div>

                  <TEChart
                    type="doughnut"
                    data={{
                      datasets: [
                        {
                          data: [1200, 1400, 2745],
                          backgroundColor: [
                            "rgb(42,117,243)",
                            "rgb(244,66,133)",
                            "rgb(66,244,177)",
                          ],
                        },
                      ],
                    }}
                  />
                </div>
                <div className=" flex justify-around mr-2 mt-[3rem]">
                  <div className=" flex flex-col mt-2">
                    <img className="h-6 w-6 ml-4" src={chart} alt="" />
                    <h1 className="text-xl font-bold text-white">$60.00</h1>
                    <p className=" text-gray-400 text-xs">Total spent</p>
                  </div>
                  <div className=" flex flex-col mt-2">
                    <img className="h-6 w-6 ml-4" src={percentage} alt="" />
                    <h1 className="text-xl font-bold text-white">$60.00</h1>
                    <p className=" text-gray-400 text-xs">Total spent</p>
                  </div>
                </div>
              </div> 
            </div>

            

            {/* 2 */}
            <div className="inline-block px-1 md:px-3">
            <h1 className=" text-white font-bold text-xl pb-3">
                Johnny's Overview
              </h1>
              
              <div className="h-[17rem] w-[17rem] overflow-hidden p-7 rounded-lg shadow-md bg-[#000300] hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className=" flex flex-col gap-2 pt-4">
                  <input
                    className=" w-full py-2 px-2 mr-2 rounded-lg border text-white border-gray-400 bg-transparent"
                    placeholder="$0.00"
                    type="text"
                  />
                  <input
                    className=" w-full py-2 px-2 mr-2 rounded-lg border text-white border-gray-400 bg-transparent"
                    placeholder="Voucher Code"
                    type="text"
                  />
                </div>
                <div className=" flex gap-3 mt-4 ml-2">
                  <a href="" className=" text-lg font-bold text-[#7D83FF]">Strip</a>
                  <a href="" className=" flex gap-1">
                    <img className="h-2 w-2 mt-[11px]" src={vector} alt="" />
                    <p className=" text-white text-xs mt-[6px]">Cash App</p>
                  </a>
                  <a href="" className=" flex gap-1">
                    <img className="h-2 w-2 mt-[11px]" src={home} alt="" />
                    <p className=" text-white text-xs mt-[6px]">Bitcoin</p>
                  </a>
                </div>
                <button className=" bg-[#69C378] w-[11rem] rounded-lg text-black px-3 py-2 ml-6 mt-5 ">
                  Buy for $10.00/day
                </button>
              </div>
            
            </div>
            
            {/* 3 */}
            <div className="inline-block px-3">
            <h1 className=" text-white font-bold text-xl pb-3">Your Wallet</h1>
             
              <div className="  h-[17rem] w-[26rem] overflow-hidden rounded-lg shadow-md bg-[#000300] p-1 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <BarChart />
              </div>

            </div>

           
          </div>
        </div>
      </section>

  );
}

export default YourWallet;




