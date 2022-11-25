import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductsByCategory = () => {
    const products = useLoaderData();
    console.log(products);
  return (
    <div>
      <h1>Total Products : {products.length}</h1>
    </div>
  );
};

export default ProductsByCategory;
