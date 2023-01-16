import { createBrowserRouter } from "react-router-dom";
import Authentication from "../../Views/Authentication/Authentication.view";
import CheckOut from "../../Views/CheckOut/CheckOut.view";
import Brands from "../../Views/Brands/Brands.view";
import App from "../Layout/App";
import Brand from "../../Views/Brand/Brand.view";
import Payment from "../../Views/Payment/Payment.view";
import { stripePromise } from "../../utils/stripe/stripe.utils";
import { Elements } from "@stripe/react-stripe-js";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "brands", element: <Brands /> },
      { path: "brands/:brand", element: <Brand /> },
      { path: "auth", element: <Authentication /> },
      { path: "check-out", element: <CheckOut /> },
      {
        path: "check-out/payment",
        element: (
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
