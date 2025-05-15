
import React from 'react';
import { Headphones, ExternalLink } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface MusicTrack {
  id: number;
  title: string;
  type: 'album' | 'single';
  artworkUrl: string;
}

const MusicSection = () => {
  const tracks: MusicTrack[] = [
    { 
      id: 4, 
      title: "tyler", 
      type: 'single',
      artworkUrl: "https://i1.sndcdn.com/artworks-uv093WqyT4NnSfJy-IjUPUA-t1080x1080.jpg" 
    },
    { 
      id: 3, 
      title: "valentine's day", 
      type: 'single',
      artworkUrl: "https://i1.sndcdn.com/artworks-fhFHobCCJOoPubgX-WQZzCQ-t1080x1080.jpg" 
    },
    { 
      id: 2, 
      title: "voicemail", 
      type: 'single',
      artworkUrl: "https://i1.sndcdn.com/artworks-rCyvgbpj05XUwip5-3fFt5A-t500x500.jpg" 
    },
    { 
      id: 1, 
      title: "voicemail + the lost transmissions", 
      type: 'album',
      artworkUrl: "https://i1.sndcdn.com/artworks-9vbko426eBsqGS2B-0baaMg-t500x500.jpg" 
    },
  ];

  return (
    <section className="pixel-section">
      <h2 className="pixel-section-title font-jacquard text-[52px] animate-pulse">music ✧</h2>
      
      <div className="w-full max-w-2xl pb-6">
        <Carousel className="relative px-10">
          <CarouselContent>
            {tracks.map((track) => (
              <CarouselItem key={track.id} className="transition-all duration-300 py-4 px-2">
                <div className="flex flex-col items-center overflow-visible h-full">
                  <div className="w-40 h-40 bg-pixel-purple mb-4 flex items-center justify-center shadow-[0_0_15px_rgba(155,135,245,0.3)] overflow-hidden">
                    <AspectRatio ratio={1 / 1} className="h-full w-full">
                      <img 
                        src={track.artworkUrl} 
                        alt={`${track.title} artwork`} 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                  
                  <h3 className="text-soft-pink text-center mb-1">
                    {track.title}
                  </h3>
                  <p className="text-xs text-pixel-purple mb-2">
                    {track.type === 'album' ? 'album' : 'single'}
                  </p>
                  <div className="flex gap-4 mt-3">
                    <button className="pixel-button text-xs px-3 py-1">✧ listen</button>
                    <button className="pixel-button text-xs px-3 py-1">✧ buy</button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-2 md:-left-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-pixel-purple hover:text-soft-pink shadow-none opacity-100 transition-transform hover:scale-110" />
          <CarouselNext className="absolute -right-2 md:-right-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-pixel-purple hover:text-soft-pink shadow-none opacity-100 transition-transform hover:scale-110" />
        </Carousel>
      </div>
      
      <div className="mt-6 py-4 border-t border-b border-pixel-purple/30 text-center max-w-md mx-auto hover:border-pixel-purple/60 transition-all duration-300">
        <p className="text-soft-pink text-sm mb-3 px-4">
          stream or buy "voicemail + the lost transmissions"
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="https://open.spotify.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-pixel-purple hover:text-soft-pink transition-all duration-300 hover:-translate-y-1"
          >
            <button className="pixel-button inline-flex items-center gap-2">
              <Headphones size={14} />
              <span className="text-xs">stream</span>
            </button>
          </a>
          <a 
            href="https://bandcamp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-pixel-purple hover:text-soft-pink transition-all duration-300 hover:-translate-y-1"
          >
            <button className="pixel-button inline-flex items-center gap-2">
              <ExternalLink size={14} />
              <span className="text-xs">buy</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
