import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const SellerDashboard = () => {
  return (
    <div className="relative">
      <div className="flex lg:flex-row flex-col container mx-auto ">
        <SideNav></SideNav>
        <div className="p-3 lg:p-10 flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
