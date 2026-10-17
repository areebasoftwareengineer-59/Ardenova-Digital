import React from 'react';
import { BRAND } from '../data/content';
import { ArrowUpRight, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AboutProps {
  onDiscussProject: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscussProject }) => {
  return (
    <section id="about" className="bg-[#111318] text-white py-24 sm:py-32 relative border-b border-[#232A3B]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Centered Editorial Storytelling */}
        <div className="flex flex-col items-start max-w-4xl">
          
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#C7A66A] uppercase mb-5 select-none">
            <span className="w-8 h-[1px] bg-[#C7A66A]" />
            <span>Agency Philosophy</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.14] mb-8 text-balance">
            {BRAND.aboutHeading}
          </h2>

          {/* Exact body copy from brand brief */}
          <p className="text-base sm:text-lg md:text-xl text-[#9399A8] font-normal leading-relaxed mb-12">
            {BRAND.aboutBody}
          </p>

          {/* Core Values Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#232A3B] mb-10 w-full">
            <div className="p-6 rounded-xl bg-[#151B2A] border border-[#232B3E] flex flex-col gap-2">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase text-white tracking-wider">
                <Compass className="w-4 h-4 text-[#C7A66A]" />
                <span>Strategic Intent</span>
              </div>
              <p className="text-xs sm:text-sm text-[#9399A8] leading-relaxed">
                Clear commercial outcomes and defined workflows over vanity trends.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#151B2A] border border-[#232B3E] flex flex-col gap-2">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase text-white tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#C7A66A]" />
                <span>Sound Delivery</span>
              </div>
              <p className="text-xs sm:text-sm text-[#9399A8] leading-relaxed">
                Tested, maintainable, responsive code thoroughly documented.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#151B2A] border border-[#232B3E] flex flex-col gap-2">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase text-white tracking-wider">
                <HeartHandshake className="w-4 h-4 text-[#C7A66A]" />
                <span>Honest Counsel</span>
              </div>
              <p className="text-xs sm:text-sm text-[#9399A8] leading-relaxed">
                Direct, transparent communication and dependable milestone reviews.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <button
              type="button"
              onClick={onDiscussProject}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B1020] bg-[#C7A66A] hover:bg-[#D8B77B] rounded-md transition-luxury cursor-pointer"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
