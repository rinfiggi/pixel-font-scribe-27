
import React from 'react';
import Header from '../components/Header';
import TourSection from '../components/TourSection';
import MusicSection from '../components/MusicSection';
import MerchSection from '../components/MerchSection';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
// Please ensure ContactInfo is correctly imported as a React component
import ContactInfo from '../components/ContactInfo';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-purple px-4 md:px-10 bg-noise">
      <div className="max-w-6xl mx-auto pt-10">
        <Header />
        <main className="flex flex-col gap-16">
          {/* Esempio: aggiungo una animazione pulsante al titolo del primo blocco */}
          <section id="tour">
            <div className="pixel-section-title animate-pulse mb-4">tour</div>
            <TourSection />
          </section>
          <section id="music">
            <MusicSection />
          </section>
          <section id="merch">
            <MerchSection />
          </section>
          <SocialIcons />
          {/* IssuesSection rimosso */}
          <section id="newsletter">
            <SubscribeSection />
          </section>
          <section id="contact">
            <ContactInfo />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
