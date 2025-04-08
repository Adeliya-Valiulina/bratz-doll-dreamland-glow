
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DollsShowcase from '@/components/DollsShowcase';
import QuotesSection from '@/components/QuotesSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <DollsShowcase />
        <QuotesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
