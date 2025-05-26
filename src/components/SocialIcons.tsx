
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
  <div className="flex items-center justify-center gap-3 mt-2 mb-2">
    {SOCIALS.map(({ name, url, Icon }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="text-pixel-purple hover:text-soft-pink transition-colors p-1"
      >
        <Icon size={22} strokeWidth={2.2} />
      </a>
    ))}
  </div>
);

export default SocialIcons;
