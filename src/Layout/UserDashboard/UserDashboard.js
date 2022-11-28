import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const UserDashboard = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <SideNav></SideNav>
          <div className="p-3 lg:p-10 flex-1">
          <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UserDashboard;
