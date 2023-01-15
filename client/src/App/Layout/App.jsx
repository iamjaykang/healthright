import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../../Views/Home/Home.view";
import Footer from "./Footer/Footer.layout";
import Header from "./Header/Header.layout";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandsLoading } from "../../stores/brands/brand.action";
import { selectBrandsIsLoading } from "../../stores/brands/brand.selector";
import Spinner from "../../Components/Spinner/Spinner.component";
import { checkUserSession } from "../../stores/user/user.action";

const App = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const isLoading = useSelector(selectBrandsIsLoading);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBrandsLoading());
  }, [dispatch]);

  return (
    <div className="page-container">
      <>
        <Header />
        <main>
          {isLoading ? (
            <Spinner />
          ) : location.pathname === "/" ? (
            <Home />
          ) : (
            <Outlet />
          )}
        </main>
        <Footer />
      </>
    </div>
  );
};

export default App;
