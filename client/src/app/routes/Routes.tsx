import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import AuthenticationPage from "../../components/authentication/AuthenticationPage.component";
import BrandsPage from "../../components/brands/BrandsPage.component";
import App from "../layout/App";
import BrandPage from "../../components/brand/BrandPage.component";
import PaymentPage from "../../components/payment/PaymentPage.component";
import NotFoundPage from "../../components/notFound/NotFoundPage.component";
import CheckOutPage from "../../components/checkOut/CheckOutPage.component";
import AdminAuthenticationPage from "../../components/admin/authentication/AdminAuthentication.component";
import AdminOverview from "../../components/admin/dashboard/overview/AdminOverview.component";
import AdminOrders from "../../components/admin/dashboard/orders/AdminOrders.component";
import AdminProducts from "../../components/admin/dashboard/products/AdminProducts.component";
import AdminAddProduct from "../../components/admin/dashboard/products/addProduct/AdminAddProduct.component";
import AdminEditProduct from "../../components/admin/dashboard/products/editProduct/AdminEditProduct.component";
import AdminCustomers from "../../components/admin/dashboard/customers/AdminCustomers.component";
import AdminAddCustomer from "../../components/admin/dashboard/customers/addCustomer/AdminAddCustomer.component";
import AdminEditCustomer from "../../components/admin/dashboard/customers/editCustomer/AdminEditCustomer.component";
import ProductDetailsPage from "../../components/productDetails/ProductDetailsPage.component";
import ProductSearchPage from "../../components/productSearch/ProductSearchPage.component";
import RequireAdminAuth from "./RequireAdminAuth";
import Dashboard from "../layout/Dashboard";
import AdminAddOrder from "../../components/admin/dashboard/orders/addOrder/AdminAddOrder.component";
import AdminEditOrder from "../../components/admin/dashboard/orders/editOrder/AdminEditOrder.componet";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "brands", element: <BrandsPage /> },
      { path: "brands/:vendor", element: <BrandPage /> },
      { path: "auth", element: <AuthenticationPage /> },
      { path: "product/:productName", element: <ProductDetailsPage /> },
      { path: "search", element: <ProductSearchPage /> },

      { path: "checkout", element: <CheckOutPage /> },
      {
        path: "checkout/payment",
        element: <PaymentPage />,
      },
      { path: "not-found", element: <NotFoundPage /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <RequireAdminAuth>
        <Dashboard />
      </RequireAdminAuth>
    ),
    children: [
      {
        path: ".",
        element: <Navigate replace to="/admin/dashboard/overview" />,
      },
      {
        path: "dashboard/overview",
        element: <AdminOverview />,
      },
      {
        path: "dashboard/orders",
        element: <AdminOrders />,
      },
      {
        path: "dashboard/order/add",
        element: <AdminAddOrder />,
      },
      {
        path: "dashboard/order/edit/:orderId",
        element: <AdminEditOrder />,
      },
      {
        path: "dashboard/customers",
        element: <AdminCustomers />,
      },
      {
        path: "dashboard/customer/add",
        element: <AdminAddCustomer />,
      },
      {
        path: "dashboard/customer/edit/:customerId",
        element: <AdminEditCustomer />,
      },
      {
        path: "dashboard/products",
        element: <AdminProducts />,
      },
      {
        path: "dashboard/products/add",
        element: <AdminAddProduct />,
      },
      {
        path: "dashboard/product/edit/:productId",
        element: <AdminEditProduct />,
      },
    ],
  },
  {
    path: "admin/sign-in",
    element: <AdminAuthenticationPage />,
  },
];

export const router = createBrowserRouter(routes);
