import { usePosts } from "../../context/PostsContext/usePosts";
import PostItem from "./PostItem";

const PostList: React.FC = () => {
  const { posts } = usePosts();
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
