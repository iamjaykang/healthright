import { createBrowserRouter } from "react-router-dom";
import Authentication from "../../Views/Authentication/Authentication.view";
import CheckOut from "../../Views/CheckOut/CheckOut.view";
import Brands from "../../Views/Brands/Brands.view";
import App from "../Layout/App";

export const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "brands", element: <Brands /> },
        { path: "auth", element: <Authentication /> },
        { path: "check-out", element: <CheckOut /> },
      ],
    },
  ];
  
  export const router = createBrowserRouter(routes);