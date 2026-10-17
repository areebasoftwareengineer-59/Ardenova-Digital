import React, { useState, useEffect } from 'react';
import { TARGET_MARKETS, BRAND } from '../data/content';
import { Globe, Clock } from 'lucide-react';

export const InternationalFocus: React.FC = () => {
  const [currentTimes, setCurrentTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const times: { [key: string]: string } = {};

      TARGET_MARKETS.forEach((market) => {
        try {
          times[market.name] = new Intl.DateTimeFormat('en-US', {
            timeZone: market.ianaZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(now);
        } catch {
          times[market.name] = now.toISOString().slice(11, 19);
        }
      });

      setCurrentTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0B1020] text-white py-24 sm:py-32 relative border-b border-[#232A3B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#C7A66A] uppercase mb-4">
            <span className="w-6 h-[1px] bg-[#C7A66A]" />
            <span>Global Collaboration Model</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12] text-balance">
            {BRAND.internationalHeading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9399A8] leading-relaxed">
            {BRAND.internationalCopy}
          </p>
        </div>

        {/* Target Markets Card Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {TARGET_MARKETS.map((market) => (
            <div
              key={market.name}
              className="p-5 rounded-xl bg-[#111728] border border-[#232A3B] hover:border-[#C7A66A]/60 transition-all duration-300"
            >
              <div className="flex items-center justify-between text-xs text-[#9399A8] mb-3">
                <span className="font-mono text-[11px] text-[#C7A66A]">{market.timezoneOffset}</span>
                <Clock className="w-3.5 h-3.5 text-[#9399A8]" />
              </div>

              <h3 className="font-display text-base font-bold text-white mb-1">
                {market.name}
              </h3>
              
              <div className="font-mono text-xl font-semibold tracking-tight text-[#E2CEAA] mb-3 tabular-nums">
                {currentTimes[market.name] || '--:--:--'}
              </div>

              <p className="text-xs text-[#9399A8] leading-relaxed">
                {market.regions}
              </p>
            </div>
          ))}
        </div>

        {/* Remote Delivery Governance Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#131A2D] border border-[#232B40] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#18233C] text-[#C7A66A] shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-base sm:text-lg font-bold text-white mb-1">
                Asynchronous Rhythm, Synchronous Milestones
              </h4>
              <p className="text-xs sm:text-sm text-[#9399A8] max-w-2xl leading-relaxed">
                We operate as an independent distributed consultancy. We don't maintain physical real estate overhead in multiple cities; instead, we pass those efficiencies directly to your project through senior talent, transparent communication, and responsive turnaround times.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1020] bg-[#C7A66A] hover:bg-[#D8B77B] rounded-md transition-luxury whitespace-nowrap shrink-0"
          >
            <span>Inquire for Your Region</span>
          </a>
        </div>

      </div>
    </section>
  );
};
