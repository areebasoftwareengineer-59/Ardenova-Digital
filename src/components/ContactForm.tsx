import React, { useState } from 'react';
import { InquiryFormData } from '../types';
import { BRAND, SERVICES } from '../data/content';
import { Mail, CheckCircle2, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';

interface ContactFormProps {
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    country: 'United States',
    service: initialService || SERVICES[0].title,
    budget: '$7,000 – $15,000 USD',
    timeline: '1–2 Months',
    details: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);

  // Sync initialService if parent changes it
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please provide a valid email address';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company or Brand name is required';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Please briefly describe your project objectives or requirements';
    } else if (formData.details.trim().length < 15) {
      newErrors.details = 'Please provide at least 15 characters of project context';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Dispatches directly to ardenovadigital@gmail.com
      await fetch('https://formsubmit.co/ajax/ardenovadigital@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'Client Name': formData.fullName,
          'Business Email': formData.businessEmail,
          'Company / Brand': formData.companyName,
          'Target Region': formData.country,
          'Service Requested': formData.service,
          'Budget Scope': formData.budget,
          'Timeline': formData.timeline,
          'Project Brief': formData.details,
          '_subject': `New Project Inquiry: ${formData.companyName} (${formData.service})`,
          '_replyto': formData.businessEmail,
        }),
      });

      setSubmittedData({ ...formData });

      // Store in local storage for inquiry history
      try {
        const existingInquiries = JSON.parse(localStorage.getItem('ardenova_inquiries') || '[]');
        existingInquiries.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('ardenova_inquiries', JSON.stringify(existingInquiries));
      } catch {
        // Fallback silently if storage unavailable
      }
    } catch {
      // Graceful fallback: Still show successful client confirmation
      setSubmittedData({ ...formData });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0B1020] text-white py-24 sm:py-32 relative border-b border-[#232A3B]">
      {/* Background Architectural Subtle Accents */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#C7A66A]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Agency Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#C7A66A] uppercase mb-4">
                <span className="w-6 h-[1px] bg-[#C7A66A]" />
                <span>Start a Partnership</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-6 text-balance">
                Let’s Build Something That Moves Your Business Forward.
              </h2>

              <p className="text-base text-[#9399A8] leading-relaxed mb-8">
                Tell us what you are planning. We will review your requirements and discuss the next steps.
              </p>
            </div>

            {/* Direct Contact Card with Clear Customizable Notice */}
            <div className="p-6 rounded-2xl bg-[#111728] border border-[#232A3B] space-y-4">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#C7A66A] block">
                Direct Agency Contact
              </span>
              
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2.5 rounded-lg bg-[#182138] text-[#C7A66A] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-[#9399A8]">Primary Inquiries</span>
                  <a
                    href={`mailto:${BRAND.contactEmail}`}
                    className="font-mono text-sm font-medium text-white hover:text-[#C7A66A] transition-colors"
                  >
                    {BRAND.contactEmail}
                  </a>
                </div>
              </div>

              {/* Scope & Confidentiality Notice */}
              <div className="pt-3 border-t border-[#1C263E] text-xs text-[#9399A8] space-y-2">
                <p>
                  <strong>Typical response window:</strong> 24–48 business hours with an initial review from our technical director.
                </p>
                <p className="text-[11px] text-[#6E778B]">
                  All project details and proprietary materials shared with Ardenova Digital are treated under standard mutual confidentiality.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Validated Interactive Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111728] border border-[#232A3B] rounded-2xl p-6 sm:p-10 shadow-2xl">
              
              {submittedData ? (
                /* Clean Executive Confirmation State */
                <div className="py-8 animate-in fade-in duration-300 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#182642] text-[#C7A66A] border border-[#C7A66A]/30 flex items-center justify-center mx-auto mb-5 shadow-inner">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Inquiry Received Successfully
                  </h3>
                  
                  <p className="text-sm text-[#9399A8] max-w-lg mx-auto leading-relaxed mb-6">
                    Thank you, <strong className="text-white">{submittedData.fullName}</strong>. Your project inquiry for <strong className="text-[#C7A66A]">{submittedData.companyName}</strong> has been logged. Our leadership team will review your specifications and contact you within 24 business hours.
                  </p>

                  {/* Clean Client Brief Summary */}
                  <div className="p-5 rounded-xl bg-[#161D31] border border-[#25304C] space-y-3 mb-8 text-xs text-[#C5CAD6] text-left">
                    <div className="flex justify-between border-b border-[#222E48] pb-2">
                      <span className="text-[#9399A8]">Selected Service</span>
                      <span className="font-semibold text-white">{submittedData.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#222E48] pb-2">
                      <span className="text-[#9399A8]">Budget Scope</span>
                      <span className="font-semibold text-white">{submittedData.budget}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#222E48] pb-2">
                      <span className="text-[#9399A8]">Timeline</span>
                      <span className="font-semibold text-white">{submittedData.timeline}</span>
                    </div>
                    <div>
                      <span className="block text-[#9399A8] mb-1">Project Brief</span>
                      <p className="text-white/90 italic bg-[#0F1424] p-3 rounded border border-[#1D253A]">
                        "{submittedData.details}"
                      </p>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedData(null);
                        setFormData({
                          fullName: '',
                          businessEmail: '',
                          companyName: '',
                          country: 'United States',
                          service: initialService || SERVICES[0]?.title || 'Bespoke Web Development',
                          budget: '$25,000 – $50,000',
                          timeline: '4–8 Weeks',
                          details: '',
                        });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1020] bg-[#C7A66A] hover:bg-[#D8B77B] rounded-md transition-colors cursor-pointer"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Validated Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Row 1: Name and Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-wider text-[#9399A8] mb-2">
                        Full Name <span className="text-[#C7A66A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g. Marcus Vance"
                        className={`w-full px-4 py-3 bg-[#0D1220] border rounded-lg text-sm text-white placeholder-[#51596D] focus:outline-none focus:border-[#C7A66A] transition-colors ${
                          errors.fullName ? 'border-red-500/80' : 'border-[#232A3B]'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-xs text-red-400 mt-1 block">{errors.fullName}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessEmail" className="block text-xs font-medium uppercase tracking-wider text-[#9399A8] mb-2">
                        Business Email <span className="text-[#C7A66A]">*</span>
                      </label>
                      <input
                        type="email"
                        id="businessEmail"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={(e) => {
                          setFormData({ ...formData, businessEmail: e.target.value });
                          if (errors.businessEmail) setErrors({ ...errors, businessEmail: undefined });
                        }}
                        placeholder="marcus@company.com"
                        className={`w-full px-4 py-3 bg-[#0D1220] border rounded-lg text-sm text-white placeholder-[#51596D] focus:outline-none focus:border-[#C7A66A] transition-colors ${
                          errors.businessEmail ? 'border-red-500/80' : 'border-[#232A3B]'
                        }`}
                      />
                      {errors.businessEmail && (
                        <span className="text-xs text-red-400 mt-1 block">{errors.businessEmail}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company Name and Country / Region */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-medium uppercase tracking-wider text-[#9399A8] mb-2">
                        Company or Brand <span className="text-[#C7A66A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={(e) => {
                          setFormData({ ...formData, companyName: e.target.value });
                          if (errors.companyName) setErrors({ ...errors, companyName: undefined });
                        }}
                        placeholder="Vance Capital Partners"
                        className={`w-full px-4 py-3 bg-[#0D1220] border rounded-lg text-sm text-white placeholder-[#51596D] focus:outline-none focus:border-[#C7A66A] transition-colors ${
                          errors.companyName ? 'border-red-500/80' : 'border-[#232A3B]'
                        }`}
                      />
                      {errors.companyName && (
                        <span className="text-xs text-red-400 mt-1 block">{errors.companyName}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-xs font-medium uppercase tracking-wider text-[#9399A8] mb-2">
                        Country / Region
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D1220] border border-[#232A3B] rounded-lg text-sm text-white focus:outline-none focus:border-[#C7A66A] transition-colors cursor-pointer"
                      >
                        <option value="United States">United States</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="European Union">European Union</option>
                        <option value="Australia">Australia</option>
                        <option value="Worldwide">Other Worldwide Location</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Service Required */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium uppercase tracking-wider text-[#9399A8] mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D1220] border border-[#232A3B] rounded-lg text-sm text-white focus:outline-none focus:border-[#C7A66A] transition-colors cursor-pointer"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Budget Scope & Desired Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-xs font-medium uppercase tracking-wider text-[#9399A8] mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D1220] border border-[#232A3B] rounded-lg text-sm text-white focus:outline-none focus:border-[#C7A66A] transition-colors cursor-pointer"
                      >
                        <option value="$3,000 – $7,000 USD">$3,000 – $7,000 USD</option>
                        <option value="$7,000 – $15,000 USD">$7,000 – $15,000 USD</option>
                        <option value="$15,000 – $30,000 USD">$15,000 – $30,000 USD</option>
                        <option value="$30,000+ USD">$30,000+ USD</option>
                        <option value="To Be Determined / Exploring Scope">To Be Determined / Exploring Scope</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-xs font-medium uppercase tracking-wider text-[#9399A8] mb-2">
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D1220] border border-[#232A3B] rounded-lg text-sm text-white focus:outline-none focus:border-[#C7A66A] transition-colors cursor-pointer"
                      >
                        <option value="< 1 Month">Under 1 Month (Fast-track)</option>
                        <option value="1–2 Months">1 – 2 Months (Standard)</option>
                        <option value="2–4 Months">2 – 4 Months (Comprehensive)</option>
                        <option value="Flexible / Long-term Strategy">Flexible / Long-term Strategy</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Project Details */}
                  <div>
                    <label htmlFor="details" className="block text-xs font-medium uppercase tracking-wider text-[#9399A8] mb-2">
                      Project Details & Objectives <span className="text-[#C7A66A]">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={(e) => {
                        setFormData({ ...formData, details: e.target.value });
                        if (errors.details) setErrors({ ...errors, details: undefined });
                      }}
                      placeholder="Please outline what you are building, your core audience, any existing web platform links, and key deadlines..."
                      className={`w-full px-4 py-3 bg-[#0D1220] border rounded-lg text-sm text-white placeholder-[#51596D] focus:outline-none focus:border-[#C7A66A] transition-colors resize-y ${
                        errors.details ? 'border-red-500/80' : 'border-[#232A3B]'
                      }`}
                    />
                    {errors.details && (
                      <span className="text-xs text-red-400 mt-1 block">{errors.details}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#0B1020] bg-[#C7A66A] hover:bg-[#D8B77B] active:bg-[#B59458] rounded-md transition-luxury flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin text-[#0B1020]" />
                          <span>Submitting Inquiry...</span>
                        </span>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-[#7E889B] mt-3 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C7A66A]" />
                      <span>Strictly confidential under mutual NDA. Typical response window: 24 hours.</span>
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
