import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-11',
  };

  const iconSizes = {
    sm: 24,
    md: 30,
    lg: 36,
  };

  const px = iconSizes[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Ardenova Architectural 'A' & Horizon Monogram */}
      <svg
        width={px}
        height={px}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Outer subtle shield geometry */}
        <rect width="36" height="36" rx="8" fill="#111728" stroke="#252D42" strokeWidth="1" />
        
        {/* Architectural 'A' Apex */}
        <path
          d="M18 7.5L28 28.5H23.5L18 16.8L12.5 28.5H8L18 7.5Z"
          fill="url(#goldGradient)"
        />
        
        {/* Horizon Movement Bar */}
        <line
          x1="11"
          y1="22"
          x2="25"
          y2="22"
          stroke="#C7A66A"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Dynamic Forward Dot Accent */}
        <circle cx="18" cy="11.5" r="1.3" fill="#FFFFFF" />

        <defs>
          <linearGradient id="goldGradient" x1="18" y1="7.5" x2="18" y2="28.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E2CEAA" />
            <stop offset="0.6" stopColor="#C7A66A" />
            <stop offset="1" stopColor="#A38144" />
          </linearGradient>
        </defs>
      </svg>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none select-none">
          <span className="font-display text-base font-bold tracking-[0.14em] text-white">
            ARDENOVA
          </span>
          <span className="text-[9px] font-semibold tracking-[0.26em] text-[#C7A66A] uppercase mt-0.5">
            Digital
          </span>
        </div>
      )}
    </div>
  );
};
