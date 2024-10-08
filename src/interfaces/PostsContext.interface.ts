import { Post } from "./Post.interface";

export interface PostsContextInterface {
  posts: Post[];
  addPost: (post: Omit<Post, "id">) => void;
  updatePost: (id: number, post: Partial<Post>) => void;
  deletePost: (id: number) => void;
  getPost: (id: number) => Post | null;
  filterPosts: (search: string) => void;
}

export enum PostActionEnum {
  ADD_POST = "ADD_POST",
  UPDATE_POST = "UPDATE_POST",
  DELETE_POST = "DELETE_POST",
  FILTER_POST = "DELETE_POST",
  SET_FILTER = "SET_FILTER",
}

export interface PostAction {
  type: PostActionEnum;
  payload?: Post | number | string;
}

export interface PostsContextState {
  posts: Post[];
  filter: string;
}
