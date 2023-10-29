import React from "react";
import "./Header.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
const Header = () => {
  return (
    <Container fluid className="top-header">
      <Row className="parent-header">
        <Col xs={12} md={6} lg={6} className="logo">
          <p>
            <img src="https://i.postimg.cc/3JjVhCBx/ml1.png" alt="" />
            <span className="L1">ARM</span>
            <span className="L2">OSE</span>
          </p>
        </Col>
        <Col xs={12} md={6} lg={6} className="child-header">
          <div className="form">
            <form class="d-flex pt-2" role="search">
              <input
                class="form-control me-2 mt-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success mt-2" type="submit">
                Search
              </button>

              {/* <Link to="/menucart">
                <Cart></Cart>
              </Link> */}

              <span className="card-icon">
                <ShoppingCartIcon className="cart-icon" />
              </span>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
