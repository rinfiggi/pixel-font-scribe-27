
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
  email: z.string().email({ message: "please enter a valid email" }),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "you must accept the privacy policy" }),
  }),
  newsletterConsent: z.boolean().default(true),
});

type SubscribeFormValues = z.infer<typeof formSchema>;

const SubscribeSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<SubscribeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      privacyConsent: true,
      newsletterConsent: true,
    },
  });

  const onSubmit = async (values: SubscribeFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Log the email that will be passed to beehiiv
      console.log("Email to pass to beehiiv:", values.email);
      
      // Redirect to beehiiv with the email as a query parameter
      window.location.href = `https://rinfiggi.beehiiv.com?email=${encodeURIComponent(values.email)}`;
      
      toast({
        title: "redirecting to newsletter signup...",
        description: "you'll be taken to complete your subscription.",
      });
    } catch (error) {
      console.error("Redirect error:", error);
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
      <h2 className="pixel-section-title font-jacquard text-[42px]">✧ subscribe ✧</h2>

      <div className="max-w-md w-full text-center mx-auto mb-6">
        <p className="text-soft-pink text-sm mb-8">
          heyy, you can sign up for the newsletter below.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
                {isSubmitting ? "redirecting..." : "✧ subscribe"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SubscribeSection;
