import React, { useState } from "react";
import { motion } from "framer-motion";

const SignUpPage = () => {
  // Define state to handle form inputs
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // Handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
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
        <form onSubmit={handleSignUp}></form>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
