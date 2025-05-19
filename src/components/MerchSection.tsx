
import React from 'react';
import { Disc, ShoppingBag } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
      name: ""the lost transmissions" vinyl", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "vinyl",
      priority: 1,
      price: "€22.99 (tax. excluded)"
    },
    { 
      id: 2, 
      name: ""the lost transmissions" vinyl" + booklet, 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "vinyl",
      priority: 2,
      price: "€33.90"
    },
    { 
      id: 3, 
      name: ""voicemail + the lost\ntransmissions" cd + booklet", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "cd",
      priority: 3,
      price: "€15.40"
    },
    { 
      id: 4, 
      name: ""voicemail" cd", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "cd",
      priority: 4,
      price: "€13.90"
    },
    { 
      id: 6, 
      name: "richard died,\njanuary killed\nhim - tote bag", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "merch",
      priority: 5,
      price: "€10.00"
    }
      { 
      id: 5, 
      name: ""voicemail" vinyl", 
      image: "/lovable-uploads/0692eb72-664b-422c-913c-e01d00745392.png",
      type: "merch",
      priority: 5,
      price: "€33.90"
    }
  ];

  // Sort items by priority
  const sortedItems = [...merchItems].sort((a, b) => a.priority - b.priority);

  const renderItemIcon = (type: string) => {
    switch(type) {
      case 'vinyl':
      case 'cd':
        return <Disc size={24} className="mb-2 text-soft-pink animate-spin-slow" />;
      default:
        return <ShoppingBag size={24} className="mb-2 text-soft-pink animate-pulse" />;
    }
  };

  return (
    <section className="pixel-section">
      <h2 className="pixel-section-title font-jacquard text-[52px] animate-pulse">merch</h2>

      <div className="w-full max-w-2xl pb-6">
        <Carousel className="relative px-10">
          <CarouselContent>
            {sortedItems.map((item) => (
              <CarouselItem key={item.id} className="transition-all duration-300 py-4 px-2">
                <div className="flex flex-col items-center overflow-visible h-full">
                  <div className="w-40 h-40 mb-4 flex flex-col items-center justify-center bg-pixel-purple/10">
                    {renderItemIcon(item.type)}
                    <img 
                      src={item.image} 
                      alt={`${item.name} merch`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-soft-pink text-center mb-2 whitespace-pre-line">
                    {item.name}
                  </p>
                  <p className="text-pixel-purple text-center mb-4 animate-pulse">
                    {item.price}
                  </p>
                  <button className="pixel-button transition-all">buy ✧</button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-2 md:-left-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-pixel-purple hover:text-soft-pink shadow-none opacity-100 transition-transform hover:scale-110" />
          <CarouselNext className="absolute -right-2 md:-right-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-pixel-purple hover:text-soft-pink shadow-none opacity-100 transition-transform hover:scale-110" />
        </Carousel>
      </div>
    </section>
  );
};

export default MerchSection;
