import React from "react";
import setting from "../images/setting.png";
import profile from "../images/profile.png";
import bar from "../images/bars.png";
import dashboard from "../images/dashboard.png";
import order from "../images/order.png";
import wallet from "../images/wallet.png";
import generator from "../images/generator.png";
import help from "../images/help.png";
import Drawer from "../Pages/Drawer";
import logo from "../images/logo.png";
import "../CSSPages/Offer.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import SettingCard from "../AdminComponents/SettingCard";

function Settings() {
  const [isOpens, setIsOpen] = React.useState(false);
  return (
    <section className=" w-full h-full  bg-[linear-gradient(135deg,_rgba(87,120,117,1)_3%,_rgba(74,82,89,1)_30%,_rgba(74,82,89,1)_69%,_rgba(83,107,108,1)_98%)] pb-7">
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
            <AdminSidebar />
          </div>
          {/* Drawer */}
          <div className=" lg:hidden">
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

                <Link to="/adminorder">
                  <div className=" flex">
                    <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                      <img className="h-5 w-5 mt-1 " src={order} alt="" />
                      <h1 className=" text-white font-bold text-xl cursor-pointer">
                        Orders
                      </h1>
                    </div>
                  </div>
                </Link>

                <Link to="/adminusers">
                  <div className=" flex">
                    <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                      <img className="h-5 w-5 mt-1 " src={wallet} alt="" />
                      <h1 className=" text-white font-bold text-xl cursor-pointer">
                        Users
                      </h1>
                    </div>
                  </div>
                </Link>

                <Link to="/adminproduct">
                  <div className=" flex">
                    <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                      <img className="h-5 w-5 mt-1 " src={generator} alt="" />
                      <h1 className=" text-white font-bold text-xl cursor-pointer">
                        Products
                      </h1>
                    </div>
                  </div>
                </Link>

                <Link to="/setting">
                  <div className=" flex">
                    <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                      <img className="h-5 w-5 mt-1 " src={help} alt="" />
                      <h1 className=" text-white font-bold text-xl cursor-pointer">
                        Settings
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            </Drawer>
          </div>
        </div>

        {/* 1 */}
        <section className=" relative overflow-x-scroll hide-scroll-bar md:p-0  md:ml-[0.4rem] lg:ml-[10rem] mt-[5rem]">
          
          <div className=" p-1">
            <SettingCard/>
          </div>
          
           {/* 3 */}
        <div className=" mt-[3rem] pb-[2rem] p-5 ">
            <div className=" relative overflow-auto gap-3 w-[357px] md:w-[100%] h-full  bg-black rounded-lg lg:p-4 mt-4 ">
              <div className=" flex flex-col gap-5 text-white p-5">
               <div>
               <select
                      id="countries"
                      className=" text-gray-400 w-[18rem] md:w-[12rem] px-4 py-2 rounded-md texw bg-black"
                    >
                      <option className="" value="US">Reseller 1</option>
                      <option className="" value="CA">Reseller 2</option>
                      <option className="" value="FR">Reseller 3</option>
                      <option className="" value="DE">Reseller 4</option>
                    </select>
               </div>
                <div className=" flex flex-col md:flex-row gap-5 p-5">
                 
                  <input
                    className="  w-[15rem] md:w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                    placeholder="API Username"
                    type="text"
                  />
                  <input
                    className=" w-[15rem] md:w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                    placeholder="API Key"
                    type="text"
                  />
                </div>
                
                <div className=" p-5 text-white ">
                <textarea
                  className="w-[15rem]  md:w-full px-4 py-2 md:ml-0 md:mt-2 lg:mt-0 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                  placeholder="Endpoint"
                  type="text"
                  rows={3}
                />
              </div>
              </div>

             

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
}

export default Settings;




