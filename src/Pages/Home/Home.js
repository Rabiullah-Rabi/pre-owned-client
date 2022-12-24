import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import Banner from "./Banner/Banner";
import CategorySection from "./CategorySection/CategorySection";
import CounterSection from "./CounterSection/CounterSection";
import Location from "./Location/Location";
import ProductsSection from "./ProductsSection/ProductsSection";
import Promotuons from "./Promotion/Promotuons";
import Requested from "./Requested/Requested";
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
          <Location></Location>
          <CategorySection></CategorySection>
        </div>
      </div>
      <div className="container mx-auto">
        <ProductsSection></ProductsSection>
        <AboutSection></AboutSection>
        <CounterSection></CounterSection>
        <TestimonialSection></TestimonialSection>
        <Requested></Requested>
      </div>
    </div>
  );
};

export default Home;
