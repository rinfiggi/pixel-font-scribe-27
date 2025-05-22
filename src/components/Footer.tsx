
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

const issuesLinks = [
  {
    label: "free palestine",
    url: "https://helppalestine.carrd.co/?fbclid=PAZXh0bgNhZW0CMTEAAaYhjFM4OXvxOCs1fqSONTGED6praVLJAkQHook46tJ1u0q2ClWYQrWS1BI_aem_-kq1twP7uHGKnwEdPVT59Q",
  },
  {
    label: "issues in the world & how to help",
    url: "https://wearethechange.carrd.co/?fbclid=PAZXh0bgNhZW0CMTEAAabNblSLwBWDMzF4hXxAno8zFAiZ_bKIAuNDMHIRvwzNXpVIfV9UoJWY7Us_aem_R6WMI8vSpR3qqrs9ZdDYqQ",
  },
  {
    label: "go vegan",
    url: "https://veganfacts.carrd.co/",
  },
  {
    label: "mental health resources",
    url: "https://appreciatingmylife.carrd.co/",
  }
];

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
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[11px] mt-1">
          <a
            href="#"
            className="text-pixel-purple underline decoration-pixel-purple/30 underline-offset-2 transition hover:text-soft-pink"
            onClick={handleUCPreferences}
            aria-label="Gestisci preferenze cookie"
          >
            gestisci preferenze cookie
          </a>
          {/* Divider and activism issues links */}
          {/* Ciclo sui link con un trattino come separatore */}
          {issuesLinks.map((l, i) => (
            <React.Fragment key={l.url}>
              <span className="text-soft-pink/60 px-1 select-none">-</span>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pixel-purple underline decoration-pixel-purple/30 underline-offset-2 hover:text-soft-pink transition"
                style={{ whiteSpace: 'nowrap' }}
              >
                {l.label}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
