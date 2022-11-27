import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const Promotuons = () => {
  const { data: promotioItems = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const url = ` ${process.env.REACT_APP_SERVER}/advertisement`;
      const res = await fetch(url, {
        headers: {
          authorization: `bearar ${localStorage.getItem("pre-owned_token")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
      <div className="mt-10">
          <h1 className="text-2xl font-bold">Promoted Items</h1>
      {promotioItems.slice(0,3).map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Promotuons;
