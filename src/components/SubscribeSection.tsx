
import React, { useState } from 'react';
import { toast } from "../components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "please enter a valid email" }),
  location: z.string().min(1, { message: "please enter a location" }),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "you must accept the privacy policy" }),
  }),
  newsletterConsent: z.boolean().optional(),
});

type SubscribeFormValues = z.infer<typeof formSchema>;

const SubscribeSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<SubscribeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      privacyConsent: false,
      newsletterConsent: false,
    },
  });

  const onSubmit = async (values: SubscribeFormValues) => {
    setIsSubmitting(true);
    
    try {
      // This is where you'd integrate with your newsletter service
      // Example with a webhook or API endpoint:
      // const response = await fetch('your-newsletter-endpoint', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values),
      // });
      
      // If you're using a service like Mailchimp, ConvertKit, etc.
      // You would use their specific API endpoints here
      
      console.log("Newsletter subscription data:", values);
      
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "thanks for subscribing!",
        description: "you'll be the first to know about new music and tour dates.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "oops! something went wrong",
        description: "please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pixel-section">
      <h2 className="pixel-section-title">✧ subscribe ✧</h2>

      <div className="max-w-md w-full text-center mx-auto mb-6">
        <p className="text-soft-pink text-sm mb-8">
          heyy, you can sign up for the newsletter below.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="your name"
                      className="w-full p-2 bg-dark-purple border-2 border-pixel-purple text-soft-pink"
                      aria-label="your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-left text-xs text-soft-pink" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="email address"
                      type="email"
                      className="w-full p-2 bg-dark-purple border-2 border-pixel-purple text-soft-pink"
                      required
                      aria-label="your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-left text-xs text-soft-pink" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="where you live?"
                      className="w-full p-2 bg-dark-purple border-2 border-pixel-purple text-soft-pink"
                      required
                      aria-label="your location"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-left text-xs text-soft-pink" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="privacyConsent"
              render={({ field }) => (
                <FormItem className="flex items-start gap-2 text-left">
                  <FormControl>
                    <Checkbox 
                      id="privacy"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      required
                      className="mt-1 bg-dark-purple border-pixel-purple text-soft-pink"
                    />
                  </FormControl>
                  <FormLabel htmlFor="privacy" className="text-soft-pink text-xs font-normal cursor-pointer">
                    i consent to the processing of my personal data according to the privacy policy
                  </FormLabel>
                  <FormMessage className="text-xs text-soft-pink" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="newsletterConsent"
              render={({ field }) => (
                <FormItem className="flex items-start gap-2 text-left">
                  <FormControl>
                    <Checkbox 
                      id="newsletter"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-1 bg-dark-purple border-pixel-purple text-soft-pink"
                    />
                  </FormControl>
                  <FormLabel htmlFor="newsletter" className="text-soft-pink text-xs font-normal cursor-pointer">
                    i want to receive news about upcoming tour dates and music releases
                  </FormLabel>
                </FormItem>
              )}
            />

            <div className="mt-4">
              <Button 
                type="submit" 
                className="pixel-button w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "subscribing..." : "✧ subscribe"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SubscribeSection;
