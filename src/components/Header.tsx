
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <header className="flex flex-col items-center justify-center py-8">
      <div className="flex items-center justify-center mb-4">
        <div className="w-full max-w-xl text-center">
          <div className="w-64 h-32 mx-auto mb-4">
            <img 
              src={`${baseUrl}lovable-uploads/51af3b58-e2ca-4a1e-b024-5ecca710646e.png`} 
              alt="rinfiggi logo" 
              className="w-full h-full object-contain invert"
            />
          </div>
          <div className="mt-4 text-xs">
            <div className="grid grid-cols-3 gap-4 text-soft-pink">
              <div className="text-right">
                <Link smooth to="#tour" className="block hover:text-pixel-purple">- tour</Link>
                <Link smooth to="#music" className="block hover:text-pixel-purple">- music</Link>
                <Link smooth to="#merch" className="block hover:text-pixel-purple">- merch</Link>
                <Link smooth to="#newsletter" className="block hover:text-pixel-purple">- newsletter</Link>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl">&lt;3</span>
              </div>
              <div className="text-left">
                <span className="block">the</span>
                <span className="block">world</span>
                <span className="block">isn't</span>
                <span className="block">real</span>
                <span className="block">irl</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
