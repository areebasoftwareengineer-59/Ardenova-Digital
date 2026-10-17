import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, CheckCircle2, ArrowRight, ExternalLink, Globe } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartSimilarProject: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartSimilarProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#111318] border border-[#2B303C] rounded-2xl text-[#F6F3EC] shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 text-[#9399A8] hover:text-white bg-[#111318]/80 hover:bg-[#1E232F] rounded-full backdrop-blur-sm border border-[#2B303C] transition-colors cursor-pointer"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Visual Banner */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-[#181C26] rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/40 to-transparent" />

          {/* Banner Meta Badges */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C7A66A]">
              <span>{project.typeLabel}</span>
              <span className="text-white/40">·</span>
              <span className="text-white/80">{project.industry}</span>
            </div>

            {/* Live Demo Trigger on Banner */}
            <div className="flex items-center gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-[#C7A66A] hover:bg-[#D8B77B] text-xs font-semibold text-[#0B1020] transition-colors"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-10">
          
          {/* Title & Live URL Bar */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
              <h2 id="case-study-title" className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
                {project.title}
              </h2>
              
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#181E2C] border border-[#2A344A] text-xs font-mono text-[#C7A66A] hover:text-white hover:border-[#C7A66A] transition-colors w-fit"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="truncate max-w-xs">{project.liveUrl}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="text-base sm:text-lg text-[#9399A8] leading-relaxed max-w-3xl">
              {project.summary}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#181C26] border border-[#252B3A] mb-8">
            {project.conceptHighlights.map((highlight, idx) => (
              <div key={idx}>
                <span className="block text-[11px] font-medium uppercase tracking-wider text-[#9399A8] mb-1">
                  {highlight.label}
                </span>
                <span className="font-display text-xs sm:text-sm font-semibold text-white">
                  {highlight.value}
                </span>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-xl bg-[#141822] border border-[#232938]">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#C7A66A] block mb-2">
                01 · Strategic Brief
              </span>
              <h3 className="font-display text-lg font-bold text-white mb-3">
                Context & Objective
              </h3>
              <p className="text-sm text-[#9399A8] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#141822] border border-[#232938]">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#C7A66A] block mb-2">
                02 · Digital Execution
              </span>
              <h3 className="font-display text-lg font-bold text-white mb-3">
                The Implemented Solution
              </h3>
              <p className="text-sm text-[#9399A8] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables & Specifications */}
          <div className="mb-8">
            <h3 className="font-display text-lg font-bold text-white mb-4">
              Scope of Implementation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#151924] border border-[#202636] text-sm text-[#E0E4ED]">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A66A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <span className="block text-xs font-semibold tracking-wider uppercase text-[#9399A8] mb-3">
              Technology & Frameworks
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded bg-[#181D2A] text-xs font-mono text-[#C7A66A] border border-[#293245]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer Action */}
          <div className="pt-6 border-t border-[#232938] flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B1020] bg-[#C7A66A] hover:bg-[#D8B77B] rounded-md transition-luxury cursor-pointer"
            >
              <span>Test Live Demo in New Window</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onStartSimilarProject(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A2234] hover:bg-[#253048] border border-[#2E3C58] rounded-md transition-luxury cursor-pointer"
            >
              <span>Discuss Similar Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
