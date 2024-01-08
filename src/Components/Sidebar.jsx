import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import dashboard from "../images/dashboard.png";
import order from "../images/order.png";
import wallet from "../images/wallet.png";
import generator from "../images/generator.png";
import help from "../images/help.png";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const activeStyle = {
    backgroundColor: "#343434",
  };

  return (
    <div className="flex flex-col gap-10 mt-[6rem]">
      <NavLink to="/" isActive={() => isActive("/")} activeClassName="active-link" style={isActive("/") ? activeStyle : {}}>
        <div className="flex gap-5 px-10 py-5 w-[15rem] rounded-r-md">
          <img className="h-5 w-5 mt-1" src={dashboard} alt="" />
          <h1 className="text-white font-bold text-xl">Dashboard</h1>
        </div>
      </NavLink>

      <NavLink to="/order" isActive={() => isActive("/order")} activeClassName="active-link" style={isActive("/order") ? activeStyle : {}}>
        <div className="flex gap-5 px-10 py-5 w-[15rem] rounded-r-md">
          <img className="h-5 w-5 mt-1" src={order} alt="" />
          <h1 className="text-white font-bold text-xl">Order</h1>
        </div>
      </NavLink>

      <NavLink to="/wallet" isActive={() => isActive("/wallet")} activeClassName="active-link" style={isActive("/wallet") ? activeStyle : {}}>
        <div className="flex gap-5 px-10 py-5 w-[15rem] rounded-r-md">
          <img className="h-5 w-5 mt-1" src={wallet} alt="" />
          <h1 className="text-white font-bold text-xl">Wallet</h1>
        </div>
      </NavLink>

      <NavLink to="/generator" isActive={() => isActive("/generator")} activeClassName="active-link" style={isActive("/generator") ? activeStyle : {}}>
        <div className="flex gap-5 px-10 py-5 w-[15rem] rounded-r-md">
          <img className="h-5 w-5 mt-1" src={generator} alt="" />
          <h1 className="text-white font-bold text-xl">Generator</h1>
        </div>
      </NavLink>

      <NavLink to="/support" isActive={() => isActive("/support")} activeClassName="active-link" style={isActive("/support") ? activeStyle : {}}>
        <div className="flex gap-5 px-10 py-5 w-[15rem] rounded-r-md">
          <img className="h-5 w-5 mt-1" src={help} alt="" />
          <h1 className="text-white font-bold text-xl">Support</h1>
        </div>
      </NavLink>
    </div>
  );
}

export default Sidebar;
