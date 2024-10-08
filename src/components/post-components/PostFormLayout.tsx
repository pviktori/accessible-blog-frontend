import Layout from "@/src/components/Layout";
import { useRouter } from "next/router";
import { Post } from "@/src/interfaces/Post.interface";
import { useCallback, useEffect, useState } from "react";
import ConfirmationModal from "@/src/components/modals/ConfirmationModal";
import EditPost from "@/src/components/post-components/PostEditForm";
import { usePosts } from "@/src/context/PostsContext/usePosts";

const EditPostLayout: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { getPost, updatePost, addPost } = usePosts();
  const isCreateMode = !id;

  useEffect(() => {
    setPost(
      isCreateMode
        ? {
            author: "",
            content: "",
            date: "",
            id: 0,
            title: "",
          }
        : getPost(+id!)
    );
  }, [id, getPost]);

  const submitFormHandler = (post: Partial<Post>) => {
    if (isCreateMode) {
      addPost(post as Post);
    }
    updatePost(+id!, post);
  };
  const submitFormHandlerCallback = useCallback(submitFormHandler, [id]);

  if (!post) {
    return (
      <Layout>
        <p>Post not found</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">{isCreateMode ? "Create Post" : "Update " + post!.title + " Post"}</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Delete
        </button>
        <ConfirmationModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      </div>
      <EditPost post={post!} submitForm={submitFormHandlerCallback} />
    </Layout>
  );
};

export default EditPostLayout;
