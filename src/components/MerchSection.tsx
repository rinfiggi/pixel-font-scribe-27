
import React from 'react';

const MerchSection = () => {
  return (
    <section className="pixel-section">
      <h2 className="pixel-section-title">merch</h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center max-w-xs">
          <div className="w-48 h-48 mb-4">
            <img 
              src="/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png" 
              alt="Tote bag merch" 
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-dark-purple text-center mb-4">
            richard died,<br/>
            january killed<br/>
            him - tote bag
          </p>
          <button className="pixel-button">BUY</button>
        </div>
      </div>
    </section>
  );
};

export default MerchSection;
