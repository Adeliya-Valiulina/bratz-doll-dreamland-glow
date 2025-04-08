
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Star } from 'lucide-react';

const NewsletterSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscription successful!",
      description: "You've joined the Bratz fashion squad!",
      duration: 5000,
    });
  };
  
  return (
    <section id="join" className="py-16 px-6 bratz-gradient text-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <div className="flex justify-center md:justify-start">
                <Star className="h-8 w-8 fill-white text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Join the Bratz Squad
              </h2>
              <p className="text-white/80">
                Subscribe to our newsletter for exclusive content, first looks at new dolls, and special offers!
              </p>
            </div>
            
            <div className="md:w-1/2 w-full">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white"
                  required
                />
                <Button type="submit" className="bg-white text-bratz-pink hover:bg-white/90 font-bold">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-white/60 mt-2">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
