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
import AdminOverview from "../AdminComponents/AdminOverview";
import AdminWallet from "../AdminComponents/AdminWallet";
import AdminSidebar from "../AdminComponents/AdminSidebar";

function AdminOrderNext() {
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
        <section className=" relative overflow-x-scroll hide-scroll-bar p-4 md:p-0  md:ml-[1rem] lg:ml-[10rem] mt-[5rem]">
          {/* Overview */}
          <div className=" ">
            <h1 className=" text-white font-bold text-lg ">Admin Orders</h1>
            <div className=" flex flex-col md:flex-row justify-between md:gap-[78px] lg:gap-[180px] p-4 pl-6 pr-6 mt-[1rem] w-full h-[10rem] md:h-[5rem] rounded-2xl bg-[#000300]">
              <div className=" flex justify-between gap-9 md:gap-[78px] lg:gap-[180px]">
                <div className=" flex gap-1 md:gap-3">
                <div className="w-[4px] h-12 mt-[2px] bg-[#7D83FF] rounded-full"></div>
                  <div className=" flex flex-col">
                    <h1 className=" text-white text-sm md:text-xl md:font-bold">
                      $50.00
                    </h1>
                    <span className=" text-gray-500 text-xs">Invoiced</span>
                  </div>
                </div>

                <div className=" flex gap-3">
                  <div className="w-[4px] h-12 mt-[2px] bg-[#00B795] rounded-full"></div>
                  <div className=" flex flex-col">
                    <h1 className=" text-white text-sm md:text-xl md:font-bold">
                      Paid
                    </h1>
                    <span className=" text-gray-500 text-xs">
                      Status 
                    </span>
                  </div>
                </div>

                <div className=" flex gap-3">
                  <div className="w-[4px] h-12 mt-[2px] bg-[#00B795] rounded-full"></div>
                  <div className=" flex flex-col">
                    <h1 className=" text-white text-sm md:text-xl md:font-bold">
                      Not Fulfilled
                    </h1>
                    <span className=" text-gray-500 text-xs">
                      Delivery
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <select
                  id="countries"
                  className=" text-gray-400 w-full px-4 py-2 rounded-2xl mt-2 bg-transparent border border-gray-300 hover:border-blue-500"
                >
                  <option value="US">All Time</option>
                  <option value="CA">One Month Ago </option>
                  <option value="FR">Two Months Ago </option>
                  <option value="DE">three Months Ago </option>
                </select>
              </div>
            </div>
          </div>
          <div className=" flex gap-6 md:gap-10 mt-4">
            <button className=" bg-[#8EBBB3]  text-xs md:text-sm w-[180px] px-3 py-[8px] rounded-lg">
              Mark as paid
            </button>
            <button className=" bg-[#FF8686]  text-xs md:text-sm w-[180px] px-3 py-[8px] rounded-lg">
              Mark as Fulfilled
            </button>
            <button className=" bg-[#FFFFE8]  text-xs md:text-sm w-[180px] px-3 py-[8px] rounded-lg">
              Resend Invoice
            </button>
          </div>
          {/* offer */}
          <div className="mt-[1rem] ">
            <div className="overflow-y-scroll hide-scroll-bar px-3 mt-[1rem] w-full h-[450px] rounded-2xl p-5 pl-7 pr-7 bg-[#000300]">
             
              <div className=" flex justify-between ">
                <div className=" flex flex-col gap-5">
                  <div className="flex flex-col">
                    <h1 className=" text-white text-lg font-bold">
                      Cool Coder
                    </h1>
                    <span className=" text-xs text-gray-500">Username</span>
                  </div>

                  <div className="flex flex-col">
                    <h1 className=" text-white text-lg font-bold">John Cena</h1>
                    <span className=" text-xs text-white">
                      Pablo Alto, San Francisco, CA 92102, United States of
                      America
                    </span>
                    <span className=" text-xs text-gray-500">
                      Billing Address
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <h1 className=" text-white text-lg font-bold">
                      johncena@gmail.com
                    </h1>
                    <span className=" text-xs text-gray-500">
                      E-mail Address
                    </span>
                  </div>
                </div>

                <div className=" flex flex-col gap-5">
                  <div className="flex flex-col">
                    <h1 className=" text-white text-lg font-bold">
                      $50.00
                    </h1>
                    <span className=" text-xs text-gray-500">Total Amount</span>
                  </div>

                  <div className="flex flex-col">
                    <h1 className=" text-white text-lg font-bold">#1253</h1>
                    <span className=" text-xs text-gray-500">
                      Invoice
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <h1 className=" text-white text-lg font-bold">
                      19/11/2023
                    </h1>
                    <span className=" text-xs text-gray-500">
                      Date of Purchase
                    </span>
                  </div>
                </div>
              </div>

              <div className=" flex justify-between gap-5 mt-8 ml-7">
                 
                    <div className=" flex gap-3">
                    <div className="w-[3px] h-6 mt-[2px] bg-[#7D83FF] rounded-full"></div>
                    <input className=" text-xs  text-gray-500 w-full border border-none bg-transparent md:text-sm" type="text" placeholder="Mobile Proxy" name="" id="" />
                    </div>

                    <div>
                    <input className=" text-xs  text-gray-500 w-full border border-none bg-transparent md:text-sm" type="text" placeholder="5GB" name="" id="" />
                    </div>

                    <div>
                    <input className=" text-xs  text-gray-500 w-full border border-none bg-transparent md:text-sm" type="text" placeholder="29 Aug 2023" name="" id="" />
                    </div>

                    <div>
                    <h1 className=" text-white text-lg">$52.36</h1>
                    </div>

              </div>

          <div className=" flex justify-between">
            <div></div>
            <div>
            <div className=" flex flex-col gap-2 mt-24 ">
                <div className=" flex gap-5 justify-between">
                    <span className=" text-gray-500 text-sm">Texes</span>
                    <span className=" text-white text-sm">$1.70</span>
                </div>
                <div className=" flex gap-5 justify-between">
                    <span className=" text-gray-500">Grand Total</span>
                    <span className=" text-white text-md font-bold">$54.06</span>
                </div>
            </div>
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

export default AdminOrderNext;
