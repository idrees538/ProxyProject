import React from "react";
import setting from "../images/setting.png";
import profile from "../images/profile.png";
import Sidebar from "../Components/Sidebar";
import Chartwidget from "../Components/Chartwidget";
import time from "../images/time.png";
import DonutChart from "../Components/DonutChart";
import layers from "../images/layer.png";
import home from "../images/home.png";
import vector from "../images/vector.png";
import phone from "../images/phone.png";
import lock from "../images/lock.png";
import doller from "../images/doller.png";
import bar from "../images/bars.png";
import dashboard from "../images/dashboard.png";
import order from "../images/order.png";
import wallet from "../images/wallet.png";
import generator from "../images/generator.png";
import help from "../images/help.png";
import Drawer from "./Drawer";
import logo from "../images/logo.png";
import { TEChart } from "tw-elements-react";
import credit from "../images/credit.png";
import chart from "../images/chart.png";
import percentage from "../images/percentage.png";
import Footer from "../Components/Footer";
import BarChart from "../Components/BarChart";
import { Link } from "react-router-dom";
import YourWallet from "../Components/YourWallet";

function Wallet() {
  const [isOpens, setIsOpen] = React.useState(false);
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_rgba(87,120,117,1)_3%,_rgba(74,82,89,1)_30%,_rgba(74,82,89,1)_69%,_rgba(83,107,108,1)_98%)]">
      {/* navbar */}
      <div className=" flex justify-between p-5 md:pl-20 md:pr-20  w-full h-[5rem] bg-transparent">
        <div className=" flex ">
          <img
            onClick={setIsOpen}
            className=" h-[2rem] w-[2rem] mt-1 lg:hidden"
            src={bar}
            alt=""
          />
          <img className=" w-[7rem] h-[3rem]" src={logo} alt="" />
        </div>
        <div className=" hidden lg:flex gap-5">
          <div>
            <ul className="mt-2 flex gap-2 md:gap-8 text-sm text-white font-bold">
              <li>
                <img className=" h-8 w-8 mt-1" src={setting} alt="" />
              </li>
              <li>
                <img className="h-10 w-10 rounded-full" src={profile} alt="" />
              </li>
            </ul>
          </div>
          <div className=" flex flex-col mt-1 ">
            <span className="text-white font-normal">Johnny Harish</span>
            <span className="text-white font-normal underline hover:text-blue-400 cursor-pointer">
              Logout
            </span>
          </div>
        </div>
      </div>

      <div className="flex col-span-2 ...">
        {/* sidebar */}
        <div>
          <div className=" hidden  lg:flex">
            <Sidebar />
          </div>
          {/* Drawer */}
          <div className=" lg:hidden ">
            <Drawer isOpen={isOpens} setIsOpen={setIsOpen}>
              <div className=" flex justify-around pt-[2rem]">
                <div>
                  <img className=" h-8 w-8" src={setting} alt="" />
                </div>
                <div className="flex gap-5 pr-[6rem]  ">
                  <div>
                    <img
                      className="w-12 h-12 lg:h-10 lg:w-10 rounded-full"
                      src={profile}
                      alt=""
                    />
                  </div>
                  <div className=" flex flex-col">
                    <span className="text-white font-normal">
                      Johnny Harish
                    </span>
                    <span className="text-white font-normal underline hover:text-blue-400 cursor-pointer">
                      Logout
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-1">
                <Link to="/">
                  <div className=" flex">
                    <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                      <img className="h-5 w-5 mt-1 " src={dashboard} alt="" />
                      <h1 className=" text-white font-bold text-xl cursor-pointer">
                        Dashboard
                      </h1>
                    </div>
                  </div>
                </Link>

                <Link to="/order">
                  <div className=" flex">
                    <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                      <img className="h-5 w-5 mt-1 " src={order} alt="" />
                      <h1 className=" text-white font-bold text-xl cursor-pointer">
                        Order
                      </h1>
                    </div>
                  </div>
                </Link>

                <Link to="/wallet">
                  <div className=" flex">
                    <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                      <img className="h-5 w-5 mt-1 " src={wallet} alt="" />
                      <h1 className=" text-white font-bold text-xl cursor-pointer">
                        Wallet
                      </h1>
                    </div>
                  </div>
                </Link>

                <Link to="/generator">
                  <div className=" flex">
                    <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                      <img className="h-5 w-5 mt-1 " src={generator} alt="" />
                      <h1 className=" text-white font-bold text-xl cursor-pointer">
                        Generator
                      </h1>
                    </div>
                  </div>
                </Link>

                <Link to="/support">
                  <div className=" flex">
                    <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                      <img className="h-5 w-5 mt-1 " src={help} alt="" />
                      <h1 className=" text-white font-bold text-xl cursor-pointer">
                        Support
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            </Drawer>
          </div>
        </div>

        {/* 1 */}
        <div className=" lg:ml-[14rem] mt-[2rem]">
          <div className="relative overflow-x-scroll hide-scroll-bar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <YourWallet/>
          </div>

          <div className=" mt-[3rem] pb-[2rem] pr-8 ml-[6px] md:ml-[1rem] lg:ml-0">
            <div>
              <h1 className=" text-white font-bold text-xl">
                Recent Transaction
              </h1>
            </div>
            <div className=" relative overflow-y-scroll hide-scroll-bar flex flex-col gap-3 w-full h-[20rem] bg-black rounded-lg   p-4 mt-4 ">
              {/* 1 */}
              <div className=" flex justify-between">
                <div className=" flex gap-5 ">
                  <div className="px-0.5 py-0.5 bg-[#ddbbbb] md:h-9 md:w-9 rounded-full">
                    <img className=" h-4 w-4 m-2 " src={lock} alt="" />
                  </div>
                  <div className=" flex flex-col gap-1">
                    <h1 className=" text-white text-sm ">
                      Purshase-Datacenter
                    </h1>
                    <p className=" text-gray-300 text-xs">
                      Today, 29 aug at 10:20
                    </p>
                  </div>
                </div>
                <div className=" flex gap-5 md:gap-16">
                  <h1 className=" text-[#eb7373] font-bold">$50.00</h1>
                  <button className=" w-[4rem] h-[2rem] md:w-[8rem] md:h-[2.5rem] bg-white text-black hover:text-[#eb7373] rounded-lg">
                    Details
                  </button>
                </div>
              </div>
              {/* 2 */}
              <div className=" flex justify-between">
                <div className=" flex gap-5 ">
                  <div className="px-0.5 py-0.5 bg-[#ddbbbb] h-9 w-9 rounded-full">
                    <img className=" h-4 w-4 m-2 " src={lock} alt="" />
                  </div>
                  <div className=" flex flex-col gap-1">
                    <h1 className=" text-white text-sm ">
                      Purshase-Residential
                    </h1>
                    <p className=" text-gray-300 text-xs">
                      Today, 29 aug at 10:20
                    </p>
                  </div>
                </div>
                <div className=" flex gap-5 md:gap-16">
                  <h1 className=" text-[#eb7373] font-bold">$25.00</h1>
                  <button className=" w-[4rem] h-[2rem] md:w-[8rem] md:h-[2.5rem] bg-white text-black hover:text-[#eb7373] rounded-lg">
                    Details
                  </button>
                </div>
              </div>
              {/* 3 */}
              <div className=" flex justify-between">
                <div className=" flex gap-5 ">
                  <div className="px-0.5 py-0.5 bg-[#7286de] h-9 w-9 rounded-full">
                    <img className=" h-4 w-4 m-2 " src={doller} alt="" />
                  </div>
                  <div className=" flex flex-col gap-1">
                    <h1 className=" text-white text-sm ">Wallet Top Up</h1>
                    <p className=" text-gray-300 text-xs">
                      Today, 29 aug at 10:20
                    </p>
                  </div>
                </div>
                <div className=" flex gap-5 md:gap-16">
                  <h1 className=" text-[#3a58c7] font-bold">$150.00</h1>
                  <button className=" w-[4rem] h-[2rem] md:w-[8rem] md:h-[2.5rem] bg-white text-black hover:text-[#eb7373] rounded-lg">
                    Details
                  </button>
                </div>
              </div>

              {/* 4 */}
              <div className=" flex justify-between">
                <div className=" flex gap-5 ">
                  <div className="px-0.5 py-0.5 bg-[#7286de] h-9 w-9 rounded-full">
                    <img className=" h-4 w-4 m-2 " src={doller} alt="" />
                  </div>
                  <div className=" flex flex-col gap-1">
                    <h1 className=" text-white text-sm ">Wallet Top Up</h1>
                    <p className=" text-gray-300 text-xs">
                      Today, 29 aug at 10:20
                    </p>
                  </div>
                </div>
                <div className=" flex gap-5 md:gap-16">
                  <h1 className=" text-[#3a58c7] font-bold">$150.00</h1>
                  <button className=" w-[4rem] h-[2rem] md:w-[8rem] md:h-[2.5rem] bg-white text-black hover:text-[#eb7373] rounded-lg">
                    Details
                  </button>
                </div>
              </div>

              {/* 5 */}
              <div className=" flex justify-between">
                <div className=" flex gap-5 ">
                  <div className="px-0.5 py-0.5 bg-[#ddbbbb] h-9 w-9 rounded-full">
                    <img className=" h-4 w-4 m-2 " src={lock} alt="" />
                  </div>
                  <div className=" flex flex-col gap-1">
                    <h1 className=" text-white text-sm ">
                      Purshase-Residential
                    </h1>
                    <p className=" text-gray-300 text-xs">
                      Today, 29 aug at 10:20
                    </p>
                  </div>
                </div>
                <div className=" flex gap-5 md:gap-16">
                  <h1 className=" text-[#eb7373] font-bold">$25.00</h1>
                  <button className=" w-[4rem] h-[2rem] md:w-[8rem] md:h-[2.5rem] bg-white text-black hover:text-[#eb7373] rounded-lg">
                    Details
                  </button>
                </div>
              </div>

              {/* 6 */}
              <div className=" flex justify-between">
                <div className=" flex gap-5 ">
                  <div className="px-0.5 py-0.5 bg-[#ddbbbb] h-9 w-9 rounded-full">
                    <img className=" h-4 w-4 m-2 " src={lock} alt="" />
                  </div>
                  <div className=" flex flex-col gap-1">
                    <h1 className=" text-white text-sm ">
                      Purshase-Residential
                    </h1>
                    <p className=" text-gray-300 text-xs">
                      Today, 29 aug at 10:20
                    </p>
                  </div>
                </div>
                <div className=" flex gap-5 md:gap-16">
                  <h1 className=" text-[#eb7373] font-bold">$25.00</h1>
                  <button className=" w-[4rem] h-[2rem] md:w-[8rem] md:h-[2.5rem] bg-white text-black hover:text-[#eb7373] rounded-lg">
                    Details
                  </button>
                </div>
              </div>

              {/* 7 */}
              <div className=" flex justify-between">
                <div className=" flex gap-5 ">
                  <div className="px-0.5 py-0.5 bg-[#ddbbbb] h-9 w-9 rounded-full">
                    <img className=" h-4 w-4 m-2 " src={lock} alt="" />
                  </div>
                  <div className=" flex flex-col gap-1">
                    <h1 className=" text-white text-sm ">
                      Purshase-Residential
                    </h1>
                    <p className=" text-gray-300 text-xs">
                      Today, 29 aug at 10:20
                    </p>
                  </div>
                </div>
                <div className=" flex gap-5 md:gap-16">
                  <h1 className=" text-[#eb7373] font-bold">$25.00</h1>
                  <button className=" w-[4rem] h-[2rem] md:w-[8rem] md:h-[2.5rem] bg-white text-black hover:text-[#eb7373] rounded-lg">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Wallet;
