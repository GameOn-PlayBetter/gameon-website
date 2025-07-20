"use client";

import React from "react";
import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaDiscord
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.tiktok.com/@gameon.gg",
    icon: <FaTiktok className="text-2xl hover:text-[#FF00C8]" />,
    label: "TikTok"
  },
  {
    href: "https://www.instagram.com/gameon_playbetter_together1/",
    icon: <FaInstagram className="text-2xl hover:text-[#FF00C8]" />,
    label: "Instagram"
  },
  {
    href: "https://x.com/game_on_gg",
    icon: <FaTwitter className="text-2xl hover:text-[#FF00C8]" />,
    label: "Twitter"
  },
  {
    href: "https://discord.com/channels/1389283723412902080/1389283724851413164",
    icon: <FaDiscord className="text-2xl hover:text-[#FF00C8]" />,
    label: "Discord"
  }
];

export default function SocialLinks() {
  return (
    <div className="flex gap-6 items-center">
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-white transition-colors hover:text-[#00CFFF]"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}