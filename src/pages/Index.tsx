
import React from 'react';
import Header from '../components/Header';
import TourSection from '../components/TourSection';
import MusicSection from '../components/MusicSection';
import MerchSection from '../components/MerchSection';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-purple px-4 bg-noise">
      <div className="max-w-6xl mx-auto pt-10">
        <Header />
        
        <main className="lg:grid lg:grid-cols-2 lg:gap-8">
          <section id="tour" className="lg:col-span-2 lg:order-1">
            <TourSection />
          </section>
          
          <section id="music" className="lg:col-span-1 lg:order-2">
            <MusicSection />
          </section>
          
          <section id="merch" className="lg:col-span-1 lg:order-3">
            <MerchSection />
          </section>
          
          <section id="newsletter" className="lg:col-span-2 lg:order-4">
            <SubscribeSection />
          </section>
        </main>
        
        <Footer />
      </div>
      <CookieBanner />
    </div>
  );
};

export default Index;
