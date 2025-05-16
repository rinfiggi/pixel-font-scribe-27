
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { EnvelopeOpen } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email('please enter a valid email')
});

type FormData = z.infer<typeof formSchema>;

const SubscribeSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "subscribed!",
        description: `you've been added to the mailing list with ${data.email}`,
        duration: 5000,
      });
      reset();
    }, 1500);
  };

  return (
    <section className="pixel-section">
      <h2 className="pixel-section-title font-jacquard text-[52px] animate-pulse">stay in touch ✧</h2>
      
      <div className="max-w-md w-full mb-6 text-center">
        <p className="text-soft-pink mb-6">
          sign up to receive updates about new releases, tour dates, and merch drops
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="your email"
                className="bg-transparent border-2 border-pixel-purple text-soft-pink h-12 w-full"
                {...register('email')}
              />
              {errors.email && (
                <div className="text-red-400 text-xs mt-1">{errors.email.message}</div>
              )}
            </div>
            <Button 
              type="submit" 
              className="pixel-button !border-2 !border-black h-12 min-w-[150px] transition-all"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                  <span>sending...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <EnvelopeOpen size={16} />
                  <span>subscribe</span>
                </div>
              )}
            </Button>
          </div>
        </form>
      </div>
      
      <div className="mt-8 relative">
        <Sparkles className="text-pixel-purple animate-pulse absolute -top-4 -left-4" size={24} />
        <div className="border-2 border-pixel-purple/50 px-6 py-4 text-center max-w-sm hover:border-pixel-purple transition-all duration-300">
          <p className="text-soft-pink text-sm">
            get in touch at mgmt@rinfiggi.online
          </p>
        </div>
        <Sparkles className="text-pixel-purple animate-pulse absolute -bottom-4 -right-4" size={24} />
      </div>
    </section>
  );
};

export default SubscribeSection;
