import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideNav from "./AdminSideNav";

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex">
        <AdminSideNav></AdminSideNav>
        <div className="p-10 flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
