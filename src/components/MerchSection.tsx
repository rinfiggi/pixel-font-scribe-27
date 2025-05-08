
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MerchItem {
  id: number;
  name: string;
  image: string;
}

const MerchSection = () => {
  const merchItems: MerchItem[] = [
    { 
      id: 1, 
      name: "richard died,\njanuary killed\nhim - tote bag", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png" 
    },
    { 
      id: 2, 
      name: "pixel shirt", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png" 
    }
  ];

  const [currentItem, setCurrentItem] = React.useState(0);

  const prevItem = () => {
    setCurrentItem(curr => (curr - 1 + merchItems.length) % merchItems.length);
  };
  
  const nextItem = () => {
    setCurrentItem(curr => (curr + 1) % merchItems.length);
  };

  return (
    <section className="pixel-section">
      <h2 className="pixel-section-title">merch</h2>

      <div className="w-full max-w-2xl flex items-center justify-center">
        <button 
          onClick={prevItem}
          className="p-4 text-pixel-purple hover:text-soft-pink"
          aria-label="previous merch item"
        >
          <ChevronLeft size={32} />
        </button>
        
        <div className="flex-grow flex flex-col items-center max-w-xs">
          <div className="w-48 h-48 mb-4">
            <img 
              src={merchItems[currentItem].image} 
              alt={`${merchItems[currentItem].name} merch`} 
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-soft-pink text-center mb-4 whitespace-pre-line">
            {merchItems[currentItem].name}
          </p>
          <button className="pixel-button">buy</button>
        </div>
        
        <button 
          onClick={nextItem}
          className="p-4 text-pixel-purple hover:text-soft-pink"
          aria-label="next merch item"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default MerchSection;
