import React from "react";
import "./Product.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Product = ({ product, handleAddtoCart }) => {
  const { name, quantity, rating, img, price, ratingsCount, ratings, seller } =
    product;

  return (
    <div className="singleproduct">
      <img src={img} alt="" />
      <p>{name} </p>
      <div className="pro-info">
        <small>{ratings} start </small>
        <small> rating count: {ratingsCount}</small>
      </div>
      <button onClick={() => handleAddtoCart(product)} className="button-style">
        <span className="tk">৳</span>
        {price}{" "}
        <span className="card-icon">
          <ShoppingCartIcon className="cart-icon1" />
        </span>
      </button>
    </div>
  );
};

export default Product;
