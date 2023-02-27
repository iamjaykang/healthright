import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import HomePage from "../../components/home/HomePage.component";
import Footer from "./footer/Footer.layout";
import Header from "./header/Header.layout";
import { useDispatch } from "react-redux";
import {
  checkUserSession,
} from "../stores/user/user.action";
import { fetchProductsLoading } from "../stores/products/product.action";

const App = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductsLoading());
  }, [location, dispatch]);

  useEffect(() => {
    const messengerElement = document.getElementById(
      "my-chatbot"
    ) as HTMLElement;
    if (
      location.pathname.startsWith("/admin") ||
      location.pathname.startsWith("/checkout")
    ) {
      messengerElement.style.display = "none";
    } else {
      messengerElement.style.display = "block";
    }
  }, [location.pathname]);

  return (
    <div className="app">
      <ScrollRestoration />
      <Header />
      <div className="app__body">
        <main className="app__main-content">
          {location.pathname === "/" ? <HomePage /> : <Outlet />}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
