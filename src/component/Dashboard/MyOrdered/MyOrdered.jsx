import React from "react";
import { Col } from "react-bootstrap";

const MyOrdered = ({ order }) => {
  const { name, email, photoURL } = order;
  return (
    <>
      <Col>
        <td>{name}</td>
      </Col>
      <Col>
        <img src={photoURL} alt="" className="w-25 rounded-2" />
      </Col>
      <Col>
        <td>{email}</td>
      </Col>
      <Col>
        <td>{email}</td>
      </Col>
      {/* <h1>My ordered</h1> */}
    </>
  );
};

export default MyOrdered;
