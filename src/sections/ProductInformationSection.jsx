import { productInformationData } from '../data/productInfo';
import { ShieldAlert, AlertTriangle, FileText, CheckCircle2, Info, Ban } from 'lucide-react';

export default function ProductInformationSection() {
  return (
    <section id="product-info" className="py-20 bg-[#F7F4EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#234735]/10 text-[#234735] text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Product Dossier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#173C2B] leading-tight">
            Product Information & Safety Protocols
          </h2>
          <p className="text-base sm:text-lg text-[#24332A]/80 leading-relaxed font-normal">
            Formal technical specification sheet and toxicological precautionary guidelines governing the
            HERBAGUARD academic prototype.
          </p>
        </div>

        {/* Structured Product Information Panel */}
        <div className="bg-[#FCFAF2] rounded-3xl border border-[#A9B99A]/35 p-6 sm:p-10 shadow-sm mb-12">
          {/* Top Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-[#A9B99A]/25">
            <div className="p-4 rounded-xl bg-[#F7F4EA] border border-[#A9B99A]/20">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#234735]/70 block font-bold">
                Product Title
              </span>
              <p className="text-base font-serif font-bold text-[#173C2B] mt-1">
                {productInformationData.productName}
              </p>
              <p className="text-xs text-[#24332A]/60 mt-0.5">{productInformationData.productCategory}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F4EA] border border-[#A9B99A]/20">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#234735]/70 block font-bold">
                Batch Allocation
              </span>
              <p className="text-sm font-mono font-bold text-[#173C2B] mt-1">
                {productInformationData.batchNumber}
              </p>
              <p className="text-xs text-[#24332A]/60 mt-0.5">Academic Prototype Only</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F4EA] border border-[#A9B99A]/20">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#234735]/70 block font-bold">
                Preparation Date Record
              </span>
              <p className="text-xs font-mono text-[#24332A]/80 mt-1 italic">
                {productInformationData.preparationDate}
              </p>
              <p className="text-xs text-[#24332A]/60 mt-0.5">No fabricated manufacture dates</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F4EA] border border-[#A9B99A]/20">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#234735]/70 block font-bold">
                Expiry Date Record
              </span>
              <p className="text-xs font-mono text-[#24332A]/80 mt-1 italic">
                {productInformationData.expiryDate}
              </p>
              <p className="text-xs text-[#24332A]/60 mt-0.5">
                {productInformationData.expiryNote}
              </p>
            </div>
          </div>

          {/* Operational Guidance Rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 border-b border-[#A9B99A]/25">
            <div className="space-y-2">
              <h4 className="text-sm font-mono uppercase font-bold text-[#173C2B] tracking-wider">
                Storage Instructions
              </h4>
              <p className="text-xs sm:text-sm text-[#24332A]/85 leading-relaxed bg-[#F7F4EA] p-4 rounded-xl border border-[#A9B99A]/20">
                {productInformationData.storageInstructions}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-mono uppercase font-bold text-[#173C2B] tracking-wider">
                Intended Application Directions
              </h4>
              <p className="text-xs sm:text-sm text-[#24332A]/85 leading-relaxed bg-[#F7F4EA] p-4 rounded-xl border border-[#A9B99A]/20">
                {productInformationData.directionsForUse}
              </p>
            </div>
          </div>

          {/* Essential Precautionary Warnings Matrix */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-800" />
              <h4 className="text-base font-serif font-bold text-[#173C2B]">
                Precautionary Directives & Laboratory Safety Warnings
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {productInformationData.precautions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F7F4EA] border border-amber-800/15 space-y-1 hover:border-amber-800/30 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h5 className="text-xs font-bold text-[#173C2B]">{item.title}</h5>
                  </div>
                  <p className="text-xs text-[#24332A]/80 leading-relaxed pl-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prominent Mandatory Academic Disclaimer Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#234735] text-[#F7F4EA] border border-[#A9B99A]/40 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#A9B99A]/20 flex items-center justify-center text-[#A9B99A] shrink-0 mt-0.5">
              <Info className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A9B99A] font-bold">
                Mandatory Project Disclaimer
              </span>
              <p className="text-xs sm:text-sm text-[#F7F4EA]/90 leading-relaxed font-normal">
                {productInformationData.academicDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
