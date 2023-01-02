import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";

export const routes = [
    {
      path: "/",
      element: <App />,
      children: [
      ],
    },
  ];
  
  export const router = createBrowserRouter(routes);