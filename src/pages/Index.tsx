
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, PhoneCall } from "lucide-react";
import Navigation from '@/components/Navigation';
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-8 md:pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-playfair font-bold text-gray-900 mb-4 md:mb-6">
            美甲预约系统
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            简单几步，轻松预约。扫描二维码即可体验专业美甲服务。
          </p>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6">
            立即体验
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-playfair font-bold text-center mb-8 md:mb-12">
            系统特点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              title="客户预约便捷"
              description="直观的日历视图，可查看可预约时段、美甲项目及美甲师"
            />
            <FeatureCard
              title="商家管理高效"
              description="强大的预约管理功能，支持多渠道预约整合，避免时间冲突"
            />
            <FeatureCard
              title="高度定制化"
              description="支持自定义项目、美甲师、营业规则，打造专属预约系统"
            />
          </div>
        </div>
      </section>

      {/* Calendar Demo Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-playfair font-bold text-center mb-8 md:mb-12">
            预约界面展示
          </h2>
          <div className="max-w-sm md:max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6">
            <Calendar 
              mode="single"
              className="rounded-md border"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-12 md:py-16 px-4 bg-white transition-all duration-500 ease-in-out"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-playfair font-bold mb-6 md:mb-8">
            联系我们
          </h2>
          <div className="max-w-lg mx-auto space-y-4">
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <Mail className="text-pink-600 w-5 h-5" />
              <a 
                href="mailto:zzt319@outlook.com" 
                className="text-pink-600 hover:text-pink-700 hover:underline transition-colors"
              >
                zzt319@outlook.com
              </a>
            </p>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <PhoneCall className="text-pink-600 w-5 h-5" />
              <a 
                href="tel:+393335498220" 
                className="text-pink-600 hover:text-pink-700 hover:underline transition-colors"
              >
                +39 333 549 8220
              </a>
            </p>
            <p className="text-gray-600 px-4">
              <span className="font-semibold">地址：</span>
              Piazza Duca d'Aosta, 20124 Milano
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </Card>
  );
};

export default Index;
