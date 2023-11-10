import React from "react";
import "./Review.css";
import { TrashIcon } from "@heroicons/react/24/solid";
const ReviewProducts = ({ products, handleRemoveFromCart }) => {
  const { id, img, name, quantity, price } = products;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="review-productname">{name}</p>
        <p>
          price: ৳<span className="review-price">{price}</span>{" "}
        </p>
        <p>
          quantity:
          <span span className="review-price">
            {quantity}
          </span>{" "}
        </p>
      </div>
      <button
        onClick={() => handleRemoveFromCart(id)}
        className="reviewClose-button"
      >
        <TrashIcon></TrashIcon>
      </button>
    </div>
  );
};

export default ReviewProducts;
