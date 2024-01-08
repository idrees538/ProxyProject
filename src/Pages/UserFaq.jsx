import React from "react";
import bar from "../images/bars.png";
import "./Scroll.css";
import Footer from "../Components/Footer";
import setting from "../images/setting.png";
import profile from "../images/profile.png";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import Drawer from "../Pages/Drawer";
import { Link } from "react-router-dom";
import dashboard from "../images/dashboard.png";
import order from "../images/order.png";
import wallet from "../images/wallet.png";
import generator from "../images/generator.png";
import help from "../images/help.png";
import "./Scroll.css";
import logo from "../images/logo.png";
import UDrawer from "../Components/UDrawer";
import faqexpand from "../images/faqlogo.png";
import Sidebar from "../Components/Sidebar";
import arrow from "../images/ArrowLeft.png";


function UserFaq() {
  const [isOpens, setIsOpen] = React.useState(false);
  return (
    <div>
      <div className=" bg-[linear-gradient(135deg,_rgba(87,120,117,1)_3%,_rgba(74,82,89,1)_30%,_rgba(74,82,89,1)_69%,_rgba(83,107,108,1)_98%)]">
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
        {/* Drawer */}
        <div className="flex col-span-2 ...">
         {/* sidebar */}
         <div>
          <div className=" hidden  lg:flex">
            <Sidebar />
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
        {/* content */}
        <div>
      

        <div className="  lg:ml-44 mt-10 lg:mt-20 p-5">
        <Link to='/support'>
            <div className=" flex">
              <img className=" cursor-pointer mt-[-3px]" src={arrow} alt="" />
              <span className=" text-xs text-gray-100 underline">
                Back to Product{" "}
              </span>
            </div></Link>
          <h1 className=" text-white text-3xl lg:text-5xl font-bold ">FAQ</h1>

   

          <div className=" lg:ml-0 lg:mb-0 md:mb-32 flex flex-col md:flex-row  gap-5 lg:gap-[3rem] w-[100%]">
            <div className="md:w-full lg:w-[30%] bg-[#343434] shadow-md shadow-[#000000] mt-8 rounded-sm p-3 overflow-y-scroll  max-h-[35rem]">
              <div className=" flex flex-col gap-5 p-2">
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className=" flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-9"
                    ></input>
                    <p className="text-[#FFFFE8] w-[15rem]">
                      What is a proxy generator and how do i use it cause this
                      is a longer question to test the boundaries of this FAQ.
                    </p>
                  </div>
                  <div>
                    <img className="w-6 h-6 mt-8" src={faqexpand} />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">Help me with my password?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">How do i use the internet?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#9092B7] bg-[#9092B7] mt-1"
                    ></input>
                    <p className="text-[#FFFFE8]">What is a proxy generator?</p>
                  </div>
                  <img className="w-6 h-6" src={faqexpand} />
                </div>
              </div>
            </div>

            <div className="bg-[#343434] shadow-md shadow-[#000000] lg:mr-24 w-full lg:w-[57%] mt-8  rounded-md p-5">
              <div className="text-white flex flex-col gap-20 ">
                <div className=" flex flex-col gap-7">
                  <h3 className="md:text-lglg:text-xl font-semibold">
                    How do I use the internet?
                  </h3>
                  <p className=" text-sm lg:text-base">
                    What is a proxy generator and how do i use it cause this is
                    a longer question to test the boundaries of this FAQ entry
                    and how it should look for dev.
                  </p>

                  <p className=" text-sm lg:text-base">
                    {" "}
                    What is a proxy generator and how do i use it cause this is
                    a longer question to test the boundaries of this FAQ entry
                    and how it should look for dev.
                  </p>

                  <p className=" text-sm lg:text-base">
                    What is a proxy generator and how do i use it cause this is
                    a longer question to test the boundaries of this FAQ entry
                    and how it should look for dev.
                  </p>
                </div>
                <div className="mt-4 lg:mt-6">
                  <h3 className="text-[#FFFFE8] text-lg lg:text-xl font-semibold">
                    Still need help?
                  </h3>

                  <p className=" text-sm lg:text-base">
                    If you are logged in you can submit a support ticket to our
                    customer service team.
                  </p>
                </div>
              </div>

              <div className=" mt-8 text-center ">
                <button className=" bg-gray-100 text-black text-sm rounded-md w-[10rem] px-2 py-2">
                  Go to Support
                </button>
              </div>
            </div>
          </div>
        </div> </div>
        </div>
        {/* footer */}
      <Footer/>
      </div>
    </div>
  );
}

export default UserFaq;



