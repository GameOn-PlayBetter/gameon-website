import React from "react";

function LandingPage() {
  return (
    <div className="flex h-full w-full flex-col items-start bg-black">
      <div className="flex w-full flex-col items-center justify-center gap-3 bg-black px-6 py-6">
        <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-3">
          <img
            className="h-96 w-320 flex-none object-contain"
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
          />
          <span className="w-full max-w-[768px] whitespace-pre-wrap font-['Orbitron'] text-[60px] font-[900] leading-[68px] text-default-font text-center -tracking-[0.04em] mobile:font-['Orbitron'] mobile:text-[48px] mobile:font-[400] mobile:leading-[44px] mobile:tracking-normal">
            {"LEVEL UP YOUR GAME"}
          </span>
          <span className="w-full max-w-[576px] whitespace-pre-wrap font-['Afacad_Flux'] text-[20px] font-[500] leading-[28px] text-success-700 text-center mobile:font-['Afacad_Flux'] mobile:text-[20px] mobile:font-[500] mobile:leading-[28px] mobile:tracking-normal">
            {"Get tips, tricks, and tactics from real gamers. \nBecause sometimes, YouTube just isn't enough."}
          </span>
          <div className="flex h-12 items-center justify-center gap-2 rounded-md bg-error-700 px-6 py-3 hover:bg-error-600">
            <span className="text-body font-body text-default-font">Join The Waitlist</span>
          </div>
        </div>
      </div>
      
      {/* Waitlist Section */}
      <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-12">
        <div className="flex w-full max-w-[448px] flex-col items-center gap-6 rounded-lg border border-solid border-neutral-border bg-default-background px-8 py-8 shadow-lg">
          <div className="flex w-full items-center gap-4">
            <span className="text-heading-1 font-heading-1 text-success-600">
              JOIN THE WAITLIST
            </span>
          </div>
          <span className="text-body font-body text-neutral-700 text-center">
            GameOn is currently in pre-launch. Sign up below to reserve your spot when we go live and get free tokens!
          </span>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-error-700 px-6 py-3 hover:bg-error-600">
            <span className="text-body font-body text-default-font">SIGN UP NOW</span>
          </div>
        </div>
      </div>
      
      {/* Featured Games Section */}
      <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
        <div className="flex w-full max-w-[1280px] flex-col items-start gap-8">
          <span className="font-['Orbitron'] text-[36px] font-[700] leading-[40px] text-warning-700">
            Featured Games
          </span>
          <div className="w-full items-start gap-8 grid grid-cols-2">
            {/* Game Card 1 */}
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
                    Create the perfect gaming environment with our expert setup guides and recommendations.
                  </span>
                </div>
                <div className="flex h-10 items-center justify-center rounded-md bg-brand-primary px-4 py-2 hover:bg-brand-600">
                  <span className="text-body font-body text-default-font">Learn More</span>
                </div>
              </div>
            </div>
            
            {/* Game Card 2 */}
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
                    Join our gaming community events and compete with players worldwide.
                  </span>
                </div>
                <div className="flex h-10 items-center justify-center rounded-md bg-brand-primary px-4 py-2 hover:bg-brand-600">
                  <span className="text-body font-body text-default-font">Learn More</span>
                </div>
              </div>
            </div>
            
            {/* Game Card 3 */}
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
                    Master champion mechanics and climb the ranked ladder with pro guidance.
                  </span>
                </div>
                <div className="flex h-10 items-center justify-center rounded-md bg-brand-primary px-4 py-2 hover:bg-brand-600">
                  <span className="text-body font-body text-default-font">Learn More</span>
                </div>
              </div>
            </div>
            
            {/* Game Card 4 */}
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
                    Improve your aim and tactical decision-making with personalized coaching.
                  </span>
                </div>
                <div className="flex h-10 items-center justify-center rounded-md bg-brand-primary px-4 py-2 hover:bg-brand-600">
                  <span className="text-body font-body text-default-font">Learn More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-12 items-center justify-center gap-2 rounded-md bg-brand-primary px-6 py-3 hover:bg-brand-600">
          <span className="text-body font-body text-default-font">All Games</span>
        </div>
      </div>
      
      {/* Featured Coaches Section */}
      <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
        <div className="flex w-full max-w-[1280px] flex-col items-start gap-8">
          <span className="font-['Orbitron'] text-[36px] font-[700] leading-[40px] text-success-700">
            Featured Coaches
          </span>
          <div className="flex w-full flex-wrap items-start gap-8">
            {/* Coach Card 1 */}
            <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-center gap-6 rounded-[32px] bg-brand-50 px-8 py-12">
              <div className="h-24 w-24 overflow-hidden rounded-full">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
                />
              </div>
              <span className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-brand-700 text-center">
                Coach Alex
              </span>
              <span className="inline-flex h-6 items-center rounded-full bg-brand-100 px-3 py-1">
                <span className="text-caption font-caption text-brand-700">Minecraft Expert</span>
              </span>
              <span className="text-body font-body text-brand-700 text-center">
                Professional builder & redstone specialist
              </span>
              <div className="flex h-10 items-center justify-center rounded-md bg-error-700 px-6 py-3 hover:bg-error-600">
                <span className="text-body font-body text-default-font">Book Session</span>
              </div>
            </div>
            
            {/* Coach Card 2 */}
            <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-center gap-6 rounded-[32px] bg-brand-50 px-8 py-12">
              <div className="h-24 w-24 overflow-hidden rounded-full">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                />
              </div>
              <span className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-warning-700 text-center">
                Coach Sarah
              </span>
              <span className="inline-flex h-6 items-center rounded-full bg-warning-100 px-3 py-1">
                <span className="text-caption font-caption text-warning-700">DBD Pro</span>
              </span>
              <span className="text-body font-body text-warning-700 text-center">
                Competitive survivor & strategy expert
              </span>
              <div className="flex h-10 items-center justify-center rounded-md bg-error-700 px-6 py-3 hover:bg-error-600">
                <span className="text-body font-body text-default-font">Book Session</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Join Elite Section */}
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
          <div className="flex h-12 items-center justify-center gap-2 rounded-md bg-brand-primary px-6 py-3 hover:bg-brand-600">
            <span className="text-body font-body text-default-font">Start Coaching</span>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="flex w-full flex-col items-center justify-center gap-6 bg-neutral-100 px-6 py-12">
        <div className="flex w-full max-w-[1280px] flex-col items-start gap-8">
          <div className="flex w-full flex-wrap items-start justify-between gap-8">
            <div className="flex flex-col items-start gap-4">
              <img
                className="h-8 w-auto"
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
              />
              <span className="text-body font-body text-neutral-600">
                © 2024 GameOn. All rights reserved.
              </span>
            </div>
            <div className="flex flex-wrap items-start gap-8">
              <div className="flex flex-col items-start gap-4">
                <span className="text-heading-3 font-heading-3 text-neutral-900">Company</span>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-body font-body text-neutral-600">About</span>
                  <span className="text-body font-body text-neutral-600">Careers</span>
                  <span className="text-body font-body text-neutral-600">Press</span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <span className="text-heading-3 font-heading-3 text-neutral-900">Resources</span>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-body font-body text-neutral-600">Blog</span>
                  <span className="text-body font-body text-neutral-600">Newsletter</span>
                  <span className="text-body font-body text-neutral-600">Events</span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <span className="text-heading-3 font-heading-3 text-neutral-900">Social</span>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-body font-body text-neutral-600">Twitter</span>
                  <span className="text-body font-body text-neutral-600">LinkedIn</span>
                  <span className="text-body font-body text-neutral-600">Facebook</span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <span className="text-heading-3 font-heading-3 text-neutral-900">Legal</span>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-body font-body text-neutral-600">Terms</span>
                  <span className="text-body font-body text-neutral-600">Privacy</span>
                  <span className="text-body font-body text-neutral-600">Cookies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
This version:

Uses only standard HTML elements (div, span, img)
Applies Tailwind classes directly for styling
Removes all dependencies on custom components like Button, Avatar, Badge, Icon
Removes all references to SubframeCore
Includes all sections: hero, waitlist, featured games, featured coaches, join elite, and footer
Copy this code directly into your src/pages/index.tsx file and it should build without any dependency issues. The design is fully responsive and matches the cyberpunk gaming aesthetic with your brand colors.

Let's try a different approach. The issue is with the SubframeCore import. Let's create a complete landing page without any icons or custom components that might be causing issues:


Earn Tokens
Home
Login
Reports
A

LEVEL UP YOUR GAME
Get tips, tricks, and tactics from real gamers. 
Because sometimes, YouTube just isn't enough.
Join The Waitlist
JOIN THE WAITLIST
GameOn is currently in pre-launch. Sign up below to reserve your spot when we go live and get free tokens!
SIGN UP NOW
Featured Games

Minecraft
Create the perfect gaming environment with our expert setup guides and recommendations.
Learn More

Dead by Daylight
Join our gaming community events and compete with players worldwide.
Learn More

League of Legends
Master champion mechanics and climb the ranked ladder with pro guidance.
Learn More

Valorant
Improve your aim and tactical decision-making with personalized coaching.
Learn More
All Games
Featured Coaches

Coach Alex
Minecraft Expert
Professional builder & redstone specialist
Book Session

Coach Sarah
DBD Pro
Competitive survivor & strategy expert
Book Session
JOIN THE ELITE
Ready to share your knowledge?
Start Coaching

© 2024 GameOn. All rights reserved.
Company
About
Careers
Press
Resources
Blog
Newsletter
Events
Social
Twitter
LinkedIn
Facebook
Legal
Terms
Privacy
Cookies
I understand your frustration. Let's fix this properly with the full site. The issue is with how the Button component is being