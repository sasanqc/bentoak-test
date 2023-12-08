import React from "react";
import { getPosts } from "../../api/posts";

const Charts = async () => {
  const posts = await getPosts();
  return <div>{JSON.stringify(posts)}</div>;
};
export default Charts;
