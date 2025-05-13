
import React from 'react';
import { ChevronLeft, ChevronRight, Headphones, ExternalLink, Disc } from 'lucide-react';

interface MusicTrack {
  id: number;
  title: string;
  isDemo: boolean;
  type: 'album' | 'single' | 'demo';
}

const MusicSection = () => {
  const tracks: MusicTrack[] = [
    { id: 1, title: "i'd like to know if you're happy", isDemo: true, type: 'demo' },
    { id: 2, title: "voicemail + the lost transmissions", isDemo: false, type: 'album' },
    { id: 3, title: "valentine's day", isDemo: false, type: 'single' },
    { id: 4, title: "tyler", isDemo: false, type: 'single' },
  ];
  
  const [currentTrack, setCurrentTrack] = React.useState(0);

  const prevTrack = () => {
    setCurrentTrack(curr => (curr - 1 + tracks.length) % tracks.length);
  };
  
  const nextTrack = () => {
    setCurrentTrack(curr => (curr + 1) % tracks.length);
  };

  return (
    <section className="pixel-section">
      <h2 className="pixel-section-title font-jacquard text-[42px]">music ✧</h2>
      <div className="text-soft-pink text-xs mb-6">
        <a href="#releases" className="block hover:text-pixel-purple mb-1">latest releases</a>
        <a href="#albums" className="block hover:text-pixel-purple mb-1">albums</a>
        <a href="#singles" className="block hover:text-pixel-purple mb-1">singles</a>
        <a href="#demos" className="block hover:text-pixel-purple">demo/drafts</a>
      </div>

      <div className="w-full max-w-2xl flex items-center justify-center">
        <button 
          onClick={prevTrack}
          className="p-4 text-pixel-purple hover:text-soft-pink"
          aria-label="previous track"
        >
          <ChevronLeft size={32} />
        </button>
        
        <div className="flex-grow flex flex-col items-center">
          <div className="w-40 h-40 bg-pixel-purple mb-4 flex items-center justify-center">
            <Disc size={32} className="text-dark-purple" />
          </div>
          
          <h3 className="text-soft-pink text-center mb-1">
            {tracks[currentTrack].title} {tracks[currentTrack].isDemo && "(demo)"}
          </h3>
          <p className="text-xs text-pixel-purple mb-2">
            {tracks[currentTrack].type === 'album' ? 'album' : 
             tracks[currentTrack].type === 'single' ? 'single' : 'demo'}
          </p>
          <div className="flex gap-4 mt-3">
            <a href="#listen" className="text-xs text-pixel-purple underline hover:text-soft-pink">✧ listen</a>
            <a href="#buy" className="text-xs text-pixel-purple underline hover:text-soft-pink">✧ buy</a>
          </div>
        </div>
        
        <button 
          onClick={nextTrack}
          className="p-4 text-pixel-purple hover:text-soft-pink"
          aria-label="next track"
        >
          <ChevronRight size={32} />
        </button>
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
