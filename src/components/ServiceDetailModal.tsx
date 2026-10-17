import React, { useEffect } from 'react';
import { ServiceItem } from '../types';
import { X, Check, ArrowRight, Clock, Layers } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForInquiry: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForInquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#111728] border border-[#232A3B] rounded-2xl p-6 sm:p-8 text-[#F6F3EC] shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#9399A8] hover:text-white hover:bg-[#1A2238] rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C7A66A] uppercase mb-2">
            <span>Capability {service.number}</span>
            <span>·</span>
            <span>Standard Specification</span>
          </div>
          <h3 id="service-modal-title" className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {service.title}
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#9399A8] leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Key Metrics / Scope Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#232A3B] mb-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-md bg-[#182138] text-[#C7A66A] shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-medium text-[#9399A8]">Estimated Timeframe</span>
              <span className="text-sm font-semibold text-white">{service.timelineEstimate}</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-md bg-[#182138] text-[#C7A66A] shrink-0 mt-0.5">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-medium text-[#9399A8]">Engagement Model</span>
              <span className="text-sm font-semibold text-white">{service.engagementModel}</span>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C7A66A] mb-3">
            Key Scope & Deliverables
          </h4>
          <ul className="space-y-2.5">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#D3D8E2]">
                <div className="w-4 h-4 rounded-full bg-[#1A2644] text-[#C7A66A] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Technical Foundation */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold tracking-wider uppercase text-[#9399A8] mb-2.5">
            Architectural Foundation
          </h4>
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#C7A66A]">
            {service.techFocus.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded bg-[#182138] border border-[#263352] font-mono text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#232A3B]">
          <span className="text-xs text-[#9399A8]">
            Discuss your requirements with our technical lead
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectForInquiry(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1020] bg-[#C7A66A] hover:bg-[#D8B77B] rounded-md transition-luxury cursor-pointer"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
