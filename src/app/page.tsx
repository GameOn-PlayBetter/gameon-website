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
      <div className="flex w-full flex-col items-center bg-black">
        <div className="flex w-full flex-col items-center justify-center gap-3 px-6 py-6">
          <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-3">
            <img
              className="h-96 w-full flex-none object-contain"
              src="https://res.cloudinary.com/subframe/image/upload/v1752180871/uploads/19984/xz0wrne7nh62oxklt6fo.png"
              alt="GameOn Logo"
            />
            <span className="w-full max-w-[768px] text-center font-['Orbitron'] text-[60px] font-[900] leading-[68px] text-default-font -tracking-[0.04em]">
              LEVEL UP YOUR GAME
            </span>
            <span className="w-full max-w-[576px] text-center font-['Afacad_Flux'] text-[20px] font-[500] leading-[28px] text-success-700 whitespace-pre-wrap">
              Get tips, tricks, and tactics from real gamers.{"\n"}Because sometimes, YouTube just isn't enough.
            </span>
            <Button variant="destructive-primary" size="large" icon={FeatherZap}>
              Join The Waitlist
            </Button>
          </div>
        </div>

        {/* Waitlist Box */}
        <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-12">
          <div className="flex w-full max-w-[448px] flex-col items-center gap-6 rounded-lg border border-neutral-border bg-default-background px-8 py-8 shadow-lg">
            <div className="flex w-full items-center gap-4">
              <span className="text-heading-1 font-heading-1 text-success-600">JOIN THE WAITLIST</span>
            </div>
            <span className="text-body font-body text-neutral-700 text-center">
              GameOn is currently in pre-launch. Sign up below to reserve your spot when we go live and get free tokens!
            </span>
            <Button className="h-10 w-full" variant="destructive-primary" size="large">
              SIGN UP NOW
            </Button>
          </div>
        </div>

        {/* Featured Games */}
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
          <div className="flex w-full max-w-[1280px] flex-col items-start gap-8">
            <span className="font-['Orbitron'] text-[36px] font-[700] text-warning-700">Featured Games</span>
            <div className="w-full grid grid-cols-2 gap-8">
              {[
                { name: "Minecraft", desc: "Create the perfect gaming environment with our expert setup guides and recommendations." },
                { name: "Dead by Daylight", desc: "Join our gaming community events and compete with players worldwide." },
                { name: "League of Legends", desc: "Master champion mechanics and climb the ranked ladder with pro guidance." },
                { name: "Valorant", desc: "Improve your aim and tactical decision-making with personalized coaching." },
              ].map((game, i) => (
                <div key={i} className="flex flex-col overflow-hidden rounded-[32px] bg-brand-50 shadow-lg">
                  <img
                    className="h-64 w-full object-cover"
                    src={`https://placehold.co/800x400/000000/FFFFFF.png?text=${encodeURIComponent(game.name)}`}
                    alt={game.name}
                  />
                  <div className="flex flex-col gap-4 px-8 py-8">
                    <span className="font-['Orbitron'] text-[24px] font-[700] text-default-font">{game.name}</span>
                    <span className="text-body font-body text-subtext-color">{game.desc}</span>
                    <Button icon={FeatherArrowRight}>Learn More</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button size="large" icon={FeatherArrowRightCircle}>
            All Games
          </Button>
        </div>

        {/* Featured Coaches */}
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
          <div className="flex w-full max-w-[1280px] flex-col items-start gap-8">
            <span className="font-['Orbitron'] text-[36px] font-[700] text-success-700">Featured Coaches</span>
            <div className="flex w-full flex-wrap gap-8">
              <div className="flex min-w-[288px] flex-col items-center gap-6 rounded-[32px] bg-brand-50 px-8 py-12">
                <Avatar size="x-large" image="https://placehold.co/200x200/000000/FFFFFF.png?text=Coach+A">A</Avatar>
                <span className="font-['Orbitron'] text-[24px] font-[700] text-brand-700 text-center">Coach Alex</span>
                <Badge>Minecraft Expert</Badge>
                <span className="text-body font-body text-brand-700 text-center">Professional builder & redstone specialist</span>
                <Button variant="destructive-primary">Book Session</Button>
              </div>
              <div className="flex min-w-[288px] flex-col items-center gap-6 rounded-[32px] bg-brand-50 px-8 py-12">
                <Avatar size="x-large" image="https://placehold.co/200x200/000000/FFFFFF.png?text=Coach+S">S</Avatar>
                <span className="font-['Orbitron'] text-[24px] font-[700] text-warning-700 text-center">Coach Sarah</span>
                <Badge variant="warning">DBD Pro</Badge>
                <span className="text-body font-body text-warning-700 text-center">Competitive survivor & strategy expert</span>
                <Button variant="destructive-primary">Book Session</Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex w-full flex-col items-center justify-center gap-6 bg-default-background px-6 py-24">
          <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-8 rounded-[32px] bg-default-background px-6 pt-24 pb-16">
            <div className="flex flex-col items-center gap-2">
              <span className="font-['Orbitron'] text-[48px] font-[900] text-default-font text-center -tracking-[0.04em]">
                JOIN THE ELITE
              </span>
              <span className="font-['Afacad_Flux'] text-[20px] font-[500] text-brand-800 text-center">
                Ready to share your knowledge?
              </span>
            </div>
            <Button size="large" icon={FeatherArrowRight}>Start Coaching</Button>
          </div>
        </div>

        <BoldFooter />
      </div>
    </DefaultPageLayout>
  );
}