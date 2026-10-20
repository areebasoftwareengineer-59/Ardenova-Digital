import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleStartProject = () => {
    setMobileMenuOpen(false);
    if (onOpenInquiry) {
      onOpenInquiry();
    } else {
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1020]/90 backdrop-blur-md border-b border-[#232A3B]/80 py-3.5 shadow-xl shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#"
            className="group inline-flex items-center focus-visible:ring-1 focus-visible:ring-[#C7A66A] rounded-md outline-none"
            aria-label="Ardenova Digital — Home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide text-[#9399A8]"
            aria-label="Primary Navigation"
          >
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 py-1"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, 'work')}
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 py-1"
            >
              Work
            </a>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'process')}
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 py-1"
            >
              Process
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 py-1"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 py-1"
            >
              Contact
            </a>
            <a
              href="https://areeba-munir-portfolio-7de2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-[#C7A66A] bg-[#C7A66A]/10 hover:bg-[#C7A66A]/20 hover:text-white border border-[#C7A66A]/30 rounded-full transition-all duration-200 whitespace-nowrap shrink-0 group shadow-sm shadow-[#C7A66A]/10 ml-1"
              title="Areeba Munir — Software Engineering & Design Portfolio"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A66A] animate-pulse" />
              <span>Areeba's Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C7A66A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={handleStartProject}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0B1020] bg-[#C7A66A] hover:bg-[#D8B77B] active:bg-[#B59458] rounded-md transition-luxury shadow-sm shadow-[#C7A66A]/20 whitespace-nowrap cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#9399A8] hover:text-white hover:bg-[#151B2E] rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-[#C7A66A]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0B1020]/95 backdrop-blur-xl border-b border-[#232A3B] px-6 py-7 shadow-2xl transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#F6F3EC]">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="py-2 px-3 rounded hover:bg-[#141A2D] hover:text-[#C7A66A] transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, 'work')}
              className="py-2 px-3 rounded hover:bg-[#141A2D] hover:text-[#C7A66A] transition-colors"
            >
              Work
            </a>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'process')}
              className="py-2 px-3 rounded hover:bg-[#141A2D] hover:text-[#C7A66A] transition-colors"
            >
              Process
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="py-2 px-3 rounded hover:bg-[#141A2D] hover:text-[#C7A66A] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="py-2 px-3 rounded hover:bg-[#141A2D] hover:text-[#C7A66A] transition-colors"
            >
              Contact
            </a>
            <a
              href="https://areeba-munir-portfolio-7de2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-[#C7A66A]/10 border border-[#C7A66A]/25 text-[#C7A66A] hover:text-white font-medium text-sm transition-colors mt-1"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C7A66A] animate-pulse" />
                <span>Areeba's Portfolio</span>
              </div>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="pt-4 border-t border-[#232A3B]">
              <button
                onClick={handleStartProject}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#0B1020] bg-[#C7A66A] hover:bg-[#D8B77B] rounded-md transition-colors"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
