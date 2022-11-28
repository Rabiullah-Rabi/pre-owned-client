import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../Layout/AdminDashboard/AdminDashboard";
import AllCategories from "../Layout/AllCategories/AllCategories.js/AllCategories";
import Main from "../Layout/Main";
import SellerDashboard from "../Layout/SellerDashBoard/SellerDashboard";
import UserDashboard from "../Layout/UserDashboard/UserDashboard";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Blog from "../Pages/Blog/Blog";
import AllBuyers from "../Pages/dashboard/admin/AllBuyers/AllBuyers";
import AllSellers from "../Pages/dashboard/admin/AllSellers/Allsellers";
import AllProducts from "../Pages/dashboard/admin/Products/AllProducts/AllProducts";
import ReportedProducts from "../Pages/dashboard/admin/Products/ReportedProduct/ReportedProducts";
import MyWishlist from "../Pages/dashboard/Buyer/MyWishlist/MyWishlist";
import OrderedItems from "../Pages/dashboard/Buyer/OrderdItems/OrderedItems";
import Payment from "../Pages/dashboard/Buyer/Payment/Payment";
import AddProduct from "../Pages/dashboard/seller/AddProdust/AddProduct";
import MyBuyers from "../Pages/dashboard/seller/MyBuyers/MyBuyers";
import SellerProduct from "../Pages/dashboard/seller/SellerProduct/SellerProduct";
import SoldItem from "../Pages/dashboard/seller/SoldItem/SoldItem";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ComingSoon from "../Pages/Shared/ComingSoon";
import ErrorPage from "../Pages/Shared/ErrorPage";
import ProductsByCategory from "../Pages/Shared/ProductsBuCategory/ProductsByCategory";
import Signup from "../Pages/Signup/Signup";
import AdminRoutes from "./AdminRoutes";
import BuyerRoutes from "./BuyerRoutes";
import PrivateRoute from "./PrivateRoute";
import SellerRoutes from "./sellerRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category",
        element: <AllCategories></AllCategories>,
        children: [
          {
            path: "/category",
            element: <AllProduct></AllProduct>,
          },
          {
            path: "/category/:name",
            element: <ProductsByCategory></ProductsByCategory>,
            loader: ({ params } = "samsung") =>
              fetch(
                `${process.env.REACT_APP_SERVER}/categories/${params.name}`
              ),
          },
        ],
      },

      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_SERVER}/product/${params.id}`),
      },
      {
        path: "/coming-soon",
        element: <ComingSoon></ComingSoon>,
      },
      // buyers dashboard
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <BuyerRoutes>
              <UserDashboard></UserDashboard>
            </BuyerRoutes>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <OrderedItems></OrderedItems>,
          },
          {
            path: "/dashboard/my-wishlist",
            element: <MyWishlist></MyWishlist>,
          },
          {
            path: "/dashboard/payments/:id",
            element: <Payment></Payment>,
            loader: ({ params }) =>
              fetch(`${process.env.REACT_APP_SERVER}/booked-item/${params.id}`),
          },
        ],
      },
      // seller Dashboard
      {
        path: "/seller-dashboard",
        element: (
          <PrivateRoute>
            <SellerRoutes>
              <SellerDashboard></SellerDashboard>
            </SellerRoutes>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/seller-dashboard",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "/seller-dashboard/manage-products",
            element: <SellerProduct></SellerProduct>,
          },
          {
            path: "/seller-dashboard/sold-items",
            element: <SoldItem></SoldItem>,
          },
          {
            path: "/seller-dashboard/add-product",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "/seller-dashboard/my-buyers",
            element: <MyBuyers></MyBuyers>,
          },
        ],
      },
      // admin dashboard
      {
        path: "/admin-dashboard",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AdminDashboard></AdminDashboard>
            </AdminRoutes>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/admin-dashboard",
            element: <AllSellers></AllSellers>,
          },
          {
            path: "/admin-dashboard/all-seller",
            element: <AllSellers></AllSellers>,
          },
          {
            path: "/admin-dashboard/all-buyers",
            element: <AllBuyers></AllBuyers>,
          },
          {
            path: "/admin-dashboard/all-products",
            element: <AllProducts></AllProducts>,
          },
          {
            path: "/admin-dashboard/reported-products",
            element: <ReportedProducts></ReportedProducts>,
          },
        ],
      },
    ],
  },
]);

export default router;
