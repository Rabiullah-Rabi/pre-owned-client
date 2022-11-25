import React from "react";
import Banner from "./Banner/Banner";
import CategorySection from "./CategorySection/CategorySection";
import ProductsSection from "./ProductsSection/ProductsSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategorySection></CategorySection>
      <ProductsSection></ProductsSection>
    </div>
  );
};

export default Home;
