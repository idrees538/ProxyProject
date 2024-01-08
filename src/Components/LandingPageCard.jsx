import React from "react";
import "../CSSPages/Offer.css";
import layers from "../images/Layer.png";
import home from "../images/Home.png";
import phone from "../images/Phone.png";
import vector from "../images/Vector.png";

function LandingPageCard() {
  return ( 
      <section className="flex flex-col m-auto p-auto ">
        <h1 className="flex py-5 font-bold text-2xl text-white px-3">
        Choose a great plan now
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-row lg:gap-16 flex-nowrap ">
            {/*1  */}
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden p-5 rounded-lg shadow-md bg-[#000300] hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className=" flex gap-5">
                  <img className="h-8 w-8" src={layers} alt="" />
                  <h1 className=" text-[#7D83FF] text-xl font-bold">
                    Datacenter
                  </h1>
                </div>
                <ul class="max-w-md space-y-1 ml-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>Super good</li>
                  <li>High monthly volumes</li>
                  <li>Lorem Ipsum</li>
                  <li>Value for money</li>
                </ul>

                <button className=" bg-[#7D83FF] w-[11rem] rounded-lg text-black px-3 py-2 ml-5 mt-5 ">
                  Buy for $10.00/day
                </button>
              </div>
            </div>

            {/* 2 */}
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-[#000300] p-5 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className=" flex gap-5 ml-1">
                  <img className="h-6 w-6" src={home} alt="" />
                  <h1 className="text-[#FF8686] text-xl font-bold">
                    Residential
                  </h1>
                </div>
                <ul class="max-w-md space-y-1 ml-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>Super good</li>
                  <li>High monthly volumes</li>
                  <li>Lorem Ipsum</li>
                  <li>Value for money</li>
                </ul>

                <button className=" bg-[#FF8686] w-[11rem] rounded-lg text-black px-3 py-2 ml-6 mt-5 ">
                  Buy for $10.00/day
                </button>
              </div>
            </div>

            {/* 3 */}
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-[#000300] p-5 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className=" flex gap-5 ml-2">
                  <img className="h-6 w-3" src={phone} alt="" />
                  <h1 className="text-[#69C378] text-xl font-bold">
                    Datacenter
                  </h1>
                </div>
                <ul class="max-w-md space-y-1 ml-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>Super good</li>
                  <li>High monthly volumes</li>
                  <li>Lorem Ipsum</li>
                  <li>Value for money</li>
                </ul>

                <button className=" bg-[#69C378] w-[11rem] rounded-lg text-black px-3 py-2 ml-6 mt-5 ">
                  Buy for $10.00/day
                </button>
              </div>
            </div>
           
          </div>
        </div>
      </section>

  );
}

export default LandingPageCard;













