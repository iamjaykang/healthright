import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Home from "../../Views/Home/Home.view";
import Footer from "./Footer/Footer.layout";
import Header from "./Header/Header.layout";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandsLoading } from "../../stores/brands/brand.action";
import { checkUserSession } from "../../stores/user/user.action";
import { selectBrandsIsLoading } from "../../stores/brands/brand.selector";
import Spinner from "../Common/Spinner/Spinner.common";
import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import SHOP_DATA from "../../assets/data/shopData";

const App = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  useEffect(() => {
    dispatch(fetchBrandsLoading());
  }, []);

  return (
    <div className="page-container">
      <ScrollRestoration />
      <Header />
      <main>
        {location.pathname === "/" ? (
          <Home />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
