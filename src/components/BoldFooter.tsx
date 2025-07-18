import React from "react";

type BoldFooterProps = {
  className?: string;
};

export function BoldFooter({ className = "" }: BoldFooterProps) {
  return (
    <footer className={`w-full bg-black text-center py-6 border-t border-neutral-border ${className}`}>
      <div className="flex flex-col items-center gap-2">
        <span className="font-['Orbitron'] text-sm font-bold text-brand-700">
          © {new Date().getFullYear()} GameOn — Play Better. Together. Safely.
        </span>
      </div>
    </footer>
  );
}