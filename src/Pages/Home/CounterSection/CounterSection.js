import React from "react";
import CountUp from "react-countup";

const CounterSection = () => {
  return (
    <div className="w-full bg-primary text-center p-10 text-white my-20">
      <div className="grid gird-cols-1 lg:grid-cols-3 gap-10">
        <div data-aos="fade-right" data-aos-duration="500">
          <span className="text-5xl font-bold">
            <CountUp end={1100} enableScrollSpy={true} scrollSpyOnce={true} />+
          </span>
          <h2 className="text-xl mt-3 font-medium">Buyers</h2>
        </div>
        <div data-aos="fade-down" data-aos-duration="500">
          <span className="text-5xl font-bold">
            <CountUp end={700} enableScrollSpy={true} scrollSpyOnce={true} />+
          </span>
          <h2 className="text-xl mt-3 font-medium">Sellers</h2>
        </div>
        <div data-aos="fade-left" data-aos-duration="500">
          <span className="text-5xl font-bold">
            <CountUp end={5600} enableScrollSpy={true} scrollSpyOnce={true} />+
          </span>
          <h2 className="text-xl mt-3 font-medium">Products</h2>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
