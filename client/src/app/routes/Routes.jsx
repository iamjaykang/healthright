import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthenticationPage from "../../components/authentication/AuthenticationPage.component";
import Brands from "../../components/brands/BrandsPage.component";
import App from "../layout/App";
import Brand from "../../components/brand/BrandPage.component";
import PaymentPage from "../../components/payment/PaymentPage.component";
import NotFoundPage from "../../components/notFound/NotFoundPage.component";
import CheckOutPage from "../../components/checkOut/CheckOutPage.component";
import RequireAuth from "./RequireAuth";
import AdminAuthenticationPage from "../../components/admin/authentication/AdminAuthentication.component";
import AdminOverview from "../../components/admin/dashboard/overview/AdminOverview.component";
import AdminOrders from "../../components/admin/dashboard/orders/AdminOrders.components";
import AdminProducts from "../../components/admin/dashboard/products/AdminProducts.component";
import AdminAddProduct from "../../components/admin/dashboard/products/addProduct/AdminAddProduct.component";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: <RequireAuth />,
        children: [
          {
            path: "/admin/dashboard",
            element: <AdminOverview />,
          },
          {
            path: "/admin/dashboard/orders",
            element: <AdminOrders />,
          },
          {
            path: "/admin/dashboard/products",
            element: <AdminProducts />,
          },
          {
            path: "/admin/dashboard/products/add",
            element: <AdminAddProduct />,
          },
        ],
      },
      { path: "brands", element: <Brands /> },
      { path: "brands/:vendor", element: <Brand /> },
      { path: "auth", element: <AuthenticationPage /> },
      {
        path: "/admin/sign-in",
        element: <AdminAuthenticationPage />,
      },
      { path: "checkout", element: <CheckOutPage /> },
      {
        path: "checkout/payment",
        element: <PaymentPage />,
      },
      { path: "not-found", element: <NotFoundPage /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
