import React from "react";
import "../CSSPages/Offer.css";
import down from "../images/down.png";
import home from "../images/Home.png";
import { TEChart } from "tw-elements-react";
import refresh from "../images/refresh.png";

function ProxyGenerator() {
  return (
    <section className="flex flex-col m-auto p-auto">
      <h1 className="flex py-5 font-bold text-2xl text-white ml-3">
        Proxy Generator
      </h1>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className=" flex flex-col md:flex-row gap-10 flex-nowrap  ">
          {/*1  */}
          <div className="inline-block px-6 md:px-3">
            <div className="h-[20rem] w-[357px]  overflow-hidden rounded-lg shadow-md bg-[#000300] p-0 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className=" ml-[1.5rem] md:ml-0 lg:ml-0 lg:mt-0">
                {/*  */}
                <div className="bg-black rounded-lg">
                  {/* donut */}
                  <div className="">
                    <div className=" flex flex-col">
                      <div className=" flex justify-between p-5">
                        <div className=" flex gap-3">
                          <img className="h-5 w-5 mt-1" src={home} alt="" />
                          <h1 className="text-[#FF8686] text-lg font-bold">
                            Residential
                          </h1>
                        </div>
                        <div className="mt-[-5px]">
                          <select
                            id="countries"
                            className=" text-gray-400  px-4 py-2 rounded-md bg-black"
                          >
                            <option className="" value="US">
                              plan
                            </option>
                            <option className="" value="CA">
                            plan:1
                            </option>
                            <option className="" value="FR">
                            plan:2
                            </option>
                            <option className="" value="DE">
                            plan:3
                            </option>
                          </select>

                         
                        </div>
                      </div>

                      <div className="h-[13rem] w-[13rem] ml-[4rem] mt-[-1.5rem]">
                        <TEChart
                          type="doughnut"
                          data={{
                            datasets: [
                              {
                                data: [12, 8],
                                backgroundColor: [
                                  "rgba(255, 134, 134, 1)",
                                  "rgba(255, 219, 219, 1)",
                                ],
                              },
                            ],
                          }}
                        />
                      </div>

                      <div className=" flex flex-col pl-2">
                        <h1 className=" text-white font-bold text-md pb-2">
                          14 days remaining
                        </h1>
                        <span className=" text-gray-400 text-xs">
                          {" "}
                          Expires 25 December 2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="inline-block px-3 pr-6">
            <div className=" h-full md:h-[20rem] w-[357px] ml-[0.8rem] md:ml-0 lg:ml-0 md:w-[720px] rounded-lg  overflow-hidden p-3  shadow-md bg-[#000300] hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className=" flex justify-between p-2">
                <div>
                  <h1 className=" text-white text-sm font-bold p-2 pl-5">
                    Configurations
                  </h1>
                </div>
                <div className=" flex gap-2">
                  <img className=" h-4 w-4" src={refresh} alt="" />
                  <span className=" h-1 text-xs text-gray-400 ">Rotating</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="h-4 sr-only peer" checked />
                    <div class=" mt-[-16px] w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-3 peer-focus:ring-blue-300 dark:peer-focus:ring-[#7D83FF] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#7D83FF]"></div>
                  </label>
                </div>
              </div>
              <div className=" pb-[1rem] md:pb-0 lg:pb-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                {/* 1 */}
                <div className=" p-6 flex flex-col gap-[14px]">
                  <select
                    id="countries"
                    className=" text-gray-400 w-[18rem] md:w-[12rem] px-4 py-2 rounded-md texw bg-black border border-gray-300 hover:border-blue-500"
                  >
                    <option value="US">Country</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>

                  <select
                    id="countries"
                    className=" text-gray-400 w-[18rem] md:w-[12rem] px-4 py-2 rounded-md texw bg-black border border-gray-300 hover:border-blue-500"
                  >
                    <option value="US">Select/Region</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>

                  <select
                    id="countries"
                    className=" text-gray-400 w-[18rem] md:w-[12rem] px-4 py-2 rounded-md texw bg-black border border-gray-300 hover:border-blue-500"
                  >
                    <option value="US">City</option>
                    <option value="CA">ABC</option>
                    <option value="FR">XYZ</option>
                    <option value="DE">123</option>
                  </select>

                  <select
                    id="countries"
                    className=" text-gray-400 w-[18rem] md:w-[12rem] px-4 py-2 rounded-md texw bg-black border border-gray-300 hover:border-blue-500"
                  >
                    <option value="US">ISP</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>

                {/* 2 */}
                <div className=" p-6 flex flex-col gap-3 text-white">
                  <input
                    className="  w-[18rem] md:w-[12rem] px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                    placeholder="Username"
                    type="text"
                  />
                  <input
                    className="  w-[18rem] md:w-[12rem] px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                    placeholder="Password"
                    type="Password"
                  />
                  <textarea
                    className=" relative overflow-hidden w-[18rem] md:w-[12rem] px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                    placeholder="Whitelisted IP’s"
                    type="text"
                    rows={3}
                  />
                </div>

                {/* 3 */}
                <div className=" flex flex-col gap-1 md:mt-[5rem] ml-[1rem]">
                  <h1 className=" text-white text-2xl font-bold">30 minutes</h1>
                  <span className=" text-gray-400 text-xs ml-4">
                    Rotation Duration
                  </span>
                  <div className=" h-2 rounded-2xl bg-white w-[6rem] mt-3 ml-1 hover:bg-[#7D83FF]"></div>
                  <button className=" w-[10rem] mt-7 px-3 py-1 rounded-lg bg-white hover:bg-[#7D83FF] text-black hover:text-white">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProxyGenerator;
