import React, { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../stores/user/user.selector";

const RequireAdminAuth = ({ children }: { children: ReactNode }) => {
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();
  const navigate = useNavigate();

  const isAdmin = currentUser && currentUser.isAdmin;

  useEffect(() => {
    // Redirect to login page if the user is not authenticated or not an admin
    if (!currentUser || !isAdmin) {
      navigate("/admin/sign-in", { state: { from: location } });
    }
  }, [currentUser, isAdmin, location,navigate]);

  // Render the child components if the user is authenticated and authorized
  return <>{isAdmin ? children : null}</>;
};


export default RequireAdminAuth;
