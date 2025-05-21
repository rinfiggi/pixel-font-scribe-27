
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const merchSubtitleStyle: React.CSSProperties = {
  fontSize: "1.12rem",
  lineHeight: "1.23",
  fontWeight: 400,
  letterSpacing: "0.015em",
  marginBottom: "0.3rem",
  marginTop: "-6px",
  textAlign: "center",
  maxWidth: "32rem",
  fontFamily: "'Jacquard 12', 'Press Start 2P', cursive, serif",
  color: "#6741a6", // Scuro rispetto al merch (pixel-purple)
  textTransform: "lowercase"
};

const taxExcludedStyle: React.CSSProperties = {
  color: "#b397df",
  fontSize: "1rem",
  marginTop: "-1.05rem",
  marginBottom: "1.08rem",
  textAlign: "center",
  fontFamily: "'Jacquard 12', serif",
  letterSpacing: "0.005em"
};

interface MerchItem {
  id: number;
  name: string;
  image: string;
  type: string;
  priority: number;
  price: string;
  buyUrl: string;
}

const MerchSection = () => {
  const merchItems: MerchItem[] = [
    { 
      id: 1, 
      name: '"the lost transmissions" vinyl', 
      image: "/lovable-uploads/fc4acd92-53f9-4b64-8439-b8031768b70c.png", // tls vinyl.png
      type: "vinyl",
      priority: 1,
      price: "€27.90 (tax excluded)",
      buyUrl: "https://elasticstage.com/rinfiggi/releases/the-lost-transmissions-singleep"
    },
    { 
      id: 2, 
      name: '"the lost transmissions" vinyl + booklet', 
      image: "/lovable-uploads/fc4acd92-53f9-4b64-8439-b8031768b70c.png", // stessa immagine del vinyl base
      type: "vinyl",
      priority: 2,
      price: "€33.90 (tax excluded)",
      buyUrl: "https://elasticstage.com/rinfiggi/releases/the-lost-transmissions-singleep"
    },
    { 
      id: 3, 
      name: '"voicemail + the lost transmissions" cd + booklet', 
      image: "/lovable-uploads/59647938-a718-498e-bcc7-75c190b0d860.png", 
      type: "cd",
      priority: 3,
      price: "€15.40 (tax excluded)",
      buyUrl: "https://elasticstage.com/rinfiggi/releases/voicemail-album"
    },
    { 
      id: 4, 
      name: '"voicemail" cd', 
      image: "/lovable-uploads/9d89d8d1-15a7-4e63-891b-6fde46daf2db.png", 
      type: "cd",
      priority: 4,
      price: "€13.90 (tax excluded)",
      buyUrl: "https://elasticstage.com/rinfiggi/releases/voicemail-album"
    },
    { 
      id: 5, 
      name: '"voicemail" vinyl', 
      image: "/lovable-uploads/bf767b34-63bd-4240-bb96-9adb0e11aa1e.png", 
      type: "vinyl",
      priority: 5,
      price: "€33.90 (tax excluded)",
      buyUrl: "https://elasticstage.com/rinfiggi/releases/voicemail-album"
    },
    { 
      id: 6, 
      name: 'richard died, january killed him – tote bag', 
      image: "/lovable-uploads/5bb2e238-cb43-493f-8054-12d008bc78bc.png", // USO QUELLO INVIATO
      type: "merch",
      priority: 6,
      price: "€10.00 (tax excluded)",
      buyUrl: "https://shardfactory.com/shop/voicemail_totebag/"
    }
  ];

  const sortedItems = [...merchItems].sort((a, b) => a.priority - b.priority);

  return (
    <section className="pixel-section merch-section">
      <h2 className="pixel-section-title font-jacquard text-[52px] animate-pulse lowercase">merch</h2>
      <p className="merch-lower-sub" style={merchSubtitleStyle}>
        purchases are completed on external partner sites.<br />extra shipping or tax fees may apply.
      </p>
      <div className="merch-tax-excluded" style={taxExcludedStyle}>
        tax excluded
      </div>
      <div className="w-full max-w-2xl pb-6">
        <Carousel className="relative px-3 sm:px-10">
          <CarouselContent>
            {sortedItems.map((item) => (
              <CarouselItem key={item.id} className="transition-all duration-300 py-4 px-2">
                <div className="flex flex-col items-center overflow-visible h-full">
                  <img 
                    src={item.image} 
                    alt={`${item.name} merch`} 
                    style={{
                      width: '182px',
                      height: '182px',
                      objectFit: 'contain',
                      display: 'block',
                      border: 'none',
                      borderRadius: 0,
                      margin: 0,
                      boxShadow: 'none',
                      background: 'none'
                    }}
                  />
                  <p className="text-soft-pink text-center mb-2 whitespace-pre-line lowercase text-[15px] sm:text-base">
                    {item.name}
                  </p>
                  <p className="text-pixel-purple text-center mb-4 animate-pulse lowercase">
                    {item.price}
                  </p>
                  <a
                    href={item.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-button transition-all text-xs px-5 py-2 lowercase"
                    style={{ color: "#FFF" }}
                  >
                    buy ✧
                  </a>
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
