import { useState } from 'react';
import { packagingDetails } from '../data/packaging';
import PackagingModal from '../components/PackagingModal';
import { ShieldCheck, Eye, QrCode, Sparkles, SunDim, Package, Check } from 'lucide-react';
import bottleImage from '../assets/bottle1.png';

export default function SmartPackagingSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="packaging" className="py-20 bg-[#FCFAF2] border-t border-[#A9B99A]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#234735]/10 text-[#234735] text-xs font-semibold uppercase tracking-wider">
            <Package className="w-3.5 h-3.5" />
            <span>Sustainable Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#173C2B] leading-tight">
            Smart Packaging Concept
          </h2>
          <p className="text-base sm:text-lg text-[#24332A]/80 leading-relaxed font-normal">
            Marrying traditional apothecary photoprotection with contemporary digital traceability to safeguard
            active botanical compounds without single-use plastic waste.
          </p>
        </div>

        {/* Packaging Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Interactive Product Photo & Hotspots */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#A9B99A]/30 bg-[#F7F4EA] group">
              <img
                src={bottleImage}
                alt="HERBAGUARD smart amber glass packaging bottle with wood cap and QR batch label"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />

              {/* Overlay Interactive Badge */}
              <div className="absolute top-4 right-4 bg-[#234735]/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-mono text-[#F7F4EA] flex items-center gap-1.5 shadow-md">
                <SunDim className="w-3.5 h-3.5 text-[#A9B99A]" />
                <span>UV 290-450nm Filter</span>
              </div>

              {/* Primary Explore Action Button Over Image */}
              <div className="absolute bottom-6 left-6 right-6">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#F7F4EA]/95 backdrop-blur-md hover:bg-[#F7F4EA] text-[#173C2B] font-semibold text-xs uppercase tracking-wider shadow-lg border border-[#A9B99A]/40 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 group/btn"
                >
                  <Eye className="w-4 h-4 text-[#234735] group-hover/btn:scale-110 transition-transform" />
                  <span>Explore Interactive Label Preview</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Packaging Architecture Specifications */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#234735] font-bold">
                Apothecary Engineering Matrix
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#173C2B] mt-1">
                Protecting Volatiles by Design
              </h3>
              <p className="text-sm text-[#24332A]/80 mt-2 leading-relaxed">
                Essential oils of lemongrass and cinnamon comprise volatile terpenes, aldehydes, and phenols that
                rapidly oxidize and lose repellency when exposed to ambient light and oxygen. Our packaging architecture
                addresses stability at the material level.
              </p>
            </div>

            {/* Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {packagingDetails.packagingSpecs.map((spec, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#F7F4EA] border border-[#A9B99A]/30 space-y-1.5 shadow-xs"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#234735]/10 flex items-center justify-center text-[#234735] shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs font-mono uppercase font-bold text-[#173C2B]">
                      {spec.feature}
                    </h4>
                  </div>
                  <p className="text-xs font-semibold text-[#234735]">{spec.specification}</p>
                  <p className="text-[11px] text-[#24332A]/75 leading-relaxed pt-1">
                    {spec.rationale}
                  </p>
                </div>
              ))}
            </div>

            {/* Smart Digital Traceability Concept Banner */}
            <div className="p-5 rounded-2xl bg-[#234735] text-[#F7F4EA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#A9B99A]/20 flex items-center justify-center text-[#A9B99A] shrink-0">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#FCFAF2]">Digital Batch Provenance</h4>
                  <p className="text-xs text-[#F7F4EA]/80 mt-0.5 leading-relaxed">
                    Demo QR system enables direct access to batch dates, formulation records, and safety dossiers.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-[#A9B99A] text-[#173C2B] font-semibold text-xs uppercase tracking-wider hover:bg-[#F7F4EA] transition-colors shrink-0"
              >
                Inspect Label
              </button>
            </div>
          </div>
        </div>

        {/* Smart Hardware Disclaimer Bar */}
        <div className="p-4 rounded-xl bg-[#F7F4EA] border border-[#A9B99A]/30 text-center max-w-3xl mx-auto shadow-xs">
          <p className="text-xs text-[#24332A]/75 leading-relaxed">
            <strong className="text-[#173C2B]">Academic Concept Clarification:</strong> No electronic sensors,
            IoT microchips, freshness indicators, or battery-powered smart hardware are included or claimed.
            HERBAGUARD defines “smart packaging” as the synthesis of light-filtering material science and digital QR
            information transparency.
          </p>
        </div>
      </div>

      {/* Interactive Modal */}
      <PackagingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
