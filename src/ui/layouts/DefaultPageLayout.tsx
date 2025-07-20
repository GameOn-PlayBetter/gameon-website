import React from "react";
import { BoldFooter } from "@/ui/components/BoldFooter";

export function DefaultPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black text-white">
      <header className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-center font-bold text-xl font-['Orbitron']">
        GameOn
      </header>
      <main className="flex-1">{children}</main>
      <BoldFooter />
    </div>
  );
}