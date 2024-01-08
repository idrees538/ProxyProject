import React from "react";
import "../CSSPages/Offer.css";
import time from "../images/Time.png";
import order from "../images/Order.png";
import Chartwidget from "../Components/Chartwidget";
import DonutChart from  "../Components/DonutChart";

function AdminOverview() {
  return ( 
      <section className="flex flex-col m-auto p-auto">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap  ">
            {/*1  */}
            <div className="inline-block px-1 md:px-3">
            <h1 className=" text-white font-bold text-lg pb-3">
                Admin Dashboard
              </h1>
              <div className=" w-[400px] md:w-[720px] h-[300px] overflow-hidden p-7 rounded-lg shadow-md bg-[#000300] hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col md:flex-row   ">
                <div className=" flex flex-col gap-2 md:gap-4">

                      {/* selectWeek */}
                 <div>
                   <select
                      id="countries"
                      className=" text-gray-400 w-[18rem] md:w-[12rem] px-4 py-2 rounded-md texw bg-transparent border border-gray-300 hover:border-blue-500"
                    >
                      <option value="US">This Week</option>
                      <option value="CA">One Week Ago </option>
                      <option value="FR">Two Week Ago </option>
                      <option value="DE">three Week Ago </option>
                    </select>
                 </div>

                  <div className=" flex flex-row md:flex-col gap-2 md:gap-4">
                  <div className="flex gap-2 md:gap-4">
                    <div className=" ">
                      <img className=" h-7 w-7 mt-2" src={time} alt="" />
                    </div>
                    <div className=" flex flex-col">
                      <h1 className=" md:font-bold text-xl text-white">5</h1>
                      <span className=" text-white text-xs">Active Plans</span>
                    </div>
                  </div>

                  <div className="flex gap-2 md:gap-4 ">
                    <div className=" ">
                      <img className=" h-7 w-7 mt-2" src={time} alt="" />
                    </div>
                    <div className=" flex flex-col">
                      <h1 className=" md:-bold text-lg text-white">4.8GB</h1>
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
                      <h1 className=" md:font-bold text-xl text-white">62</h1>
                      <span className=" text-white text-xs">Total Orders</span>
                    </div>
                  </div>
                  </div>

                </div>

                {/* chart */}
                <div className=" mt-[-1.5rem]  md:mt-20 lg:mt-16 md:ml-[-4rem] ">
                  <Chartwidget />
                </div>
              </div>
              </div>
            </div>

            {/* 2 */}
            <div className="inline-block px-3">
            <h1 className=" text-white font-bold text-lg pb-3">Stats</h1>
              <div className=" flex flex-col gap-3  w-[280px] h-[300px] max-w-xs overflow-hidden rounded-lg shadow-md bg-[#000300] p-10 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                 
              <div className=" flex gap-3">
                  <div className="w-[4px] h-12 mt-[2px] bg-[#7D83FF] rounded-full"></div>
                  <div className=" flex flex-col">
                        <h1 className=" text-white text-xl font-bold">$50</h1>
                        <span className=" text-gray-500 text-xs">Payment Per Order</span>
                  </div>
                  </div>

                  <div className=" flex gap-3">
                  <div className="w-[4px] h-12 mt-[2px] bg-[#00B795] rounded-full"></div>
                  <div className=" flex flex-col">
                        <h1 className=" text-white text-xl font-bold">3.5</h1>
                        <span className=" text-gray-500 text-xs">Order Per Customer</span>
                  </div>
                  </div>

                  <div className=" flex gap-3">
                  <div className="w-[4px] h-12 mt-[2px] bg-[#7D83FF] rounded-full"></div>
                  <div className=" flex flex-col">
                        <h1 className=" text-white text-xl font-bold">$25</h1>
                        <span className=" text-gray-500 text-xs">Revenue per customer</span>
                  </div>
                  </div>

                  <div className=" flex gap-3">
                  <div className="w-[4px] h-12 mt-[2px] bg-[#00B795] rounded-full"></div>
                  <div className=" flex flex-col">
                        <h1 className=" text-white text-xl font-bold">9</h1>
                        <span className=" text-gray-500 text-xs">Lifetime total order</span>
                  </div>
                  </div>
                  
              </div>
            </div>

           
          </div>
        </div>
      </section>

  );
}

export default AdminOverview;







//
