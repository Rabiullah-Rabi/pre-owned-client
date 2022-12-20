import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-full lg:w-60 py-10 flex flex-col sticky top-0">
      <Link
        to="./"
        className="py-3 pl-2 w-full text-md font-bold hover:text-primary border-b-2 border-primary"
      >
        My orders
      </Link>
      <Link
        to="./my-wishlist"
        className="py-3 pl-2 w-full text-md font-bold hover:text-primary border-b-2 border-primary"
      >
        My Wishlist
      </Link>
    </div>
  );
};

export default SideNav;
