import React from 'react';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">LEVEL UP YOUR GAME</h1>
      <p className="text-xl mb-8">GameOn - Coming Soon</p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Join Waitlist
      </button>
    </div>
  );
}