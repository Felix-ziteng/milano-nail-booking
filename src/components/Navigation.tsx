
import React from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-playfair font-bold text-pink-600">Lidia</h1>
        <Button 
          onClick={scrollToContact}
          className="bg-pink-600 hover:bg-pink-700 text-white"
        >
          联系我们
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
