
import React from "react";

const ContactInfo = () => {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          bg-dark-purple/80 border-2 border-pixel-purple 
          mx-auto py-8 px-8 rounded-none pixel-border shadow-[6px_6px_0px_0px_rgba(0,0,0,0.26)]
          text-soft-pink text-center font-jacquard
          max-w-md
          text-lg
          sm:px-5 sm:py-7 sm:max-w-sm
        "
        style={{ wordBreak: "break-word" }}
      >
        <p className="mb-5 text-soft-pink font-jacquard text-2xl sm:text-xl">
          get in touch
        </p>
        <p className="text-soft-pink text-base sm:text-sm">
          for booking, management &amp; all inquiries:<br />
          <a
            href="mailto:hello@rinfiggi.com"
            className="underline text-pixel-purple break-all"
          >
            hello@rinfiggi.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
