import React from "react";
import { useFormik } from "formik";
import { Send } from "lucide-react";

export default function ContactForm() {
  const initialValues = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };
  type name = keyof typeof initialValues;
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const InputData = [
    {
      id: 0,
      Label: "Name:",
      name: "name",
      type: "text",
      placeholder: "Name",
    },
    {
      id: 1,
      Label: "Subject:",
      name: "subject",
      type: "text",
      placeholder: "Subject",
    },
    {
      id: 2,
      Label: "Email:",
      name: "email",
      type: "text",
      placeholder: "Email",
    },
    {
      id: 3,
      Label: "Message:",
      name: "message",
      type: "textarea",
      placeholder: "Message",
    },
  ];
  return (
    <div className="bg-[#09090B] shadow-md rounded-[8px] p-5">
      <div>
        <h2 className="text-3xl text-gray-100 text-center pb-5">
          Get in touch
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        {InputData.map((data) => (
          <div key={data.id}>
            <label
              className={`text-gray-100 block uppercase tracking-wide text-xs font-bold mb-2`}
            >
              {data.Label}
            </label>
            {data.type !== "textarea" ? (
              <input
                name={data.name}
                value={values[data.name as name]}
                onChange={handleChange}
                className={` appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                type={data.type}
                placeholder={data.placeholder}
              />
            ) : (
              <textarea
                rows={4}
                cols={40}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                placeholder="Message"
                name="message"
                onChange={handleChange}
                value={values[data.name as name]}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-transparent w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <span>Send</span>
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}
