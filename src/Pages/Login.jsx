import React from "react";
import google from "../images/google.png";
import meta from "../images/meta.png";
import apple from "../images/apple.png";
import logo from "../images/logo.png";
import UDrawer from "../Components/UDrawer";
import bar from "../images/bars.png";
import Footer from "../Components/Footer";
function Login() {
  const [isOpens, setIsOpen] = React.useState(false);
  return (
    <div className=" h-[100%] bg-[linear-gradient(135deg,_rgba(87,120,117,1)_3%,_rgba(74,82,89,1)_30%,_rgba(74,82,89,1)_69%,_rgba(83,107,108,1)_98%)]">
      {/* Nav */}
      <div className='flex justify-between p-[2%] md:pl-[2%] md:pr-[2%] w-full h-[5%] bg-[#000300]'>
     <div className=" flex ">
            <img onClick={setIsOpen} className=" h-[2rem] w-[2rem] mt-1 lg:hidden" src={bar} alt="" />
            <img  className=" w-[7rem] h-[3rem]" src={logo} alt="" />
        </div>
        <div className=" hidden md:flex">
            <ul className='mt-[1%] flex gap-2 md:gap-12 text-sm text-white font-bold'>
                <li>Home</li>
                <li>Login</li>
                <button className=' bg-green-500 text-black text-sm rounded-md px-2 py-1 md:px-4 md:py-2'>Sign Up Now</button>
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
          <h1 className=" text-green-500 hover:text-white font-bold text-xl ">Sign Up Now</h1>
        </div>
 
       </div>
      </UDrawer>
       </div>
 
 
      <div className=" p-[1%]">
      <div className="w-full h-[2%] md:w-[50%] lg:w-[30%] md:h-[5%]  bg-[#000300] md:m-[2rem] md:ml-[13rem] lg:ml-[40%] rounded-lg md:mt-[5rem]">
        <div className=" flex flex-col p-8 pt-[4rem]">
          <h className="text-white font-bold text-xl">Start working with proxies</h>
          <span className=" text-white text-sm">Log in below</span>
        </div>
 
        <div className=" flex flex-col gap-2 mt-[3rem] ml-[2rem] mr-[2rem] text-white">
          <input
            className=" px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
            placeholder="coolcoder@cool.com"
            type="text"
          />
          <input
            className="  px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
            placeholder="Password"
            type="password"
          />
         
          </div>
 
        <div className=" flex gap-2  ml-[9%] mr-[9%] mt-[2rem]">
          <div>
            <span className=" text-sm text-gray-400">or continue with</span>
          </div>{" "}
          <div className=" w-[60%] md:w-[65%] h-[1px] mt-4 bg-gray-600"></div>
        </div>
 
        <div className=" flex gap-2 ml-[15%] lg:ml-[15%]  mt-3">
            <div className=" w-[25%] h-[2.3rem] bg-white rounded-md  cursor-pointer">
                <img className=" absolute h-[1.8rem] w-[1.8rem] mx-6 md:mx-8 m-1 rounded-full " src={google} alt="" />
            </div>
            <div className=" w-[25%] h-[2.3rem] bg-white rounded-md cursor-pointer ">
                <img className=" absolute h-[1.8rem] w-[1.8rem] mx-6 md:mx-8 m-1 rounded-full " src={meta} alt="" />
            </div>
            <div className=" w-[25%] h-[2.3rem] bg-white rounded-md  cursor-pointer">
                <img className=" absolute h-[1.8rem] w-[1.8rem] mx-6 md:mx-8 m-1 rounded-full " src={apple} alt="" />
            </div>    
        </div>
        <button className=" w-[40%] h-[2.2rem] bg-yellow-50 rounded-md ml-[28%] mt-5">Log in</button>
      </div>
      </div>
     
 
      <div className=" pt-[312.5%] md:pt-[30%] ">
      <Footer/>
      </div>
    </div>
  );
}
 
export default Login;