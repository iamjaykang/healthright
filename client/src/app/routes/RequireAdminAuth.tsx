import React, { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../stores/user/user.selector";
import { auth } from "../utils/firebase/firebase.utils";

const RequireAdminAuth = ({ children }: { children: ReactNode }) => {
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // Redirect to login page if the user is not authenticated or not an admin
    if (!currentUser) {
      navigate("/admin/sign-in", { state: { from: location } });
    } else {
      auth.currentUser
        ?.getIdTokenResult()
        .then((idTokenResult) => {
          setIsAdmin(idTokenResult.claims.admin);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentUser, location, navigate]);

  // Render the child components if the user is authenticated and authorized
  return <>{currentUser && isAdmin && children}</>;
};

export default RequireAdminAuth;
