"use client";

import React from "react";
import SocialLinks from "@/ui/components/SocialLinks";

export const BoldFooter = () => {
  return (
    <footer className="w-full bg-black text-white px-6 py-12 border-t border-[#FF00C8] font-['Orbitron']">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8">
        <SocialLinks />
        <div className="text-sm text-center text-[#888] leading-relaxed max-w-2xl">
          <p>
            GameOn is an independent digital platform connecting players and streamers for gaming sessions,
            coaching, and co-op experiences. All sessions are recorded for safety, and all coaches are vetted.
          </p>
          <p className="mt-4">
            <strong>GameOn LLC.</strong> All rights reserved. Based in Texas, operating across galaxies
            (as long as they have decent ping).
          </p>
          <p className="mt-4 italic text-[#FF00C8]">
            GameOn is not affiliated with any game publisher or console maker. All trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};