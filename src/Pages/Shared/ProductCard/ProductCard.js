import React from "react";
import { FaBookmark, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";

const ProductCard = ({ product }) => {
  const {
    _id,
    product_name,
    category,
    resell_Price,
    meeting_point,
    product_img,
    condition,
  } = product;
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
          <h2 className="text-md ">Condition:{condition}</h2>
        </div>
        <div className="tooltip" data-tip="Add to wishlist">
          <FaBookmark />
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
        <Link to={`/products/${_id}`}>
          {" "}
          <button className="btn btn-sm bg-primary outline-none border-0 ">
            Details
          </button>
        </Link>
        <label
          
          htmlFor="BookingModal"
          className="btn btn-sm bg-primary outline-none border-0 "
        >
          Book Now
        </label>
      </div>
        <BookingModal product={product}></BookingModal>
    </div>
  );
};

export default ProductCard;
