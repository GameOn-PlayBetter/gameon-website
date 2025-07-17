
import React from "react";

export function BoldFooter() {
  return (
    <footer className="w-full bg-black text-center text-white py-6 text-sm border-t border-gray-700">
      © {new Date().getFullYear()} GameOn — Play Better. Together. Safely.
    </footer>
  );
}
