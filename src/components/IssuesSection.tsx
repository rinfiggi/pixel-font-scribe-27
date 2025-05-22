
import React from "react";

interface IssueLink {
  text: string;
  url: string;
  emoji: string;
  color: string;
}

const links: IssueLink[] = [
  {
    text: "free palestine",
    url: "https://helppalestine.carrd.co/?fbclid=PAZXh0bgNhZW0CMTEAAaYhjFM4OXvxOCs1fqSONTGED6praVLJAkQHook46tJ1u0q2ClWYQrWS1BI_aem_-kq1twP7uHGKnwEdPVT59Q",
    emoji: "🕊️",
    color: "from-[#38B2AC] to-[#3182CE]/80"
  },
  {
    text: "issues in the world & how to help",
    url: "https://wearethechange.carrd.co/?fbclid=PAZXh0bgNhZW0CMTEAAabNblSLwBWDMzF4hXxAno8zFAiZ_bKIAuNDMHIRvwzNXpVIfV9UoJWY7Us_aem_R6WMI8vSpR3qqrs9ZdDYqQ",
    emoji: "🌍",
    color: "from-[#A0AEC0] to-[#9b87f5]/60"
  },
  {
    text: "go vegan",
    url: "https://veganfacts.carrd.co/",
    emoji: "🥦",
    color: "from-[#48BB78]/90 to-[#FED7D7]/60"
  },
  {
    text: "mental health resources",
    url: "https://appreciatingmylife.carrd.co/",
    emoji: "🌱",
    color: "from-[#F6E05E]/90 to-[#81E6D9]/40"
  }
];

const IssuesSection = () => (
  <section className="pixel-section bg-dark-purple/70 px-4 rounded-lg mb-10 mt-4 py-8 border border-pixel-purple/10 shadow-lg">
    <h2 className="font-jacquard text-[min(11vw,38px)] sm:text-[40px] text-soft-pink mb-5 text-center lowercase animate-pulse leading-tight sm:leading-snug tracking-wide transition-all select-none">
      issues in the world
    </h2>
    <ul className="w-full max-w-lg mx-auto flex flex-col gap-5 items-center">
      {links.map((link, i) => (
        <li
          key={i}
          className={`w-full max-w-md transition-transform hover:scale-105`}
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full rounded-xl py-4 px-6 bg-gradient-to-br ${link.color} border border-pixel-purple/25 shadow-sm hover:shadow-lg transition group`}
            style={{ minHeight: 64 }}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl sm:text-2xl ml-1">{link.emoji}</span>
              <span className="text-lg sm:text-xl text-pixel-purple group-hover:text-soft-pink font-semibold tracking-normal" style={{letterSpacing: "0.01em"}}>
                {link.text}
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default IssuesSection;
