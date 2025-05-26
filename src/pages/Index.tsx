
import React from 'react';
import Header from '../components/Header';
import TourSection from '../components/TourSection';
import MusicSection from '../components/MusicSection';
import MerchSection from '../components/MerchSection';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import ContactInfo from '../components/ContactInfo';
import { useSectionReveal } from '../hooks/useSectionReveal';

const SectionReveal = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { ref, isVisible } = useSectionReveal();
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ease-out opacity-0 translate-y-7 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      {children}
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-purple px-4 md:px-10 bg-noise">
      <div className="max-w-6xl mx-auto pt-10">
        <Header />
        <main className="flex flex-col gap-16">
          <SectionReveal id="tour">
            <TourSection />
          </SectionReveal>
          <SectionReveal id="music">
            <MusicSection />
          </SectionReveal>
          <SectionReveal id="merch">
            <MerchSection />
          </SectionReveal>
          <div>
            <SocialIcons />
          </div>
          <SectionReveal id="newsletter">
            <SubscribeSection />
          </SectionReveal>
          <SectionReveal id="contact">
            <ContactInfo />
          </SectionReveal>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
