import { PostsProvider } from "../context/PostsContext/PostsProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostsProvider>
      <Component {...pageProps} />
    </PostsProvider>
  );
}

export default MyApp;
