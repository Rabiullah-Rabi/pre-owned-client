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
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-5">Browse items By category: </h1>
      <div className="flex flex-wrap justify-between mt-10">
        {categories.map((category) => (
          <Link
            key={category._id}
            className=""
            to={`category/${category.cat_name}`}
          >
            <img src={category.img} alt="" className="h-16" />
            <p className="text-center font-bold mt-5">{category.cat_name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
