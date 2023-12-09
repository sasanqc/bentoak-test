import React from "react";
import { getComments, getPosts } from "../../services/posts";

import dynamic from "next/dynamic";
import randomSubarray from "@/app/utils/randomSubarray";
const ChartComponent = dynamic(
  () => import("@/app/components/ChartComponent"),
  { ssr: false }
);
const Charts = async () => {
  const posts = randomSubarray(await getPosts(), 50);
  const comments = randomSubarray(await getComments(), 300);
  return (
    <div className="p-4">
      <ChartComponent postData={posts} commentData={comments} />
    </div>
  );
};
export default Charts;
