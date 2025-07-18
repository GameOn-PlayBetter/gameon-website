
import React from "react";

export function Button({ children, icon, size = "default", variant = "default", className = "", ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-lg transition-colors duration-200";
  const sizes = {
    default: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base",
  };
  const variants = {
    default: "bg-gray-800 text-white hover:bg-gray-700",
    "destructive-primary": "bg-pink-600 text-white hover:bg-pink-700",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600",
    success: "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
