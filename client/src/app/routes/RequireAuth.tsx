import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Spinner from "../common/spinner/Spinner.common";
import { CurrentUser } from "../models/user.model";
import { signOutLoading } from "../stores/user/user.action";
import {
  selectAuthError,
  selectAuthMessage,
  selectCurrentUser,
  selectUserIsLoading,
} from "../stores/user/user.selector";

const RequireAuth = () => {
  const currentUser = useSelector(selectCurrentUser) as CurrentUser | null;
  const currentUserIsLoading = useSelector(selectUserIsLoading);
  const authError = useSelector(selectAuthError);
  const authMessage = useSelector(selectAuthMessage);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser && currentUser.user && !currentUser.user.isAdmin) {
      dispatch(signOutLoading());
    }
  }, [dispatch, currentUser]);

  if (currentUserIsLoading) {
    return <Spinner />;
  }

  if (
    !currentUserIsLoading &&
    currentUser &&
    currentUser.user &&
    currentUser.user.isAdmin !== true
  ) {
    return <Navigate to="/admin/sign-in" state={{ from: location }} />;
  }

  if (!currentUserIsLoading) {
    if (currentUser === null && authError && location.pathname === "/admin") {
      return <Navigate to="/admin/sign-in" state={{ from: location }} />;
    }
  }

  if (!currentUserIsLoading) {
    if (
      currentUser &&
      currentUser.user &&
      currentUser.user.isAdmin &&
      authError === null &&
      location.pathname === "/admin"
    ) {
      return <Navigate to="/admin/sign-in" state={{ from: location }} />;
    }
  }

  if (
    !currentUserIsLoading &&
    typeof authError === "string" &&
    authError === "User auth doesn't exist" &&
    location.pathname.startsWith("/admin")
  ) {
    return <Navigate to="/admin/sign-in" state={{ from: location }} />;
  }

  if (
    !currentUserIsLoading &&
    authMessage === "Sign out success" &&
    location.pathname.startsWith("/admin")
  ) {
    return <Navigate to="/admin/sign-in" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;
