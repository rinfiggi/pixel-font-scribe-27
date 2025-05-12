import React from 'react';
import { ChevronLeft, ChevronRight, Disc, ShoppingBag } from 'lucide-react';

interface MerchItem {
  id: number;
  name: string;
  image: string;
  type: string;
  priority: number;
  price: string;
}

const MerchSection = () => {
  const merchItems: MerchItem[] = [
    { 
      id: 1, 
      name: "voicemail + the lost transmissions vinyl", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "vinyl",
      priority: 1,
      price: "€22.99"
    },
    { 
      id: 2, 
      name: "voicemail vinyl", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "vinyl",
      priority: 2,
      price: "€17.99"
    },
    { 
      id: 3, 
      name: "voicemail + the lost transmissions cd", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "cd",
      priority: 3,
      price: "€11.99"
    },
    { 
      id: 4, 
      name: "voicemail cd", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "cd",
      priority: 4,
      price: "€8.99"
    },
    { 
      id: 5, 
      name: "richard died,\njanuary killed\nhim - tote bag", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "merch",
      priority: 5,
      price: "€14.99"
    }
  ];

  // Sort items by priority
  const sortedItems = [...merchItems].sort((a, b) => a.priority - b.priority);

  const [currentItem, setCurrentItem] = React.useState(0);

  const prevItem = () => {
    setCurrentItem(curr => (curr - 1 + sortedItems.length) % sortedItems.length);
  };
  
  const nextItem = () => {
    setCurrentItem(curr => (curr + 1) % sortedItems.length);
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
            {renderItemIcon(sortedItems[currentItem].type)}
            <img 
              src={sortedItems[currentItem].image} 
              alt={`${sortedItems[currentItem].name} merch`} 
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-soft-pink text-center mb-2 whitespace-pre-line">
            {sortedItems[currentItem].name}
          </p>
          <p className="text-pixel-purple text-center mb-4">
            {sortedItems[currentItem].price}
          </p>
          <button className="pixel-button">buy ✧</button>
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
