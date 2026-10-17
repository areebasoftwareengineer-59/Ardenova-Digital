import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Check, Calendar, MessageSquare, ChevronRight } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="process" className="bg-[#0B1020] text-white py-24 sm:py-32 relative border-b border-[#232A3B]">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C7A66A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#C7A66A] uppercase mb-4">
            <span className="w-6 h-[1px] bg-[#C7A66A]" />
            <span>Delivery Methodology</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12] text-balance">
            A Clear Process. A Better Partnership.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9399A8] leading-relaxed">
            Predictability, disciplined communication, and verified milestone staging at every phase of execution.
          </p>
        </div>

        {/* 4 Steps Horizontal / Interactive Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#151C2F] border-[#C7A66A] shadow-lg shadow-black/40 ring-1 ring-[#C7A66A]/40'
                    : 'bg-[#111728]/70 border-[#232A3B] hover:border-[#38435E] hover:bg-[#141A2D]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs font-bold tracking-wider ${
                    isSelected ? 'text-[#C7A66A]' : 'text-[#9399A8]'
                  }`}>
                    {step.number}
                  </span>
                  <span className={`text-[11px] font-mono ${
                    isSelected ? 'text-white' : 'text-[#6C7485]'
                  }`}>
                    {step.typicalDuration}
                  </span>
                </div>
                <h3 className={`font-display text-lg font-bold mb-2 transition-colors ${
                  isSelected ? 'text-white' : 'text-[#D0D5E0]'
                }`}>
                  {step.title}
                </h3>
                <p className="text-xs text-[#9399A8] line-clamp-2 leading-relaxed">
                  {step.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Showcase */}
        <div className="bg-[#111728] border border-[#232A3B] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step Overview */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#232A3B] pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C7A66A] uppercase mb-2">
                <span>Phase {PROCESS_STEPS[activeStepIndex].number} Focus</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                {PROCESS_STEPS[activeStepIndex].title}
              </h4>
              <p className="text-sm text-[#9399A8] leading-relaxed mb-6">
                {PROCESS_STEPS[activeStepIndex].summary}
              </p>

              {/* Touchpoints strip */}
              <div className="space-y-3 pt-4 border-t border-[#1F273C]">
                <div className="flex items-center gap-3 text-xs text-[#C7A66A]">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span className="text-[#D3D8E2]">
                    Typical Duration: <strong className="text-white font-medium">{PROCESS_STEPS[activeStepIndex].typicalDuration}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#C7A66A]">
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span className="text-[#D3D8E2]">
                    Collaboration: <strong className="text-white font-medium">{PROCESS_STEPS[activeStepIndex].clientTouchpoints}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Step Action Points & Deliverables */}
            <div className="lg:col-span-7">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-[#9399A8] mb-4">
                Structured Workflows & Milestone Sign-Offs
              </h5>
              <div className="space-y-3.5">
                {PROCESS_STEPS[activeStepIndex].actionPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-[#151B2E] border border-[#232B40]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#1C2642] text-[#C7A66A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-sm text-[#E2E6F0] leading-relaxed font-normal">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Next Step Navigation */}
              <div className="mt-6 pt-4 border-t border-[#1F273C] flex items-center justify-between">
                <span className="text-xs text-[#9399A8]">
                  Step {activeStepIndex + 1} of 4 in our delivery cycle
                </span>
                {activeStepIndex < 3 ? (
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex((prev) => (prev + 1) % 4)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C7A66A] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Next: {PROCESS_STEPS[activeStepIndex + 1].title}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C7A66A] hover:text-white transition-colors"
                  >
                    <span>Proceed to Project Scoping</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
