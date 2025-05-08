
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
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Subscription logic would go here
    toast({
      title: "Thanks for subscribing!",
      description: "You'll be the first to know about new music and tour dates.",
    });

    setEmail('');
    setLocation('');
    setAgreedToTerms(false);
    setAgreedToNewsletter(false);
  };

  return (
    <section className="pixel-section">
      <h2 className="pixel-section-title">subscribe</h2>

      <div className="max-w-md w-full text-center mx-auto mb-6">
        <p className="text-dark-purple text-sm mb-8">
          ! <span className="underline">newsletter-txt:'s</span> !<br/>
          <br/>
          heyy, you can sign up for the newsletter below. you'll find the form to join my telegram channel too so we can chat n stuff. i promise to only send u cool shit n not spam your inbox all the time, pinky promise.<br/>
          <br/>
          - - - - - - - - -<br/>
          <br/>
          i almost always respond to emails so feel free to send me a msg anytime, i love hearing from u guys.<br/>
          <br/>
          to learn more about how your data is collected and managed, click here to read our privacy policy. i value ur trust.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input 
              type="text"
              placeholder="your name"
              className="w-full p-2 bg-soft-pink border-2 border-pixel-purple text-dark-purple"
              aria-label="Your name"
            />
          </div>

          <div>
            <input 
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-soft-pink border-2 border-pixel-purple text-dark-purple"
              required
              aria-label="Your email address"
            />
          </div>

          <div>
            <input 
              type="text"
              placeholder="where you live?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 bg-soft-pink border-2 border-pixel-purple text-dark-purple"
              required
              aria-label="Your location"
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
            <label htmlFor="terms" className="text-dark-purple">
              I agree to the processing of my personal data in accordance with the privacy policy
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
            <label htmlFor="newsletter" className="text-dark-purple">
              I accept the terms and conditions and hope you'll send me awesome updates!
            </label>
          </div>

          <div className="flex items-start gap-2 text-left text-xs">
            <input 
              type="checkbox" 
              id="telegram"
              className="mt-1"
            />
            <label htmlFor="telegram" className="text-dark-purple">
              I'd like to receive exclusive content and updates via telegram
            </label>
          </div>

          <div className="mt-4">
            <button type="submit" className="pixel-button w-full">SUBSCRIBE</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
