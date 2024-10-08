import { useContext } from "react";
import { PostsContext } from "./PostsContext";

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) throw new Error("no context for Posts!");
  return context;
};
