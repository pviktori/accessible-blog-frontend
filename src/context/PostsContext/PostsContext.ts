import { PostsContextInterface } from "@/src/interfaces/PostsContext.interface";
import { createContext } from "react";

export const PostsContext = createContext(null as PostsContextInterface | null);
