import React from "react";

type IconSize = "small" | "medium" | "large" | "x-large";
type IconVariant = "default" | "warning" | "error" | "success";

type IconWithBackgroundProps = {
  icon: React.ReactNode;
  size?: IconSize;
  variant?: IconVariant;
  square?: boolean;
  className?: string;
};

export function IconWithBackground({ 
  icon, 
  size = "x-large", 
  variant = "default", 
  square = false,
  className = ""
}: IconWithBackgroundProps) {
  const sizes = {
    "x-large": "w-24 h-24",
    large: "w-16 h-16",
    medium: "w-12 h-12",
    small: "w-8 h-8",
  };
  
  const variants = {
    default: "bg-brand-600 text-white",
    warning: "bg-warning-700 text-black",
    error: "bg-error-700 text-white",
    success: "bg-success-600 text-white",
  };

  return (
    <div 
      className={`${sizes[size] || sizes.medium} ${variants[variant] || variants.default} ${square ? "rounded-lg" : "rounded-full"} flex items-center justify-center ${className}`}
    >
      {icon}
    </div>
  );
}