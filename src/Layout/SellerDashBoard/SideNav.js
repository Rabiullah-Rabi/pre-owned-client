import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-full lg:w-60 py-10 flex flex-col sticky top-0">
      <Link
        to="./add-product"
        className="py-3 pl-2 w-full text-md font-bold hover:text-primary border-b-2 border-primary"
      >
        Add Product
      </Link>
      <Link
        to="./manage-products"
        className="py-3 pl-2 w-full text-md font-bold hover:text-primary border-b-2 border-primary"
      >
        My Products
      </Link>
      <Link
        to="./sold-items"
        className="py-3 pl-2 w-full text-md font-bold hover:text-primary border-b-2 border-primary"
      >
        My Sold Items
      </Link>
      <Link
        to="./my-buyers"
        className="py-3 pl-2 w-full text-md font-bold hover:text-primary border-b-2 border-primary"
      >
        My Buyers
      </Link>
    </div>
  );
};

export default SideNav;
