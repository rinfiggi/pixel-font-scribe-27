import React from 'react';
const Footer = () => {
  return <footer className="px-4 text-center py-[11px] my-0">
      <div className="max-w-md mx-auto">
        <p className="text-xs text-soft-pink opacity-70">
          &copy; {new Date().getFullYear()} rinfiggi ✧ all rights reserved
        </p>
      </div>
    </footer>;
};
export default Footer;