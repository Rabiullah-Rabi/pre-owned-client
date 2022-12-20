import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const ProductsByCategory = () => {
  const products = useLoaderData();
  console.log(products.length);
  return (
    <div className="py-10">
      {
        products.length===0? <div><h1 className= "text-xl mb-10 font-bold">No Product Found</h1></div>:  <><h1 className="text-4xl font-bold mb-10">Products from : {products[0]?.category} </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div></> 
      }
    </div>
  );
};

export default ProductsByCategory;
