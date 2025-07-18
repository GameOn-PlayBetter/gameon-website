"use client";

import React from "react";
import { DefaultPageLayout } from "../../UI/layouts/DefaultPageLayout";
import { Button } from "../../UI/components/Button";
import { FeatherZap, FeatherMail, FeatherArrowUpRightFromCircle, FeatherCrown, FeatherTarget, FeatherArrowRight } from "@subframe/core";
import { Avatar } from "../../UI/components/Avatar";
import { Badge } from "../../UI/components/Badge";
import { IconWithBackground } from "../../UI/components/IconWithBackground";
import { BoldFooter } from "../../UI/components/BoldFooter";

function LandingPage() {
  return (
    <DefaultPageLayout>
      <div className="flex h-full w-full flex-col items-start bg-black">
        <div className="flex w-full flex-col items-center justify-center gap-3 bg-black px-6 py-6">
          <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-3">
            <img
              className="h-96 w-320 flex-none object-contain"
              src="https://res.cloudinary.com/subframe/image/upload/v1752180871/uploads/19984/xz0wrne7nh62oxklt6fo.png"
            />
            <span className="w-full max-w-[768px] whitespace-pre-wrap font-['Orbitron'] text-[60px] font-[900] leading-[68px] text-default-font text-center -tracking-[0.04em] mobile:font-['Orbitron'] mobile:text-[48px] mobile:font-[400] mobile:leading-[44px] mobile:tracking-normal">
              {"LEVEL UP YOUR GAME"}
            </span>
            <span className="w-full max-w-[576px] whitespace-pre-wrap font-['Afacad_Flux'] text-[20px] font-[500] leading-[28px] text-success-700 text-center mobile:font-['Afacad_Flux'] mobile:text-[20px] mobile:font-[500] mobile:leading-[28px] mobile:tracking-normal">
              {"Get tips, tricks, and tactics from real gamers. \nBecause sometimes, YouTube just isn't enough."}
            </span>
            <Button variant="destructive-primary" size="large" icon={<FeatherZap />} onClick={() => {}}>
              Join The Waitlist
            </Button>
          </div>
        </div>
        <BoldFooter />
      </div>
    </DefaultPageLayout>
  );
}

export default LandingPage;
