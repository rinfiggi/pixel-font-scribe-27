
import React from 'react';
import Header from '../components/Header';
import TourSection from '../components/TourSection';
import MusicSection from '../components/MusicSection';
import MerchSection from '../components/MerchSection';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-purple px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <main>
          <TourSection />
          <MusicSection />
          <MerchSection />
          <SubscribeSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
