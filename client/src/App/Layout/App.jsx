import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../../Views/Home/Home.view";
import Footer from "./Footer/Footer.layout";
import Header from "./Header/Header.layout";
import "./App.css";
import {
  addCollectionAndDocuments,
  createUserDocumentFromAuth,
  getBrandsAndDocuments,
  onAuthStateChangedListener,
} from "../../utils/firebase/firebase.utils";
import { setCurrentUser } from "../../stores/user/user.action";
import { useDispatch } from "react-redux";
import { setBrands } from "../../stores/brands/brand.action";
import SHOP_DATA from "../../assets/data/shopData";

const App = () => {
  const location = useLocation();

  const dispatch = useDispatch();

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
    const getBrandsMap = async () => {
      // Retrieve the Map of brands to items
      const brands = await getBrandsAndDocuments();

      // Set the brands to the retrieved map
      dispatch(setBrands(brands));
    };

    // Call the getBrandsMap function
    getBrandsMap();
  }, [dispatch]);



  return (
    <div className="page-container">
      <Header />
      <main>{location.pathname === "/" ? <Home /> : <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default App;
