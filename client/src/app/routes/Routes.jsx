import { createBrowserRouter, Navigate } from "react-router-dom";
import Authentication from "../../components/authentication/AuthenticationPage.component";
import Brands from "../../components/brands/BrandsPage.component";
import App from "../layout/App";
import Brand from "../../components/brand/BrandPage.component";
import PaymentPage from "../../components/payment/PaymentPage.component";
import NotFoundPage from "../../components/notFound/NotFoundPage.component";
import CheckOutPage from "../../components/checkOut/CheckOutPage.component";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "brands", element: <Brands /> },
      { path: "brands/:vendor", element: <Brand /> },
      { path: "auth", element: <Authentication /> },
      { path: "checkout", element: <CheckOutPage /> },
      {
        path: "checkout/payment",
        element: (
            <PaymentPage />
        ),
      },
      { path: "not-found", element: <NotFoundPage /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
