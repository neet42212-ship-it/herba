import { formulationFlowchartSteps } from '../data/formulation';
import {
  Leaf,
  CheckCircle2,
  FlaskConical,
  Layers,
  RotateCw,
  Hourglass,
  ShieldAlert,
  PackageCheck,
  FileText,
  ArrowDown,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Leaf,
  CheckCircle2,
  FlaskConical,
  Layers,
  RotateCw,
  Hourglass,
  ShieldAlert,
  PackageCheck,
  FileText
};

export default function FormulationFlowchart() {
  return (
    <div className="mt-16 bg-[#FCFAF2] rounded-3xl border border-[#A9B99A]/30 p-6 sm:p-10 shadow-sm">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#234735]/10 text-[#234735] text-xs font-semibold uppercase tracking-wider">
          <span>Iterative Laboratory Pipeline</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#173C2B]">
          Formulation Research Flowchart
        </h3>
        <p className="text-xs sm:text-sm text-[#24332A]/75">
          A proposed academic research workflow designed to systematically bridge botanical extraction,
          green-solvent formulation, stability testing, bioassay verification, and packaging compatibility.
        </p>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {formulationFlowchartSteps.map((step, idx) => {
          const Icon = iconMap[step.iconName] || FlaskConical;
          return (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-[#F7F4EA] border border-[#A9B99A]/35 hover:border-[#234735]/50 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Header with Step Number & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-[#234735] text-[#F7F4EA] font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#234735]/70 font-semibold">
                      {step.category}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-[#A9B99A]/20 text-[#234735] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h4 className="text-base font-bold text-[#173C2B] leading-snug">
                  {step.title}
                </h4>
                <p className="text-[11px] font-serif italic text-[#234735]/70 mb-2.5">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-[#24332A]/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress link indicator */}
              <div className="pt-4 mt-4 border-t border-[#A9B99A]/20 flex items-center justify-between text-[11px] text-[#234735]/60 font-mono">
                <span>Phase {step.step} of 9</span>
                {idx < formulationFlowchartSteps.length - 1 && (
                  <span className="text-[#234735] font-bold">Next →</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Workflow Scope Footnote */}
      <div className="mt-8 text-center pt-6 border-t border-[#A9B99A]/20">
        <p className="text-xs text-[#24332A]/70 italic">
          *Note: This flowchart outlines a planned investigative academic methodology and experimental framework,
          not a commercial manufacturing standard operating procedure.
        </p>
      </div>
    </div>
  );
}
