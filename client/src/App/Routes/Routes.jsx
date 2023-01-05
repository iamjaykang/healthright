import { createBrowserRouter } from "react-router-dom";
import Authentication from "../../Views/Authentication/Authentication";
import CheckOut from "../../Views/CheckOut/CheckOut";
import NewArrivals from "../../Views/NewArrivals/NewArrivals";
import App from "../Layout/App";

export const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "new-arrivals", element: <NewArrivals /> },
        { path: "auth", element: <Authentication /> },
        { path: "check-out", element: <CheckOut /> },
      ],
    },
  ];
  
  export const router = createBrowserRouter(routes);