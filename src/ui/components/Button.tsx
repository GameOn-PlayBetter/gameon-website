import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ElementType; // icon is now optional
  size?: "default" | "large";
  variant?: "default" | "destructive-primary" | "warning" | "success";
  className?: string;
  [key: string]: any; // allow other button props like onClick
};

export function Button({
  children,
  icon: Icon,
  size = "default",
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-lg transition-colors duration-200";
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
      {Icon && (
        <span className="mr-2">
          <Icon />
        </span>
      )}
      {children}
    </button>
  );
}