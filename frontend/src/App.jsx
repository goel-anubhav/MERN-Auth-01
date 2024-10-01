import React from "react";
import FloatingCircle from "./components/FloatingShape/FloatingCircle";

function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 
    to-emerald-900 flex items-center justify-center relative overflow-hidden"
    >
      <FloatingCircle />
    </div>
  );
}

export default App;