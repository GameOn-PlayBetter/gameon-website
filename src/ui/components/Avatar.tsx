import React from "react";

export function Avatar({ image, size = "x-large", children }) {
  const sizes = {
    small: "w-10 h-10",
    medium: "w-16 h-16",
    "x-large": "w-24 h-24",
  };

  return (
    <div className={`overflow-hidden rounded-full ${sizes[size]} bg-brand-300 flex items-center justify-center border-2 border-brand-600 shadow-sm`}>
      {image ? (
        <img src={image} alt="" className="object-cover w-full h-full" />
      ) : (
        <span className="text-heading-2 font-heading-2 text-default-font">{children}</span>
      )}
    </div>
  );
}