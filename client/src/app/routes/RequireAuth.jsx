import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Spinner from "../common/spinner/Spinner.common";
import { signOutLoading } from "../stores/user/user.action";
import {
    selectAuthError,
  selectCurrentUser,
  selectUserIsLoading,
} from "../stores/user/user.selector";

const RequireAuth = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentUserIsLoading = useSelector(selectUserIsLoading);
  const authError = useSelector(selectAuthError);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser && !currentUser.user.isAdmin) {
      dispatch(signOutLoading());
    }
  }, [dispatch, currentUser]);

  if (currentUserIsLoading) {
    return <Spinner />;
  }

  if (
    !currentUserIsLoading &&
    currentUser &&
    currentUser.user.isAdmin !== true
  ) {
    return <Navigate to="/admin/sign-in" state={{ from: location }} />;
  }

  if (!currentUserIsLoading) {
    if (currentUser === null && authError && location.pathname === '/admin') {
      return <Navigate to="/admin/sign-in" state={{ from: location }} />;
    }
  }

  return <Outlet />;
};

export default RequireAuth;
