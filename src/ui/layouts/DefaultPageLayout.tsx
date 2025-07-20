import React from "react";
import { BoldFooter } from "@/ui/components/BoldFooter";

export function DefaultPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black text-white">
      <main className="flex-1">{children}</main>
      <BoldFooter />
    </div>
  );
}