import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBookmark, FaMapMarkerAlt } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const {
    product_name,
    category,
    resell_Price,
    market_price,
    year_of_use,
    purchaseYear,
    seller_contact,
    seller_name,
    meeting_point,
    product_img,
    wishlist,
    description,
    condition,
  } = product;
  console.log(product);
  return (
    <div className="py-10">
      <div className="flex gap-10">
        <img src={product_img} alt="" className="w-[40%]" />
        <div className="flex-1">
          <div className="mt-4 flex">
            <div>
              <h2 className="text-xl font-bold">{product_name}</h2>
              <h2 className="text-md ">Brand:{category}</h2>
              <h2 className="text-md ">Condition:{condition}</h2>
            </div>
            <div className="tooltip" data-tip="Add to wishlist">
              <FaBookmark
                className={`text-3xl text ml-3 ${
                  wishlist ? "tex-primary" : "text-black"
                }`}
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-primary mt-5 text-primary">
              Asking Price : ${resell_Price}
            </h2>
            <h2 className="text-lg font-bold font-primary mt-2">
              Market Price : ${market_price}
            </h2>
          </div>
          <div>
            <div className="flex items-center mt-3">
              <FaMapMarkerAlt></FaMapMarkerAlt>
              <p>{meeting_point}</p>
            </div>
          </div>
          <div>
            <p className="my-2">Purchase Year{purchaseYear}</p>
            <p className="my-2">Used :{year_of_use} Year</p>
            <p className="my-5">{description}</p>
          </div>
          <div className="flex justify-between mt-5">
            <button className="btn btn-sm bg-primary outline-none border-0 ">
              Book Now
            </button>
            <p className="cursor-pointer text-red-500">Report to admin</p>
          </div>
          <div className="mt-10">
            {!user ? (
              <div>
                You must{" "}
                <span className="text-primary">
                  <Link to="/login">Log in </Link>
                </span>{" "}
                to contact seller
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold">
                  Seller Name: {seller_name}
                </h3>
                <h3 className="text-md font-bold">
                  {" "}
                  Seller Contact : {seller_contact}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
