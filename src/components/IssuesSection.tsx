
import React from "react";

interface IssueLink {
  text: string;
  url: string;
}

const links: IssueLink[] = [
  {
    text: "free palestine",
    url: "https://helppalestine.carrd.co/?fbclid=PAZXh0bgNhZW0CMTEAAaYhjFM4OXvxOCs1fqSONTGED6praVLJAkQHook46tJ1u0q2ClWYQrWS1BI_aem_-kq1twP7uHGKnwEdPVT59Q"
  },
  {
    text: "issues in the world & how to help",
    url: "https://wearethechange.carrd.co/?fbclid=PAZXh0bgNhZW0CMTEAAabNblSLwBWDMzF4hXxAno8zFAiZ_bKIAuNDMHIRvwzNXpVIfV9UoJWY7Us_aem_R6WMI8vSpR3qqrs9ZdDYqQ"
  },
  {
    text: "go vegan",
    url: "https://veganfacts.carrd.co/"
  },
  {
    text: "mental health resources",
    url: "https://appreciatingmylife.carrd.co/"
  }
];

const IssuesSection = () => (
  <section className="pixel-section bg-dark-purple/70 px-5 rounded-lg mb-10 mt-4 py-6 border border-pixel-purple/10">
    <h2 className="font-jacquard text-[min(12vw,40px)] sm:text-[40px] text-soft-pink mb-3 text-center lowercase animate-pulse">
      issues in the world
    </h2>
    <ul className="flex flex-col gap-2 items-center">
      {links.map((link, i) => (
        <li key={i}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pixel-purple underline decoration-pixel-purple/30 underline-offset-4 text-lg sm:text-base transition hover:text-soft-pink"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default IssuesSection;
