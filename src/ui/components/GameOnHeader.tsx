"use client";

import React from "react";
import Link from "next/link";

export const GameOnHeader = () => {
  return (
    <header className="w-full bg-black px-6 py-4 flex justify-between items-center border-b border-pink-500">
      <Link href="/" className="flex items-center gap-2">
        <img src="/logo.svg" alt="GameOn Logo" className="h-10 w-10" />
        <span className="text-pink-500 font-['Orbitron'] text-xl font-bold tracking-wider">GameOn</span>
      </Link>
      <nav className="flex gap-6 text-white text-sm font-medium">
        <Link href="#games" className="hover:text-pink-500">Games</Link>
        <Link href="#coaches" className="hover:text-pink-500">Coaches</Link>
        <Link href="#waitlist" className="hover:text-pink-500">Waitlist</Link>
      </nav>
    </header>
  );
};