
import React from 'react';

const handleUCPreferences = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  // Usercentrics 3.x API
  if (window && (window as any).Usercentrics) {
    try {
      (window as any).Usercentrics.showFirstLayer();
    } catch (err) {
      // fallback: force reload, Usercentrics will show on reload if consent not given
      window.location.reload();
    }
  } else {
    // fallback: force reload, Usercentrics will show on reload if consent not given
    window.location.reload();
  }
};

const Footer = () => {
  return <footer className="px-4 text-center py-[11px] my-0">
      <div className="max-w-md mx-auto flex flex-col items-center gap-2">
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
    </footer>;
};
export default Footer;
