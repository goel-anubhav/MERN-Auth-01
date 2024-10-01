import React, { useState } from "react";
import { motion } from "framer-motion";

const SignUpPage = () => {
  // Define state to handle form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle form submission
  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form Submitted", formData);
    // Add your signup logic here (e.g., call to API)
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to bg-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              autoComplete="off"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
