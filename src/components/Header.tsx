
import React from 'react';
import { Star, ShoppingBag, Search, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 px-6 sm:px-10 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Star className="h-6 w-6 fill-bratz-pink text-bratz-pink" />
          <span className="text-2xl font-extrabold gradient-text">BRATZ</span>
        </div>

        <nav className="hidden md:flex gap-8">
          <a href="#dolls" className="font-medium hover:text-bratz-pink transition-colors">Dolls</a>
          <a href="#fashion" className="font-medium hover:text-bratz-pink transition-colors">Fashion</a>
          <a href="#join" className="font-medium hover:text-bratz-pink transition-colors">Join Us</a>
          <a href="#about" className="font-medium hover:text-bratz-pink transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden sm:flex relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 text-xs flex items-center justify-center rounded-full bg-bratz-pink text-white">3</span>
          </Button>
          
          <Button variant="outline" className="hidden sm:flex bratz-gradient text-white border-0">
            Shop Now
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
