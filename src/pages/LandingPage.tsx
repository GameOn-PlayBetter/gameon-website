import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex w-full flex-col items-center bg-black min-h-screen">
      {/* Header/Navigation */}
      <header className="w-full flex justify-between items-center px-6 py-4 bg-black border-b border-neutral-200">
        <div className="text-2xl font-bold text-white">GameOn</div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-white hover:text-brand-700">Games</Link>
          <Link href="#" className="text-white hover:text-brand-700">Coaches</Link>
          <Link href="#" className="text-white hover:text-brand-700">About</Link>
        </nav>
        <button className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded">Sign In</button>
      </header>

      {/* Hero Section */}
      <section className="flex w-full flex-col items-center justify-center gap-6 px-6 py-16 bg-black">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center max-w-3xl">
          LEVEL UP YOUR GAME
        </h1>
        <p className="text-xl text-success-700 text-center max-w-xl">
          Get tips, tricks, and tactics from real gamers.
          <br />
          Because sometimes, YouTube just isn't enough.
        </p>
        <button className="bg-error-700 hover:bg-error-800 text-white px-8 py-3 rounded-md flex items-center gap-2 mt-4">
          <span>Join The Waitlist</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
        </button>
      </section>

      {/* Waitlist Section */}
      <section className="flex w-full flex-col items-center justify-center px-6 py-12">
        <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-lg border border-neutral-300 bg-black px-8 py-8 shadow-lg">
          <h2 className="text-2xl font-bold text-success-600">JOIN THE WAITLIST</h2>
          <p className="text-neutral-700 text-center">
            GameOn is currently in pre-launch. Sign up below to reserve your spot when we go live and get free tokens!
          </p>
          <button className="bg-error-700 hover:bg-error-800 text-white w-full py-3 rounded-md">
            SIGN UP NOW
          </button>
        </div>
      </section>

      {/* Featured Games */}
      <section className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
        <div className="flex w-full max-w-7xl flex-col items-start gap-8">
          <h2 className="text-3xl font-bold text-warning-700">Featured Games</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Game Card 1 */}
            <div className="flex flex-col items-start overflow-hidden rounded-3xl bg-brand-50 shadow-lg">
              <div className="h-64 w-full bg-gray-800 flex items-center justify-center">
                <span className="text-white text-2xl">Minecraft</span>
              </div>
              <div className="flex w-full flex-col items-start gap-4 px-8 py-8">
                <div className="flex w-full flex-col items-start gap-2">
                  <h3 className="text-2xl font-bold text-white">Minecraft</h3>
                  <p className="text-gray-400">
                    Create the perfect gaming environment with our expert setup guides and recommendations.
                  </p>
                </div>
                <button className="flex items-center gap-2 text-brand-700 hover:text-brand-800">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Game Card 2 */}
            <div className="flex flex-col items-start overflow-hidden rounded-3xl bg-brand-50 shadow-lg">
              <div className="h-64 w-full bg-gray-800 flex items-center justify-center">
                <span className="text-white text-2xl">Dead By Daylight</span>
              </div>
              <div className="flex w-full flex-col items-start gap-4 px-8 py-8">
                <div className="flex w-full flex-col items-start gap-2">
                  <h3 className="text-2xl font-bold text-white">Dead by Daylight</h3>
                  <p className="text-gray-400">
                    Join our gaming community events and compete with players worldwide.
                  </p>
                </div>
                <button className="flex items-center gap-2 text-brand-700 hover:text-brand-800">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-md">
          <span>All Games</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 16 16 12 12 8"></polyline>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black border-t border-neutral-800 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white">GameOn</h3>
            <p className="text-gray-400">Level up your gaming experience</p>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-bold mb-2">Links</h4>
              <Link href="#" className="text-gray-400 hover:text-white">Home</Link>
              <Link href="#" className="text-gray-400 hover:text-white">Games</Link>
              <Link href="#" className="text-gray-400 hover:text-white">Coaches</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-bold mb-2">Legal</h4>
              <Link href="#" className="text-gray-400 hover:text-white">Privacy</Link>
              <Link href="#" className="text-gray-400 hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-neutral-800 text-center text-gray-500">
          © {new Date().getFullYear()} GameOn. All rights reserved.
        </div>
      </footer>
    </div>
  );
}