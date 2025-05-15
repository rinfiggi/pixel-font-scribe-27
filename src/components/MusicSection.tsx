
import React from 'react';
import { Headphones, ExternalLink, Disc } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface MusicTrack {
  id: number;
  title: string;
  isDemo: boolean;
  type: 'album' | 'single' | 'demo';
}

const MusicSection = () => {
  const tracks: MusicTrack[] = [
    { id: 4, title: "tyler", isDemo: false, type: 'single' },
    { id: 3, title: "valentine's day", isDemo: false, type: 'single' },
    { id: 2, title: "voicemail + the lost transmissions", isDemo: false, type: 'album' },
    { id: 1, title: "i'd like to know if you're happy", isDemo: true, type: 'demo' },
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
                  <div className="w-40 h-40 bg-pixel-purple mb-4 flex items-center justify-center shadow-[0_0_15px_rgba(155,135,245,0.3)]">
                    <Disc size={32} className="text-dark-purple animate-spin-slow" />
                  </div>
                  
                  <h3 className="text-soft-pink text-center mb-1">
                    {track.title} {track.isDemo && "(demo)"}
                  </h3>
                  <p className="text-xs text-pixel-purple mb-2">
                    {track.type === 'album' ? 'album' : 
                     track.type === 'single' ? 'single' : 'demo'}
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
