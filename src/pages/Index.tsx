
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
