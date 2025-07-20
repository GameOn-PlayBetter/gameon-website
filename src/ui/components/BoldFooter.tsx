import React from "react";

export function BoldFooter() {
  return (
    <footer className="w-full bg-default-background text-center text-default-font py-6 text-body font-body border-t border-neutral-border">
      © {new Date().getFullYear()} GameOn — Play Better. Together. Safely.
    </footer>
  );
}