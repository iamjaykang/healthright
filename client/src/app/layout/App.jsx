import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Home from "../../views/home/Home.view";
import Footer from "./footer/Footer.layout";
import Header from "./header/Header.layout";
import "./App.css";
import { useDispatch} from "react-redux";
import { fetchBrandsLoading } from "../../stores/brands/brand.action";
import { checkUserSession } from "../../stores/user/user.action";

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
