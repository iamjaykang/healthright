import { Outlet, useLocation } from "react-router-dom";
import Home from "../../Views/Home/Home";
import Header from "./Header/Header";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === "/" ? <Home /> : <Outlet />}
    </>
  );
}

export default App;
