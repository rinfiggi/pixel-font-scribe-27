
import React from 'react';
import { Headphones, ExternalLink } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface MusicTrack {
  id: number;
  title: string;
  type: 'album' | 'album deluxe' | 'single';
  artworkUrl: string;
  streamUrl: string;
  buyUrl: string;
}

// Prima traccia: voicemail + the lost transmissions (album deluxe)
// Voicemail (album)
const tracks: MusicTrack[] = [
  {
    id: 1,
    title: "voicemail + the lost transmissions",
    type: 'album deluxe',
    artworkUrl: "https://i1.sndcdn.com/artworks-9vbko426eBsqGS2B-0baaMg-t500x500.jpg",
    streamUrl: "https://ffm.to/vm_deluxe",
    buyUrl: "https://rinfiggi.bandcamp.com"
  },
  {
    id: 4,
    title: "tyler",
    type: 'single',
    artworkUrl: "https://i1.sndcdn.com/artworks-uv093WqyT4NnSfJy-IjUPUA-t1080x1080.jpg",
    streamUrl: "https://open.spotify.com/album/29E3nEDliBUe8mpovqOXk3?si=LvaEAFVyS5qaATcCCpp7zA",
    buyUrl: "https://music.apple.com/it/album/tyler-single/1618332151"
  },
  {
    id: 3,
    title: "valentine's day",
    type: 'single',
    artworkUrl: "https://i1.sndcdn.com/artworks-fhFHobCCJOoPubgX-WQZzCQ-t1080x1080.jpg",
    streamUrl: "https://open.spotify.com/album/09jFfc9iEelO6lcjixnJxW?si=g0mupphkQyKuIU76lcNtrg",
    buyUrl: "https://music.apple.com/it/album/valentines-day-single/1609579002"
  },
  {
    id: 2,
    title: "voicemail",
    type: 'album',
    artworkUrl: "https://i1.sndcdn.com/artworks-rCyvgbpj05XUwip5-3fFt5A-t500x500.jpg",
    streamUrl: "https://open.spotify.com/album/3zIU5sA3UYx580CVVWCDta?si=1J-djPkRQ0CsuucxtskBCw",
    buyUrl: "https://rinfiggi.bandcamp.com"
  }
];

const MusicSection = () => {
  return <section className="pixel-section">
    <h2 className="pixel-section-title font-jacquard text-[52px] animate-pulse">music ✧</h2>
    <div className="w-full max-w-2xl pb-6">
      <Carousel className="relative px-3 sm:px-10">
        <CarouselContent>
          {tracks.map(track => <CarouselItem key={track.id} className="transition-all duration-300 py-4 px-1 sm:px-2">
            <div className="flex flex-col items-center overflow-visible h-full">
              <div className="w-40 h-40 bg-pixel-purple mb-4 flex items-center justify-center shadow-[0_0_15px_rgba(155,135,245,0.3)] overflow-hidden">
                <AspectRatio ratio={1 / 1} className="h-full w-full">
                  <img src={track.artworkUrl} alt={`${track.title} artwork`} className="object-cover w-full h-full" />
                </AspectRatio>
              </div>
              <h3 className="text-soft-pink text-center mb-1">
                {track.title}
              </h3>
              <p className="text-xs text-pixel-purple mb-2">
                {track.type}
              </p>
              <div className="flex gap-4 mt-3">
                <a href={track.streamUrl} target="_blank" rel="noopener noreferrer" className="pixel-button text-xs px-3 py-1 inline-block transition-all duration-300 hover:-translate-y-1" style={{ color: "#FFF" }}>
                  ✧ listen
                </a>
                <a href={track.buyUrl} target="_blank" rel="noopener noreferrer" className="pixel-button text-xs px-3 py-1 inline-block transition-all duration-300 hover:-translate-y-1" style={{ color: "#FFF" }}>
                  ✧ buy
                </a>
              </div>
            </div>
          </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-2 md:-left-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-pixel-purple hover:text-soft-pink shadow-none opacity-100 transition-transform hover:scale-110" />
        <CarouselNext className="absolute -right-2 md:-right-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-pixel-purple hover:text-soft-pink shadow-none opacity-100 transition-transform hover:scale-110" />
      </Carousel>
    </div>
    <div className="mt-6 py-4 border-t border-b border-pixel-purple/30 max-w-md mx-auto px-0 text-center md:flex md:flex-col md:items-center md:justify-center">
      <p className="text-soft-pink text-sm mb-3 px-4 md:text-center mx-auto">
        stream or buy "voicemail + the lost transmissions"
      </p>
      <div className="flex justify-center gap-4 flex-wrap mb-2">
        <a href="https://ffm.to/vm_deluxe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-pixel-purple hover:text-soft-pink transition-all duration-300 hover:-translate-y-1">
          <button className="pixel-button inline-flex items-center gap-2" style={{ color: "#FFF" }}>
            <Headphones size={14} />
            <span className="text-xs">stream</span>
          </button>
        </a>
        <a href="https://rinfiggi.bandcamp.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-pixel-purple hover:text-soft-pink transition-all duration-300 hover:-translate-y-1">
          <button className="pixel-button inline-flex items-center gap-2" style={{ color: "#FFF" }}>
            <ExternalLink size={14} />
            <span className="text-xs">buy</span>
          </button>
        </a>
      </div>
      <div className="flex flex-wrap gap-2 justify-center text-xs mb-1"></div>
    </div>
  </section>;
};
export default MusicSection;

