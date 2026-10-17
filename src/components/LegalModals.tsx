import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#111728] border border-[#232A3B] rounded-2xl p-6 sm:p-8 text-[#F6F3EC] shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#9399A8] hover:text-white bg-[#1A2238] rounded-lg transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C7A66A] mb-2">
              Legal Governance
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Privacy Policy
            </h3>
            <div className="space-y-4 text-sm text-[#9399A8] leading-relaxed">
              <p>
                At Ardenova Digital, we hold client privacy, technical architectures, and strategic roadmaps in the highest regard. This policy outlines how information submitted through our digital properties is handled.
              </p>
              <h4 className="font-bold text-white text-base pt-2">1. Information Collection</h4>
              <p>
                We only collect project inquiry details (name, business email, organization, scope, and objectives) voluntarily submitted through our intake forms or direct communication channels.
              </p>
              <h4 className="font-bold text-white text-base pt-2">2. Confidentiality & Usage</h4>
              <p>
                Information provided is strictly used to assess project feasibility, estimate scopes, and communicate regarding potential commercial partnerships. We never sell, lease, or monetize your contact or business information.
              </p>
              <h4 className="font-bold text-white text-base pt-2">3. Non-Disclosure & Security</h4>
              <p>
                Prior to detailed architectural reviews or access to client repositories, mutual non-disclosure agreements (NDAs) are executed upon request.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C7A66A] mb-2">
              Legal Governance
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Terms of Service
            </h3>
            <div className="space-y-4 text-sm text-[#9399A8] leading-relaxed">
              <p>
                Welcome to Ardenova Digital. By accessing our platform or engaging our consulting services, you agree to the following terms.
              </p>
              <h4 className="font-bold text-white text-base pt-2">1. Scope of Work</h4>
              <p>
                All bespoke design, engineering, and maintenance engagements are governed by individual Statement of Work (SOW) documents detailing agreed milestones, deliverables, payment terms, and timelines.
              </p>
              <h4 className="font-bold text-white text-base pt-2">2. Intellectual Property</h4>
              <p>
                Upon receipt of full payment for contracted milestones, all bespoke code, visual designs, and digital assets developed specifically for the client transfer to the client, retaining no vendor lock-in.
              </p>
              <h4 className="font-bold text-white text-base pt-2">3. Demonstration Models</h4>
              <p>
                Certain portfolio artifacts displayed on this site represent conceptual architectural demonstrations to illustrate technical and aesthetic capabilities.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-[#232A3B] text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B1020] bg-[#C7A66A] hover:bg-[#D8B77B] rounded-md transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
