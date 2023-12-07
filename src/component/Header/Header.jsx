import React, { useEffect, useState } from "react";
import "./Header.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  // console.log(cart);
  return (
    <div className="top-header">
      <div className="parent-header">
        <div xs={12} md={6} lg={6} className="logo">
          <p>
            <img src="https://i.postimg.cc/3JjVhCBx/ml1.png" alt="" />
            <span className="L1">ARM</span>
            <span className="L2">OSE</span>
          </p>
        </div>
        <div className="child-header">
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

              <Link to="/orders">
                <span className="card-icon">
                  <ShoppingCartIcon className="cart-icon" />
                  <span className="cartCount">{cart}</span>
                </span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
