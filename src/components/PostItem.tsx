import Link from "next/link";

interface Post {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
}

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <li className="border-b pb-4">
      <Link
        href={`/${post.id}`}
        passHref
        className="text-xl font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
        {post.title}
      </Link>
      <p>{post.description}</p>
      <small className="text-gray-600">
        {post.author} - {post.date}
      </small>
    </li>
  );
};

export default PostItem;
