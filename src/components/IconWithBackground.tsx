
import React from "react";

export function IconWithBackground({ icon, size = "x-large", variant = "default", square = false }) {
  const sizes = {
    "x-large": "w-24 h-24",
    large: "w-16 h-16",
    medium: "w-12 h-12",
    small: "w-8 h-8",
  };
  const variants = {
    default: "bg-gray-800 text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-600 text-white",
    success: "bg-green-600 text-white",
  };

  return (
    <div className={`${sizes[size]} ${variants[variant] || ""} ${square ? "rounded-lg" : "rounded-full"} flex items-center justify-center`}>
      {icon}
    </div>
  );
}
