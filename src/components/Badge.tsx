import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "warning" | "success";
  className?: string;
};

export function Badge({ 
  children, 
  variant = "default", 
  className = "" 
}: BadgeProps) {
  const variants = {
    default: "bg-brand-600 text-white",
    warning: "bg-warning-700 text-black",
    success: "bg-success-600 text-white",
  };

  return (
    <span 
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
