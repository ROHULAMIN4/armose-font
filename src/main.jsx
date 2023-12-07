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
import CheckOut from "./component/Checkout/CheckOut.jsx";
import Login from "./component/Login/Login.jsx";
import SignUp from "./component/SignUp/SignUp.jsx";
import AuthProver from "./component/provider/AuthProver.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import Seeing from "./component/Setting/Seeing.jsx";

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
        path: "setting",
        element: <Seeing></Seeing>,
      },
      {
        path: "revireItem",
        element: <Orders></Orders>,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoutes>
            <CheckOut></CheckOut>
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
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
    <AuthProver>
      <RouterProvider router={router} />
    </AuthProver>
  </React.StrictMode>
);
