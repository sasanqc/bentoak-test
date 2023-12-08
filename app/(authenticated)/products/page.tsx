import React from "react";
async function getProducts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Products = async () => {
  // try {
  //   const data = await getProducts();
  //   console.log("data: ", data);
  // } catch (error) {
  //   console.log("failed to fetch products");
  // }

  const initialData = await getProducts();
  console.log("initialData:", initialData);
  return <div>Products</div>;
};

export default Products;
