
import React from 'react';
import { ChevronLeft, ChevronRight, Disc, ShoppingBag } from 'lucide-react';

interface MerchItem {
  id: number;
  name: string;
  image: string;
  type: string;
}

const MerchSection = () => {
  const merchItems: MerchItem[] = [
    { 
      id: 1, 
      name: "voicemail + the lost transmissions vinyl", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "vinyl"
    },
    { 
      id: 2, 
      name: "voicemail cd", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "cd" 
    },
    { 
      id: 3, 
      name: "richard died,\njanuary killed\nhim - tote bag", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "merch"
    }
  ];

  const [currentItem, setCurrentItem] = React.useState(0);

  const prevItem = () => {
    setCurrentItem(curr => (curr - 1 + merchItems.length) % merchItems.length);
  };
  
  const nextItem = () => {
    setCurrentItem(curr => (curr + 1) % merchItems.length);
  };

  const renderItemIcon = (type: string) => {
    switch(type) {
      case 'vinyl':
      case 'cd':
        return <Disc size={24} className="mb-2 text-soft-pink" />;
      default:
        return <ShoppingBag size={24} className="mb-2 text-soft-pink" />;
    }
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
          <div className="w-48 h-48 mb-4 flex flex-col items-center justify-center">
            {renderItemIcon(merchItems[currentItem].type)}
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
