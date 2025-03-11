"use client";
import React from "react";
import { useFormik } from "formik";
import { Send } from "lucide-react";
import { useMyContext } from "@/contexts/MyContext";

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
  const { theme } = useMyContext();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#09090B] border" : "bg-white border-gray-200"
      } rounded-[8px] 1xl:p-7 p-5 border`}
    >
      <div>
        <h2
          className={`text-4xl 2xl:text-5xl ${
            theme === "dark" ? "text-gray-100" : "text-gray-800"
          }  text-center pb-5`}
        >
          Get in touch
        </h2>
      </div>
      <form onSubmit={handleSubmit} action={"https://formsubmit.co/salmanaliofficial7@gmail.com"} method="POST">
        {InputData.map((data) => (
          <div key={data.id}>
            <label
              className={`${
                theme === "dark" ? "text-gray-100" : "text-gray-700"
              } block uppercase tracking-wide 2xl:text-base text-xs font-bold mb-2`}
            >
              {data.Label}
            </label>
            {data.type !== "textarea" ? (
              <input
                name={data.name}
                value={values[data.name as name]}
                onChange={handleChange}
                className={` appearance-none block w-full bg-gray-200 text-gray-700 ${
                  theme === "dark" ? "border" : "border border-gray-200"
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white md:text-lg text-base`}
                type={data.type}
                placeholder={data.placeholder}
              />
            ) : (
              <textarea
                rows={4}
                cols={40}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white md:text-lg text-base ${
                  theme === "dark" ? "border" : "border border-gray-200"
                }`}
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
