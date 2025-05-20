
import React, { useEffect } from 'react';

const TOUR_WIDGET_ID = "10367915"; // Songkick artist ID

const TourSection = () => {
  useEffect(() => {
    // Dynamically add Songkick widget script only on client
    const existing = document.querySelector(`script[src*="widget-app.songkick.com/injector"]`);
    if (!existing) {
      const script = document.createElement('script');
      script.src = `//widget-app.songkick.com/injector/${TOUR_WIDGET_ID}`;
      script.async = true;
      document.body.appendChild(script);
      return () => {
        if (script.parentNode) {
          document.body.removeChild(script);
        }
      }
    }
  }, []);

  return (
    <section className="pixel-section">
      <div className="max-w-md w-full text-center text-soft-pink text-xs mx-auto">
        <div className="w-full animate-fade-in">
          {/* Songkick Widget */}
          <a
            href="https://www.songkick.com/artists/10367915"
            className="songkick-widget"
            data-theme="dark"
            data-track-button="on"
            data-detect-style="on"
            data-locale="en"
            data-other-artists="on"
            data-share-button="on"
            data-country-filter="on"
            data-rsvp="on"
            data-request-show="on"
            data-past-events="on"
            data-past-events-offtour="on"
            data-remind-me="on"
            style={{
              display: 'block',
              margin: '0 auto',
              background: 'rgba(19,18,26,0.92)',
              borderRadius: '8px',
              boxShadow: '0 0 24px 4px rgba(155,135,245,0.10)',
              padding: '8px 0',
              fontFamily: '"Jacquard 12", "Press Start 2P", cursive, serif',
              color: '#ffc1cb',
              minWidth: '240px'
            }}
          >tour dates</a>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
