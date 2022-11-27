import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const SellerProduct = () => {
  const { user } = useContext(AuthContext);

  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const url = ` ${process.env.REACT_APP_SERVER}/products/${user?.email}`;
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
        refetch();
      });
  };
  //Delete a product
  const handleAdvertisement = (id) => {
    const url = ` ${process.env.REACT_APP_SERVER}/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `bearar ${localStorage.getItem("pre-owned_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product is selected for Promotion");
        refetch();
      });
  };
  return (
    <div className="min-h-[800px]">
      <h1>My Products</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Book Status</th>
              <th>Sell Status</th>
              <th>Advertisement</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myProducts.map((product, i) => (
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
                <td>{product.resell_Price}</td>
                <td>
                  {!product.booked ? (
                    <label htmlFor="PaymentModal" className="text-red-500">
                      Live
                    </label>
                  ) : (
                    <p className="text-green-500">Booked by someone</p>
                  )}
                </td>
                <td>
                  {!product.sold ? (
                    <label htmlFor="PaymentModal" className="text-green">
                      Sold
                    </label>
                  ) : (
                    <p className="text-red-500">Not Sold Yet</p>
                  )}
                </td>
                <td>
                  {product.advertisement ? (
                    "Promoted"
                  ) : (
                    <button
                      className="btn btn-sm bg-primary border-0"
                      onClick={() => handleAdvertisement(product._id)}
                    >
                      Turn on Advertisement
                    </button>
                  )}
                </td>
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

export default SellerProduct;
