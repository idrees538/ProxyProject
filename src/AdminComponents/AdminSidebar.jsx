import React from "react";
import dashboard from "../images/dashboard.png";
import order from "../images/order.png";
import wallet from "../images/wallet.png";
import generator from "../images/generator.png";
import help from "../images/help.png";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className=" flex flex-col gap-10 mt-[6rem]">

      <Link to="/">
      <div className=" flex">
        <div className=" flex gap-5 px-10 py-5 hover:bg-[#000300] w-[15rem] rounded-r-md">
          <img className="h-5 w-5 mt-1 " src={dashboard} alt="" />
          <h1 className=" text-white font-bold text-xl ">Dashboard</h1>
        </div>
      </div></Link>

      <Link to="/adminorder">
      <div className=" flex">
        <div className=" flex gap-5 px-10 py-5 hover:bg-[#000300] w-[15rem] rounded-r-md">
          <img className="h-5 w-5 mt-1 " src={order} alt="" />
          <h1 className=" text-white font-bold text-xl ">Orders</h1>
        </div>
      </div></Link>

      <Link to="/adminusers">
      <div className=" flex">
        <div className=" flex gap-5 px-10 py-5 hover:bg-[#000300] w-[15rem] rounded-r-md">
          <img className="h-5 w-5 mt-1 " src={wallet} alt="" />
          <h1 className=" text-white font-bold text-xl ">Users</h1>
        </div>
      </div></Link>

      <Link to="/adminproduct">
      <div className=" flex">
        <div className=" flex gap-5 px-10 py-5 hover:bg-[#000300] w-[15rem] rounded-r-md">
          <img className="h-5 w-5 mt-1 " src={generator} alt="" />
          <h1 className=" text-white font-bold text-xl ">Products</h1>
        </div>
      </div></Link>

      <Link to="/setting">
      <div className=" flex">
        <div className=" flex gap-5 px-10 py-5 hover:bg-[#000300] w-[15rem] rounded-r-md">
          <img className="h-5 w-5 mt-1 " src={help} alt="" />
          <h1 className=" text-white font-bold text-xl ">Settings</h1>
        </div>
      </div></Link>
      
    </div>
  );
}

export default AdminSidebar;




