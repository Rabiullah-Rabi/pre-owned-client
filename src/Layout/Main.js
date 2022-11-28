import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <div className="container mx-auto px-3">
      <Navbar></Navbar>
      <Outlet>
        
      </Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
