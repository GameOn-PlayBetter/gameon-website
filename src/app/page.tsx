"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { FeatherZap, FeatherArrowRight, FeatherArrowRightCircle } from "@subframe/core";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { BoldFooter } from "@/ui/components/BoldFooter";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";

export default function LandingPage() {
  return (
    <DefaultPageLayout>
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start bg-black">
        <div className="flex w-full flex-col items-center justify-center gap-3 bg-black px-6 py-6">
          <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-3">
            <img
              className="h-96 w-full flex-none object-contain"
              src="https://res.cloudinary.com/subframe/image/upload/v1752180871/uploads/19984/xz0wrne7nh62oxklt6fo.png"
            />
            <span className="w-full max-w-[768px] whitespace-pre-wrap font-['Orbitron'] text-[60px] font-[900] leading-[68px] text-default-font text-center -tracking-[0.04em] mobile:font-['Orbitron'] mobile:text-[48px] mobile:font-[400] mobile:leading-[44px] mobile:tracking-normal">
              {"LEVEL UP YOUR GAME"}
            </span>
            <span className="w-full max-w-[576px] whitespace-pre-wrap font-['Afacad_Flux'] text-[20px] font-[500] leading-[28px] text-success-700 text-center mobile:font-['Afacad_Flux'] mobile:text-[20px] mobile:font-[500] mobile:leading-[28px] mobile:tracking-normal">
              {
                "Get tips, tricks, and tactics from real gamers. \nBecause sometimes, YouTube just isn't enough."
              }
            </span>
            <Button
              variant="destructive-primary"
              size="large"
              icon={FeatherZap}
              onClick={() => {}}
            >
              Join The Waitlist
            </Button>
          </div>
        </div>

        {/* Waitlist Box */}
        <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-12">
          <div className="flex w-full max-w-[448px] flex-col items-center gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-8 py-8 shadow-lg">
            <div className="flex w-full items-center gap-4">
              <span className="text-heading-1 font-heading-1 text-success-600">
                JOIN THE WAITLIST
              </span>
            </div>
            <span className="text-body font-body text-neutral-700 text-center">
              GameOn is currently in pre-launch. Sign up below to reserve your
              spot when we go live and get free tokens!
            </span>
            <Button
              className="h-10 w-full flex-none"
              variant="destructive-primary"
              size="large"
              onClick={() => {}}
            >
              SIGN UP NOW
            </Button>
          </div>
        </div>

        {/* Featured Games */}
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
          <div className="flex w-full max-w-[1280px] flex-col items-start gap-8">
            <span className="font-['Orbitron'] text-[36px] font-[700] leading-[40px] text-warning-700">
              Featured Games
            </span>
            <div className="w-full items-start gap-8 grid grid-cols-2">
              {/* Game Cards Here (unchanged) */}
              {/* ... */}
            </div>
          </div>
          <Button
            size="large"
            icon={FeatherArrowRightCircle}
            onClick={() => {}}
          >
            All Games
          </Button>
        </div>

        {/* Featured Coaches */}
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
          <div className="flex w-full max-w-[1280px] flex-col items-start gap-8">
            <span className="font-['Orbitron'] text-[36px] font-[700] leading-[40px] text-success-700">
              Featured Coaches
            </span>
            <div className="flex w-full flex-wrap items-start gap-8">
              {/* Coach Cards Here (unchanged) */}
              {/* ... */}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex w-full flex-col items-center justify-center gap-6 bg-default-background px-6 py-24">
          <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-8 rounded-[32px] bg-default-background px-6 pt-24 pb-16">
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <span className="w-full max-w-[768px] whitespace-pre-wrap font-['Orbitron'] text-[48px] font-[900] leading-[52px] text-default-font text-center -tracking-[0.04em]">
                {"JOIN THE ELITE"}
              </span>
              <span className="w-full max-w-[768px] whitespace-pre-wrap font-['Afacad_Flux'] text-[20px] font-[500] leading-[28px] text-brand-800 text-center">
                {"Ready to share your knowledge?"}
              </span>
            </div>
            <Button
              size="large"
              icon={FeatherArrowRight}
              onClick={() => {}}
            >
              Start Coaching
            </Button>
          </div>
        </div>

        <BoldFooter />
      </div>
    </DefaultPageLayout>
  );
}