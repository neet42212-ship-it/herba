import { X, QrCode, Shield, Calendar, AlertTriangle, ExternalLink, Leaf } from 'lucide-react';
import { packagingDetails } from '../data/packaging';

export default function PackagingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { labelData } = packagingDetails;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="label-modal-title"
    >
      <div className="relative w-full max-w-3xl bg-[#F7F4EA] rounded-3xl shadow-2xl border border-[#A9B99A]/40 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="bg-[#234735] text-[#F7F4EA] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Leaf className="w-5 h-5 text-[#A9B99A]" />
            <h3 id="label-modal-title" className="text-lg font-serif font-bold tracking-wide">
              HERBAGUARD Official Label Specification Preview
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#F7F4EA] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9B99A]"
            aria-label="Close Label Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Rendered Label Canvas */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Label Container - Styled to evoke high-end recycled paper label */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FCFAF2] border-2 border-[#234735]/20 shadow-inner space-y-6 relative">
            {/* Label Brand Header */}
            <div className="text-center pb-6 border-b border-[#A9B99A]/30">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#234735]/80 font-bold block">
                College Research Project Concept
              </span>
              <h4 className="text-3xl sm:text-4xl font-serif font-bold text-[#173C2B] tracking-wider mt-1">
                HERBAGUARD
              </h4>
              <p className="text-xs uppercase font-medium tracking-widest text-[#234735] mt-1">
                Herbal Mosquito Repellent Liquid
              </p>
              <p className="text-xs font-mono text-[#24332A]/60 mt-1">
                Volume: {labelData.volume} • Formula Code: HG-TRI-2026
              </p>
            </div>

            {/* Middle Grid: Ingredients & Batch Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Botanical Actives */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono uppercase font-bold text-[#173C2B] tracking-wider flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-[#234735]" />
                  <span>Active Botanical Composition</span>
                </h5>
                <p className="text-xs text-[#24332A]/85 leading-relaxed bg-[#F7F4EA] p-3 rounded-xl border border-[#A9B99A]/25">
                  {labelData.ingredientsList}
                </p>

                {/* Storage Instructions */}
                <h5 className="text-xs font-mono uppercase font-bold text-[#173C2B] tracking-wider pt-2">
                  Storage Conditions
                </h5>
                <p className="text-xs text-[#24332A]/80 leading-relaxed">
                  {labelData.storageConditions}
                </p>
              </div>

              {/* Batch Provenance & QR Demonstration */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono uppercase font-bold text-[#173C2B] tracking-wider flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#234735]" />
                  <span>Batch Provenance & Traceability</span>
                </h5>

                <div className="p-3.5 rounded-xl bg-[#F7F4EA] border border-[#A9B99A]/25 space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-[#A9B99A]/15 font-mono">
                    <span className="text-[#234735]/70">Batch Number:</span>
                    <span className="font-bold text-[#173C2B]">{labelData.batchNumber}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#A9B99A]/15 font-mono">
                    <span className="text-[#234735]/70">Prep Date:</span>
                    <span className="text-[#24332A] italic">TBD upon preparation</span>
                  </div>
                  <div className="flex justify-between items-center py-1 font-mono">
                    <span className="text-[#234735]/70">Review Date:</span>
                    <span className="text-[#24332A] italic">Subject to stability data</span>
                  </div>
                </div>

                {/* QR Code Demo Section */}
                <div className="p-4 rounded-xl bg-[#234735]/5 border border-[#234735]/20 flex items-center gap-4">
                  {/* Visual SVG QR Code placeholder */}
                  <div className="w-20 h-20 bg-white p-1.5 rounded-lg border border-[#A9B99A]/40 shrink-0 shadow-xs flex flex-col items-center justify-center">
                    <svg className="w-full h-full text-[#173C2B]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 3h2v3h-2v-3zm0-5h2v3h-2v-3zm-4 0h2v2h-2v-2zm0 4h2v4h-2v-4zm-4-4h2v2h-2v-2zm2 4h2v2h-2v-2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase bg-[#234735] text-[#F7F4EA] px-2 py-0.5 rounded font-bold">
                      Demo QR Code
                    </span>
                    <p className="text-xs text-[#24332A]/80 mt-1 leading-relaxed">
                      Scans to the on-page scientific formulation and research dossier.
                    </p>
                    <a
                      href="#references"
                      onClick={onClose}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#234735] hover:underline mt-1"
                    >
                      <span>Jump to References</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions & Precautions */}
            <div className="pt-4 border-t border-[#A9B99A]/30 space-y-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <h5 className="text-xs font-mono uppercase font-bold text-[#173C2B] tracking-wider">
                  Experimental Safety & Directions
                </h5>
              </div>
              <p className="text-xs text-[#24332A]/85 italic">
                {labelData.directions}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {labelData.precautions.map((warn, i) => (
                  <li key={i} className="text-[11px] text-[#24332A]/75 flex items-start gap-1.5">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic project footer note */}
            <div className="text-center pt-3 border-t border-[#A9B99A]/20">
              <p className="text-[10px] font-mono text-[#24332A]/60">
                {labelData.academicAffiliation} • Demonstrative Prototype
              </p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-[#FCFAF2] px-6 py-4 border-t border-[#A9B99A]/30 flex items-center justify-between">
          <p className="text-xs text-[#24332A]/70">
            *No physical sensors or IoT chips are claimed; smart concept emphasizes photoprotection & QR transparency.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#F7F4EA] bg-[#234735] hover:bg-[#173C2B] rounded-full transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
