import React from 'react';
import { Logo } from './Logo';
import { BRAND, SERVICES } from '../data/content';
import { Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onSelectService,
}) => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111318] text-[#9399A8] border-t border-[#232A3B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#232A3B]">
          
          {/* Brand & Purpose (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block"
              aria-label="Ardenova Digital home"
            >
              <Logo size="md" />
            </a>
            
            <p className="text-sm text-[#9399A8] leading-relaxed max-w-sm pt-2">
              We partner with ambitious businesses to transform ideas into effective digital experiences, building long-term relationships through transparent communication, thoughtful execution, and dependable delivery.
            </p>

            <div className="pt-2 text-xs text-[#C7A66A] font-semibold tracking-wide">
              “Progress With Purpose.”
            </div>
          </div>

          {/* Quick Navigation (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleSmoothScroll(e, 'work')}
                  className="hover:text-white transition-colors"
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleSmoothScroll(e, 'process')}
                  className="hover:text-white transition-colors"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                  className="hover:text-white transition-colors"
                >
                  About Ardenova
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white block">
              Capabilities
            </span>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(s.title)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Presence (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white block">
              Direct Contact
            </span>
            <p className="text-xs text-[#9399A8] leading-relaxed">
              Serving businesses across the United States, UAE, Saudi Arabia, the UK, and worldwide.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${BRAND.contactEmail}`}
                className="inline-flex items-center gap-2 text-sm text-[#C7A66A] hover:text-[#E0CEAA] font-mono transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{BRAND.contactEmail}</span>
              </a>
            </div>

            {/* LinkedIn Placeholder - Clearly labelled as requested */}
            <div className="pt-3">
              <div className="text-xs text-[#9399A8]">Professional Network:</div>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#6C7588] mt-1 font-mono">
                <span>LinkedIn [Company Profile Configurable]</span>
                <ArrowUpRight className="w-3 h-3 text-[#5A6375]" />
              </span>
            </div>
          </div>

        </div>

        {/* Legal & Copyright Baseline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E778B]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Ardenova Digital. All rights reserved.</span>
            <span>·</span>
            <span className="text-[#9399A8]">Independent Digital Practice</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#9399A8] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-[#9399A8] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
