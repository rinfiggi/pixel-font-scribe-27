
import React, { useState } from 'react';
import { toast } from "../components/ui/use-toast";

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToNewsletter, setAgreedToNewsletter] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !location || !agreedToTerms) {
      toast({
        title: "please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Subscription logic would go here
    toast({
      title: "thanks for subscribing!",
      description: "you'll be the first to know about new music and tour dates.",
    });

    setEmail('');
    setLocation('');
    setAgreedToTerms(false);
    setAgreedToNewsletter(false);
  };

  return (
    <section className="pixel-section">
      <h2 className="pixel-section-title">subscribe ✦</h2>

      <div className="max-w-md w-full text-center mx-auto mb-6">
        <p className="text-soft-pink text-sm mb-8">
          heyy, you can sign up for the newsletter below.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input 
              type="text"
              placeholder="your name ☆"
              className="w-full p-2 bg-dark-purple border-2 border-pixel-purple text-soft-pink"
              aria-label="your name"
            />
          </div>

          <div>
            <input 
              type="email"
              placeholder="email address ☆"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-dark-purple border-2 border-pixel-purple text-soft-pink"
              required
              aria-label="your email address"
            />
          </div>

          <div>
            <input 
              type="text"
              placeholder="where you live? ☆"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 bg-dark-purple border-2 border-pixel-purple text-soft-pink"
              required
              aria-label="your location"
            />
          </div>

          <div className="flex items-start gap-2 text-left text-xs">
            <input 
              type="checkbox" 
              id="terms"
              checked={agreedToTerms}
              onChange={() => setAgreedToTerms(!agreedToTerms)}
              className="mt-1"
              required
            />
            <label htmlFor="terms" className="text-soft-pink">
              i agree to the processing of my personal data ✧
            </label>
          </div>

          <div className="flex items-start gap-2 text-left text-xs">
            <input 
              type="checkbox" 
              id="newsletter"
              checked={agreedToNewsletter}
              onChange={() => setAgreedToNewsletter(!agreedToNewsletter)}
              className="mt-1"
            />
            <label htmlFor="newsletter" className="text-soft-pink">
              i hope you'll send me awesome updates! ✧
            </label>
          </div>

          <div className="flex items-start gap-2 text-left text-xs">
            <input 
              type="checkbox" 
              id="telegram"
              className="mt-1"
            />
            <label htmlFor="telegram" className="text-soft-pink">
              i'd like to receive exclusive content via telegram ✧
            </label>
          </div>

          <div className="mt-4">
            <button type="submit" className="pixel-button w-full">subscribe ★</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
