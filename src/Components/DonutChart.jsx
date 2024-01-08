import React from "react";
import { TEChart } from "tw-elements-react";
import credit from "../images/credit.png";
import chart from "../images/chart.png"
import percentage from "../images/percentage.png";

export default function DonutChart(){
  return (
    <div>
  <div className=" h-[10rem] w-[10rem] m-2 ml-[75px]">
    <div className=" flex gap-5 ">
        <div><img className=" h-6 w-6 mt-1 ml-4" src={credit} alt="" /></div>
        <div className=" flex flex-col">
            <h1 className=" text-2xl font-bold text-white">$350.00</h1>
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
    /></div>
     <div className=" flex justify-around mt-[3rem]">
        <div className=" flex flex-col mt-2">
            <img className="h-6 w-6" src={chart} alt="" />
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
  );
}