import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  }, []);
  const handleAddtoCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <Container fluid>
      <div className="parentShop">
        <div className="products-caontainer">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddtoCart={handleAddtoCart}
            ></Product>
          ))}
        </div>
        <div className="orderSummary">
          <p>Order summary</p>
          <p>Selected Item {cart.length}</p>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
