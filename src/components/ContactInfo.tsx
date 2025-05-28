
import React from 'react';

const ContactInfo = () => {
  return (
    <section className="text-center my-6">
      <h2 className="pixel-section-title font-jacquard text-[min(16vw,66px)] sm:text-[66px] animate-pulse lowercase">
        contact
      </h2>
      <div className="max-w-[220px] sm:max-w-sm mx-auto p-6 bg-gradient-to-br from-dark-purple to-pixel-purple/20 border border-pixel-purple/30 rounded-lg">
        <p className="text-soft-pink mb-4 text-sm">
          get in touch ✧
        </p>
        <a 
          href="mailto:hello@rinfiggi.com" 
          className="text-pixel-purple hover:text-soft-pink transition-colors underline decoration-pixel-purple underline-offset-2"
        >
          hello@rinfiggi.com
        </a>
      </div>
    </section>
  );
};

export default ContactInfo;
