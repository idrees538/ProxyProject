import React from "react";
import "../CSSPages/Offer.css";
import layers from "../images/Layer.png";
import home from "../images/Home.png";
import phone from "../images/Phone.png";
import vector from "../images/Vector.png";
import time from "../images/Time.png";
import order from "../images/Order.png";
import Chartwidget from "../Components/Chartwidget";
import DonutChart from "./DonutChart";

function Overview() {
  return ( 
      <section className="flex flex-col m-auto p-auto">
        <h1 className="flex py-5 font-bold text-2xl text-white ml-3">
        Your Offer
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap  ">
            {/*1  */}
            <div className="inline-block px-1 md:px-3">
            <h1 className=" text-white font-bold text-xl pb-3">
                Johnny's Overview
              </h1>
              <div className=" w-[400px] md:w-[720px] h-[300px] overflow-hidden p-7 rounded-lg shadow-md bg-[#000300] hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col md:flex-row   ">
                <div className=" flex flex-row md:flex-col gap-5 md:gap-10">
                  <div className="flex gap-2 md:gap-4">
                    <div className=" ">
                      <img className=" h-7 w-7 mt-2" src={time} alt="" />
                    </div>
                    <div className=" flex flex-col">
                      <h1 className=" font-bold text-xl text-white">5</h1>
                      <span className=" text-white text-xs">Active Plans</span>
                    </div>
                  </div>

                  <div className="flex gap-2 md:gap-4 ">
                    <div className=" ">
                      <img className=" h-7 w-7 mt-2" src={time} alt="" />
                    </div>
                    <div className=" flex flex-col">
                      <h1 className=" font-bold text-lg text-white">4.8GB</h1>
                      <span className=" text-white text-xs">
                        Total Data 
                      </span>
                      <span className=" text-white text-xs">
                        Remaining 
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 md:gap-4">
                    <div className=" ">
                      <img className=" h-7 w-7 mt-2" src={order} alt="" />
                    </div>
                    <div className=" flex flex-col">
                      <h1 className=" font-bold text-xl text-white">62</h1>
                      <span className=" text-white text-xs">Total Orders</span>
                    </div>
                  </div>
                </div>

                {/* chart */}
                <div className=" md:mt-10 ">
                  <Chartwidget />
                </div>
              </div>
              </div>
            </div>

            {/* 2 */}
            <div className="inline-block px-3">
            <h1 className=" text-white font-bold text-xl pb-3">Your Wallet</h1>
              <div className="w-[350px] h-[300px] max-w-xs overflow-hidden rounded-lg shadow-md bg-[#000300] p-0 hover:shadow-xl transition-shadow duration-300 ease-in-out">
               <DonutChart/>
              </div>
            </div>

           
          </div>
        </div>
      </section>

  );
}

export default Overview;




