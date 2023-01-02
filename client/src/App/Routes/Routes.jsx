import { createBrowserRouter } from "react-router-dom";
import Shop from "../../Views/Shop/Shop";
import SignIn from "../../Views/SignIn/SignIn";
import App from "../Layout/App";

export const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "new", element: <Shop /> },
        { path: "sign-in", element: <SignIn /> },
      ],
    },
  ];
  
  export const router = createBrowserRouter(routes);