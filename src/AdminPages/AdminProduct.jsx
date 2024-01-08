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
import pluse from "../images/Add_round_fill.png"
import AdminSidebar from "../AdminComponents/AdminSidebar";

function AdminProduct() {
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

                <Link to="/order">
                  <div className=" flex">
                    <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                      <img className="h-5 w-5 mt-1 " src={order} alt="" />
                      <h1 className=" text-white font-bold text-xl cursor-pointer">
                        Orders
                      </h1>
                    </div>
                  </div>
                </Link>

                <Link to="/wallet">
                  <div className=" flex">
                    <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                      <img className="h-5 w-5 mt-1 " src={wallet} alt="" />
                      <h1 className=" text-white font-bold text-xl cursor-pointer">
                        Users
                      </h1>
                    </div>
                  </div>
                </Link>

                <Link to="/generator">
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
         <h1 className=" text-white font-bold text-lg ">Products</h1>
         <div className=" flex gap-5 md:gap-10 justify-between" >
                    
             <div className=" flex flex-row gap-5 md:gap-[78px] lg:gap-[180px] p-4 pl-6 pr-6 mt-[1rem] w-full h-[5rem] rounded-2xl bg-[#000300]">

  
                  <div className=" flex gap-3">
                  <div className="w-[4px] h-12 mt-[2px] bg-[#00B795] rounded-full"></div>
                  <div className=" flex flex-col mt-1">
                        <h1 className=" text-white text-sm md:text-lg md:font-bold">3</h1>
                        <span className=" text-gray-500 text-xs">Total Products</span>
                  </div>
                  </div>

                  <div className=" flex gap-3">
                  <div className="w-[4px] h-12 mt-[2px] bg-[#00B795] rounded-full"></div>
                  <div className=" flex flex-col mt-1">
                        <h1 className=" text-white text-sm md:text-lg md:font-bold">800</h1>
                        <span className=" text-gray-500 text-xs">Total Purshases</span>
                  </div>
                  </div>

                  <div className=" flex gap-3"></div>
             </div>

             <div className=" flex flex-row jus md:gap-[78px] lg:gap-[180px] p-4 pl-6 pr-6 mt-[1rem] w-full h-[5rem] rounded-2xl bg-[#000300]">
             <div className=" flex gap-3">
                  <div className="w-[4px] h-12 mt-[2px] bg-[#00B795] rounded-full"></div>
                  <div className=" flex flex-col mt-1">
                        <h1 className=" text-white text-sm md:text-lg md:font-bold">5:1</h1>
                        <span className=" text-gray-500 text-xs">order/Paid Ratio</span>
                  </div>
                  </div>
             </div>
     
        </div>
         </div>
          
          {/* offer */}
          <div className="mt-[1rem] ">
            <div className="flex justify-between">
          <h1 className=" text-white font-bold text-lg ">All Products</h1>
          <Link to='/newproduct'>
          <img className="p-1" src={pluse}/></Link></div>
            {/* <div className="overflow-y-scroll hide-scroll-bar flex gap-20 px-3 mt-[1rem] w-full h-[700px] rounded-2xl p-3 bg-[#000300]">
              
            </div> */}


            {/*  */}


            
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0  bg-[#343434] dark:bg-gray-900">
        
        </div>


        {/*  */}
      
            {/*  */}
        <table className="w-full text-sm text-left rtl:text-right text-gray-100 dark:text-gray-400">
            <thead className="text-xs text-gray-100 uppercase bg-[#343434] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                    </th>
                    <th scope="col" className="px-6 py-3">
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-[#EFF0F6] bg-[#343434] border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only"></span>
                    Product               <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                        
                    </th>
                    <th scope="col" className="px-6 py-3">
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-[#EFF0F6] bg-[#343434] border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only"></span>
                    Category             <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                    </th>
                    <th scope="col" className="px-6 py-3">
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-[#EFF0F6] bg-[#343434] border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only"></span>
                    Payload            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                    </th>
                    <th scope="col" className="px-6 py-3">
                    <button  data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-[#EFF0F6] bg-[#343434] border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only"></span>
                    Endpoint          <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>                </th>

                <th scope="col" className="px-6 py-3">
                    <button  data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-[#EFF0F6] bg-[#343434] border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only"></span>
                    Price          <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>                </th>
                <th scope="col" className="px-6 py-3">
                    <button  data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-[#EFF0F6] bg-[#343434] border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only"></span>
                    Created          <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>                </th>
                <th scope="col" className="px-2 py-3">
                <div className=" ">
                <div className=" inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                {/* <input type="text" id="table-search-users" className="block p-2 ps-0 text-sm text-[#FFFFE8]  rounded-lg w-60 bg-[#343434] focus:ring-blue-500 focus:lue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:lue-500" placeholder="Search "/> */}
            </div>
            </th>
                </tr>
            </thead>
            <tbody className='bg-[#343434]'>
    
                <tr className="bg-[#343434]  dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                        <div className="flex items-center">

{/*  */}
<button  data-dropdown-toggle="dropdownAction" type="button">
<input checked id="dropdownActionButton" type="checkbox" className="w-4 h-4 rounded-xl text-gray-800 bg-gray-100 border-gray-300  focus:ring-blue-100 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                </button>
                            {/*  */}
                            {/* <button id="dropdownActionButton">
                            
                            <input checked id="dropdownActionButton" type="checkbox" className="w-4 h-4 rounded-xl text-gray-800 bg-gray-100 border-gray-300  focus:ring-blue-100 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            </button> */}

                            <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
                        </div>
                    </td>
                    <th scope="row" className="flex items-center px-6 py-4 text-[#FFFFE8] whitespace-nowrap dark:text-white">
                        <div className="ps-3">
                            <div className="text-base font-semibold">Residential 5GB</div>
                        </div>  
                    </th>
                    <td className="px-6 py-4 font-bold  text-[#FF8686]">
                    Residential
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center text-[#FFFFE8]">
                        payload.example                       </div>
                    </td>
                    <td className="px-6 py-4 text-[#FFFFE8]">
                    endpoint.example
                    </td>
                    <td className="px-6 py-4 text-[#FFFFE8]">
                    $500
                    </td>
                    <td className="px-6 py-4 text-[#FFFFE8]">
                    29 November 2023
                    </td>
                    <td className="px-6 py-4 flex gap-6">

                    <img src='src\images\Menu.png'/>

                    
    
    
                    </td>
                </tr>
{/* 2 */}
<tr className="bg-[#343434]  dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                        <div className="flex items-center">

{/*  */}
<button  data-dropdown-toggle="dropdownAction" type="button">
<input checked id="dropdownActionButton" type="checkbox" className="w-4 h-4 rounded-xl text-gray-800 bg-gray-100 border-gray-300  focus:ring-blue-100 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                </button>
                            {/*  */}
                            {/* <button id="dropdownActionButton">
                            
                            <input checked id="dropdownActionButton" type="checkbox" className="w-4 h-4 rounded-xl text-gray-800 bg-gray-100 border-gray-300  focus:ring-blue-100 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            </button> */}

                            <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
                        </div>
                    </td>
                    <th scope="row" className="flex items-center px-6 py-4 text-[#FFFFE8] whitespace-nowrap dark:text-white">
                        <div className="ps-3">
                            <div className="text-base font-semibold">Residential 5GB</div>
                        </div>  
                    </th>
                    <td className="px-6 py-4  text-[#7D83FF] font-bold">
                    Datacenter
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center text-[#FFFFE8]">
                        payload.example                       </div>
                    </td>
                    <td className="px-6 py-4 text-[#FFFFE8]">
                    endpoint.example
                    </td>
                    <td className="px-6 py-4 text-[#FFFFE8]">
                    $500
                    </td>
                    <td className="px-6 py-4 text-[#FFFFE8]">
                    29 November 2023
                    </td>
                    <td className="px-6 py-4 flex gap-6">

                    <img src='src\images\Menu.png'/>

                    
    
    
                    </td>
                </tr>

                {/* 3 */}
                <tr className="bg-[#343434]  dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                        <div className="flex items-center">

{/*  */}
<button  data-dropdown-toggle="dropdownAction" type="button">
<input checked id="dropdownActionButton" type="checkbox" className="w-4 h-4 rounded-xl text-gray-800 bg-gray-100 border-gray-300  focus:ring-blue-100 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                </button>
                            {/*  */}
                            {/* <button id="dropdownActionButton">
                            
                            <input checked id="dropdownActionButton" type="checkbox" className="w-4 h-4 rounded-xl text-gray-800 bg-gray-100 border-gray-300  focus:ring-blue-100 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            </button> */}

                            <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
                        </div>
                    </td>
                    <th scope="row" className="flex items-center px-6 py-4 text-[#FFFFE8] whitespace-nowrap dark:text-white">
                        <div className="ps-3">
                            <div className="text-base font-semibold">Residential 5GB</div>
                        </div>  
                    </th>
                    <td className="px-6 py-4 font-bold text-[#69C378]">
                    Mobile
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center text-[#FFFFE8]">
                        payload.example                       </div>
                    </td>
                    <td className="px-6 py-4 text-[#FFFFE8]">
                    endpoint.example
                    </td>
                    <td className="px-6 py-4 text-[#FFFFE8]">
                    $500
                    </td>
                    <td className="px-6 py-4 text-[#FFFFE8]">
                    29 November 2023
                    </td>
                    <td className="px-6 py-4 flex gap-6">

                    <img src='src\images\Menu.png'/>

                    
    
    
                    </td>
                </tr>
            </tbody>
    
            
        </table>
    </div>
          </div>
        </section>
      </div>
      <Footer/>
    </section>
  );
}

export default AdminProduct;










 



