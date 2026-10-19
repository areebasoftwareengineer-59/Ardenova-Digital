import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import { ProjectItem } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import savedThumbnailsOnServer from '../data/savedThumbnails.json';
import { ArrowUpRight, ExternalLink, Eye } from 'lucide-react';


interface WorkPortfolioProps {
  onStartProjectForCase: (projectTitle: string) => void;
}

export const WorkPortfolio: React.FC<WorkPortfolioProps> = ({ onStartProjectForCase }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);
  const [livePreviewUrl, setLivePreviewUrl] = useState<{ url: string; title: string } | null>(null);

  // Read saved thumbnails and merge with permanent project images
  const [customThumbnails, setCustomThumbnails] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('ardenova_custom_thumbnails');
      if (saved) {
        const parsed = JSON.parse(saved);
        const valid: Record<string, string> = {};
        for (const [k, v] of Object.entries(parsed)) {
          // Reject temporary blob URLs that expire on reload
          if (typeof v === 'string' && !v.startsWith('blob:')) {
            valid[k] = v;
          }
        }
        return { ...(savedThumbnailsOnServer as Record<string, string>), ...valid };
      }
    } catch {
      // Ignore
    }
    return (savedThumbnailsOnServer as Record<string, string>) || {};
  });



  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'Travel & Luxury Hospitality', label: 'Travel & Hospitality' },
    { id: 'Luxury Brand & Studio', label: 'Luxury Brands' },
    { id: 'Hospitality & Fine Dining', label: 'Fine Dining' },
    { id: 'Digital Agency & Engineering', label: 'Agency & Tech' },
    { id: 'Business & Growth Platform', label: 'Growth & Platforms' },
    { id: 'Web Application & SaaS', label: 'Web Apps & SaaS' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.typeLabel === selectedFilter);

  return (
    <section id="work" className="bg-[#FFFFFF] text-[#111318] py-24 sm:py-32 border-b border-[#E3DDD1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#A6864B] uppercase mb-4">
              <span className="w-6 h-[1px] bg-[#A6864B]" />
              <span>Client & Live Deployments</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111318] leading-[1.12] text-balance">
              Featured Projects. Live in Production.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#555C6D] leading-relaxed">
              Explore our live client applications and digital platforms with verified production deployments.
            </p>
          </div>

          {/* Production Status Badge */}
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E3DDD1] text-xs font-semibold text-[#111318] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PROJECTS.length} Verified Live Deployments</span>
            </div>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 bg-[#F6F3EC] rounded-xl border border-[#E3DDD1] w-fit">
          {filterOptions.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#111318] text-[#F6F3EC] shadow-sm'
                    : 'text-[#555C6D] hover:text-[#111318] hover:bg-[#EAE4D7]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 2x2 Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {filteredProjects.map((project) => {
            const currentDisplayImage = customThumbnails[project.id] || project.image;

            return (
              <article
                key={project.id}
                className="group flex flex-col bg-[#FAF8F5] border border-[#E3DDD1] rounded-2xl overflow-hidden hover:border-[#C7A66A] transition-all duration-300 hover:shadow-xl hover:shadow-[#111318]/5"
              >
                {/* Visual Preview Container */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-[#111318]">
                  {/* Main Image */}
                  <img
                    src={currentDisplayImage}
                    alt={`${project.title} screenshot`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      if (e.currentTarget.src !== project.image) {
                        e.currentTarget.src = project.image;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/80 via-transparent to-transparent opacity-80" />

                  {/* Top Bar: Category Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-[#111318] bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md shadow-sm border border-[#E3DDD1]">
                      {project.typeLabel}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Meta */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white z-10">
                    <span className="font-medium tracking-wide text-[#E2CEAA]">
                      {project.industry}
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0B1020]/90 hover:bg-[#C7A66A] hover:text-[#0B1020] text-white border border-white/20 transition-all font-mono text-[11px]"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#A6864B] transition-colors">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[11px] text-[#A6864B] shrink-0 mt-1">
                        Live on Vercel
                      </span>
                    </div>

                    <p className="text-sm text-[#555C6D] leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#7D8494] mb-6">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-[#EFECE4] text-[11px] font-medium text-[#444A57]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Links: Live Demo & Case Study */}
                  <div className="pt-4 border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-3">
                    {/* Live Demo Direct Link */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B1020] bg-[#C7A66A] hover:bg-[#D8B77B] rounded-md transition-luxury cursor-pointer shadow-sm shadow-[#C7A66A]/20"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>

                    <div className="flex items-center gap-4">
                      {/* Interactive In-App Preview */}
                      <button
                        type="button"
                        onClick={() => setLivePreviewUrl({ url: project.liveUrl, title: project.title })}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#555C6D] hover:text-[#111318] transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#A6864B]" />
                        <span>Interactive Frame</span>
                      </button>

                      {/* View Case Study */}
                      <button
                        type="button"
                        onClick={() => setActiveCaseStudy(project)}
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#111318] group-hover:text-[#A6864B] transition-colors cursor-pointer"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#A6864B]" />
                      </button>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Case Study Full Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onStartSimilarProject={onStartProjectForCase}
      />

      {/* Interactive Live Website Frame Preview Modal */}
      {livePreviewUrl && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLivePreviewUrl(null)}
        >
          <div
            className="relative w-full max-w-6xl h-[92vh] bg-[#111318] border border-[#2B303C] rounded-2xl flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Browser Chrome Bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#161A24] border-b border-[#252B3A] shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#0E1119] border border-[#222736] rounded text-xs font-mono text-[#9399A8]">
                  <span>🔒</span>
                  <span className="text-[#C7A66A] truncate max-w-md">{livePreviewUrl.url}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={livePreviewUrl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0B1020] bg-[#C7A66A] hover:bg-[#D8B77B] rounded transition-colors"
                >
                  <span>Open Fullscreen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  type="button"
                  onClick={() => setLivePreviewUrl(null)}
                  className="p-1.5 text-[#9399A8] hover:text-white bg-[#222736] hover:bg-[#2F364A] rounded transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Iframe Frame Viewport */}
            <div className="flex-1 w-full h-full bg-white relative">
              <iframe
                src={livePreviewUrl.url}
                title={livePreviewUrl.title}
                className="w-full h-full border-none"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>

            {/* Security notice bar */}
            <div className="px-4 py-2 bg-[#111318] border-t border-[#232836] flex items-center justify-between text-xs text-[#9399A8]">
              <span>Previewing live deployment for {livePreviewUrl.title}</span>
              <a
                href={livePreviewUrl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C7A66A] hover:underline"
              >
                Direct Link: {livePreviewUrl.url} ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
