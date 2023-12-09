const BASE_URL = "https://jsonplaceholder.typicode.com";
async function getPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}
async function getComments() {
  const res = await fetch(`${BASE_URL}/comments`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}
export { getPosts, getComments };
