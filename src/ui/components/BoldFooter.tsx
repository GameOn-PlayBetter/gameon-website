"use client";

import React from "react";
import { SocialLinks } from "@/ui/components/SocialLinks";

export const BoldFooter = () => {
  return (
    <footer className="w-full bg-black text-white px-6 py-12 border-t border-neutral-800">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-6">
        <SocialLinks />
        <div className="text-sm text-center text-neutral-400">
          <p>
            GameOn is an independent digital platform connecting players and streamers for gaming sessions, coaching,
            and co-op experiences. All sessions are recorded for safety, and all coaches are vetted.
          </p>
          <p className="mt-2">
            GameOn LLC. All rights reserved. Based in Texas, operating across galaxies (as long as they have decent ping).
          </p>
          <p className="mt-2">
            GameOn is not affiliated with any game publisher or console maker. All trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};