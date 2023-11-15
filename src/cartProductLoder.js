import { getShoppingCart } from "./utilities/fakedb";

const cartProductLoder = async () => {
  const loaderProduct = await fetch("products.json");

  const Product = await loaderProduct.json();
  // if you have database you have to must use asyn await function
  const storeCart = getShoppingCart();
  const saveCart = [];

  for (const id in storeCart) {
    const addedProducts = Product.find((pd) => pd.id === id);
    if (addedProducts) {
      const quantity = storeCart[id];
      addedProducts.quantity = quantity;
      saveCart.push(addedProducts);
      // console.log(quantity);
    }
  }
  // console.log(saveCart);
  return saveCart;
};
export default cartProductLoder;
