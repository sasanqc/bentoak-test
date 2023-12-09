"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  YAxis,
} from "recharts";
import { Comment, Post } from "../model";
interface Props {
  postData: Post[];
  commentData: Comment[];
}
const ChartComponent = ({ postData, commentData }: Props) => {
  const postCountByUser = postData.reduce((acc: any, post: Post) => {
    acc[post.userId] = (acc[post.userId] || 0) + 1;
    return acc;
  }, {});
  const commentCountByPost = commentData.reduce((acc: any, comment) => {
    acc[comment.postId] = (acc[comment.postId] || 0) + 1;
    return acc;
  }, {});

  const userPostCounts = Object.values(postCountByUser);
  const postCommentCounts = Object.values(commentCountByPost);
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center mb-10">
        <h2 className="bg-indigo-400 p-2 rounded-md">#Posts for each User</h2>
        <LineChart
          width={800}
          height={250}
          data={userPostCounts}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis dataKey={(v) => v} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={(v) => v} stroke="#8884d8" />
        </LineChart>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="bg-red-400 p-2 rounded-md">#Comments for each Post</h2>
        <BarChart width={800} height={300} data={postCommentCounts}>
          <YAxis dataKey={(v) => v} />
          <Bar dataKey={(v) => v} fill="#8884d8" />
          <Tooltip />
        </BarChart>
      </div>
    </div>
  );
};

export default ChartComponent;
