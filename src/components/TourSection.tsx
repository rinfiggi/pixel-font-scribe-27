
import React, { useEffect } from 'react';
import BandsintownWidget from './tour/BandsintownWidget';

const TourSection = () => {
  useEffect(() => {
    // This ensures the Bandsintown widget is loaded after the component mounts
    const script = document.createElement('script');
    script.src = 'https://widgetv3.bandsintown.com/main.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize widget after script has loaded
    script.onload = () => {
      if (window.BIT && window.BIT.widget) {
        window.BIT.widget.init();
      }
    };

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="pixel-section">
      <div className="max-w-md w-full text-center text-soft-pink text-xs mx-auto">
        <div className="w-full animate-fade-in">
          {/* Bandsintown Widget */}
          <BandsintownWidget />
        </div>
      </div>
    </section>
  );
};

// Add Window interface extension to handle BIT global
declare global {
  interface Window {
    BIT?: {
      widget?: {
        init: () => void;
      };
    };
  }
}

export default TourSection;
