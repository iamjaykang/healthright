import { Outlet, useLocation } from "react-router-dom";
import Home from "../../Views/Home/Home.view";
import Footer from "./Footer/Footer.layout";
import Header from "./Header/Header.layout";
import './App.css'

function App() {
  const location = useLocation();
  return (
    <div className="page-container">
      <Header />
      <main>{location.pathname === "/" ? <Home /> : <Outlet />}</main>
      <Footer />
    </div>
  );
}

export default App;
