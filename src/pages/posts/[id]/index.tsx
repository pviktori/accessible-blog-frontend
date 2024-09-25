import Link from "next/link";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

const Post: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = {
    id,
    title: "Sample Post",
    content: "This is a sample post content.",
    author: "John Doe",
    date: "2024-08-10",
  };

  if (isNaN(+id!)) {
    return (
      <Layout>
        <h3>Post is not valid</h3>
        <Link href={"/"} className="mt-4 text-blue-600 hover:underline">
          Back to Home
        </Link>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="space-y-4">
        <div className="flex space-x-3 items-center">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <Link href={`${id}/edit`} className="text-blue-600 hover:underline">
            Edit
          </Link>
        </div>
        <p>{post.content}</p>
        <small className="text-gray-600">
          {post.author} - {post.date}
        </small>
        <div>
          <button onClick={() => router.back()} className="mt-4 text-blue-600 hover:underline">
            Back to Home
          </button>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
