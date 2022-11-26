import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import PrimaryButton from "../../../../Components/Button/PrimaryButton";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { useUser } from "../../../../contexts/userContext";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [userInfo] = useUser(user?.email);
  const url = `${process.env.REACT_APP_SERVER}/categories`;
  const [catagories, setCategories] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  //   const { data } = useQuery({
  //     queryKey: ["categories"],
  //     queryFn: async () => {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       console.log(data);
  //       return data;
  //     },
  //   });
  //   console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const product_name = form.productName.value;
    const category = form.category.value;
    const resell_Price = form.resellPrice.value;
    const market_price = form.marketPrice.value;
    const year_of_use = form.yearOfUse.value;
    const purchaseYear = form.purchaseYear.value;
    const seller_contact = form.sellerContact.value;
    const meeting_point = form.meetingPoint.value;
    const image = form.image.files[0];
    const condition = form.condition.value;
    const description = form.description.value;

    // imgbb
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=25bb683c2c63fed132b63c39acc984d2`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const product = {
          product_name,
          category,
          resell_Price,
          market_price,
          year_of_use,
          purchaseYear,
          seller_contact,
          seller_name: userInfo.name,
          seller_email: userInfo.email,
          meeting_point,
          sold: false,
          wishlist: false,
          booked: false,
          reported: false,
          advertisement: false,
          product_img: data.data.display_url,
          condition,
          description,
          buyer: "",
        };
        const url = `${process.env.REACT_APP_SERVER}/products`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("Product Added Successfully");
            form.reset();
          })
          .catch((error) => {
            toast.error(error.message);
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col max-w-md rounded-md sm:p-10 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Add A Product</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="productName" className="block mb-2 text-sm">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 text-sm">
                Select Category
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                name="category"
              >
                {catagories.map((category, i) => (
                  <option key={i} defaultValue={category.cat_name}>
                    {category.cat_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              Condition
              <label
                htmlFor="condition"
                className="my-2 text-sm flex  flex-col"
              >
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="condition"
                    className="radio mr-2"
                    value="Excellent"
                    defaultChecked
                  />
                  Excellent
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="condition"
                    className="radio mr-2"
                    value="Good"
                  />
                  Good
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="condition"
                    className="radio mr-2"
                    value="fair"
                  />
                  fair
                </div>
              </label>
            </div>
            <div>
              <label htmlFor="purchaseYear" className="block mb-2 text-sm">
                Year of Purchase
              </label>
              <input
                type="text"
                name="purchaseYear"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="resellPrice" className="block mb-2 text-sm">
                Resell Price
              </label>
              <input
                type="number"
                name="resellPrice"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="marketPrice" className="block mb-2 text-sm">
                Market Price
              </label>
              <input
                type="number"
                name="marketPrice"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="yearOfUse" className="block mb-2 text-sm">
                Year Of Use
              </label>
              <input
                type="text"
                name="yearOfUse"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="sellerContact" className="block mb-2 text-sm">
                Contact number
              </label>
              <input
                type="phone"
                name="sellerContact"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="meetingPoint" className="block mb-2 text-sm">
                Meeting Point
              </label>
              <input
                type="text"
                name="meetingPoint"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 text-sm">
                Description
              </label>
              <textarea
                name="description"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Product Image
              </label>
              <input type="file" name="image" accept="image/*" required />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
              >
                Add Product
              </PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
