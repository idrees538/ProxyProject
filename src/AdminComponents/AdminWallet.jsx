import React from "react";
import "../CSSPages/Offer.css";
import graph from "../images/Graph.png";
import { TEChart } from "tw-elements-react";


function AdminWallet() {
  return ( 
      <section className="flex flex-col m-auto p-auto">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap  ">
            {/*1  */}
            <div className="inline-block px-3">
            <h1 className=" text-white font-bold text-lg pb-3">Orders</h1>
              <div className=" h-[17rem] w-[17rem] max-w-xs overflow-hidden rounded-lg shadow-md bg-[#000300] p-1 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className=" h-[8rem] w-[8rem] ml-16">
                 

                <div className="h-[10rem] w-[10rem]">
                      <TEChart
                        type="doughnut"
                        data={{
                          datasets: [
                            {
                              data: [12, 8],
                              backgroundColor: [
                                "rgba(125, 131, 255, 1)",
                                "rgba(190, 205, 228, 1)",
                              ],
                            },
                          ],
                        }}
                      />
                    </div>

                    <div className=" flex flex-col ml-[-2rem]">
                        <div className=" flex mt-2">
                          <div className=" h-3 w-3 bg-[#BECDE4] mt-2"></div>
                          <div className=" flex flex-col ml-[-7px]">
                            <span className=" text-xs text-white ml-6">8</span>
                            <span className=" text-xs text-white ml-6">
                              Pending
                            </span>
                          </div>
                        </div>

                        <div className=" flex mt-2">
                          <div className=" h-3 w-3 bg-[#7D83FF] mt-2"></div>
                          <div className=" flex flex-col ml-[-7px]">
                            <span className=" text-xs text-white ml-6">12</span>
                            <span className=" text-xs text-white ml-6">
                              Completed
                            </span>
                          </div>
                        </div>
                      </div>
                </div>
                        
              </div> 
            </div>

            {/* 2 */}
            <div className="inline-block px-3">
            <h1 className=" text-white font-bold text-lg pb-3">Top Countries Users</h1>
             
            <div className=" relative overflow-y-scroll hide-scroll-bar  h-[17rem] w-[27rem] overflow-hidden rounded-lg shadow-md bg-[#000300] pl-6 pt-10 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                
                <div className=" flex flex-col gap-5 text-white">
                    <div className=" grid grid-cols-4 gap-5">
                        <p className=" text-xs font-bold">UK</p>
                        <p className=" text-xs font-bold">139</p>
                        <p className=" text-xs font-bold">$50</p>
                        <img src={graph} alt="" />
                    </div>

                    <div className=" grid grid-cols-4 gap-5">
                        <p className=" text-xs font-bold">United Emirate</p>
                        <p className=" text-xs font-bold">139</p>
                        <p className=" text-xs font-bold">$50</p>
                        <img src={graph} alt="" />
                    </div>
                    

                    <div className=" grid grid-cols-4 gap-5">
                        <p className=" text-xs font-bold">USA</p>
                        <p className=" text-xs font-bold">139</p>
                        <p className=" text-xs font-bold">$50</p>
                        <img src={graph} alt="" />
                    </div>

                    <div className=" grid grid-cols-4 gap-5">
                        <p className=" text-xs font-bold">Germany</p>
                        <p className=" text-xs font-bold">139</p>
                        <p className=" text-xs font-bold">$50</p>
                        <img src={graph} alt="" />
                    </div>

                    <div className=" grid grid-cols-4 gap-5">
                        <p className=" text-xs font-bold">India</p>
                        <p className=" text-xs font-bold">139</p>
                        <p className=" text-xs font-bold">$50</p>
                        <img src={graph} alt="" />
                    </div>

                    <div className=" grid grid-cols-4 gap-5">
                        <p className=" text-xs font-bold">Singapore</p>
                        <p className=" text-xs font-bold">139</p>
                        <p className=" text-xs font-bold">$50</p>
                        <img src={graph} alt="" />
                    </div>
                </div>

              </div>
            </div>

            {/* 3 */}
            <div className="inline-block px-3">
            <h1 className=" text-white font-bold text-lg pb-3">User Acquisition</h1>
              <div className=" h-[17rem] w-[17rem] max-w-xs overflow-hidden rounded-lg shadow-md bg-[#000300] p-1 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className=" h-[8rem] w-[8rem] ml-16">
                 
                <div className=" flex flex-col ml-[-2rem]">
                        <div className=" flex mt-2">
                          <div className=" h-3 w-3 bg-[#8BF9E4] mt-2"></div>
                          <div className=" flex flex-col ml-[-7px]">
                            <span className=" text-xs text-white ml-6">8</span>
                            <span className=" text-xs text-white ml-6">
                              Pending
                            </span>
                          </div>
                        </div>

                        <div className=" flex mt-2">
                          <div className=" h-3 w-3 bg-[#00B795] mt-2"></div>
                          <div className=" flex flex-col ml-[-7px]">
                            <span className=" text-xs text-white ml-6">12</span>
                            <span className=" text-xs text-white ml-6">
                              Completed
                            </span>
                          </div>
                        </div>
                      </div>

                <div className="h-[10rem] w-[10rem]">
                      <TEChart
                        type="doughnut"
                        data={{
                          datasets: [
                            {
                              data: [12, 8],
                              backgroundColor: [
                                "rgba(0, 183, 149, 1)",
                                "rgba(139, 249, 228, 1)",
                              ],
                            },
                          ],
                        }}
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

export default AdminWallet;


