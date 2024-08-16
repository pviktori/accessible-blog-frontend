import React from "react";
import { Field, ErrorMessage } from "formik";

interface InputFieldProps {
  label: string;
  fieldName: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, fieldName, type = "text" }) => {
  return (
    <div className="mb-4">
      <label htmlFor={fieldName} className="block text-gray-700">
        {label}
      </label>
      <Field
        name={fieldName}
        type={type}
        id={fieldName}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ErrorMessage name={fieldName} component="div" className="text-red-500" />
    </div>
  );
};

export default InputField;
