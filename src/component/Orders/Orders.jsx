import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewProducts from "../ReviewProducts/ReviewProducts";
import "./Orders.css";

const Orders = () => {
  const cart = useLoaderData();
  // console.log(cart);
  return (
    <Container fluid>
      <div className="parentShop">
        <div className="review-caontainer">
          {cart.map((products) => (
            <ReviewProducts
              products={products}
              key={products.id}
            ></ReviewProducts>
          ))}
        </div>
        <div className="orderSummary">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </Container>
  );
};

export default Orders;
