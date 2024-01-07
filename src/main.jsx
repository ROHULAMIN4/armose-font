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
import DashboardHome from "./component/Dashboard/DashboaradHome/Dashboard.jsx";
import UserHome from "./component/Dashboard/UserHome/UserHome.jsx";
import Contact from "./component/Dashboard/Contact/Contact.jsx";
import MyOrdered from "./component/Dashboard/MyOrdered/MyOrdered.jsx";
import MyOrdereds from "./component/Dashboard/MyOrdereds/MyOrdereds.jsx";
import UpadateProfile from "./component/Dashboard/UpadateProfile/UpadateProfile.jsx";

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
      // {
      //   path: "dashboard",
      //   element: <Dashboard></Dashboard>,
      // },
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
    ],
  },

  // start

  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardHome></DashboardHome>
      </PrivateRoutes>
    ),
    children: [
      // normal user routes
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "contacts",
        element: <Contact></Contact>,
      },
      {
        path: "myordered",
        element: <MyOrdereds></MyOrdereds>,
      },
      {
        path: "updateprofile",
        element: <UpadateProfile></UpadateProfile>,
      },
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
