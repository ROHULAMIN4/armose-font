const cartProductLoder = async () => {
  const loaderProduct = await fetch("products.json");

  const Product = await loaderProduct.json();
  console.log(Product);
  return Product;
};
export default cartProductLoder;
