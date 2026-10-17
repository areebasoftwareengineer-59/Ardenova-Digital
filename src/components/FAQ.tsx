import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-4']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="bg-[#FFFFFF] text-[#111318] py-24 sm:py-32 border-b border-[#E3DDD1]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#A6864B] uppercase mb-4">
            <span className="w-6 h-[1px] bg-[#A6864B]" />
            <span>Frequently Asked Questions</span>
            <span className="w-6 h-[1px] bg-[#A6864B]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111318] leading-[1.14]">
            Transparent Answers to Common Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#555C6D] leading-relaxed">
            Straightforward details on engagement terms, scoping criteria, international collaboration, and timelines.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="divide-y divide-[#E3DDD1] border-y border-[#E3DDD1]">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const contentId = `faq-content-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <div key={faq.id} className="py-6 sm:py-7">
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left gap-6 group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C7A66A] rounded-md outline-none"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#111318] group-hover:text-[#A6864B] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#111318] text-white'
                        : 'bg-[#F6F3EC] text-[#111318] group-hover:bg-[#EAE4D7]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="mt-4 pr-10 text-sm sm:text-base text-[#555C6D] leading-relaxed animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Supporting notice */}
        <div className="mt-12 text-center text-xs text-[#7D8494]">
          <span>Have a specific architectural or timeline requirement? </span>
          <a
            href="#contact"
            className="font-semibold text-[#111318] hover:text-[#A6864B] underline underline-offset-4"
          >
            Submit an inquiry for custom review
          </a>
        </div>

      </div>
    </section>
  );
};
