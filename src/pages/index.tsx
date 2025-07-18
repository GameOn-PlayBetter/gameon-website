"use client";

import React from "react";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";
import { Avatar } from "../components/Avatar";
import { BoldFooter } from "../components/BoldFooter";
import { DefaultPageLayout } from "../components/layouts/DefaultPageLayout";
import { SocialLinks } from "../components/SocialLinks";

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
            <Button variant="destructive-primary" size="large" icon="FeatherZap">
              Join The Waitlist
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-12">
          <div className="flex w-full max-w-[448px] flex-col items-center gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-8 py-8 shadow-lg">
            <div className="flex w-full items-center gap-4">
              <SubframeCore.Icon
                className="font-['Afacad_Flux'] text-[32px] font-[400] leading-[32px] text-success-600"
                name="FeatherMail"
              />
              <span className="text-heading-1 font-heading-1 text-success-600">
                JOIN THE WAITLIST
              </span>
            </div>
            <span className="text-body font-body text-neutral-700 text-center">
              GameOn is currently in pre-launch. Sign up below to reserve your
              spot when we go live and get free tokens!
            </span>
            <Button className="h-10 w-full flex-none" variant="destructive-primary" size="large">
              SIGN UP NOW
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
          <div className="flex w-full max-w-[1280px] flex-col items-start gap-8">
            <span className="font-['Orbitron'] text-[36px] font-[700] leading-[40px] text-warning-700">
              Featured Games
            </span>
            <div className="w-full items-start gap-8 grid grid-cols-2">
              <div className="flex flex-col items-start overflow-hidden rounded-[32px] bg-brand-50 shadow-lg">
                <img
                  className="h-64 w-full flex-none object-cover"
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
                />
                <div className="flex w-full flex-col items-start gap-4 px-8 py-8">
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-default-font">
                      Minecraft
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Create the perfect gaming environment with our expert
                      setup guides and recommendations.
                    </span>
                  </div>
                  <Button>Learn More</Button>
                </div>
              </div>
              <div className="flex flex-col items-start overflow-hidden rounded-[32px] bg-brand-50 shadow-lg">
                <img
                  className="h-64 w-full flex-none object-cover"
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"
                />
                <div className="flex w-full flex-col items-start gap-4 px-8 py-8">
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-default-font">
                      Dead by Daylight
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Join our gaming community events and compete with players
                      worldwide.
                    </span>
                  </div>
                  <Button>Learn More</Button>
                </div>
              </div>
              <div className="flex flex-col items-start overflow-hidden rounded-[32px] bg-brand-50 shadow-lg">
                <img
                  className="h-64 w-full flex-none object-cover"
                  src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80"
                />
                <div className="flex w-full flex-col items-start gap-4 px-8 py-8">
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-default-font">
                      League of Legends
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Master champion mechanics and climb the ranked ladder with
                      pro guidance.
                    </span>
                  </div>
                  <Button>Learn More</Button>
                </div>
              </div>
              <div className="flex flex-col items-start overflow-hidden rounded-[32px] bg-brand-50 shadow-lg">
                <img
                  className="h-64 w-full flex-none object-cover"
                  src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80"
                />
                <div className="flex w-full flex-col items-start gap-4 px-8 py-8">
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-default-font">
                      Valorant
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Improve your aim and tactical decision-making with
                      personalized coaching.
                    </span>
                  </div>
                  <Button>Learn More</Button>
                </div>
              </div>
            </div>
          </div>
          <Button size="large" icon="FeatherArrowUpRightFromCircle">
            All Games
          </Button>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
          <div className="flex w-full max-w-[1280px] flex-col items-start gap-8">
            <span className="font-['Orbitron'] text-[36px] font-[700] leading-[40px] text-success-700">
              Featured Coaches
            </span>
            <div className="flex w-full flex-wrap items-start gap-8">
              <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-center gap-6 rounded-[32px] bg-brand-50 px-8 py-12">
                <Avatar
                  size="x-large"
                  image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
                >
                  A
                </Avatar>
                <span className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-brand-700 text-center">
                  Coach Alex
                </span>
                <Badge>Minecraft Expert</Badge>
                <span className="text-body font-body text-brand-700 text-center">
                  Professional builder &amp; redstone specialist
                </span>
                <Button variant="destructive-primary">Book Session</Button>
              </div>
              <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-center gap-6 rounded-[32px] bg-brand-50 px-8 py-12">
                <Avatar
                  size="x-large"
                  image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                >
                  S
                </Avatar>
                <span className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-warning-700 text-center">
                  Coach Sarah
                </span>
                <Badge variant="warning">DBD Pro</Badge>
                <span className="text-body font-body text-warning-700 text-center">
                  Competitive survivor &amp; strategy expert
                </span>
                <Button variant="destructive-primary">Book Session</Button>
              </div>
            </div>
          </div>
        </div>
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
            <Button size="large" icon="FeatherArrowRight">
              Start Coaching
            </Button>
          </div>
        </div>
        <BoldFooter />
      </div>
    </DefaultPageLayout>
  );
}

export default LandingPage;