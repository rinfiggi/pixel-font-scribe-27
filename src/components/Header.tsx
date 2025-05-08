
import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center py-8">
      <div className="flex items-center justify-center mb-4">
        <div className="w-full max-w-xl text-center">
          <div className="w-64 h-32 mx-auto mb-4">
            <img 
              src="/lovable-uploads/51af3b58-e2ca-4a1e-b024-5ecca710646e.png" 
              alt="rinfiggi logo" 
              className="w-full h-full object-contain invert"
            />
          </div>
          <div className="mt-4 text-xs">
            <div className="grid grid-cols-3 gap-4 text-soft-pink">
              <div className="text-right">
                <a href="#art" className="block hover:text-pixel-purple">- art house</a>
                <a href="#weird" className="block hover:text-pixel-purple">- weird</a>
                <a href="#chaos" className="block hover:text-pixel-purple">- chaos</a>
                <a href="#strange" className="block hover:text-pixel-purple">- strange</a>
                <a href="#patterns" className="block hover:text-pixel-purple">- patterns</a>
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
