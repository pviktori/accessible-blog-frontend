import Layout from "../components/Layout";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../components/form-components/InputField";

const CreatePost: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <Formik
        initialValues={{ title: "", author: "", content: "", tags: "" }}
        validationSchema={Yup.object({
          title: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
          author: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
          content: Yup.string().required("Required"),
          tags: Yup.string(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}>
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <InputField label="Title" fieldName="title" />
            <InputField label="Author" fieldName="author" />
            <InputField label="Content" fieldName="content" type="textarea" />
            <InputField label="Tags" fieldName="tags" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default CreatePost;
