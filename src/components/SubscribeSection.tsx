import React, { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // e.g., sending the email to a mailing list service.
    // For this example, we'll just simulate a successful subscription.
    console.log('Submitting email:', email);
    setSubscribed(true);
    // Optionally, clear the email input after submission
    setEmail('');
  };

  return (
    <section className="pixel-section">
      <div className="max-w-md w-full text-center text-soft-pink text-xs mx-auto">
        <h2 className="pixel-section-title">stay tuned</h2>
        {subscribed ? (
          <p className="text-soft-pink">
            Thank you for subscribing! Stay tuned for updates.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="animate-fade-in">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email"
              className="w-full px-4 py-2 text-black rounded-none focus:outline-none pixel-border mb-2"
              required
            />
            <div className="flex items-center justify-center mb-4">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                required
              />
              <label htmlFor="terms" className="text-soft-pink">
                I agree to the terms and conditions
              </label>
            </div>
            <button type="submit" className="pixel-button">
              subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default SubscribeSection;
