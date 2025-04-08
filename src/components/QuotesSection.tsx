
import React from 'react';
import { Star } from 'lucide-react';

const quotes = [
  "It's a Passion for Fashion!",
  "Express yourself and show your Bratz attitude!",
  "The only dolls with a passion for fashion!",
  "Friends who slay together, stay together.",
  "We're not just dolls, we're a lifestyle."
];

const QuotesSection = () => {
  return (
    <section className="py-16 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-bratz-purple/5"></div>
      <div className="absolute inset-0 star-bg"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Bratz</span> Attitude
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Bold statements that define the Bratz lifestyle
          </p>
        </div>
        
        <div className="flex flex-nowrap overflow-x-auto pb-6 space-x-6 scrollbar-none">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="flex-none w-72 h-40 bratz-gradient rounded-2xl p-[2px] transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="bg-white h-full w-full rounded-2xl p-6 flex flex-col justify-between">
                <div className="flex mb-2">
                  <Star className="h-5 w-5 fill-bratz-pink text-bratz-pink" />
                </div>
                <p className="text-lg font-bold">{quote}</p>
                <div className="h-1 w-10 bratz-gradient rounded-full mt-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
