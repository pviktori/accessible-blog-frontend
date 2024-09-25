import Layout from "@/src/components/Layout";
import { useRouter } from "next/router";
import EditPost from "@/src/components/PostEditForm";
import { Post } from "@/src/interfaces/Post.interface";
import { useEffect, useState } from "react";
import ConfirmationModal from "@/src/components/modals/ConfirmationModal";

const EditPostPage: React.FC = () => {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { id } = router.query;

  useEffect(() => {
    //  fake fetch request
    setTimeout(() => {
      setPost({
        id: +id!,
        title: "Sample Post",
        content: "This is a sample post content.",
        author: "John Doe",
        date: "2024-08-10",
      });
      setLoading(false);
    }, 2000);

    return () => {};
  }, []);

  if (!post) {
    if (loading)
      return (
        <Layout>
          <p>Loading...</p>
        </Layout>
      );
    else
      return (
        <Layout>
          <p>Post not found</p>
        </Layout>
      );
  }

  return (
    <Layout>
      <div className="flex justify-between ">
        <h1 className="text-2xl font-bold mb-4">Update "{post!.title}" Post</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Delete
        </button>
        <ConfirmationModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      </div>
      <EditPost post={post!} />
    </Layout>
  );
};

export default EditPostPage;
