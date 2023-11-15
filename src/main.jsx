import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Layout/Home.jsx";
import Shop from "./component/Shop/Shop.jsx";
import Offer from "./component/Offer/Offer.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Orders from "./component/Orders/Orders.jsx";
import Product from "./component/Product/Product.jsx";
import cartProductLoder from "./cartProductLoder.js";
import ReviewProducts from "./component/ReviewProducts/ReviewProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "offers",
        element: <Offer></Offer>,
      },
      {
        path: "revireItem",
        element: <Orders></Orders>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        // loader: () => fetch("products.json"),
        loader: () => cartProductLoder(),
      },
      // cart is not iterable problem dekhay
      // {
      //   path: "menucart",
      //   element: <Cart></Cart>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
