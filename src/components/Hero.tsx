import React from 'react';
import { BRAND } from '../data/content';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[94vh] bg-[#0B1020] text-white flex flex-col justify-between pt-32 pb-14 overflow-hidden border-b border-[#232A3B]/60">
      {/* Background Architectural Subtle Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Ambient Radial Subtle Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-[#C7A66A]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#1E293B]/30 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Hero Content: Refined Editorial Centerpiece */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 w-full my-auto z-10 py-12 lg:py-20 text-center flex flex-col items-center">
        
        {/* Eyebrow - Clean unboxed text */}
        <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-[#C7A66A] uppercase mb-6 select-none">
          <span className="w-8 h-[1px] bg-[#C7A66A]" />
          <span>{BRAND.heroEyebrow}</span>
          <span className="w-8 h-[1px] bg-[#C7A66A]" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold tracking-tight text-white leading-[1.08] mb-7 max-w-4xl text-balance">
          {BRAND.heroHeadline}
        </h1>

        {/* Supporting Statement */}
        <p className="text-base sm:text-lg md:text-xl text-[#9399A8] font-normal leading-relaxed max-w-2xl mb-10 text-balance">
          {BRAND.heroSupporting}
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            type="button"
            onClick={onStartProject}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B1020] bg-[#C7A66A] hover:bg-[#D8B77B] active:bg-[#B59458] rounded-md transition-luxury shadow-lg shadow-[#C7A66A]/20 cursor-pointer whitespace-nowrap"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={onExploreServices}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F6F3EC] bg-[#141A2D] hover:bg-[#1C253E] border border-[#232A3B] hover:border-[#C7A66A]/40 rounded-md transition-luxury cursor-pointer whitespace-nowrap"
          >
            <span>Explore Our Services</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C7A66A]" />
          </button>
        </div>

        {/* Supporting Line */}
        <div className="pt-7 border-t border-[#232A3B]/80 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-[#9399A8]/90 font-medium tracking-wide">
            {BRAND.heroSupportingLine}
          </p>
        </div>

      </div>

      {/* Bottom Bar: Quiet Positioning Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full z-10 pt-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9399A8] font-normal tracking-wide border-t border-[#232A3B]/40 pt-4">
          <div className="flex items-center gap-2">
            <span className="text-[#C7A66A]">“Progress With Purpose.”</span>
            <span className="text-[#9399A8]/40">·</span>
            <span>Independent Technology & Web Studio</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <span>Collaborating with businesses in USA</span>
            <span>·</span>
            <span>UAE</span>
            <span>·</span>
            <span>Saudi Arabia</span>
            <span>·</span>
            <span>UK</span>
            <span>·</span>
            <span>Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};
