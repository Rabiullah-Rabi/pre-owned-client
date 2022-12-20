import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  //Load categories
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const url = ` ${process.env.REACT_APP_SERVER}/categories`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="w-full lg:w-60 py-10 flex flex-col sticky top-0">
      <Link
        to="/category"
        className="py-3 pl-2 w-full text-md font-bold hover:text-primary border-b-2 border-primary"
      >
        All Products
      </Link>
      {categories.map((category) => (
        <Link
          to={`./${category.cat_name}`}
          className="py-3 pl-2 w-full text-md font-bold hover:text-primary border-b-2 border-primary"
        >
          {category.cat_name}
        </Link>
      ))}
      
    </div>
  );
};

export default Sidenav;
