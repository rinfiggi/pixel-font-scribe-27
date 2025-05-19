import React, { useEffect } from 'react';

const BandsintownWidgetStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .bit-html-export {
        width: 100%;
        background: transparent;
        color: #ffc1cb;
        font-size: 15px;
        text-transform: lowercase;
        line-height: 1.6;
        transition: all 0.3s ease;
      }

      .bit-table {
        width: 100%;
        transition: all 0.3s ease;
        border-spacing: 0 12px;
      }

      .bit-table td {
        padding: 14px 10px;
        vertical-align: top;
        line-height: 1.6;
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

      .bit-no-dates-container {
        display: none !important;
      }

      .bit-local-dates-button {
        text-transform: lowercase !important;
        font-size: 22px !important;
        transition: color 0.3s ease, transform 0.2s ease;
        margin: 20px 0;
        padding: 10px 0;
        line-height: 1.6;
      }

      .bit-local-dates-button:hover {
        color: #ffc1cb !important;
        transform: translateY(-1px);
      }

      .bit-event-list-container {
        line-height: 1.6 !important;
        letter-spacing: 0.03em;
      }

      .bit-follow-section-header-text {
        font-size: 22px !important;
        line-height: 1.6 !important;
        margin-bottom: 16px;
      }

      .bit-button {
        transition: all 0.3s ease;
        margin: 8px 0;
        padding: 6px 12px;
      }

      .bit-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(155, 135, 245, 0.3);
      }

      .bit-event-row td {
        padding-top: 20px;
        padding-bottom: 20px;
        line-height: 1.6;
      }

      .bit-venue,
      .bit-date,
      .bit-location {
        display: block;
        line-height: 1.6 !important;
        margin-bottom: 6px;
      }

      /* spazio extra sotto ogni evento */
      .bit-event-row {
        margin-bottom: 24px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default BandsintownWidgetStyles;
