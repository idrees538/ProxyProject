import React from "react";
import "../CSSPages/Offer.css";
import search from "../images/search.png";
import { TEChart } from "tw-elements-react";
import upload from "../images/upload.png";
import { Link } from "react-router-dom";

function SupportMyToken() {
  return (
    <section className="flex flex-col m-auto p-auto">
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap  ">
          {/*1  */}
          <div className="inline-block px-3">
            <h1 className=" text-lg text-white font-bold p-4">My Tickets</h1>
            <div className="h-[20rem] w-[380px] overflow-hidden rounded-lg shadow-md bg-[#000300] hover:shadow-xl transition-shadow duration-300 ease-in-out">
              {/* donut */}
              <div className=" pr-[2rem]">
                <div className=" flex gap-5  m-5 ml-20 md:ml-[3rem] lg:ml-16">
                  <div className="h-[12rem] w-[12rem] mt-[0.5rem]">
                    <TEChart
                      type="doughnut"
                      data={{
                        datasets: [
                          {
                            data: [10, 5],
                            backgroundColor: [
                              "rgba(0, 183, 149, 1)",
                              "rgba(230, 248, 241, 1)",
                            ],
                          },
                        ],
                      }}
                    />
                  </div>
                  <div>
                    <div className=" flex flex-col mt-[1rem]">
                      <div className=" flex mt-2">
                        <div className=" h-3 w-3 bg-[#E6F8F1] mt-2"></div>
                        <div className=" flex flex-col ml-[-8px]">
                          <span className=" text-xs text-white ml-6">5</span>
                          <span className=" text-xs text-white ml-6">Open</span>
                        </div>
                      </div>

                      <div className=" flex mt-2">
                        <div className=" h-3 w-3 bg-[#00B795] mt-2"></div>
                        <div className=" flex flex-col ml-[-8px]">
                          <span className=" text-xs text-white ml-6">10</span>
                          <span className=" text-xs text-white ml-6">
                            Solved
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/userfaq">
                  <div className=" flex gap-1 mt-[4.5rem] ml-2">
                    <img className=" h-4 w-4" src={search} alt="" />
                    <span className=" text-white text-xs underline">
                      View our FAQ
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="inline-block px-3 pr-4">
            <h1 className=" text-lg text-white font-bold p-4">New Tickets</h1>
            <div className=" h-full md:h-[20rem] w-[380px] ml-[1.5rem] md:ml-0 lg:ml-0 md:w-[720px] bg-[#000300] rounded-lg overflow-hidden p-2  shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="  ">
                <div className=" p-5 ml-[1rem]">
                  {/* 1 */}
                  <div className=" flex flex-col md:flex-row justify-around">
                    <div>
                      <h1 className=" text-white font-bold">Title</h1>
                      <input
                        className="  w-[18rem] md:w-[12rem] px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                        placeholder="Ticket Title"
                        type="text"
                      />
                    </div>
                    <div>
                      <h1 className=" text-white font-bold">Ticket type</h1>
                      <select
                        id="countries"
                        className=" text-gray-400 w-[18rem] md:w-[12rem] px-4 py-2 rounded-md texw bg-transparent border border-gray-300 hover:border-blue-500"
                      >
                        <option value="US">Select Topic</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className=" md:ml-[4rem] mt-5">
                    <textarea
                      className=" relative overflow-hidden w-[18rem] md:w-[33rem] px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                      placeholder="Enter Descriptions..."
                      type="text"
                      rows={3}
                    />
                    <div className=" flex  gap-2">
                      <label
                        htmlFor="attachment"
                        className="px-1 py-1 flex cursor-pointer"
                      >
                        <img className="h-4 w-4 mt-1" src={upload} alt="" />
                        <span className="text-gray-400 ">
                          Upload Attachment
                        </span>
                        <input id="attachment" type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                  {/* 3 */}
                </div>
                <button className=" px-3 py-2 bg-white hover:bg-[#00B795] hover:text-white rounded-md ml-[7.5rem] md:ml-[20rem] mb-5 md:mb-0 md:mt-[1rem]">
                  Submit Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportMyToken;
