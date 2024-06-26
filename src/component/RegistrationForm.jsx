/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegistrationForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setEmailError(validateEmail(value) ? "" : "Invalid Email Address");
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 w-1/2 h-[85%] rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Register</h2>
        {/* Your registration form */}
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-xl font-bold mb-2">
              First Name
            </label>
            <input
              placeholder="Enter Firstname"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-4 px-3 focus:outline-none focus:border-blue-400 text-2xl"
              required
            />
            <label htmlFor="username" className="block text-xl font-bold mb-2">
              Last Name
            </label>
            <input
              placeholder="Enter Lastname"
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-4 px-3 focus:outline-none focus:border-blue-400 text-2xl"
              required
            />
            <label htmlFor="username" className="block text-xl font-bold mb-2">
              Email
            </label>
            <input
              placeholder="Enter Email"
              type="text"
              id="username"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border border-gray-300 rounded-md py-4 px-3 focus:outline-none focus:border-blue-400 text-2xl ${
                emailError ? "border-red-500" : ""
              }`}
              required
            />
            {emailError && (
              <p className="text-red-600 text-sm mt-1">{emailError}</p>
            )}

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-bold mb-2 text-xl"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-4 px-3 focus:outline-none focus:border-blue-400 text-2xl"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("password")}
                  className="absolute top-0 right-0 mt-2 mr-2 text-2xl text-center w-[50px] h-[50px]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-xl font-bold mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-4 px-3 focus:outline-none focus:border-blue-400 text-2xl"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                  className="absolute top-0 right-0 mt-2 mr-2 text-2xl text-center w-[50px] h-[50px]"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>
          {/* Add more form fields as needed */}
          <button
            type="submit"
            className="bg-blue-400 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-[gray] hover:-translate-y-4"
          >
            Register
          </button>
        </form>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white"
        >
          <FaXmark className="w-5 h-5 font-bold text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
