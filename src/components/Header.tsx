
import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center py-8">
      <div className="flex items-center justify-center mb-4">
        <div className="w-full max-w-xl text-center">
          <h1 className="text-4xl lg:text-5xl text-pixel-purple animate-pixel-shift">
            Nixxy
          </h1>
          <div className="mt-4 text-xs">
            <div className="grid grid-cols-3 gap-4 text-dark-purple">
              <div className="text-right">
                - art house<br />
                - weird<br />
                - chaos<br />
                - strange<br />
                - patterns
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl">&lt;3</span>
              </div>
              <div className="text-left">
                the<br />
                world<br />
                isn't<br />
                real<br />
                irl
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-64 h-64 mx-auto my-4">
        <img 
          src="/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png" 
          alt="Vintage cassette player" 
          className="w-full h-full object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
