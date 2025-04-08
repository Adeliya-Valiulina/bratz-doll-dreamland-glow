
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from 'lucide-react';

type Doll = {
  id: number;
  name: string;
  imageSrc: string;
  price: string;
  featured?: boolean;
};

const dolls: Doll[] = [
  {
    id: 1,
    name: "Yasmin",
    imageSrc: "https://placehold.co/400x500/BF4BBA/FFFFFF?text=Yasmin",
    price: "$29.99",
    featured: true,
  },
  {
    id: 2,
    name: "Cloe",
    imageSrc: "https://placehold.co/400x500/3B82F6/FFFFFF?text=Cloe",
    price: "$29.99",
  },
  {
    id: 3,
    name: "Jade",
    imageSrc: "https://placehold.co/400x500/10B981/FFFFFF?text=Jade",
    price: "$29.99",
  },
  {
    id: 4,
    name: "Sasha",
    imageSrc: "https://placehold.co/400x500/F59E0B/FFFFFF?text=Sasha",
    price: "$29.99",
  },
];

const DollsShowcase = () => {
  return (
    <section id="dolls" className="py-16 px-6 bg-gradient-to-b from-white to-bratz-pink/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet the <span className="gradient-text">Bratz Pack</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Express yourself with these fierce, fashionable, and fabulous dolls that define a generation
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dolls.map((doll) => (
            <Card key={doll.id} className={`bratz-card ${doll.featured ? 'ring-2 ring-bratz-pink' : ''}`}>
              <div className="relative">
                {doll.featured && (
                  <div className="absolute top-2 right-2 z-10 bg-bratz-pink text-white text-xs font-bold px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute top-2 left-2 z-10">
                  <Button variant="ghost" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4 text-bratz-pink" />
                  </Button>
                </div>
                <div className="h-64 overflow-hidden">
                  <img
                    src={doll.imageSrc}
                    alt={doll.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">{doll.name}</h3>
                  <span className="font-semibold text-bratz-pink">{doll.price}</span>
                </div>
                <Button className="w-full bratz-gradient">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-bratz-pink text-bratz-pink hover:bg-bratz-pink/5 font-semibold">
            View All Dolls
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DollsShowcase;
