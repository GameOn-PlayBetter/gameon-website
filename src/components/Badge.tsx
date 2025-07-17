
import React from "react";

export function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-gray-800 text-white",
    warning: "bg-yellow-500 text-black",
    success: "bg-green-600 text-white",
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  );
}
