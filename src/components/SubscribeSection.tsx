
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Mail } from 'lucide-react';

const SubscribeSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleRedirect = () => {
    setLoading(true);
    toast({
      title: "redirecting...",
      description: "hold tight babe :-*",
      duration: 2000
    });
    setTimeout(() => {
      window.location.href = "https://rinfiggi.beehiiv.com/subscribe";
    }, 1500);
  };

  return (
    <section className="pixel-section">
      <h2 className="pixel-section-title font-jacquard text-[52px] animate-pulse">stay updated ✧</h2>
      <div className="max-w-md w-full mb-6 text-center mx-auto">
        <p className="text-soft-pink mb-6">sign up to receive updates about new releases, tour dates, and merch drops</p>
        <div className="w-full flex justify-center">
          <Button
            onClick={handleRedirect}
            className="pixel-button !border-2 !border-black h-12 min-w-[200px] transition-all"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                <span>sending...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>subscribe</span>
              </div>
            )}
          </Button>
        </div>
      </div>
      <div className="mt-8 relative">
        <Sparkles className="text-pixel-purple animate-pulse absolute -top-4 -left-4" size={24} />
        <div className="border-2 border-pixel-purple/50 px-3 py-2 text-center max-w-[270px] contact-inner-box hover:border-pixel-purple transition-all duration-300">
          <p className="text-soft-pink text-sm">get in touch :-)</p>
          <p className="text-pixel-purple font-bold mt-2 break-all">mgmt@rinfiggi.online</p>
        </div>
        <Sparkles className="text-pixel-purple animate-pulse absolute -bottom-4 -right-4" size={24} />
      </div>
    </section>
  );
};

export default SubscribeSection;
