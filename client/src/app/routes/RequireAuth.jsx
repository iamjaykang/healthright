import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {
  selectCurrentUser,
} from "../stores/user/user.selector";

const RequireAuth = () => {
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  if (currentUser === null && location.pathname === '/admin') {
    return <Navigate to="/admin/sign-in" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;
