import { createBrowserRouter } from "react-router-dom";
import Authentication from "../../Views/Authentication/Authentication.view";
import CheckOut from "../../Views/CheckOut/CheckOut.view";
import Brands from "../../Views/Brands/Brands.view";
import App from "../Layout/App";
import Brand from "../../Views/Brand/Brand.view";

export const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "brands", element: <Brands /> },
        { path: "brands/:brand", element: <Brand /> },
        { path: "auth", element: <Authentication /> },
        { path: "check-out", element: <CheckOut /> },
      ],
    },
  ];
  
  export const router = createBrowserRouter(routes);