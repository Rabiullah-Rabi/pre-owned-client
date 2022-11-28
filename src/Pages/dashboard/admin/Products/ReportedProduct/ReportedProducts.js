import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ReportedProducts = () => {

  const { data: reportedItems = [], refetch } = useQuery({
    queryKey: ["reported"],
    queryFn: async () => {
      const url = ` ${process.env.REACT_APP_SERVER}/reported`;
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
  //Delete a product
  const handleDelete = (id) => {
    const url = ` ${process.env.REACT_APP_SERVER}/products/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `bearar ${localStorage.getItem("pre-owned_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("product deleted successfully");
      });
  };
  return (
    <div className="min-h-[800px]">
      <h1>Reported Items </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reportedItems.map((product, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={product.product_img} alt="" />
                    </div>
                  </div>
                </th>
                <td>{product.product_name}</td>
                <td>
                  <button
                    className="btn btn-sm bg-red-700"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete product
                  </button>
                </td>
                {/* <PaymentModal product={product} key={product._id}></PaymentModal> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedProducts;
