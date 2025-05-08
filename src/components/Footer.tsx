
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-full h-20">
          <img 
            src="/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png" 
            alt="Nixxy band members" 
            className="w-full h-full object-contain"
          />
        </div>
        <p className="mt-4 text-xs text-dark-purple opacity-70">
          &copy; {new Date().getFullYear()} Nixxy • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
