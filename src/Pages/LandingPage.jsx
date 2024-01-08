import React from "react";
import logo from "../images/logo.png";
import UDrawer from "../Components/UDrawer";
import bar from "../images/bars.png";
import landingone from "../images/landingone.png";
import LandingPageCard from "../Components/LandingPageCard";
import Footer from "../Components/Footer";
import Card from "../Components/Card";


function LandingPage() {
  const [isOpens, setIsOpen] = React.useState(false);
  return (
    <div
    className="bg-[linear-gradient(135deg,_rgba(87,120,117,1)_3%,_rgba(74,82,89,1)_30%,_rgba(74,82,89,1)_69%,_rgba(83,107,108,1)_98%)] ">
      {/* Nav */}
      <div className="flex justify-between p-5 md:pl-20 md:pr-20  w-full h-[5rem] bg-[#000300]">
        <div className=" flex ">
          <img
            onClick={setIsOpen}
            className=" h-[2rem] w-[2rem] mt-1 lg:hidden"
            src={bar}
            alt=""
          />
          <img className=" w-[7rem] h-[3rem]" src={logo} alt="" />
        </div>
        <div className=" hidden md:flex">
          <ul className="mt-2 flex gap-2 md:gap-12 text-sm text-white font-bold">
            <li className=" mt-1">Home</li>
            <li className=" mt-1">Login</li>
            <button className=" bg-[#00B795] text-black text-sm rounded-md px-2 py-1 md:px-4 md:py-2">
              Sign Up Now
            </button>
          </ul>
        </div>
      </div>
      {/* Drawer */}
      <div className=" lg:hidden ">
        <UDrawer isOpen={isOpens} setIsOpen={setIsOpen}>
          <div className=" flex flex-col gap-2 mt-[1rem]">
            <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
              <h1 className=" text-white font-bold text-xl ">Home</h1>
            </div>

            <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
              <h1 className=" text-white font-bold text-xl ">Login</h1>
            </div>

            <div className=" flex gap-5 px-10 py-5 hover:bg-green-600 w-[15rem] rounded-r-md">
              <h1 className=" text-green-500 hover:text-white font-bold text-xl ">
                Sign Up Now
              </h1>
            </div>
          </div>
        </UDrawer>
      </div>

      <div className=" w-full h-[50%] md:h-[40%] flex flex-col md:flex-row gap-20 md:gap-0 justify-between pl-[2rem] lg:pl-[15rem] md:pr-[4rem] lg:pr-[15rem] pt-[4rem] md:pt-[7rem] pb-[3rem]">
        <div className=" flex flex-col gap-12">
          <h1 className=" text-white text-3xl lg:text-4xl font-bold w-[20rem]">
            Start using our proxies today
          </h1>
          <p className=" text-gray-100 w-[20rem] md:w-[25rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            laboriosam voluptates sed beatae?
          </p>
          <button className=" bg-[#00B795] text-black text-sm rounded-md w-[10rem] px-2 py-2">
            Sign Up Now
          </button>
        </div>
        <div>
          <img
            className=" h-[18rem] w-[20rem] md:h-[14rem] md:w-[14rem] lg:h-[18rem] lg:w-[18rem]"
            src={landingone}
            alt=""
          />
        </div>
      </div>

      <div className=" h-[2px] bg-slate-400 w-[50%] md:w-[60%] ml-[25%]  md:ml-[18%]  lg:ml-[20%] rounded-full"></div>

      <div className=" w-full h-[50%] md:h-[40%] flex flex-col md:flex-row gap-20 md:gap-0 justify-between pl-[2rem] lg:pl-[15rem] md:pr-[4rem] lg:pr-[15rem] pt-[2rem] md:pt-[3rem] pb-[3rem]">
        <div className="hidden md:flex ">
          <img
            className=" h-[18rem] w-[20rem] md:h-[14rem] md:w-[14rem] lg:h-[18rem] lg:w-[18rem]"
            src={landingone}
            alt=""
          />
        </div>

        <div className=" flex flex-col gap-5 text-right pr-[4rem] md:pr-0">
          <h1 className=" text-white text-3xl lg:text-3xl font-bold ">
            Built by real experts
          </h1>
          <p className=" text-gray-100 w-[20rem] md:w-[30rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            laboriosam voluptates sed beatae?
          </p>
          <ul class=" text-gray-500 list-disc list-inside dark:text-gray-100">
            <li>Lorem ipsum dolor si</li>
            <li>Lorem ipsum dolor si</li>
            <li>Lorem ipsum dolor si</li>
            <li>Lorem ipsum dolor si</li>
          </ul>
         
          <p className=" text-gray-100 w-[20rem] md:w-[30rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            laboriosam voluptates sed beatae?
          </p>
        </div>
      </div>

      <div className=" h-[2px] bg-slate-400 w-[50%] md:w-[60%] ml-[25%]  md:ml-[18%]  lg:ml-[20%] rounded-full"></div>
      
      <div className=" w-full h-[50%] md:h-[40%] flex flex-col md:flex-row gap-20 md:gap-0 justify-between  lg:pl-[18rem]  lg:mr-[15rem] pt-[2rem] md:pt-[3rem] pb-[3rem]">
            <div className=" overflow-x-scroll hide-scroll-bar grid grid-cols-1 lg:grid-cols-2 gap-2">
              <LandingPageCard />
            </div>
          </div>
        
        <div className="lg:pl-[10rem] lg:pr-[10rem]">
          <h1 className=" text-white text-lg lg:text-3xl font-bold ml-[2.4rem] md:ml-[16rem] lg:ml-[23rem] ">What Our Clients Say About Us</h1>
          <Card/>
        </div>
          
          <div className=" mt-[4rem] mb-[2rem] bg-[#000300] w-[90%] lg:w-[60%] h-[10rem]  md:h-[8rem] rounded-xl ml-5 md:ml-[2.5rem] lg:ml-[21.5rem] md:mr-[15rem] p-5 md:p-5">
            <h1 className=" text-center text-white text-lg md:text-xl font-bold">Don’t wait any longer, start building your proxy empire today!</h1>
            <button className=" bg-[#00B795] text-black text-sm rounded-md w-[10rem] px-2 py-2 md:py-2 ml-[5.6rem] md:ml-[16.5rem] lg:ml-[22rem] mt-5">
            Sign Up Now
          </button>
          </div>

          <Footer/>
    </div>
  );
}

export default LandingPage;
