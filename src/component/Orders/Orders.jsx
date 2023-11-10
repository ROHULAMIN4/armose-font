import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewProducts from "../ReviewProducts/ReviewProducts";
import "./Orders.css";

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
        <div className="orderSummary">
          <Cart cart={cart} HandleClearCart={HandleClearCart}></Cart>
        </div>
      </div>
    </Container>
  );
};

export default Orders;
