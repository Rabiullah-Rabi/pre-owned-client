import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { AuthContext } from "../contexts/AuthProvider";
import { useUser } from "../contexts/userContext";
const SellerRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const [userInfo, userLoading] = useUser(user?.email);
  if (loading || userLoading) {
    return <Spinner></Spinner>;
  }
    if (user && userInfo?.role === "seller") {
      console.log(userInfo?.role);
    return children ;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default SellerRoutes;
