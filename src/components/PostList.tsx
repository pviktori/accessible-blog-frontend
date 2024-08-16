import PostItem from "./PostItem";

interface Post {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
}

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
