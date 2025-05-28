
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const SOCIALS = [{
  name: "Instagram",
  url: "https://instagram.com/rinfiggi",
  Icon: Instagram
}, {
  name: "Twitter",
  url: "https://twitter.com/rinfiggi",
  Icon: Twitter
}, {
  name: "Facebook",
  url: "https://facebook.com/rinfiggi",
  Icon: Facebook
}];

const SocialIcons = () => {
  return (
    <div className="flex justify-center gap-4 mb-4">
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pixel-purple hover:text-soft-pink transition-colors p-2"
          aria-label={social.name}
        >
          <social.Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
