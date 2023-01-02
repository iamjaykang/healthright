import { createBrowserRouter } from "react-router-dom";
import Authentication from "../../Views/Authentication/Authentication";
import Shop from "../../Views/Shop/Shop";
import App from "../Layout/App";

export const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "new", element: <Shop /> },
        { path: "auth", element: <Authentication /> },
      ],
    },
  ];
  
  export const router = createBrowserRouter(routes);