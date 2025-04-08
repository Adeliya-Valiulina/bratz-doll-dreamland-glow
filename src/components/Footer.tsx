
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bratz-black text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-1 mb-6">
              <Star className="h-6 w-6 fill-bratz-pink text-bratz-pink" />
              <span className="text-2xl font-extrabold gradient-text">BRATZ</span>
            </div>
            <p className="text-gray-400 mb-6">
              The fashion dolls with a passion for fashion, attitude, and self-expression.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">All Dolls</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">Fashion Packs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">Collector's Items</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">New Arrivals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">Shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">Track Order</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">About Bratz</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bratz-pink transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Bratz™. All Rights Reserved. Bratz and all related trademarks are owned by MGA Entertainment, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
