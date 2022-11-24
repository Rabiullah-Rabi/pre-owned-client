import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const UserDashboard = () => {
  return (
    <div className="flex ">
      <SideNav></SideNav>
          <div className="p-10">
          <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UserDashboard;
