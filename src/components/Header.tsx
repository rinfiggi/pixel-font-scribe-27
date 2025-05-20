
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
            <div className="grid grid-cols-3 gap-4 text-soft-pink lowercase">
              <div className="text-right">
                <a href="#tour" className="block hover:text-pixel-purple">- tour</a>
                <a href="#music" className="block hover:text-pixel-purple">- music</a>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl">&lt;3</span>
              </div>
              <div className="text-left">
                <a href="#merch" className="block hover:text-pixel-purple">- merch</a>
                <a href="#newsletter" className="block hover:text-pixel-purple">- notes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
