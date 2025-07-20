// src/ui/layouts/DefaultPageLayout.tsx

import React from "react";
import { BoldFooter } from "@/ui/components/BoldFooter";

export function DefaultPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow w-full">{children}</main>
      <BoldFooter />
    </div>
  );
}