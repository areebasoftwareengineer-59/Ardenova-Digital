import React from 'react';
import { TRUST_PRINCIPLES } from '../data/content';

export const TrustValues: React.FC = () => {
  return (
    <section className="bg-[#F6F3EC] text-[#111318] py-24 sm:py-28 border-b border-[#E3DDD1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-[#A6864B] uppercase mb-4">
            <span className="w-6 h-[1px] bg-[#A6864B]" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111318] leading-[1.15] text-balance">
            Good Work Builds Trust. Great Partnerships Build Growth.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555C6D] font-normal leading-relaxed">
            Every technical decision and design choice is grounded in clarity, accountability, and commercial pragmatism.
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {TRUST_PRINCIPLES.map((principle, index) => {
            return (
              <div
                key={principle.number}
                className="group relative flex flex-col justify-between p-8 sm:p-10 bg-white border border-[#E3DDD1] rounded-xl hover:border-[#C7A66A] transition-all duration-300 hover:shadow-lg hover:shadow-[#111318]/5"
              >
                <div>
                  {/* Top: Human Editorial Index & Custom Minimal Line SVG */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-sm font-semibold tracking-wider text-[#A6864B]">
                      {principle.number}
                    </span>
                    
                    {/* Bespoke Architectural Minimal SVG */}
                    <div className="w-10 h-10 rounded-lg bg-[#F6F3EC] flex items-center justify-center text-[#111318] group-hover:text-[#A6864B] transition-colors">
                      {index === 0 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 3" />
                          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <rect x="3" y="4" width="18" height="16" rx="2" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                          <line x1="8" y1="4" x2="8" y2="20" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <path d="M3 20L12 4L21 20H3Z" />
                          <line x1="7.5" y1="14" x2="16.5" y2="14" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111318] mb-3">
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#555C6D] leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                {/* Subtle Baseline Hairline */}
                <div className="mt-8 pt-5 border-t border-[#EFECE4] flex items-center justify-between text-xs font-medium text-[#7D8494]">
                  <span>Ardenova Standard</span>
                  <span className="text-[#A6864B] group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
