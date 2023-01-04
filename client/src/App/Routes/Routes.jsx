import { createBrowserRouter } from "react-router-dom";
import Authentication from "../../Views/Authentication/Authentication";
import NewArrivals from "../../Views/NewArrivals/NewArrivals";
import App from "../Layout/App";

export const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "new-arrivals", element: <NewArrivals /> },
        { path: "auth", element: <Authentication /> },
      ],
    },
  ];
  
  export const router = createBrowserRouter(routes);