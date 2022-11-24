import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import UserDashboard from "../Layout/UserDashboard/UserDashboard";
import Blog from "../Pages/Blog/Blog";
import OrderedItems from "../Pages/dashboard/Buyer/OrderdItems/OrderedItems";
import AddProduct from "../Pages/dashboard/seller/AddProdust/AddProduct";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ComingSoon from "../Pages/Shared/ComingSoon";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Signup from "../Pages/Signup/Signup";

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
        path: "/coming-soon",
        element: <ComingSoon></ComingSoon>,
      },
      {
        path: "/dashboard",
        element: <UserDashboard></UserDashboard>,
        children: [
          {
            path: "/dashboard",
            element: <OrderedItems></OrderedItems>,
          },
        ],
      },
      {
        path: "/seller-dashboard",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);

export default router;
