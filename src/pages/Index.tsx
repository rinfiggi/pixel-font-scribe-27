
import React from 'react';
import Header from '../components/Header';
import TourSection from '../components/TourSection';
import MusicSection from '../components/MusicSection';
import MerchSection from '../components/MerchSection';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-purple px-4 bg-noise">
      <nav className="fixed top-0 left-0 w-full z-50 bg-dark-purple/80 backdrop-blur-sm border-b border-pixel-purple/20 px-4 py-2">
        <div className="max-w-6xl mx-auto flex justify-center space-x-8 text-xs">
          <a href="#tour" className="text-soft-pink hover:text-pixel-purple">tour</a>
          <a href="#music" className="text-soft-pink hover:text-pixel-purple">music</a>
          <a href="#merch" className="text-soft-pink hover:text-pixel-purple">merch</a>
          <a href="#newsletter" className="text-soft-pink hover:text-pixel-purple">newsletter</a>
        </div>
      </nav>
      
      <div className="max-w-6xl mx-auto pt-10">
        <Header />
        
        <main>
          <section id="tour">
            <TourSection />
          </section>
          
          <section id="music">
            <MusicSection />
          </section>
          
          <section id="merch">
            <MerchSection />
          </section>
          
          <section id="newsletter">
            <SubscribeSection />
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
