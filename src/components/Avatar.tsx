import React from "react";

type AvatarSize = "small" | "medium" | "x-large";

type AvatarProps = {
  image?: string;
  size?: AvatarSize;
  children?: React.ReactNode;
  alt?: string;
  className?: string;
};

export function Avatar({ 
  image, 
  size = "x-large", 
  children,
  alt = "",
  className = ""
}: AvatarProps) {
  const sizes = {
    small: "w-10 h-10",
    medium: "w-16 h-16",
    "x-large": "w-24 h-24",
  };

  return (
    <div 
      className={`overflow-hidden rounded-full ${sizes[size] || sizes["medium"]} bg-brand-200 flex items-center justify-center ${className}`}
      role={!image ? "img" : undefined}
      aria-label={!image ? alt : undefined}
    >
      {image ? (
        <img 
          src={image} 
          alt={alt} 
          className="object-cover w-full h-full" 
        />
      ) : (
        <span className="text-neutral-950 font-bold text-lg">
          {children}
        </span>
      )}
    </div>
  );
}
