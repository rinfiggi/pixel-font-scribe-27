
import React from 'react';

const TourSection = () => {
  return (
    <section className="pixel-section">
      <h2 className="pixel-section-title">tour</h2>
      <div className="max-w-md w-full text-center text-dark-purple text-sm mx-auto">
        <p>
          no tour dates rn but we're
          cooking up something cool.
          follow me on social media and
          join the newsletter if you want
          to be the first to know when i'm back on
          stage.
        </p>
        <div className="mt-8">
          <button className="pixel-button">JOIN THE MAILING LIST</button>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
