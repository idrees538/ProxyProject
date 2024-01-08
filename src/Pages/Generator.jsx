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
import down from "../images/down.png";
import refresh from "../images/refresh.png";
import p from "../images/p.png";
import q from "../images/q.png";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ProxyGenerator from "../Components/ProxyGenerator";

function Generator() {
  const [isOpens, setIsOpen] = React.useState(false);
  return (
    <div className=" w-full h-full overflow-auto sm:pb-0 md:pb-16 lg:pb-0  bg-[linear-gradient(135deg,_rgba(87,120,117,1)_3%,_rgba(74,82,89,1)_30%,_rgba(74,82,89,1)_69%,_rgba(83,107,108,1)_98%)]">
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
          <img className="w-12 h-12 lg:h-10 lg:w-10 rounded-full" src={profile} alt="" />
          </div>
          <div className=" flex flex-col">
            <span className="text-white font-normal">Johnny Harish</span>
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
    <h1 className=" text-white font-bold text-xl cursor-pointer">Dashboard</h1>
  </div>
</div></Link>

<Link to="/order">
<div className=" flex">
  <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
    <img className="h-5 w-5 mt-1 " src={order} alt="" />
    <h1 className=" text-white font-bold text-xl cursor-pointer">Order</h1>
  </div>
</div></Link>


<Link to="/wallet">
  <div className=" flex">
  <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
    <img className="h-5 w-5 mt-1 " src={wallet} alt="" />
    <h1 className=" text-white font-bold text-xl cursor-pointer">Wallet</h1>
  </div>
</div></Link>

<Link to="/generator">
<div className=" flex">
  <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
    <img className="h-5 w-5 mt-1 " src={generator} alt="" />
    <h1 className=" text-white font-bold text-xl cursor-pointer">Generator</h1>
  </div>
</div></Link>

<Link to="/support">
<div className=" flex">
  <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
    <img className="h-5 w-5 mt-1 " src={help} alt="" />
    <h1 className=" text-white font-bold text-xl cursor-pointer">Support</h1>
  </div>
</div></Link>
</div>
      </Drawer>
          </div>
        </div>

        {/* 1 */}
        <div className=" lg:ml-[8rem]  lg:mt-[3rem] p-1 md:p-4">
        <div className="mt-[1rem] "> 
            <div className=" overflow-x-scroll hide-scroll-bar grid grid-cols-1 lg:grid-cols-2 gap-2 mt-[1rem]">
              <ProxyGenerator />
            </div>
          </div>

          <div className=" mt-[3rem] pb-[2rem]">
            <div className="flex flex-col md:flex-row relative overflow-auto gap-3 w-[357px] ml-[1.5rem] md:ml-0 md:w-[100%] h-full md:h-[11rem] bg-black rounded-lg pr-21 lg:p-4 mt-4 ">
              <div className=" flex flex-col gap-5 text-white p-5">
                <div className=" flex gap-5">
                  <img className=" h-5 w-5 mt-2" src={p} alt="" />
                  <input
                    className="  w-[15rem] md:w-[12rem] px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                    placeholder="us-1m.proxies.land"
                    type="text"
                  />
                </div>
                <div className=" flex gap-5">
                  <img className=" h-5 w-5 mt-2" src={q} alt="" />
                  <input
                    className=" w-[15rem] md:w-[12rem] px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                    placeholder="8000"
                    type="text"
                  />
                </div>
              </div>

              <div className=" p-5 text-white ">
                <textarea
                  className="w-[15rem] md:w-[25rem] lg:w-[40rem] px-4 py-2 mt-[-2rem] ml-[2.5rem] md:ml-0 md:mt-2 lg:mt-0 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                  placeholder="us-1m.proxies.land:8000us-1m.proxies.land:8000us-1m.proxies.land:8000us-1m.proxies.land:8000us-1m.proxies.land:8000"
                  type="text"
                  rows={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Generator;
