import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { useUser } from "../../../../contexts/userContext";
import PaymentModal from "../../../Shared/PaymentModal/PaymentModal";

const OrderedItems = () => {
  const { user } = useContext(AuthContext);

  //Load booked items
  const { data: bookedItems = [], refetch } = useQuery({
    queryKey: ["booked"],
    queryFn: async () => {
      const url = ` ${process.env.REACT_APP_SERVER}/booked/${user?.email}`;
      const res = await fetch(url, {
        headers: {
          authorization: `bearar ${localStorage.getItem("pre-owned_token")}`,
        },
      });
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });
  //pay
  const handlePay = () => {
    console.log("clicked");
  };
  //Delete a item
  const handleDelete = (id) => {
    const url = ` ${process.env.REACT_APP_SERVER}/booked/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `bearar ${localStorage.getItem("pre-owned_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("item deleted successfully");
        refetch();
      });
  };
  return (
    <div>
      <h1 className= "text-xl mb-10 font-bold">list of Ordered Item</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookedItems.map((item, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={item.product_img} alt="" />
                    </div>
                  </div>
                </th>
                <td>{item.product_name}</td>
                <td>{item.resell_Price}</td>
                <td>
                  {!item.paid ? (
                    <Link to={`./payments/${item._id}`} className="btn btn-sm bg-primary outline-none border-0 ">
                      Pay Now
                    </Link>
                  ) : (
                    // <label
                    //   htmlFor="PaymentModal"
                    //   className="btn btn-sm bg-primary outline-none border-0 "
                    // >
                    //   Pay now
                    // </label>
                    <p className="text-green-500 font-bold text-xl">Paid</p>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm bg-red-700"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete Item
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderedItems;
