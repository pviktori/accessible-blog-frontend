import Layout from "../../components/Layout";
import EditPost from "@/src/components/PostEditForm";

const CreatePostPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <EditPost />
    </Layout>
  );
};

export default CreatePostPage;
