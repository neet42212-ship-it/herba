import FormulationTable from '../components/FormulationTable';
import FormulationFlowchart from '../components/FormulationFlowchart';
import { Beaker } from 'lucide-react';

export default function FormulationSection() {
  return (
    <section id="formulation" className="py-20 bg-[#F7F4EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#234735]/10 text-[#234735] text-xs font-semibold uppercase tracking-wider">
            <Beaker className="w-3.5 h-3.5" />
            <span>Scientific Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#173C2B] leading-tight">
            Scientific Formulation
          </h2>
          <p className="text-base sm:text-lg text-[#24332A]/80 leading-relaxed font-normal">
            Transparently contrasting the published peer-reviewed formula (Sekar & Abd Rahim, 2017) with the
            proposed HERBAGUARD neem-based experimental hypothesis.
          </p>
        </div>

        {/* Side-by-side Comparative Analysis */}
        <FormulationTable />

        {/* 9-Step Research Flowchart */}
        <FormulationFlowchart />
      </div>
    </section>
  );
}
