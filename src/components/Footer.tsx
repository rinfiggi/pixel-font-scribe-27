
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 text-center">
      <div className="max-w-md mx-auto">
        <p className="text-xs text-soft-pink opacity-70">
          &copy; {new Date().getFullYear()} rinfiggi • all rights reserved ✧
        </p>
      </div>
    </footer>
  );
};

export default Footer;
