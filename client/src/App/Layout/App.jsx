import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../../Views/Home/Home.view";
import Footer from "./Footer/Footer.layout";
import Header from "./Header/Header.layout";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchBrandsLoading } from "../../stores/brands/brand.action";
import { checkUserSession } from "../../stores/user/user.action";

const App = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBrandsLoading());
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
