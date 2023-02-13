import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import HomePage from "../../components/home/HomePage.component";
import Footer from "./footer/Footer.layout";
import Header from "./header/Header.layout";
import "./App.css";
import { useDispatch } from "react-redux";
import { checkUserSession } from "../../app/stores/user/user.action";
import { fetchProductsLoading } from "../../app/stores/products/product.action";

const App = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  },[dispatch]);

  useEffect(() => {
    dispatch(fetchProductsLoading(),[[dispatch]]);
  });

  return (
    <div className="page-container">
      <ScrollRestoration />
      <Header />
      <main>{location.pathname === "/" ? <HomePage /> : <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default App;
