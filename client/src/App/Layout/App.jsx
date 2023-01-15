import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../../Views/Home/Home.view";
import Footer from "./Footer/Footer.layout";
import Header from "./Header/Header.layout";
import "./App.css";
import {
  addCollectionAndDocuments,
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../../utils/firebase/firebase.utils";
import { setCurrentUser } from "../../stores/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandsAsync } from "../../stores/brands/brand.action";
import { selectBrandsIsLoading } from "../../stores/brands/brand.selector";
import Spinner from "../../Components/Spinner/Spinner.component";
import SHOP_DATA from "../../assets/data/shopData";

const App = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const isLoading = useSelector(selectBrandsIsLoading);

  useEffect(() => {
    //listening to auth state changes
    const unsubscribe = onAuthStateChangedListener((user) => {
      //creating user document if user exists
      if (user) {
        createUserDocumentFromAuth(user);
      }
      //setting current user
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBrandsAsync());
  }, [dispatch]);

  return (
    <div className="page-container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <main>{location.pathname === "/" ? <Home /> : <Outlet />}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
