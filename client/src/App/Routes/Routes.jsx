import { createBrowserRouter, Navigate } from "react-router-dom";
import Authentication from "../../Views/Authentication/Authentication.view";
import CheckOut from "../../Views/CheckOut/CheckOut.view";
import Brands from "../../Views/Brands/Brands.view";
import App from "../Layout/App";
import Brand from "../../Views/Brand/Brand.view";
import Payment from "../../Views/Payment/Payment.view";
import { stripePromise } from "../../utils/stripe/stripe.utils";
import { Elements } from "@stripe/react-stripe-js";
import NotFoundPage from "../../Views/NotFoundPage/NotFoundPage.view";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "brands", element: <Brands /> },
      { path: "brands/:brand", element: <Brand /> },
      { path: "auth", element: <Authentication /> },
      { path: "checkout", element: <CheckOut /> },
      {
        path: "checkout/payment",
        element: (
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        ),
      },
      { path: "not-found", element: <NotFoundPage /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
