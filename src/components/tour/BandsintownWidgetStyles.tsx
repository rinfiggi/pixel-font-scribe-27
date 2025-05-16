
import React from 'react';

const BandsintownWidgetStyles = () => {
  return (
    <style>
      {`
        .bit-html-export {
          width: 100%;
          background: transparent;
          font-family: "Jacquard 12", serif;
          color: #ffc1cb;
          font-size: 15px;
          text-transform: lowercase;
          line-height: 1.2;
          transition: all 0.3s ease;
        }
        .bit-table {
          width: 100%;
          transition: all 0.3s ease;
        }
        .bit-table td {
          padding: 14px 10px;
          vertical-align: middle;
          transition: all 0.2s ease;
        }
        .bit-table tr {
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .bit-table tr:hover {
          background-color: rgba(155, 135, 245, 0.2) !important;
          transform: translateY(-2px);
        }
        .bit-table a {
          color: #9b87f5;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .bit-table a:hover {
          color: #ffc1cb;
          transform: translateY(-1px);
        }
        .bit-table tr:nth-of-type(2n) {
          background: rgba(155, 135, 245, 0.1);
        }
        .bit-table .bit-cta {
          text-align: center;
          width: 25%;
        }
        /* Hide "no upcoming events" message */
        .bit-no-dates-container, .bit-no-dates-text {
          display: none !important;
        }
        /* Make past shows lowercase */
        .bit-local-dates-button {
          text-transform: lowercase !important;
          font-family: "Jacquard 12", serif !important;
          font-size: 22px !important;
          transition: color 0.3s ease, transform 0.2s ease;
          margin: 12px 0;
          padding: 8px 0;
        }
        .bit-local-dates-button:hover {
          color: #ffc1cb !important;
          transform: translateY(-1px);
        }
        /* Additional line height for better readability */
        .bit-event-list-container {
          line-height: 1.2;
          letter-spacing: 0.05em;
        }
        /* Update font for specific elements */
        .bit-follow-section-header-text, .bit-no-dates-text {
          font-family: "Jacquard 12", serif !important;
          font-size: 22px !important;
        }
        /* Add animation to ticket buttons */
        .bit-button {
          transition: all 0.3s ease !important;
          margin: 5px 0 !important;
          padding: 6px 12px !important;
        }
        .bit-button:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 8px rgba(155, 135, 245, 0.3) !important;
        }
        /* Add spacing between rows */
        .bit-event-row td {
          padding-top: 16px !important;
          padding-bottom: 16px !important;
        }
        /* Add spacing between content */
        .bit-venue, .bit-date, .bit-location {
          margin: 8px 0 !important;
        }
      `}
    </style>
  );
};

export default BandsintownWidgetStyles;
