
import React from 'react';
import SocialIcons from './SocialIcons';

const handleUCPreferences = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  if (window && (window as any).Usercentrics) {
    try {
      (window as any).Usercentrics.showFirstLayer();
    } catch (err) {
      window.location.reload();
    }
  } else {
    window.location.reload();
  }
};

const Footer = () => {
  return (
    <footer className="px-4 text-center py-[16px] my-0">
      <div className="max-w-md mx-auto flex flex-col items-center gap-2">
        {/* Social icons sopra copyright */}
        <div className="mb-2">
          <SocialIcons />
        </div>
        <p className="text-xs text-soft-pink opacity-70">
          &copy; {new Date().getFullYear()} rinfiggi ✧ all rights reserved
        </p>
        <a
          href="#"
          className="text-pixel-purple text-[11px] underline decoration-pixel-purple/30 underline-offset-2 transition hover:text-soft-pink"
          onClick={handleUCPreferences}
          aria-label="Gestisci preferenze cookie"
        >
          gestisci preferenze cookie
        </a>
      </div>
    </footer>
  );
};
export default Footer;
