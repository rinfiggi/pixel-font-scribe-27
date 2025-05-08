
import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center py-8">
      <div className="flex items-center justify-center mb-4">
        <div className="w-full max-w-xl text-center">
          <h1 className="text-4xl lg:text-5xl text-pixel-purple animate-pixel-shift">
            rinfiggi
          </h1>
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
                <a href="#the" className="block hover:text-pixel-purple">the</a>
                <a href="#world" className="block hover:text-pixel-purple">world</a>
                <a href="#isnt" className="block hover:text-pixel-purple">isn't</a>
                <a href="#real" className="block hover:text-pixel-purple">real</a>
                <a href="#irl" className="block hover:text-pixel-purple">irl</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-64 h-64 mx-auto my-4">
        <img 
          src="/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png" 
          alt="vintage cassette player" 
          className="w-full h-full object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
