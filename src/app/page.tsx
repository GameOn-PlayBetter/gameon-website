"use client";

import React from "react";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { Button } from "@/ui/components/Button";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { BoldFooter } from "@/ui/components/BoldFooter";
import {
  FeatherZap,
  FeatherArrowRight,
  FeatherArrowRightCircle,
} from "@subframe/core";

export default function LandingPage() {
  return (
    <DefaultPageLayout>
      <div className="flex w-full flex-col items-center bg-black">
        {/* HERO */}
        <div className="flex w-full flex-col items-center justify-center gap-3 bg-black px-6 py-6">
          <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-3">
            <img
              className="h-96 w-full flex-none object-contain"
              src="https://res.cloudinary.com/subframe/image/upload/v1752180871/uploads/19984/xz0wrne7nh62oxklt6fo.png"
            />
            <span className="font-['Orbitron'] text-[60px] font-[900] text-default-font text-center -tracking-[0.04em]">
              LEVEL UP YOUR GAME
            </span>
            <span className="font-['Afacad_Flux'] text-[20px] font-[500] text-success-700 text-center">
              Get tips, tricks, and tactics from real gamers.{"\n"}Because sometimes, YouTube just isn't enough.
            </span>
            <Button variant="destructive-primary" size="large" icon={<FeatherZap />}>
              Join The Waitlist
            </Button>
          </div>
        </div>

        {/* WAITLIST */}
        <div className="flex w-full flex-col items-center gap-6 px-6 py-12">
          <div className="w-full max-w-[448px] rounded-lg border border-neutral-border bg-default-background px-8 py-8 shadow-lg">
            <h2 className="text-heading-1 text-success-600">JOIN THE WAITLIST</h2>
            <p className="text-body text-neutral-700 text-center mt-4">
              GameOn is currently in pre-launch. Sign up below to reserve your spot when we go live and get free tokens!
            </p>
            <Button className="h-10 w-full mt-6" variant="destructive-primary" size="large">
              SIGN UP NOW
            </Button>
          </div>
        </div>

        {/* FEATURED GAMES */}
        <div className="flex w-full flex-col items-center gap-12 px-6 py-24">
          <div className="w-full max-w-[1280px]">
            <h3 className="font-['Orbitron'] text-[36px] font-[700] text-warning-700 mb-8">Featured Games</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                ["Minecraft", "Create the perfect gaming environment..."],
                ["Dead by Daylight", "Compete with players worldwide."],
                ["League of Legends", "Climb the ranked ladder..."],
                ["Valorant", "Improve your aim with coaching."]
              ].map(([title, desc]) => (
                <div key={title} className="rounded-[32px] bg-brand-50 shadow-lg overflow-hidden">
                  <img src={`https://placehold.co/800x400/000000/FFFFFF.png?text=${encodeURIComponent(title)}`} className="h-64 w-full object-cover" />
                  <div className="p-8">
                    <h4 className="font-['Orbitron'] text-[24px] font-[700] text-default-font">{title}</h4>
                    <p className="text-body text-subtext-color mb-4">{desc}</p>
                    <Button icon={<FeatherArrowRight />}>Learn More</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button size="large" icon={<FeatherArrowRightCircle />}>
            All Games
          </Button>
        </div>

        {/* FEATURED COACHES */}
        <div className="flex w-full flex-col items-center gap-12 px-6 py-24">
          <div className="w-full max-w-[1280px]">
            <h3 className="font-['Orbitron'] text-[36px] font-[700] text-success-700 mb-8">Featured Coaches</h3>
            <div className="flex flex-wrap gap-8">
              {[
                ["Coach Alex", "Minecraft Expert", "Professional builder & redstone specialist", "brand-700", "Coach+A"],
                ["Coach Sarah", "DBD Pro", "Competitive survivor & strategist", "warning-700", "Coach+S"],
                ["Coach Mike", "LoL Master", "Diamond ranked strategist", "success-700", "Coach+M"]
              ].map(([name, badge, desc, color, img]) => (
                <div key={name} className="flex min-w-[288px] grow flex-col items-center gap-6 rounded-[32px] bg-brand-50 px-8 py-12">
                  <Avatar size="x-large" image={`https://placehold.co/200x200/000000/FFFFFF.png?text=${img}`}>{name.charAt(name.length - 1)}</Avatar>
                  <h4 className={`font-['Orbitron'] text-[24px] font-[700] text-${color} text-center`}>{name}</h4>
                  <Badge>{badge}</Badge>
                  <p className={`text-body text-${color} text-center`}>{desc}</p>
                  <Button variant="destructive-primary">Book Session</Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex w-full flex-col items-center bg-default-background px-6 py-24">
          <div className="w-full max-w-[1280px] rounded-[32px] bg-default-background px-6 pt-24 pb-16 text-center">
            <h2 className="font-['Orbitron'] text-[48px] font-[900] text-default-font -tracking-[0.04em]">JOIN THE ELITE</h2>
            <p className="font-['Afacad_Flux'] text-[20px] font-[500] text-brand-800 mt-4">Ready to share your knowledge?</p>
            <Button size="large" icon={<FeatherArrowRight />} className="mt-6">
              Start Coaching
            </Button>
          </div>
        </div>

        <BoldFooter />
      </div>
    </DefaultPageLayout>
  );
}