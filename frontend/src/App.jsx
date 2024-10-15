import React from "react";
import FloatingCircle from "./components/FloatingShape/FloatingCircle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import EmailVerificationPage from "./Pages/EmailVerificationPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
      <FloatingCircle />
      <Router>
        <Routes>
          <Route path="/" element={<div> Home</div>} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
