const BASE_URL = "https://dummyjson.com/products";
async function getProducts(queryStr: string) {
  const res = await fetch(BASE_URL + queryStr);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default getProducts;
