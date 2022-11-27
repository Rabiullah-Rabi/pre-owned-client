import React, { useContext } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { FaBookmark, FaMapMarkerAlt, FaRegCheckCircle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import BookingModal from "../Shared/BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
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
    seller_email
  } = product;
    //Load booked items
    const { data: seller, refetch } = useQuery({
      queryKey: ["seller"],
      queryFn: async () => {
        const url = ` ${process.env.REACT_APP_SERVER}/seller/${seller_email}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        return data;
      },
    });
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
            {!user ? (
              <Link to="/login" state={{ from: location }} replace>
                <button className="btn btn-sm bg-primary outline-none border-0 ">
                  Log in to book Now
                </button>
              </Link>
            ) : (
              <label
                htmlFor="BookingModal"
                className="btn btn-sm bg-primary outline-none border-0 "
              >
                Book Now
              </label>
            )}
            <p className="cursor-pointer text-red-500">Report to admin</p>
          </div>
          <div className="mt-10">
            {!user ? (
              <div>
                You must{" "}
                <span className="text-primary">
                  <Link to="/login" state={{ from: location }} replace>
                    Log in{" "}
                  </Link>
                </span>{" "}
                to contact seller
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold flex items-center">
                  Seller Name: {seller_name}
                  <span className="ml-2">
                      <FaRegCheckCircle className={seller?.verified?'text-green-600':'text-red-700'}></FaRegCheckCircle>
                  </span>
                </h3>
                <h3 className="text-md font-bold">
                  {" "}
                  Seller Contact : {seller_contact}
                </h3>
              </div>
            )}
          </div>
          <BookingModal product={product}></BookingModal>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
