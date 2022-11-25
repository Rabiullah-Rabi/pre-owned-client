import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const AllBuyers = () => {
  //Load buyers
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const url = ` ${process.env.REACT_APP_SERVER}/buyers`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  //verify a buyer
  const verifyUser = (id) => {
    const url = ` ${process.env.REACT_APP_SERVER}/verify-users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("User Verified successfully");
          refetch();
        }
      });
  };
  //Delete a buyer
  const handleDelete = (id) => {
    const url = ` ${process.env.REACT_APP_SERVER}/users/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Delete Buyer successfully");
        refetch();
      });
  };
  return (
    <div>
      <h1>list of Buyers</h1>
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
            {buyers.map((buyer, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  {buyer.verified ? (
                    <p className="text-green-500"> Verified</p>
                  ) : (
                    <p
                      className="text-red-500 cursor-pointer"
                      onClick={() => verifyUser(buyer._id)}
                    >
                      Verify Now
                    </p>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm bg-red-700"
                    onClick={() => handleDelete(buyer._id)}
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

export default AllBuyers;
