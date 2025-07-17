import React from 'react';
// Import your components
import Button from '../components/Button';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import BoldFooter from '../components/BoldFooter';
import { FeatherMail, FeatherZap, FeatherArrowUpRightFromCircle, FeatherArrowRight } from 'react-feather';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-start bg-black">
      {/* Hero Section */}
      <div className="flex w-full flex-col items-center justify-center gap-3 bg-black px-6 py-6">
        <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-3">
          <img
            className="h-96 w-full max-w-[1280px] flex-none object-contain"
            src="https://res.cloudinary.com/subframe/image/upload/v1752180871/uploads/19984/xz0wrne7nh62oxklt6fo.png"
            alt="GameOn Logo"
          />
          <h1 className="w-full max-w-[768px] font-['Orbitron'] text-[60px] font-[900] leading-[68px] text-white text-center -tracking-[0.04em]">
            LEVEL UP YOUR GAME
          </h1>
          <p className="w-full max-w-[576px] font-['Afacad_Flux'] text-[20px] font-[500] leading-[28px] text-teal-400 text-center">
            Get tips, tricks, and tactics from real gamers. 
            <br />Because sometimes, YouTube just isn't enough.
          </p>
          <Button variant="destructive-primary" size="large" className="flex items-center gap-2">
            <FeatherZap />
            Join The Waitlist
          </Button>
        </div>
      </div>

      {/* Waitlist Signup Section */}
      <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-12">
        <div className="flex w-full max-w-[448px] flex-col items-center gap-6 rounded-lg border border-solid border-neutral-800 bg-black px-8 py-8 shadow-lg">
          <div className="flex w-full items-center gap-4">
            <FeatherMail className="text-[32px] text-teal-500" />
            <h2 className="text-[30px] font-[700] text-teal-500">
              JOIN THE WAITLIST
            </h2>
          </div>
          <p className="text-[14px] text-gray-300 text-center">
            GameOn is currently in pre-launch. Sign up below to reserve your spot when we go live and get free tokens!
          </p>
          <Button className="h-10 w-full" variant="destructive-primary" size="large">
            SIGN UP NOW
          </Button>
        </div>
      </div>

      {/* Featured Games Section */}
      <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
        <div className="flex w-full max-w-[1280px] flex-col items-start gap-8">
          <h2 className="font-['Orbitron'] text-[36px] font-[700] leading-[40px] text-yellow-500">
            Featured Games
          </h2>
          <div className="w-full items-start gap-8 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-start overflow-hidden rounded-[32px] bg-gray-900 shadow-lg">
              <img
                className="h-64 w-full flex-none object-cover"
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
                alt="Minecraft"
              />
              <div className="flex w-full flex-col items-start gap-4 px-8 py-8">
                <div className="flex w-full flex-col items-start gap-2">
                  <h3 className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-white">
                    Minecraft
                  </h3>
                  <p className="text-[14px] text-gray-400">
                    Create the perfect gaming environment with our expert setup guides and recommendations.
                  </p>
                </div>
                <Button>Learn More</Button>
              </div>
            </div>
            <div className="flex flex-col items-start overflow-hidden rounded-[32px] bg-gray-900 shadow-lg">
              <img
                className="h-64 w-full flex-none object-cover"
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"
                alt="Dead by Daylight"
              />
              <div className="flex w-full flex-col items-start gap-4 px-8 py-8">
                <div className="flex w-full flex-col items-start gap-2">
                  <h3 className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-white">
                    Dead by Daylight
                  </h3>
                  <p className="text-[14px] text-gray-400">
                    Join our gaming community events and compete with players worldwide.
                  </p>
                </div>
                <Button>Learn More</Button>
              </div>
            </div>
            <div className="flex flex-col items-start overflow-hidden rounded-[32px] bg-gray-900 shadow-lg">
              <img
                className="h-64 w-full flex-none object-cover"
                src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80"
                alt="League of Legends"
              />
              <div className="flex w-full flex-col items-start gap-4 px-8 py-8">
                <div className="flex w-full flex-col items-start gap-2">
                  <h3 className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-white">
                    League of Legends
                  </h3>
                  <p className="text-[14px] text-gray-400">
                    Master champion mechanics and climb the ranked ladder with pro guidance.
                  </p>
                </div>
                <Button>Learn More</Button>
              </div>
            </div>
            <div className="flex flex-col items-start overflow-hidden rounded-[32px] bg-gray-900 shadow-lg">
              <img
                className="h-64 w-full flex-none object-cover"
                src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80"
                alt="Valorant"
              />
              <div className="flex w-full flex-col items-start gap-4 px-8 py-8">
                <div className="flex w-full flex-col items-start gap-2">
                  <h3 className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-white">
                    Valorant
                  </h3>
                  <p className="text-[14px] text-gray-400">
                    Improve your aim and tactical decision-making with personalized coaching.
                  </p>
                </div>
                <Button>Learn More</Button>
              </div>
            </div>
          </div>
        </div>
        <Button size="large" className="flex items-center gap-2">
          <span>All Games</span>
          <FeatherArrowUpRightFromCircle />
        </Button>
      </div>

      {/* Featured Coaches Section */}
      <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
        <div className="flex w-full max-w-[1280px] flex-col items-start gap-8">
          <h2 className="font-['Orbitron'] text-[36px] font-[700] leading-[40px] text-teal-500">
            Featured Coaches
          </h2>
          <div className="flex w-full flex-wrap items-start gap-8">
            <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-center gap-6 rounded-[32px] bg-gray-900 px-8 py-12">
              <Avatar
                size="x-large"
                image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
                alt="Coach Alex"
              >
                A
              </Avatar>
              <h3 className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-purple-400 text-center">
                Coach Alex
              </h3>
              <Badge>Minecraft Expert</Badge>
              <p className="text-[14px] text-purple-400 text-center">
                Professional builder &amp; redstone specialist
              </p>
              <Button variant="destructive-primary">Book Session</Button>
            </div>
            <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-center gap-6 rounded-[32px] bg-gray-900 px-8 py-12">
              <Avatar
                size="x-large"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                alt="Coach Sarah"
              >
                S
              </Avatar>
              <h3 className="font-['Orbitron'] text-[24px] font-[700] leading-[28px] text-yellow-500 text-center">
                Coach Sarah
              </h3>
              <Badge variant="warning">DBD Pro</Badge>
              <p className="text-[14px] text-yellow-500 text-center">
                Competitive survivor &amp; strategy expert
              </p>
              <Button variant="destructive-primary">Book Session</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Join the Elite Section */}
      <div className="flex w-full flex-col items-center justify-center gap-6 bg-black px-6 py-24">
        <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-8 rounded-[32px] bg-black px-6 pt-24 pb-16">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <h2 className="w-full max-w-[768px] font-['Orbitron'] text-[48px] font-[900] leading-[52px] text-white text-center -tracking-[0.04em]">
              JOIN THE ELITE
            </h2>
            <p className="w-full max-w-[768px] font-['Afacad_Flux'] text-[20px] font-[500] leading-[28px] text-pink-500 text-center">
              Ready to share your knowledge?
            </p>
          </div>
          <Button size="large" className="flex items-center gap-2">
            <span>Start Coaching</span>
            <FeatherArrowRight />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <BoldFooter />
    </div>
  );
}
For your component files, here are simple implementations:

// components/Button.js
export default function Button({ children, variant = "default", size = "default", className = "", ...props }) {
  const variants = {
    default: "bg-gray-800 hover:bg-gray-700 text-white",
    "destructive-primary": "bg-purple-600 hover:bg-purple-700 text-white"
  };
  
  const sizes = {
    default: "py-2 px-4 text-sm",
    large: "py-3 px-6 text-base"
  };
  
  return (
    <button 
      className={`font-bold rounded flex items-center gap-2 ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}

// components/Avatar.js
export default function Avatar({ children, size = "default", image, ...props }) {
  const sizes = {
    default: "h-10 w-10",
    "x-large": "h-20 w-20"
  };
  
  return (
    <div 
      className={`rounded-full overflow-hidden flex items-center justify-center bg-gray-700 text-white ${sizes[size]}`}
      {...props}
    >
      {image ? (
        <img src={image} alt="Avatar" className="h-full w-full object-cover" />
      ) : (
        <span>{children}</span>
      )}
    </div>
  );
}

// components/Badge.js
export default function Badge({ children, variant = "default", ...props }) {
  const variants = {
    default: "bg-purple-600 text-white",
    warning: "bg-yellow-600 text-white"
  };
  
  return (
    <span 
      className={`px-2 py-1 rounded-full text-xs font-bold ${variants[variant]}`}
      {...props}
    >
      {children}
    </span>
  );
}

// components/BoldFooter.js
export default function BoldFooter() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-['Orbitron'] text-xl font-bold">GAMEON</h3>
          <p className="text-gray-400 text-sm">Level up your gaming experience</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm">LINKS</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm">Games</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm">Coaches</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm">About</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm">CONTACT</h4>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-400 text-sm">support@gameon.com</li>
            <li className="text-gray-400 text-sm">1-800-GAME-ON</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GameOn. All rights reserved.
      </div>
    </footer>
  );
}