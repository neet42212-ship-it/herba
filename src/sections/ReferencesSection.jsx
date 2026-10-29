import {
  primaryResearchReference,
  additionalResearchRequired,
  supplementaryVerifiedReferences
} from '../data/references';
import { BookOpen, ExternalLink, AlertCircle, ArrowUpRight, CheckCircle2, BookmarkCheck } from 'lucide-react';

export default function ReferencesSection() {
  return (
    <section id="references" className="py-20 bg-[#FCFAF2] border-t border-[#A9B99A]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#234735]/10 text-[#234735] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Bibliography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#173C2B] leading-tight">
            Research & References
          </h2>
          <p className="text-base sm:text-lg text-[#24332A]/80 leading-relaxed font-normal">
            Documenting the peer-reviewed literature that grounds this academic inquiry and mapping the required
            experimental validation pathways.
          </p>
        </div>

        {/* 1. Primary Supplied Research Paper Hero Card */}
        <div className="bg-[#F7F4EA] rounded-3xl border-2 border-[#234735]/30 p-6 sm:p-10 shadow-md mb-16 relative overflow-hidden">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#A9B99A]/30 pb-6">
              <div>
                <span className="text-[10px] font-mono uppercase bg-[#234735] text-[#F7F4EA] px-3 py-1 rounded-full font-bold">
                  Primary Supplied Reference
                </span>
                <p className="text-xs font-mono text-[#24332A]/70 mt-2">
                  Published in {primaryResearchReference.journal} ({primaryResearchReference.year}) • Vol.{' '}
                  {primaryResearchReference.volume}, pp. {primaryResearchReference.pages}
                </p>
              </div>

              {/* Action Button: Read Research Paper */}
              <a
                href={primaryResearchReference.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#234735] hover:bg-[#173C2B] text-[#F7F4EA] font-semibold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234735]"
              >
                <span>Read Research Paper</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Title & Authors */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#173C2B] leading-snug">
                “{primaryResearchReference.title}”
              </h3>
              <p className="text-sm font-medium text-[#24332A]/85">
                Authors: <strong>{primaryResearchReference.authors}</strong>
              </p>
              <p className="text-xs font-mono text-[#234735]">
                DOI:{' '}
                <a
                  href={primaryResearchReference.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#173C2B]"
                >
                  {primaryResearchReference.doi}
                </a>
              </p>
            </div>

            {/* Key Findings in Paper */}
            <div className="bg-[#FCFAF2] p-5 rounded-2xl border border-[#A9B99A]/30 space-y-2">
              <h4 className="text-xs font-mono uppercase font-bold text-[#173C2B] tracking-wider">
                Summary of Published Methodology & Observations
              </h4>
              <ul className="space-y-1.5 text-xs text-[#24332A]/85">
                {primaryResearchReference.keyFindings.map((finding, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#234735] font-bold">•</span>
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Essential Critical Distinction Box */}
            <div className="bg-[#E7DCC8]/60 p-5 rounded-2xl border border-[#A9B99A]/40 flex items-start gap-3.5">
              <AlertCircle className="w-5 h-5 text-[#234735] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-mono uppercase font-bold text-[#173C2B]">
                  Essential Scientific Caveat & HERBAGUARD Scope
                </h5>
                <p className="text-xs text-[#24332A]/90 mt-1 leading-relaxed">
                  {primaryResearchReference.vitalDistinction}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Additional Research Required Section */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#234735] font-bold">
              Future Experimental Roadmap
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#173C2B] mt-1">
              Additional Research Required
            </h3>
            <p className="text-xs sm:text-sm text-[#24332A]/75 mt-1">
              The following six experimental research domains are required to transition the HERBAGUARD concept into a
              tested, safe, and reproducible botanical formulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalResearchRequired.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F7F4EA] p-6 rounded-2xl border border-[#A9B99A]/35 shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#234735] text-[#F7F4EA] font-mono text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-[#173C2B] leading-tight">
                      {item.topic}
                    </h4>
                  </div>
                  <p className="text-xs text-[#24332A]/80 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Supplementary Verified Scientific Literature */}
        <div>
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#234735] font-bold">
              Corroborative Research
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#173C2B] mt-1">
              Verified Supplementary References
            </h3>
            <p className="text-xs sm:text-sm text-[#24332A]/75 mt-1">
              Academic publications confirming bioactivity of individual botanical constituents under standardized protocols.
            </p>
          </div>

          <div className="space-y-4">
            {supplementaryVerifiedReferences.map((ref, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F7F4EA] border border-[#A9B99A]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#234735]/40 transition-colors"
              >
                <div className="space-y-1">
                  <p className="text-xs font-mono text-[#234735] font-semibold">{ref.authors} ({ref.year})</p>
                  <h4 className="text-sm font-bold text-[#173C2B]">“{ref.title}”</h4>
                  <p className="text-xs italic text-[#24332A]/70">
                    {ref.journal}, {ref.volume}, pp. {ref.pages}
                  </p>
                  <p className="text-xs text-[#24332A]/85 pt-1">
                    <span className="font-semibold text-[#173C2B]">Relevance:</span> {ref.relevance}
                  </p>
                </div>

                <a
                  href={ref.link || ref.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E7DCC8]/70 hover:bg-[#E7DCC8] text-[#173C2B] text-xs font-semibold uppercase tracking-wider shrink-0 transition-colors self-start sm:self-center"
                >
                  <span>View Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
