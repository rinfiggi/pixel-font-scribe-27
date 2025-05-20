
import React, { useEffect } from 'react';

const TOUR_WIDGET_ID = "10367915"; // Songkick artist ID

const customSKStyles = `
  /* Forza tutti i testi Songkick in lowercase */
  .songkick-widget *,
  .songkick-widget {
    text-transform: lowercase !important;
    font-family: 'Jacquard 12', 'Press Start 2P', cursive, serif !important;
    color: #ffc1cb !important;
    background: transparent !important;
    letter-spacing: 0.03em !important;
  }
  /* Colori background e accent secondo la palette */
  .songkick-widget-root, .songkick-widget {
    background: rgba(19,18,26,0.92) !important;
    border-radius: 10px !important;
    box-shadow: 0 0 24px 4px rgba(155,135,245,0.12) !important;
    border: 2px solid #9b87f5 !important;
  }
  .songkick-widget a, .songkick-widget a:visited {
    color: #9b87f5 !important;
  }
  .songkick-widget button,
  .songkick-widget input,
  .songkick-widget select {
    background: rgba(155,135,245,0.04) !important;
    color: #ffc1cb !important;
    border-radius: 6px !important;
    border: 1.5px solid #9b87f5 !important;
    text-transform: lowercase !important;
  }
`;

const TourSection = () => {
  useEffect(() => {
    // Inietta stile custom per il Songkick widget
    if (!document.getElementById('sk-custom-css')) {
      const styleTag = document.createElement('style');
      styleTag.textContent = customSKStyles;
      styleTag.id = 'sk-custom-css';
      document.head.appendChild(styleTag);
    }

    // Songkick widget script
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
          {/* Songkick Widget con lowercase e colori coerenti */}
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
              borderRadius: '10px',
              boxShadow: '0 0 24px 4px rgba(155,135,245,0.12)',
              padding: '8px 0',
              fontFamily: '"Jacquard 12", "Press Start 2P", cursive, serif',
              color: '#ffc1cb',
              minWidth: '240px',
              textTransform: 'lowercase',
              border: '2px solid #9b87f5'
            }}
          >tour dates</a>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
