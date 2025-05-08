
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MusicTrack {
  id: number;
  title: string;
  isDemo: boolean;
}

const MusicSection = () => {
  const tracks: MusicTrack[] = [
    { id: 1, title: "i'd like to know if you're happy", isDemo: true },
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
      <h2 className="pixel-section-title">music</h2>
      <div className="text-dark-purple text-xs mb-6">
        latest releases<br />
        albums<br />
        singles<br />
        demo/drafts
      </div>

      <div className="w-full max-w-2xl flex items-center justify-center">
        <button 
          onClick={prevTrack}
          className="p-4 text-pixel-purple hover:text-dark-purple"
          aria-label="Previous track"
        >
          <ChevronLeft size={32} />
        </button>
        
        <div className="flex-grow flex flex-col items-center">
          <div className="w-40 h-40 bg-pixel-purple mb-4"></div>
          
          <h3 className="text-dark-purple text-center mb-1">
            {tracks[currentTrack].title} {tracks[currentTrack].isDemo && "(demo)"}
          </h3>
          <button className="text-xs text-pixel-purple underline mt-1">listen</button>
        </div>
        
        <button 
          onClick={nextTrack}
          className="p-4 text-pixel-purple hover:text-dark-purple"
          aria-label="Next track"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default MusicSection;
