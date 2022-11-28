import React from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "../SideNav/Sidenav";

const AllCategories = () => {
    
  return (
    <div>
      <div className="flex lg:flex-row flex-col">
        <Sidenav></Sidenav>
        <div className="p-3 lg:p-10 flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
