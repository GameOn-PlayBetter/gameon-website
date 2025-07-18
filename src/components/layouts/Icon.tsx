// src/components/Icon.jsx
import React from "react";
import * as FeatherIcons from "react-feather";

export function Icon({ name, className }) {
  // Strip "Feather" prefix if present
  const iconName = name.replace("Feather", "");
  const FeatherIcon = FeatherIcons[iconName];
  
  if (!FeatherIcon) return null;
  
  return <FeatherIcon className={className} />;
}