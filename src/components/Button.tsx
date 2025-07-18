import React from "react";
import * as FeatherIcons from "react-feather";

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode | string;
  size?: "default" | "large";
  variant?: "default" | "destructive-primary" | "warning" | "success" | "brand-primary";
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  [key: string]: any;
};

export function Button({ 
  children, 
  icon, 
  size = "default", 
  variant = "default", 
  className = "", 
  ...props 
}: ButtonProps) {
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
  
  // Properly handle both string icons and React elements
  const renderIcon = () => {
    if (!icon) return null;
    
    if (typeof icon === 'string') {
      const iconName = icon.replace('Feather', '');
      const IconComponent = FeatherIcons[iconName];
      return IconComponent ? <IconComponent size={size === "large" ? 20 : 16} className="mr-2" /> : null;
    }
    
    // If icon is already a React element
    return React.cloneElement(icon as React.ReactElement, { 
      size: size === "large" ? 20 : 16,
      className: "mr-2"
    });
  };

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {renderIcon()}
      {children}
    </button>
  );
}