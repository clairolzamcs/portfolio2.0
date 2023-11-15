import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { ToastContainer } from "react-toastify";

const Contact = ({ notify }) => {
  const [state, handleSubmit] = useForm("xwkdzjzw");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);

    if (state.succeeded) {
      // Clear the form fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Reset the form state using the @formspree/react reset function
      handleSubmit.reset();
    }
  };

  return (
    <section className="py-10" id="contact">
      <h1 className="text-5xl dark:text-gray-200 py-5">Let's Connect!</h1>
      <p className="pb-4 pl-4 text-gray-500">
        Let's connect and create something amazing! Open to feedback, ideas, or
        just a friendly chat. Reach out and let's make things better!{" "}
      </p>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name" className="dark:text-gray-200">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="border-2 border-red-800 p-2 rounded-lg w-full dark:border-red-800 dark:bg-black dark:text-gray-200"
        />
        <label htmlFor="email" className="dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="border-2 border-red-800 p-2 rounded-lg w-full dark:border-red-800 dark:bg-black dark:text-gray-200 "
        />
        <label htmlFor="message" className="dark:text-gray-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          cols="30"
          rows="10"
          className="border-2 border-red-800  p-2 py-4 rounded-lg w-full dark:border-red-800 dark:bg-black dark:text-gray-200 "
        ></textarea>
        <button
          disabled={state.submitting}
          onClick={notify}
          className="bg-gradient-to-r from-red-800 to-red-800  text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
        {state.succeeded && <ToastContainer />}
      </form>
    </section>
  );
};

export default Contact;
