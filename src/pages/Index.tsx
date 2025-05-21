
import React from 'react';
import Header from '../components/Header';
import TourSection from '../components/TourSection';
import MusicSection from '../components/MusicSection';
import MerchSection from '../components/MerchSection';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-purple px-4 md:px-10 bg-noise">
      <div className="max-w-6xl mx-auto pt-10">
        <Header />
        <main className="flex flex-col gap-16">
          <section id="tour">
            <TourSection />
          </section>
          {/* Ora le due sezioni sono una sotto l'altra anche su desktop */}
          <section id="music">
            <MusicSection />
          </section>
          <section id="merch">
            <MerchSection />
          </section>
          <section id="newsletter">
            <SubscribeSection />
          </section>
          <section id="contact">
            <ContactInfo />
          </section>
        </main>
        <Footer />
      </div>
      {/* CookieBanner rimosso */}
    </div>
  );
};

export default Index;
