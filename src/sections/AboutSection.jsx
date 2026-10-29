import { Sprout, Beaker, Recycle, AlertCircle, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const cards = [
    {
      icon: Sprout,
      title: 'Botanical Ingredients',
      tagline: 'Phytochemical Active Synergy',
      description:
        'Harnessing the natural defensive chemistry developed by plants over millennia. Neem contributes insect-deterrent limonoids, lemongrass yields vapor-phase citral, and cinnamon provides volatile cinnamaldehyde.',
      points: [
        'Naturally synthesized plant secondary metabolites',
        'Avoids synthetic organophosphates and DEET derivatives',
        'Multi-target sensory disorientation mechanism'
      ]
    },
    {
      icon: Beaker,
      title: 'Research-Based Development',
      tagline: 'Academic Scientific Methodology',
      description:
        'Structured upon peer-reviewed findings in vector biology. Our framework builds upon natural repellent literature (Sekar & Abd Rahim, 2017), substituting clove with neem to investigate botanical efficacy.',
      points: [
        'Methodical laboratory formulation workflows',
        'Clear distinction between published and proposed blends',
        'Identifies toxicological and solvent challenges'
      ]
    },
    {
      icon: Recycle,
      title: 'Sustainable Packaging Concept',
      tagline: 'Photoprotection & Transparency',
      description:
        'Apothecary-grade amber glass shields fragile light-sensitive essential oils from photo-degradation, while eliminating single-use plastic waste and offering digital batch-level transparency via QR code.',
      points: [
        'Type III amber glass filters UV 290–450 nm',
        'Propellant-free mechanical mist atomizer',
        'Digital QR access to formulation records'
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#FCFAF2] border-y border-[#A9B99A]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#234735]/10 text-[#234735] text-xs font-semibold uppercase tracking-wider">
            <span>Project Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#173C2B] leading-tight">
            Inspired by Nature. Designed with Purpose.
          </h2>
          <p className="text-base sm:text-lg text-[#24332A]/80 leading-relaxed font-normal">
            HERBAGUARD is an academic engineering and biotechnology project exploring sustainable, plant-derived
            mosquito protection through rigorous formulation research and photoprotective packaging design.
          </p>
        </div>

        {/* Narrative In-depth Explanation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start">
          <div className="bg-[#F7F4EA] p-8 rounded-2xl border border-[#A9B99A]/30 space-y-4 shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-[#173C2B]">
              Understanding Herbal Mosquito Repellents
            </h3>
            <p className="text-sm text-[#24332A]/85 leading-relaxed">
              A <strong>herbal mosquito repellent</strong> is a liquid, spray, or vapor formulation composed
              predominantly of botanical extracts and steam-distilled essential oils rather than synthetic industrial
              chemicals like DEET or Picaridin. Plants have evolved sophisticated volatile secondary metabolites to
              deter herbivorous insects and pests.
            </p>
            <p className="text-sm text-[#24332A]/85 leading-relaxed">
              Exploring plant-derived actives is crucial due to escalating insect resistance against synthetic pesticides,
              consumer desires for bio-compatible alternatives, and the environmental persistence of synthetic chemical
              residues in aquatic ecosystems.
            </p>
          </div>

          <div className="bg-[#F7F4EA] p-8 rounded-2xl border border-[#A9B99A]/30 space-y-4 shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-[#173C2B]">
              Why Neem, Lemongrass & Cinnamon?
            </h3>
            <p className="text-sm text-[#24332A]/85 leading-relaxed">
              Our proposed concept explores a tri-botanical matrix designed for multi-pathway sensory disruption:
            </p>
            <ul className="text-sm text-[#24332A]/85 space-y-2 list-disc pl-5">
              <li>
                <strong>Neem (Azadirachta indica):</strong> Renowned for limonoids (azadirachtin) with proven insect
                antifeedant and oviposition-deterrent actions.
              </li>
              <li>
                <strong>Lemongrass (Cymbopogon citratus):</strong> Rich in citral monoterpenes for rapid vapor-phase
                olfactory masking of human carbon dioxide.
              </li>
              <li>
                <strong>Cinnamon (Cinnamomum cassia):</strong> Rich in cinnamaldehyde, which delivers potent adult
                deterrence and natural botanical stability.
              </li>
            </ul>
            <p className="text-xs text-[#24332A]/70 italic pt-1">
              Responsible packaging in amber glass prevents photochemical oxidation of these delicate volatile oils.
            </p>
          </div>
        </div>

        {/* 3 Attractive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-[#F7F4EA] p-8 rounded-2xl border border-[#A9B99A]/35 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#234735] text-[#F7F4EA] flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6 text-[#A9B99A]" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#234735]/70 font-semibold">
                    {card.tagline}
                  </span>
                  <h4 className="text-xl font-serif font-bold text-[#173C2B] mt-1 mb-3">
                    {card.title}
                  </h4>
                  <p className="text-sm text-[#24332A]/80 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#A9B99A]/20">
                  <ul className="space-y-2">
                    {card.points.map((pt) => (
                      <li key={pt} className="text-xs text-[#24332A]/75 flex items-start gap-2">
                        <span className="text-[#234735] font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Critical Academic Reality & Neem Distinction Banner */}
        <div className="bg-[#234735] text-[#F7F4EA] p-6 sm:p-8 rounded-2xl border border-[#A9B99A]/30 shadow-lg relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-[#A9B99A]/20 flex items-center justify-center text-[#A9B99A] shrink-0">
              <AlertCircle className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A9B99A] font-semibold">
                Crucial Scientific Distinction & Academic Scope
              </span>
              <h4 className="text-lg sm:text-xl font-serif font-semibold text-[#FCFAF2]">
                Proposed Academic Formulation vs. Commercially Validated Product
              </h4>
              <p className="text-xs sm:text-sm text-[#F7F4EA]/85 leading-relaxed">
                This project represents a university conceptual inquiry. The supplied reference paper (Sekar & Abd Rahim, 2017)
                evaluated a cinnamon, <strong>clove</strong>, and lemongrass formula—not neem. Because HERBAGUARD substitutes
                clove with <strong>neem</strong>, the published paper’s results (including its 66.67% repellency rate and stability)
                cannot be claimed for our concept. Dedicated laboratory trials, GC-MS standardization, dermatological patch testing,
                and vector bioassays remain required before any real-world efficacy or safety claims can be established.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
