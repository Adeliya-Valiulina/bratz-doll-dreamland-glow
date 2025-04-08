
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-10 md:py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 star-bg opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-bratz-purple/10 via-transparent to-transparent opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 text-center md:text-left mb-10 md:mb-0">
          <div className="inline-block rounded-full bg-bratz-pink/10 px-4 py-1 text-sm font-medium text-bratz-pink mb-2">
            The Original Fashion Icon
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Express Your <span className="gradient-text">Passion</span> for <br className="hidden md:block" />
            <span className="gradient-text">Fashion</span> & Style
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto md:mx-0">
            Discover the iconic dolls that revolutionized fashion play with attitude, style, and personality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bratz-button">
              Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-bratz-pink text-bratz-pink hover:bg-bratz-pink/5">
              Explore Dolls
            </Button>
          </div>
          
          <div className="flex items-center justify-center md:justify-start space-x-1 pt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-bratz-pink text-bratz-pink" />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-bold">4.9/5</span> from 2,000+ reviews
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-bratz-pink/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-bratz-purple/20 rounded-full blur-2xl"></div>
            
            {/* Main image with shadow effect */}
            <div className="relative z-10 animate-float">
              <div className="w-full h-full max-w-md mx-auto">
                <img 
                  src="https://placehold.co/600x800/FF4384/FFFFFF?text=BRATZ+DOLL" 
                  alt="Bratz doll showcase" 
                  className="object-contain w-full h-full drop-shadow-2xl"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-10 -left-4 w-16 h-16 rounded-full bg-bratz-purple/80 blur-md"></div>
            <div className="absolute top-20 right-0 w-8 h-8 rounded-full bg-bratz-pink blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
