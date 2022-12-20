import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideNav from "./AdminSideNav";

const AdminDashboard = () => {
  return (
    <div className="relative">
      <div className="flex lg:flex-row flex-col container mx-auto items-start">
        <AdminSideNav></AdminSideNav>
        <div className="p-3 lg:p-10 flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
