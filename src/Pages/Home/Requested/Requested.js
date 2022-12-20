import React from "react";

const Requested = () => {
  return (
    <div className="w-full bg-primary text-center p-5 text-white">
      <h1 className="text-3xl md:text-2xl lg:text-2xl font-bold mt-5">
        Request For a Product
      </h1>

      <div className="flex justify-center my-10">
        <div className=" xl:w-1/2 ">
          <div className="input-group relative flex items-stretch w-full rounded">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Product name and brand"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <span
              className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
              id="basic-addon2"
            >
              <p>Request</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requested;
