import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Orders = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <Container fluid>
      <div className="parentShop">
        <div className="products-caontainer">
          <h4>Totall Orders:{products.length}</h4>
        </div>
        <div className="orderSummary">
          <Cart cart={[]}></Cart>
        </div>
      </div>
    </Container>
  );
};

export default Orders;
