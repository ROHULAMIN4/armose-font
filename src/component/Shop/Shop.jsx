import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";

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

  // for local storage
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for (const id in storedCart) {
      // step 2: get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart);
  }, [products]);
  // end local storage
  const handleAddtoCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <>
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
            <Cart cart={cart} key={cart.id}></Cart>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shop;
