
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const isMobile = useIsMobile();
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Add highlight effect
      contactSection.classList.add('highlight-contact');
      
      // Remove highlight after 3 seconds
      setTimeout(() => {
        contactSection.classList.remove('highlight-contact');
      }, 3000);
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-pink-600">Lidia</h1>
        <div className="flex items-center gap-4">
          <Button 
            onClick={scrollToContact}
            className="bg-pink-600 hover:bg-pink-700 text-white text-sm md:text-base px-3 md:px-4 py-1 md:py-2"
          >
            联系我们
          </Button>
          {isMobile && (
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
