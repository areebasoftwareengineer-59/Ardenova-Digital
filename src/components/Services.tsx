import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ArrowUpRight, Monitor, Target, ShoppingBag, Layout, Cpu, RefreshCw } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-design-dev':
        return <Monitor className="w-5 h-5" />;
      case 'landing-pages':
        return <Target className="w-5 h-5" />;
      case 'ecommerce-websites':
        return <ShoppingBag className="w-5 h-5" />;
      case 'ui-ux-design':
        return <Layout className="w-5 h-5" />;
      case 'custom-web-applications':
        return <Cpu className="w-5 h-5" />;
      case 'ongoing-website-support':
        return <RefreshCw className="w-5 h-5" />;
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="bg-[#0B1020] text-white py-24 sm:py-32 relative border-b border-[#232A3B]/80">
      {/* Background Architectural Subtle Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#C7A66A] uppercase mb-4">
              <span className="w-6 h-[1px] bg-[#C7A66A]" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Digital Solutions for Ambitious Businesses.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9399A8] max-w-md font-normal leading-relaxed">
            Delivering thoughtful digital systems engineered around real commercial requirements, verified workflows, and lasting maintainability.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-8 rounded-xl bg-[#111728]/80 border border-[#232A3B] hover:border-[#C7A66A]/60 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5"
              >
                <div>
                  {/* Card Header: Editorial Number and Clean Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-[#C7A66A] tracking-wider font-semibold">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#182138] text-[#C7A66A] flex items-center justify-center border border-[#25304C] group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.id)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold tracking-tight text-white mb-3 group-hover:text-[#F6F3EC] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#9399A8] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-5 border-t border-[#1C263E] flex items-center justify-between">
                  <span className="text-xs text-[#9399A8] font-medium">
                    {service.timelineEstimate}
                  </span>
                  
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C7A66A] hover:text-[#E0CEAA] transition-colors cursor-pointer py-1"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectForInquiry={onSelectServiceForInquiry}
      />
    </section>
  );
};
