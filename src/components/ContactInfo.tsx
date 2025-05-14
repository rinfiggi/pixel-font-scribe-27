
import React from 'react';

const ContactInfo = () => {
  return (
    <div className="pixel-section py-8">
      <div className="max-w-md w-full mx-auto text-center">
        <h3 className="text-soft-pink text-lg mb-3 font-jacquard">get in touch</h3>
        <p className="text-pixel-purple hover:text-soft-pink transition-colors">
          <a href="mailto:mgmt@rinfiggi.online" className="block text-sm py-2">
            mgmt@rinfiggi.online
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
