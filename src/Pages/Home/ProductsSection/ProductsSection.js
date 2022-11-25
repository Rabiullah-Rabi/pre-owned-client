import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const ProductsSection = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const url = ` ${process.env.REACT_APP_SERVER}/products`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-10">Recently added products </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;