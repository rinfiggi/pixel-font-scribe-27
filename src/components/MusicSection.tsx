
import React, { useEffect } from 'react';
import { Headphones, ExternalLink, Disc } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
      <h2 className="pixel-section-title font-jacquard text-[52px]">music ✧</h2>
      
      <div className="w-full max-w-2xl">
        <Carousel className="relative">
          <CarouselContent>
            {tracks.map((track) => (
              <CarouselItem key={track.id}>
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 bg-pixel-purple mb-4 flex items-center justify-center">
                    <Disc size={32} className="text-dark-purple" />
                  </div>
                  
                  <h3 className="text-soft-pink text-center mb-1">
                    {track.title} {track.isDemo && "(demo)"}
                  </h3>
                  <p className="text-xs text-pixel-purple mb-2">
                    {track.type === 'album' ? 'album' : 
                     track.type === 'single' ? 'single' : 'demo'}
                  </p>
                  <div className="flex gap-4 mt-3">
                    <a href="#listen" className="text-xs text-pixel-purple underline hover:text-soft-pink">✧ listen</a>
                    <a href="#buy" className="text-xs text-pixel-purple underline hover:text-soft-pink">✧ buy</a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-pixel-purple hover:text-soft-pink shadow-none" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-pixel-purple hover:text-soft-pink shadow-none" />
        </Carousel>
      </div>
      
      <div className="mt-12 py-4 border-t border-b border-pixel-purple/30 text-center max-w-md mx-auto">
        <p className="text-soft-pink text-sm mb-3 px-4">
          stream or buy "voicemail + the lost transmissions"
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="https://open.spotify.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-pixel-purple hover:text-soft-pink"
          >
            <Headphones size={14} />
            <span className="text-xs">stream</span>
          </a>
          <a 
            href="https://bandcamp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-pixel-purple hover:text-soft-pink"
          >
            <ExternalLink size={14} />
            <span className="text-xs">buy</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
