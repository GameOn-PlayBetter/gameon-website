import React from "react";
// Import the icon library you're using in Subframe
import * as FeatherIcons from "react-feather"; // or your preferred icon library

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
    "brand-primary": "bg-brand-600 text-white hover:bg-brand-700",
  };
  
  // Handle icon rendering
  const IconComponent = icon && (typeof icon === 'string' && FeatherIcons[icon.replace('Feather', '')]);

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {IconComponent && <IconComponent size={size === "large" ? 20 : 16} className="mr-2" />}
      {children}
    </button>
  );
}