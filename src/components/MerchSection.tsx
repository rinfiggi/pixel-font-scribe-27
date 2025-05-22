
import React, { useState } from 'react';
import { Disc, ShoppingBag } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const merchSubtitleStyle: React.CSSProperties = {
  fontSize: "1.15rem",
  lineHeight: "1.08",
  fontWeight: 400,
  letterSpacing: "0.015em",
  marginBottom: "1.1rem",
  marginTop: "-7px",
  textAlign: "center",
  maxWidth: "32rem",
  fontFamily: "'Jacquard 12', serif, cursive",
  color: "#674dbe",
  textTransform: "lowercase"
};

interface MerchItem {
  id: number;
  name: string;
  image: string;
  type: string;
  priority: number;
  price: string;
  buyUrl: string;
  subtitle?: string;
}

const redirectMessages = [
  "the final touch happens elsewhere — taking you there now ✧₊˚｡",
  "you’re being redirected to complete this moment — don’t blink ☆彡"
];

const getRandomRedirectMsg = () => {
  const idx = Math.floor(Math.random() * redirectMessages.length);
  return redirectMessages[idx];
};

const MerchSection = () => {
  const [redirectingId, setRedirectingId] = useState<number | null>(null);
  const { toast } = useToast();

  const merchItems: MerchItem[] = [
    {
      id: 1,
      name: '"the lost transmissions" vinyl',
      image: "/lovable-uploads/fc4acd92-53f9-4b64-8439-b8031768b70c.png",
      type: "vinyl",
      priority: 1,
      price: "€27.90",
      subtitle: "tax excluded",
      buyUrl: "https://elasticstage.com/rinfiggi/releases/the-lost-transmissions-singleep"
    },
    {
      id: 2,
      name: '"the lost transmissions" vinyl + booklet',
      image: "/lovable-uploads/fc4acd92-53f9-4b64-8439-b8031768b70c.png",
      type: "vinyl",
      priority: 2,
      price: "€33.90",
      subtitle: "tax excluded",
      buyUrl: "https://elasticstage.com/rinfiggi/releases/the-lost-transmissions-singleep"
    },
    {
      id: 3,
      name: '"voicemail + the lost transmissions" cd + booklet',
      image: "/lovable-uploads/59647938-a718-498e-bcc7-75c190b0d860.png",
      type: "cd",
      priority: 3,
      price: "€15.40",
      subtitle: "tax excluded",
      buyUrl: "https://elasticstage.com/rinfiggi/releases/voicemail-album"
    },
    {
      id: 4,
      name: '"voicemail" cd',
      image: "/lovable-uploads/9d89d8d1-15a7-4e63-891b-6fde46daf2db.png",
      type: "cd",
      priority: 4,
      price: "€13.90",
      subtitle: "tax excluded",
      buyUrl: "https://elasticstage.com/rinfiggi/releases/voicemail-album"
    },
    {
      id: 5,
      name: '"voicemail" vinyl',
      image: "/lovable-uploads/bf767b34-63bd-4240-bb96-9adb0e11aa1e.png",
      type: "vinyl",
      priority: 5,
      price: "€33.90",
      subtitle: "tax excluded",
      buyUrl: "https://elasticstage.com/rinfiggi/releases/voicemail-album"
    },
    {
      id: 6,
      name: 'richard died, january killed him – tote bag',
      image: "/lovable-uploads/tote%20bag_nobg.png", // tote bag_nobg.png as per your request
      type: "merch",
      priority: 6,
      price: "€10.00",
      subtitle: "tax excluded",
      buyUrl: "https://shardfactory.com/shop/voicemail_totebag/"
    }
  ];

  const sortedItems = [...merchItems].sort((a, b) => a.priority - b.priority);

  // Custom handlers for arrows placement
  const arrowClass =
    "absolute top-1/2 transform -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-pixel-purple hover:text-soft-pink shadow-none opacity-100 transition-transform hover:scale-110 z-10";
  const arrowMobileOffset = "left-[-28px] md:-left-4";
  const arrowMobileOffsetRight = "right-[-28px] md:-right-4";

  const handleBuy = (url: string, id: number) => {
    setRedirectingId(id);
    toast({
      title: "redirecting...",
      description: getRandomRedirectMsg(),
      duration: 2200,
    });
    setTimeout(() => {
      window.open(url, "_blank", "noopener noreferrer");
      setRedirectingId(null);
    }, 1600);
  };

  return (
    <section className="pixel-section">
      <h2 className="pixel-section-title font-jacquard text-[min(16vw,66px)] sm:text-[66px] animate-pulse lowercase">
        merch
      </h2>
      <p className="merch-lower-sub" style={merchSubtitleStyle}>
        purchases are completed on external partner sites.<br />extra shipping or tax fees may apply.
      </p>
      <div className="w-full max-w-2xl pb-6">
        <Carousel className="relative px-3 sm:px-10">
          <CarouselContent>
            {sortedItems.map((item) => (
              <CarouselItem key={item.id} className="transition-all duration-300 py-4 px-1 sm:px-2">
                <div className="flex flex-col items-center overflow-visible h-full">
                  <div
                    className="mb-4 flex flex-col items-center justify-center"
                    style={{
                      borderRadius: 0,
                      overflow: 'visible'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={`${item.name} merch`}
                      className="object-contain"
                      style={{
                        width: '210px',
                        height: '210px',
                        objectFit: 'contain',
                        display: 'block',
                        border: 'none',
                        borderRadius: 0,
                        margin: 0
                      }}
                    />
                  </div>
                  <p className="text-soft-pink text-center mb-2 whitespace-pre-line lowercase text-[15px] sm:text-base">
                    {item.name}
                  </p>
                  <div className="flex flex-col items-center mb-4">
                    <span className="text-pixel-purple text-center animate-pulse lowercase text-lg font-semibold">{item.price}</span>
                    <span className="text-xs text-[#674dbe] -mt-0.5">{item.subtitle}</span>
                  </div>
                  <Button
                    onClick={() => handleBuy(item.buyUrl, item.id)}
                    className={`pixel-button transition-all duration-300 text-xs px-5 py-2 lowercase hover:-translate-y-1 h-12 min-w-[140px] ${
                      redirectingId === item.id ? "opacity-60 pointer-events-none" : ""
                    }`}
                    disabled={redirectingId === item.id}
                  >
                    buy ✧
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={`${arrowClass} ${arrowMobileOffset}`} />
          <CarouselNext className={`${arrowClass} ${arrowMobileOffsetRight}`} />
        </Carousel>
      </div>
    </section>
  );
};

export default MerchSection;
