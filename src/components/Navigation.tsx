import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // 添加关闭图标
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false); // 控制菜单展开/关闭

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // 点击后关闭菜单
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-pink-600">米兰·美业预约系统</h1>
        <div className="flex items-center gap-4">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-pink-600 hover:bg-pink-700 text-white text-sm md:text-base px-3 md:px-4 py-1 md:py-2"
          >
            联系我们
          </Button>
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMenuOpen(!menuOpen)} // 切换菜单状态
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>

      {/* 移动端菜单 */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-40">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-pink-600 hover:text-pink-700 text-lg"
              >
                系统特点
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('booking')} 
                className="text-pink-600 hover:text-pink-700 text-lg"
              >
                预约界面展示
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('advantages')} 
                className="text-pink-600 hover:text-pink-700 text-lg"
              >
                优势分析
              </button>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;