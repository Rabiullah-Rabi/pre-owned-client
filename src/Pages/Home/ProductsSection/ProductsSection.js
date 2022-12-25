import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import BookingModal from "../../Shared/BookingModal/BookingModal";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import AOS from "aos";

const ProductsSection = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const url = ` ${process.env.REACT_APP_SERVER}/all-products`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="py-10">
      <div className="flex md:justify-between">
        <h1
          className="text-xl md:text-4xl font-bold mb-5"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          Recently added products:{" "}
        </h1>
        <Link
          to={"/category"}
          className="text-primary font-bold md:block hidden"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          All Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {products.slice(0, 9).map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
