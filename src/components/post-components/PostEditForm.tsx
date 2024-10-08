import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "@/src/components/form-components/InputField";
import { Post } from "@/src/interfaces/Post.interface";
import { memo } from "react";

const EditPost: React.FC<{ post?: Post; submitForm: (post: Partial<Post>) => void }> = ({
  post = { title: "", author: "", content: "", tags: "" },
  submitForm,
}) => {
  return (
    <Formik
      initialValues={post}
      validationSchema={Yup.object({
        title: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
        author: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
        content: Yup.string().required("Required"),
        tags: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // setSubmitting(false);
        submitForm(values);
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
  );
};

export default memo(EditPost);
