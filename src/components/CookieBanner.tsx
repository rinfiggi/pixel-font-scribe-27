
import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      // Show cookie banner after a small delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesDeclined', 'true');
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-purple bg-opacity-95 p-4 z-50 border-t-2 border-pixel-purple">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-soft-pink text-xs">
          <p>we use cookies to enhance your experience. they're essential for the bandsintown widget.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={acceptCookies} 
            className="pixel-button text-xs px-3 py-1"
          >
            accept
          </button>
          <button 
            onClick={declineCookies} 
            className="text-soft-pink text-xs underline hover:text-pixel-purple"
          >
            decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
