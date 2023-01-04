import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./App/Routes/Routes";
import { UserProvider } from "./Contexts/User";
import { ProductsProvider } from "./Contexts/Products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
