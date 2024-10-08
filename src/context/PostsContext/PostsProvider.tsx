import { useReducer } from "react";
import { PostsContext } from "./PostsContext";
import { Post } from "@/src/interfaces/Post.interface";
import { PostAction, PostActionEnum, PostsContextState } from "@/src/interfaces/PostsContext.interface";

const initialPosts: PostsContextState = {
  posts: [
    { id: 1, title: "First Post", content: "This is the first post", author: "John Doe", date: "2024-08-10" },
    { id: 2, title: "Second Post", content: "This is the second post", author: "Jane Doe", date: "2024-08-11" },
    { id: 3, title: "Third Post", content: "This is the third post", author: "Jake Doe", date: "2024-08-12" },
  ],
  filter: "",
};

const postsReducer = (state: PostsContextState, action: PostAction) => {
  switch (action.type) {
    case PostActionEnum.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload as Post],
      };

    case PostActionEnum.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === (action.payload as Post)!.id) {
            return { ...p, ...(action.payload as Post) };
          }
          return p;
        }),
      };

    case PostActionEnum.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== (action.payload as number)),
      };

    case PostActionEnum.SET_FILTER:
      return {
        ...state,
        filter: action.payload as string,
      };

    default:
      return { ...state };
  }
};

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialPosts);

  const addPost = (post: Omit<Post, "id">) => {
    const id = Math.floor(Math.random() * 10_000);
    dispatch({ type: PostActionEnum.ADD_POST, payload: { ...post, id } });
  };

  const updatePost = (id: number, post: Partial<Post>) => {
    const currPost = state.posts.find((p) => p.id === id);
    if (!currPost) return;

    dispatch({ type: PostActionEnum.UPDATE_POST, payload: { ...currPost, ...post, id } });
  };

  const deletePost = (id: number) => {
    dispatch({ type: PostActionEnum.DELETE_POST, payload: id });
  };

  const getPost = (id: number): Post | null => {
    return state.posts.find((p) => p.id === id) || null;
  };

  const filterPosts = (filterQuery: string) => {
    dispatch({ type: PostActionEnum.SET_FILTER, payload: filterQuery as string });
  };

  const filteredPosts = state.posts.filter(
    (post) =>
      post.title.toLowerCase().includes(state.filter.toLowerCase()) ||
      post.author.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <PostsContext.Provider value={{ posts: filteredPosts, addPost, updatePost, deletePost, getPost, filterPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
