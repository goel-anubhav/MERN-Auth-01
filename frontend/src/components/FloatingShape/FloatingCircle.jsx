import React from "react";
import FloatingShape from "./FloatingShape"; // Adjust the path as needed

const FloatingCircle = () => {
  return (
    <div>
      <FloatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-emerald-500"
        size="w-48 h-48"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-lime-500"
        size="w-32 h-32"
        top="-5%"
        left="10%"
        delay={0}
      />
    </div>
  );
};

export default FloatingCircle;
