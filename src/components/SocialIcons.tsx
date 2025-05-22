
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const SOCIALS = [
  {
    name: "Instagram",
    url: "https://instagram.com/rinfiggi",
    Icon: Instagram
  },
  {
    name: "Twitter",
    url: "https://twitter.com/rinfiggi",
    Icon: Twitter
  },
  {
    name: "Facebook",
    url: "https://facebook.com/rinfiggi",
    Icon: Facebook
  }
];

const SocialIcons = () => (
  <div className="flex flex-row gap-3 justify-center items-center">
    {SOCIALS.map(({ name, url, Icon }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="rounded-full p-1.5 bg-pixel-purple/10 hover:bg-pixel-purple/40 transition-all shadow-md shadow-pixel-purple/10 hover:scale-110"
        style={{ lineHeight: 0 }}
      >
        <Icon size={22} className="text-pixel-purple hover:text-soft-pink transition" />
      </a>
    ))}
  </div>
);

export default SocialIcons;
