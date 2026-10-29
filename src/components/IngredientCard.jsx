import { useState } from 'react';
import { ChevronDown, ChevronUp, Beaker, Info, ShieldAlert, Sparkles } from 'lucide-react';

export default function IngredientCard({ ingredient }) {
  const [researchExpanded, setResearchExpanded] = useState(false);

  return (
    <div className="bg-[#FCFAF2] rounded-2xl border border-[#A9B99A]/30 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Real Botanical Image Container */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-[#E7DCC8]/40">
          {ingredient.image && (
            <img
              src={ingredient.image}
              alt={`${ingredient.commonName}${ingredient.botanicalName ? ` (${ingredient.botanicalName})` : ''} botanical photograph`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C2B]/80 via-transparent to-transparent opacity-60" />

          {/* Plant Family Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-[#F7F4EA]/90 backdrop-blur-md text-[11px] font-mono text-[#173C2B] font-semibold tracking-wider border border-[#A9B99A]/40 shadow-xs">
              Family: {ingredient.family}
            </span>
          </div>

          {/* Name overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FCFAF2] drop-shadow-sm">
              {ingredient.commonName}
            </h3>
            <p className="text-sm italic font-serif text-[#A9B99A] tracking-wide">
              {ingredient.botanicalName}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          {/* Potential Role Pill */}
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-[#234735]/70 block mb-1">
              Potential Role
            </span>
            <div className="inline-block px-3 py-1.5 rounded-lg bg-[#234735]/10 border border-[#234735]/20 text-[#173C2B] text-xs font-semibold">
              {ingredient.potentialRole}
            </div>
          </div>

          {/* Key Actives */}
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-[#234735]/70 block mb-1">
              Key Phytochemical Actives
            </span>
            <p className="text-xs font-mono font-medium text-[#24332A] bg-[#F7F4EA] p-2.5 rounded-lg border border-[#A9B99A]/25">
              {ingredient.keyActives}
            </p>
          </div>

          {/* Short Narrative Explanation */}
          <p className="text-xs sm:text-sm text-[#24332A]/85 leading-relaxed">
            {ingredient.shortDescription}
          </p>

          {/* Botanical Characteristics Matrix */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#A9B99A]/20">
            {ingredient.characteristics.map((char) => (
              <div key={char.label} className="bg-[#F7F4EA]/60 p-2 rounded border border-[#A9B99A]/15">
                <span className="text-[10px] font-mono uppercase text-[#234735]/60 block">{char.label}</span>
                <span className="text-[11px] font-medium text-[#173C2B]">{char.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

{ingredient.researchNote && ingredient.researchNote.type && ingredient.researchNote.type !== 'N/A' && (
  <div className="p-6 pt-0">
    <div className="border border-[#A9B99A]/30 rounded-xl overflow-hidden bg-[#F7F4EA]">
      <button
        type="button"
        onClick={() => setResearchExpanded(!researchExpanded)}
        className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-[#A9B99A]/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234735]"
        aria-expanded={researchExpanded}
      >
        <div className="flex items-center gap-2">
          <Beaker className="w-3.5 h-3.5 text-[#234735]" />
          <span className="text-xs font-semibold text-[#173C2B]">
            Research Note: {ingredient.researchNote.type}
          </span>
        </div>
        {researchExpanded ? (
          <ChevronUp className="w-4 h-4 text-[#234735]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#234735]" />
        )}
      </button>

      {researchExpanded && (
        <div className="px-4 pb-4 pt-1 text-xs text-[#24332A]/85 leading-relaxed border-t border-[#A9B99A]/20 bg-[#FCFAF2]">
          <p className="mt-2">{ingredient.researchNote.text}</p>
        </div>
      )}
    </div>
  </div>
)}
    </div>
  );
}
