import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewProducts from "../ReviewProducts/ReviewProducts";
import "./Orders.css";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);
  const handleRemoveFromCart = (id) => {
    const reamaining = cart.filter((products) => products.id !== id);
    setCart(reamaining);
    removeFromDb(id);

    // console.log(id);
  };
  const HandleClearCart = () => {
    setCart([]);
    deleteShoppingCart([]);
  };
  // console.log(cart);
  return (
    <Container fluid>
      <div className="parentShop">
        <div className="review-caontainer">
          {cart.map((products) => (
            <ReviewProducts
              products={products}
              handleRemoveFromCart={handleRemoveFromCart}
              key={products.id}
            ></ReviewProducts>
          ))}
        </div>
        <div className="review-orderSummary">
          <Cart cart={cart} HandleClearCart={HandleClearCart}>
            <Link style={{ textDecoration: "none" }} to="/checkout">
              <button className="review-btn">
                Proceed Checkout{" "}
                <ClipboardDocumentIcon
                  style={{ color: "white" }}
                  className="clear-icon"
                ></ClipboardDocumentIcon>
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </Container>
  );
};

export default Orders;
