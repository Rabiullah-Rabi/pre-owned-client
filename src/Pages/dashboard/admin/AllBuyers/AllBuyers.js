import React, { useEffect, useState } from "react";
import Spinner from "../../../../Components/Spinner/Spinner";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const AllBuyers = () => {
  //   const [buyers, setBuyers] = useState(null);
  //   const [userLoading, setUserLoading] = useState(true);

  //   const url = ` ${process.env.REACT_APP_SERVER}/buyers`;
  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setBuyers(data);
  //         console.log(data);
  //         setUserLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }, []);

  //   if (userLoading) {
  //     return <Spinner></Spinner>;
  //   }
  //Verify user
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const url = ` ${process.env.REACT_APP_SERVER}/buyers`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
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
                  <button className="btn btn-sm bg-red-700">Delete User</button>
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
