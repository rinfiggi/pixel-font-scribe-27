
import React, { useEffect } from 'react';

const TourSection = () => {
  useEffect(() => {
    // This ensures the Bandsintown widget is loaded after the component mounts
    const script = document.createElement('script');
    script.src = 'https://widgetv3.bandsintown.com/main.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize widget after script has loaded
    script.onload = () => {
      if (window.BIT) {
        window.BIT.init();
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
      <h2 className="pixel-section-title">tour</h2>
      <div className="max-w-md w-full text-center text-soft-pink text-sm mx-auto">
        <div className="w-full">
          {/* Bandsintown Widget */}
          <div className="bit-widget-container">
            <style>
              {`
                .bit-html-export {
                  width: 100%;
                  background: transparent;
                  font-family: "Press Start 2P", cursive;
                  color: #ffc1cb;
                  font-size: 12px;
                  text-transform: lowercase;
                  line-height: 1.6;
                }
                .bit-table {
                  width: 100%;
                }
                .bit-table td {
                  padding: 10px 12px;
                  vertical-align: middle;
                }
                .bit-table a {
                  color: #9b87f5;
                  text-decoration: none;
                }
                .bit-table tr:nth-of-type(2n) {
                  background: rgba(155, 135, 245, 0.1);
                }
                .bit-table .bit-cta {
                  text-align: center;
                  width: 25%;
                }
              `}
            </style>
            <a 
              className="bit-widget-initializer"
              data-artist-name="id_15568391"
              data-events-to-display=""
              data-background-color="rgba(19, 18, 26, 0.8)"
              data-separator-color="rgba(155, 135, 245, 0.3)"
              data-text-color="rgba(255, 193, 203, 1)"
              data-font="Press Start 2P"
              data-auto-style="false"
              data-button-label-capitalization="lowercase"
              data-header-capitalization="lowercase"
              data-location-capitalization="lowercase"
              data-venue-capitalization="lowercase"
              data-display-local-dates="true"
              data-local-dates-position="tab"
              data-display-past-dates="true"
              data-display-details="false"
              data-display-lineup="false"
              data-display-start-time="false"
              data-social-share-icon="false"
              data-display-limit="all"
              data-date-format="MMM. D, YYYY"
              data-date-orientation="horizontal"
              data-date-border-color="#9b87f5"
              data-date-border-width="1px"
              data-date-capitalization="lowercase"
              data-date-border-radius="0px"
              data-event-ticket-cta-size="medium"
              data-event-custom-ticket-text=""
              data-event-ticket-text="tickets"
              data-event-ticket-icon="false"
              data-event-ticket-cta-text-color="rgba(19, 18, 26, 1)"
              data-event-ticket-cta-bg-color="rgba(155, 135, 245, 1)"
              data-event-ticket-cta-border-color="rgba(155, 135, 245, 1)"
              data-event-ticket-cta-border-width="0px"
              data-event-ticket-cta-border-radius="0px"
              data-sold-out-button-text-color="rgba(255, 193, 203, 1)"
              data-sold-out-button-background-color="rgba(19, 18, 26, 0.5)"
              data-sold-out-button-border-color="rgba(255, 193, 203, 0.5)"
              data-sold-out-button-clickable="true"
              data-event-rsvp-position="left"
              data-event-rsvp-cta-size="medium"
              data-event-rsvp-only-show-icon="false"
              data-event-rsvp-text="rsvp"
              data-event-rsvp-icon="false"
              data-event-rsvp-cta-text-color="rgba(155, 135, 245, 1)"
              data-event-rsvp-cta-bg-color="rgba(19, 18, 26, 0.8)"
              data-event-rsvp-cta-border-color="rgba(155, 135, 245, 0.5)"
              data-event-rsvp-cta-border-width="1px"
              data-event-rsvp-cta-border-radius="0px"
              data-follow-section-position="top"
              data-follow-section-alignment="center"
              data-follow-section-header-text="get updates on new shows, new music, and more"
              data-follow-section-cta-size="medium"
              data-follow-section-cta-text="follow"
              data-follow-section-cta-icon="false"
              data-follow-section-cta-text-color="rgba(19, 18, 26, 1)"
              data-follow-section-cta-bg-color="rgba(155, 135, 245, 1)"
              data-follow-section-cta-border-color="rgba(155, 135, 245, 1)"
              data-follow-section-cta-border-width="0px"
              data-follow-section-cta-border-radius="0px"
              data-play-my-city-position="bottom"
              data-play-my-city-alignment="center"
              data-play-my-city-header-text="don't see a show near you?"
              data-play-my-city-cta-size="medium"
              data-play-my-city-cta-text="request a show"
              data-play-my-city-cta-icon="false"
              data-play-my-city-cta-text-color="rgba(19, 18, 26, 1)"
              data-play-my-city-cta-bg-color="rgba(155, 135, 245, 1)"
              data-play-my-city-cta-border-color="rgba(155, 135, 245, 1)"
              data-play-my-city-cta-border-width="0px"
              data-play-my-city-cta-border-radius="0px"
              data-language="en"
              data-layout-breakpoint="900"
              data-app-id="js_e7788911-f441-44f5-8ade-039a101a9f21"
              data-bit-logo-position="bottomRight"
              data-bit-logo-color="rgba(155, 135, 245, 0.7)"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add Window interface extension to handle BIT global
declare global {
  interface Window {
    BIT?: {
      init: () => void;
    };
  }
}

export default TourSection;
