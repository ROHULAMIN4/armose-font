import React from "react";
import "./Cart.css";
import Table from "react-bootstrap/Table";
import { TrashIcon } from "@heroicons/react/24/solid";

const Cart = ({ cart, HandleClearCart, children }) => {
  let totall = 0;
  let totallShipping = 0;
  for (const product of cart) {
    totall = totall + product.price;
    totallShipping = totallShipping + product.shipping;
  }
  let tax = (totall / 100) * 2.5;
  let final = tax.toFixed(2);
  // console.log(final);
  return (
    <>
      <div className="cart">
        <h3>Order summary</h3>
        <Table striped bordered hover variant="light">
          <tbody>
            <tr>
              <td>Selected Item</td>
              <td>{cart.length}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>৳{totall}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>৳{totallShipping}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>৳{final}</td>
            </tr>
            <h5 style={{ color: "tomato" }}>
              Totall : ৳{totall + tax + totallShipping}{" "}
            </h5>
          </tbody>
        </Table>
        <button onClick={HandleClearCart} className="clear-btn">
          <span>Clear Cart</span>
          <TrashIcon className="clear-icon"></TrashIcon>
        </button>
        {children}
      </div>
    </>
  );
};

export default Cart;
