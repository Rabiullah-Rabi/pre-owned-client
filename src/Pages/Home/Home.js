import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import Banner from "./Banner/Banner";
import CategorySection from "./CategorySection/CategorySection";
import ProductsSection from "./ProductsSection/ProductsSection";
import Promotuons from "./Promotion/Promotuons";

const Home = () => {
  return (
    <div >
      <Banner></Banner>
      <div className="md:flex ">
        <div className="w-full lg:w-[15%]">
          <Promotuons></Promotuons>
        </div>
        <div className="lg:flex-1 w-full md:pl-5">
          <CategorySection></CategorySection>
          <ProductsSection></ProductsSection>
          <AboutSection></AboutSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
