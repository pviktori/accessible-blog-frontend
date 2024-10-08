import { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { usePosts } from "@/src/context/PostsContext/usePosts";
import { useDebounce } from "@/src/hooks/useDebounce";
import PostList from "@/src/components/post-components/PostList";

const PostsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);
  const { filterPosts } = usePosts();

  const filterPostsHandler = (e: any) => {
    setSearchQuery(e.target!.value);
  };

  const filterPostsHandlerCallback = useCallback(filterPostsHandler, []);

  useEffect(() => {
    filterPosts(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <div className="mb-4">
        <label htmlFor="search" className="sr-only">
          Search by title or author
        </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={filterPostsHandlerCallback}
          placeholder="Search by title or author"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <PostList />
    </Layout>
  );
};

export default PostsPage;
