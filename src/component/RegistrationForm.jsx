/* eslint-disable react/prop-types */
import React from "react";
import { FaXmark } from "react-icons/fa6";

const RegistrationForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {/* Your registration form */}
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          {/* Add more form fields as needed */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white"
        >
          <FaXmark />
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
