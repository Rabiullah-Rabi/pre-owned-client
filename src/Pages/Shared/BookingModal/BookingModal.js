import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../Components/Button/PrimaryButton";
import Spinner from "../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ product }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(product);
  //Load product
  // const { data: product = [], refetch } = useQuery({
  //   queryKey: ["product"],
  //   queryFn: async () => {
  //     const url = ` ${process.env.REACT_APP_SERVER}/product/${id}`;
  //     console.log(url);
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     // console.log(data);
  //     return data;
  //   },
  // });
  // console.log(product);
  // const product = {};
  const {
    product_name,
    _id,
    resell_Price,
    seller_contact,
    seller_name,
    seller_email,
    seller_id,
    meeting_point,
    product_img,
  } = product;
  if (loading) {
    return <Spinner></Spinner>;
  }
  // if (!user) {
  //   navigate("/login");
  // }
  // const { displayName, email } = user;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    //save user to DB
    const bookedProduct = {
      product_name,
      product_id: _id,
      resell_Price,
      seller_contact,
      seller_name: seller_name,
      seller_email: seller_email,
      seller_id,
      meeting_point,
      product_img,
      buyer_name: user?.displayName,
      buyer_email: user?.email,
      buyer_phone: phone,
      booked: true,
      paid: false,
    };
    const url = `${process.env.REACT_APP_SERVER}/booked`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearar ${localStorage.getItem("pre-owned_token")}`,
      },
      body: JSON.stringify(bookedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Product Added Successfully");
          form.reset();
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };
  return (
    <div>
      <input type="checkbox" id="BookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            You are going to book {product.product_name}
          </h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  defaultValue={user?.displayName}
                  disabled
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  defaultValue={user?.email}
                  disabled
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="phone" className="text-sm">
                    Phone number
                  </label>
                </div>
                <input
                  required
                  type="phone"
                  name="phone"
                  placeholder="+880"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-primary text-gray-900"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="price" className="text-sm">
                    price
                  </label>
                </div>
                <input
                  defaultValue={product.resell_Price}
                  disabled
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-primary text-gray-900"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="phone" className="text-sm">
                    Meeting Point
                  </label>
                </div>
                <input
                  defaultValue={product.meeting_point}
                  disabled
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-primary text-gray-900"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <PrimaryButton
                  type="submit"
                  classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
                >
                  Book
                </PrimaryButton>
              </div>
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor="BookingModal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
