import Post from "../model/Post";
import { getPosts } from "../api/posts";
import { useQuery } from "react-query";

export const usePost = (prefetchedData: { posts: Post[] }) => {
  const {
    data: { boards },
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData: prefetchedData,
  });
  return boards;
};
