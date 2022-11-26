import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllSellers = () => {
  //Load sellers
  const { data: sellers= [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const url = ` ${process.env.REACT_APP_SERVER}/sellers`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  //verify a seller
  const verifyUser = (id) => {
    const url = ` ${process.env.REACT_APP_SERVER}/verify-users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearar ${localStorage.getItem("pre-owned_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("User Verified successfully");
          refetch();
        }
      });
  };
  //Delete a seller
  const handleDelete = (id) => {
    const url = ` ${process.env.REACT_APP_SERVER}/users/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `bearar ${localStorage.getItem("pre-owned_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delete seller successfully");
        refetch();
      });
  };
  return (
    <div>
      <h1>list of Sellers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {seller.verified ? (
                    <p className="text-green-500"> Verified</p>
                  ) : (
                    <p
                      className="text-red-500 cursor-pointer"
                      onClick={() => verifyUser(seller._id)}
                    >
                      Verify Now
                    </p>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm bg-red-700"
                    onClick={() => handleDelete(seller._id)}
                  >
                    Delete User
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

export default AllSellers;
