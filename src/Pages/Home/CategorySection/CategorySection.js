import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const CategorySection = () => {
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
    <div className="container py-20">
      <div className="flex md:justify-between">
        <h1 className="text-xl md:text-4xl font-bold mb-5">
          Browse items By category:{" "}
        </h1>
        <Link
          to={"/category"}
          className="text-primary font-bold md:block hidden"
        >
          All categories
        </Link>
      </div>
      <div className="flex md:flex-wrap lg:justify-between flex-col lg:flex-row mt-10">
        {categories.slice(0, 5).map((category) => (
          <Link
            key={category._id}
            className="flex items-center py-5 flex-col"
            to={`category/${category.cat_name}`}
          >
            <img src={category.img} alt="" className="h-16" />
            <p className="text-center font-bold mt-5">{category.cat_name}</p>
          </Link>
        ))}
      </div>
      <div className=" mx-auto text-center mt-10 md:hidden">
        <Link
          to={"/category"}
          className=" btn bg-primary text-white font-bold mx-auto text-center border-0"
        >
          All categories
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
