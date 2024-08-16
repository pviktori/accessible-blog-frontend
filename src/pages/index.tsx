import { useState } from "react";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const posts = [
    { id: 1, title: "First Post", description: "This is the first post", author: "John Doe", date: "2024-08-10" },
    { id: 2, title: "Second Post", description: "This is the second post", author: "Jane Doe", date: "2024-08-11" },
    { id: 3, title: "Third Post", description: "This is the third post", author: "Jake Doe", date: "2024-08-12" },
  ];

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title or author"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <PostList posts={filteredPosts} />
    </Layout>
  );
};

export default Home;
