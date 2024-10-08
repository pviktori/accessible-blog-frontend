import Link from "next/link";
import { Post } from "../../interfaces/Post.interface";

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <li className="border-b pb-4">
      <Link
        href={`/posts/${post.id}`}
        passHref
        className="text-xl font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
        {post.title}
      </Link>
      <p>{post.content}</p>
      <small className="text-gray-600">
        {post.author} - {post.date}
      </small>
    </li>
  );
};

export default PostItem;
