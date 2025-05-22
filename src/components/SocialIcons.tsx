
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const SOCIALS = [
  { name: "Instagram", url: "https://instagram.com/rinfiggi", Icon: Instagram },
  { name: "Twitter", url: "https://twitter.com/rinfiggi", Icon: Twitter },
  { name: "Facebook", url: "https://facebook.com/rinfiggi", Icon: Facebook },
];

const SocialIcons = () => (
  <div className="flex gap-3 justify-center mt-6 mb-4">
    {SOCIALS.map(({ name, url, Icon }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-pixel-purple/[0.13] border border-pixel-purple/30 hover:bg-pixel-purple hover:text-soft-pink transition-colors p-2 flex items-center"
        aria-label={`rinfiggi on ${name}`}
        style={{ boxShadow: "0 1px 4px rgba(155,135,245,0.18)" }}
      >
        <Icon size={26} />
      </a>
    ))}
  </div>
);

export default SocialIcons;
