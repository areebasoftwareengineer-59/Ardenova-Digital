import React from 'react';
import { DIFFERENTIATORS } from '../data/content';
import { Briefcase, MessageSquareCode, Scale, LifeBuoy } from 'lucide-react';

export const WhyArdenova: React.FC = () => {
  const getDifferentiatorIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Briefcase className="w-5 h-5 text-[#A6864B]" />;
      case 1:
        return <MessageSquareCode className="w-5 h-5 text-[#A6864B]" />;
      case 2:
        return <Scale className="w-5 h-5 text-[#A6864B]" />;
      case 3:
        return <LifeBuoy className="w-5 h-5 text-[#A6864B]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#A6864B]" />;
    }
  };

  return (
    <section className="bg-[#F6F3EC] text-[#111318] py-24 sm:py-32 border-b border-[#E3DDD1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#A6864B] uppercase mb-4">
            <span className="w-6 h-[1px] bg-[#A6864B]" />
            <span>Why Ambitious Brands Partner With Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111318] leading-[1.14] text-balance">
            Pragmatic Foundations. Exceptional Execution.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555C6D] leading-relaxed">
            We reject agency theater, unnecessary overhead, and vague promises. Here is what you can consistently expect when working together.
          </p>
        </div>

        {/* 4 Differentiators Bento / Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIFFERENTIATORS.map((item, index) => {
            return (
              <div
                key={index}
                className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E3DDD1] hover:border-[#C7A66A] transition-all duration-300 hover:shadow-lg hover:shadow-[#111318]/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F6F3EC] flex items-center justify-center border border-[#E7E2D6] mb-6">
                    {getDifferentiatorIcon(index)}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111318] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#555C6D] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#EFECE4] flex items-center justify-between text-xs font-mono text-[#7D8494]">
                  <span>Pillar 0{index + 1}</span>
                  <span className="text-[#A6864B]">Disciplined Delivery</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
