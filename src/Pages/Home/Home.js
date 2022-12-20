import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import Banner from "./Banner/Banner";
import CategorySection from "./CategorySection/CategorySection";
import ProductsSection from "./ProductsSection/ProductsSection";
import Promotuons from "./Promotion/Promotuons";
import TestimonialSection from "./TesimonialSection/TestimonialSection";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="lg:flex px-3 lg:justify-center container mx-auto">
        <div className="w-full lg:w-1/5">
          <Promotuons></Promotuons>
        </div>
        <div className="lg:w-3/4  w-full md:pl-5">
          <CategorySection></CategorySection>
          <ProductsSection></ProductsSection>
          <AboutSection></AboutSection>
          <TestimonialSection></TestimonialSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
