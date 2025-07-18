import React from "react";

export function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-brand-200 text-default-font",
    warning: "bg-warning-700 text-black",
    success: "bg-success-600 text-black",
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-caption font-caption-bold ${variants[variant]}`}>
      {children}
    </span>
  );
}