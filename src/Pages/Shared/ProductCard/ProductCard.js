import React from "react";
import { FaRegBookmark, FaMapMarkerAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { product_name, category, resell_Price, meeting_point, product_img } =
    product;
  return (
    <div className="p-5 hover:shadow-lg">
      <img
        src={product_img}
        className="w-full h-80 object-cover rounded-lg"
        alt=""
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h2 className="text-xl font-bold">{product_name}</h2>
          <h2 className="text-md ">Brand:{category}</h2>
        </div>
        <div className="tooltip" data-tip="Add to wishlist">
          <FaRegBookmark />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold font-primary">
          Price : ${resell_Price} 
        </h2>
      </div>
      <div>
        <div className="flex items-center mt-3">
          <FaMapMarkerAlt></FaMapMarkerAlt>
          <p>{meeting_point}</p>
        </div>
          </div>
          <div className="flex justify-between mt-5">
              <button className="btn btn-sm bg-primary outline-none border-0 ">Details</button>
              <button className="btn btn-sm bg-primary outline-none border-0 ">Book Now</button>
          </div>
    </div>
  );
};

export default ProductCard;
