"use client";

export default function SocialLinks() {
  return (
    <div className="mt-10">
      <p className="text-subtext-color font-['Afacad_Flux'] text-center">Follow us</p>
      <div className="flex justify-center gap-5 mt-2.5">
        <a 
          href="https://www.tiktok.com/@gameon.gg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-700 hover:text-brand-700 transition-colors"
        >
          📱 TikTok
        </a>
        <a 
          href="https://www.instagram.com/gameon_playbetter_together1/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-700 hover:text-brand-700 transition-colors"
        >
          📸 Instagram
        </a>
        <a 
          href="https://x.com/game_on_gg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-700 hover:text-brand-700 transition-colors"
        >
          🐦 X
        </a>
        <a 
          href="https://discord.com/channels/1389283723412902080/1389283724851413164" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-700 hover:text-brand-700 transition-colors"
        >
          💬 Discord
        </a>
      </div>
    </div>
  );
}