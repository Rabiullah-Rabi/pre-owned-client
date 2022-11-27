import React from "react";
import Banner from "./Banner/Banner";
import CategorySection from "./CategorySection/CategorySection";
import ProductsSection from "./ProductsSection/ProductsSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="flex">
        <div className="w-[15%]">
          <h1>Advertisement</h1>
        </div>
        <div className="flex-1">
          <CategorySection></CategorySection>
          <ProductsSection></ProductsSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
