import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Post: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = {
    id,
    title: 'Sample Post',
    content: 'This is a sample post content.',
    author: 'John Doe',
    date: '2024-08-10',
  };

  return (
    <Layout>
      <article className="space-y-4">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p>{post.content}</p>
        <small className="text-gray-600">{post.author} - {post.date}</small>
        <button onClick={() => router.back()} className="mt-4 text-blue-600 hover:underline">
          Back to Home
        </button>
      </article>
    </Layout>
  );
};

export default Post;