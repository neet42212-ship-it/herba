import { publishedResearchFormulation, proposedHerbaguardFormulation } from '../data/formulation';
import { AlertTriangle, BookOpen, FlaskConical, CheckCircle2, HelpCircle } from 'lucide-react';

export default function FormulationTable() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      {/* 1. Published Research Formulation Card */}
      <div className="bg-[#FCFAF2] rounded-2xl border border-[#A9B99A]/40 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative">
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#234735] bg-[#234735]/10 px-3 py-1 rounded-full font-semibold">
              Published Academic Reference
            </span>
            <span className="text-xs text-[#24332A]/70 font-mono">Table 1, Page 3</span>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-[#173C2B]">
              Published Research Formulation
            </h3>
            <p className="text-xs text-[#24332A]/75 mt-1">
              Source: Sekar & Abd Rahim (2017) •{' '}
              <a
                href={publishedResearchFormulation.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#234735] underline font-medium hover:text-[#173C2B]"
              >
                DOI: 10.9734/ARRB/2017/36834
              </a>
            </p>
          </div>

          {/* Published Data Table */}
          <div className="overflow-x-auto rounded-xl border border-[#A9B99A]/30 bg-[#F7F4EA]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#234735] text-[#F7F4EA] font-semibold text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="p-3">Component Reported</th>
                  <th className="p-3">Reported Amount</th>
                  <th className="p-3 hidden sm:table-cell">Function</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#A9B99A]/20">
                {publishedResearchFormulation.components.map((c, i) => (
                  <tr key={i} className="hover:bg-[#A9B99A]/10 transition-colors">
                    <td className="p-3 font-medium text-[#173C2B]">{c.component}</td>
                    <td className="p-3 font-mono font-semibold text-[#234735]">{c.amount}</td>
                    <td className="p-3 text-[#24332A]/75 hidden sm:table-cell">{c.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mixing note */}
          <p className="text-xs text-[#24332A]/80 italic">
            <strong>Published Protocol:</strong> {publishedResearchFormulation.mixingProcedure}
          </p>

          {/* Reported Repellency Callout */}
          <div className="p-4 rounded-xl bg-[#234735]/5 border border-[#234735]/20 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#234735] block font-semibold">
                Reported Laboratory Mean Repellency
              </span>
              <p className="text-xs text-[#24332A]/80">Aedes aegypti bioassay over test duration</p>
            </div>
            <div className="text-3xl font-serif font-bold text-[#173C2B]">
              {publishedResearchFormulation.reportedMeanRepellency}
            </div>
          </div>
        </div>

        {/* Vital Disclaimers */}
        <div className="mt-6 space-y-3 pt-4 border-t border-[#A9B99A]/25">
          <div className="p-3.5 rounded-lg bg-[#E7DCC8]/50 border border-[#E7DCC8] text-[11px] text-[#24332A]/90 leading-relaxed flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-[#234735] shrink-0 mt-0.5" />
            <p>{publishedResearchFormulation.criticalDisclaimer}</p>
          </div>

          <div className="p-3.5 rounded-lg bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
            <p>{publishedResearchFormulation.solventWarning}</p>
          </div>
        </div>
      </div>

      {/* 2. Proposed HERBAGUARD Formulation Card */}
      <div className="bg-[#FCFAF2] rounded-2xl border-2 border-[#234735]/30 p-6 sm:p-8 flex flex-col justify-between shadow-md relative">
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#F7F4EA] bg-[#234735] px-3 py-1 rounded-full font-semibold">
              Proposed Concept
            </span>
            <span className="text-xs text-[#234735] font-mono font-semibold">Project HERBAGUARD</span>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-[#173C2B]">
              Proposed Formulation — Experimental Concept
            </h3>
            <p className="text-xs text-[#24332A]/75 mt-1">
              Academic exploration evaluating Neem, Lemongrass, and Cinnamon synergy.
            </p>
          </div>

          {/* Proposed Ingredient Matrix */}
          <div className="space-y-3">
            {proposedHerbaguardFormulation.components.map((item, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-[#F7F4EA] border border-[#A9B99A]/30 space-y-1 hover:border-[#234735]/40 transition-colors"
              >
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="text-sm font-bold text-[#173C2B]">{item.ingredient}</h4>
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-[#A9B99A]/25 text-[#173C2B] font-semibold">
                    {item.proposedAmount}
                  </span>
                </div>
                <p className="text-[11px] italic text-[#234735]/70 font-serif">{item.botanicalName}</p>
                <p className="text-xs text-[#24332A]/85 pt-1">{item.functionalHypothesis}</p>
                <p className="text-[11px] text-[#24332A]/70 pt-0.5 font-mono">
                  <span className="font-semibold text-[#234735]">Required Testing:</span> {item.validationNeeded}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Rigor Statement */}
        <div className="mt-6 pt-4 border-t border-[#A9B99A]/25">
          <div className="p-4 rounded-xl bg-[#234735] text-[#F7F4EA] space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#A9B99A]" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#A9B99A]">
                Academic Formulation Transparency
              </span>
            </div>
            <p className="text-xs text-[#F7F4EA]/90 leading-relaxed">
              {proposedHerbaguardFormulation.academicNote} Concentration, stability, phase equilibrium, dermal
              compatibility, and spatial volatility will be determined through formal experimental trials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
