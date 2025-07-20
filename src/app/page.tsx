"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { BoldFooter } from "@/ui/components/BoldFooter";
import { GameOnHeader } from "@/ui/components/GameOnHeader";
import { FeatherZap, FeatherArrowRight, FeatherArrowRightCircle } from "@subframe/core";

export default function LandingPage() {
  return (
    <>
      <GameOnHeader />
      <div className="flex w-full flex-col items-center bg-black">
        {/* HERO */}
        <div className="flex w-full flex-col items-center justify-center gap-3 px-6 py-6">
          <div className="flex w-full max-w-[1024px] flex-col items-center gap-3">
            <img
              className="h-96 w-full object-contain"
              src="https://res.cloudinary.com/subframe/image/upload/v1752180871/uploads/19984/xz0wrne7nh62oxklt6fo.png"
              alt="GameOn Logo"
            />
            <h1 className="font-['Orbitron'] text-[60px] font-[900] text-white text-center -tracking-[0.04em]">
              LEVEL UP YOUR GAME
            </h1>
            <p className="font-['Afacad_Flux'] text-[20px] font-[500] text-[#FF00C8] text-center">
              Get tips, tricks, and tactics from real gamers. Because sometimes, YouTube just isn't enough.
            </p>
            <Button
              className="bg-[#FF00C8] hover:bg-[#00CFFF] text-white mt-4"
              icon={<FeatherZap />}
              size="large"
            >
              Join The Waitlist
            </Button>
          </div>
        </div>

        {/* WAITLIST */}
        <div className="flex w-full flex-col items-center gap-6 px-6 py-12">
          <div className="w-full max-w-[448px] rounded-lg border border-neutral-border bg-[#0A0A0A] ring-2 ring-[#FF00C8] px-8 py-8 shadow-xl">
            <h2 className="text-heading-1 text-[#00CFFF] text-center">JOIN THE WAITLIST</h2>
            <p className="text-body text-white text-center mt-4">
              GameOn is currently in pre-launch. Sign up below to reserve your spot when we go live and get free tokens!
            </p>
            <Button
              className="bg-[#FF00C8] hover:bg-[#00CFFF] text-white h-10 w-full mt-6"
              size="large"
            >
              SIGN UP NOW
            </Button>
          </div>
        </div>

        {/* FEATURED GAMES */}
        <div className="flex w-full flex-col items-center gap-12 px-6 py-24">
          <div className="w-full max-w-[1280px]">
            <h3 className="font-['Orbitron'] text-[36px] font-[700] text-[#FFA500] mb-8">Featured Games</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                ["Minecraft", "Create the perfect gaming environment with our expert setup guides and recommendations."],
                ["Dead by Daylight", "Join our gaming community events and compete with players worldwide."],
                ["League of Legends", "Master champion mechanics and climb the ranked ladder with pro guidance."],
                ["Valorant", "Improve your aim and tactical decision-making with personalized coaching."]
              ].map(([title, desc]) => (
                <div key={title} className="rounded-[32px] bg-[#0A0A0A] ring-2 ring-[#FF00C8] shadow-xl overflow-hidden">
                  <img
                    src={`https://placehold.co/800x400/000000/FFFFFF.png?text=${encodeURIComponent(title)}`}
                    className="h-64 w-full object-cover"
                    alt={`${title} cover`}
                  />
                  <div className="p-8">
                    <h4 className="font-['Orbitron'] text-[24px] font-[700] text-white">{title}</h4>
                    <p className="text-body text-white mb-4">{desc}</p>
                    <Button
                      icon={<FeatherArrowRight />}
                      className="bg-[#FF00C8] hover:bg-[#00CFFF] text-white"
                      size="large"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            size="large"
            icon={<FeatherArrowRightCircle />}
            className="bg-[#FF00C8] hover:bg-[#00CFFF] text-white"
          >
            All Games
          </Button>
        </div>

        {/* FEATURED COACHES */}
        <div className="flex w-full flex-col items-center gap-12 px-6 py-24">
          <div className="w-full max-w-[1280px]">
            <h3 className="font-['Orbitron'] text-[36px] font-[700] text-[#00CFFF] mb-8">Featured Coaches</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                ["Coach Alex", "Minecraft Expert", "Professional builder & redstone specialist", "text-[#FF00C8]", "Coach+A"],
                ["Coach Sarah", "DBD Pro", "Competitive survivor & strategy expert", "text-[#FFA500]", "Coach+S"],
                ["Coach Mike", "LoL Master", "Diamond ranked player & macro strategist", "text-[#00CFFF]", "Coach+M"]
              ].map(([name, badge, desc, colorClass, img]) => (
                <div
                  key={name}
                  className="flex min-w-[288px] grow flex-col items-center gap-6 rounded-[32px] bg-[#0A0A0A] ring-2 ring-[#FF00C8] px-8 py-12 shadow-xl"
                >
                  <Avatar size="x-large" image={`https://placehold.co/200x200/000000/FFFFFF.png?text=${img}`}>
                    {name.charAt(name.length - 1)}
                  </Avatar>
                  <h4 className={`font-['Orbitron'] text-[24px] font-[700] ${colorClass} text-center`}>{name}</h4>
                  <Badge>{badge}</Badge>
                  <p className={`text-body ${colorClass} text-center`}>{desc}</p>
                  <Button
                    icon={<FeatherArrowRight />}
                    className="bg-[#FF00C8] hover:bg-[#00CFFF] text-white"
                    size="large"
                  >
                    Book Session
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex w-full flex-col items-center bg-default-background px-6 py-24">
          <div className="w-full max-w-[1280px] rounded-[32px] bg-default-background px-6 pt-24 pb-16 text-center">
            <h2 className="font-['Orbitron'] text-[48px] font-[900] text-white -tracking-[0.04em]">JOIN THE ELITE</h2>
            <p className="font-['Afacad_Flux'] text-[20px] font-[500] text-[#FF00C8] mt-4">Ready to share your knowledge?</p>
            <Button
              size="large"
              icon={<FeatherArrowRight />}
              className="mt-6 bg-[#FF00C8] hover:bg-[#00CFFF] text-white"
            >
              Start Coaching
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}