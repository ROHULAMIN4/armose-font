import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import MyOrdered from "../MyOrdered/MyOrdered";
import "./Myorders.css";
const MyOrdereds = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user").then((res) =>
      res.json().then((data) => setOrders(data))
    );
  }, []);
  return (
    <>
      <h1 className="ps-5 m-5 text-info fw-bold">My Orders</h1>
      <div className="p-5 myordersBg w-75">
        {orders.map((order) => (
          <div className="myordertable">
            <Row>
              <MyOrdered key={order.id} order={order}></MyOrdered>{" "}
            </Row>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default MyOrdereds;
