import { ArrowRight, Sparkles, Beaker, Leaf, Shield, CheckCircle } from 'lucide-react';
import heroImage from '../assets/image.png';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#A9B99A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#E7DCC8]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Context */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Research Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#234735]/10 border border-[#234735]/20 text-[#234735] text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#234735] animate-pulse" />
              <span>Botanical Research Project</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6.5xl font-serif font-bold text-[#173C2B] tracking-tight leading-[1.08]">
              Nature’s Way to Smarter Mosquito Protection
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#24332A]/85 max-w-2xl leading-relaxed font-normal">
              <strong className="text-[#173C2B] font-semibold">HERBAGUARD</strong> is a proposed herbal
              mosquito-repellent concept exploring the synergistic bioactivity of three potent botanicals—
              <em className="text-[#173C2B] font-medium not-italic">Neem</em>,{' '}
              <em className="text-[#173C2B] font-medium not-italic">Lemongrass</em>, and{' '}
              <em className="text-[#173C2B] font-medium not-italic">Cinnamon</em>—coupled with photoprotective amber
              packaging for responsible protection.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#ingredients"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#234735] text-[#F7F4EA] font-semibold text-sm tracking-wide uppercase hover:bg-[#173C2B] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234735]"
              >
                <span>Explore Ingredients</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#formulation"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#E7DCC8]/70 hover:bg-[#E7DCC8] text-[#173C2B] border border-[#234735]/20 font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234735]"
              >
                <span>Discover Our Formula</span>
              </a>
            </div>

            {/* Botanical Trinity Tagline */}
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold tracking-wider text-[#234735]/80 uppercase font-mono">
              <Leaf className="w-3.5 h-3.5 text-[#234735]" />
              <span>Neem • Lemongrass • Cinnamon</span>
            </div>
          </div>

          {/* Right Column: Editorial Product Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#A9B99A]/20 to-[#E7DCC8]/40 rounded-3xl transform rotate-1 scale-102 filter blur-sm" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#A9B99A]/30 bg-[#F7F4EA] group">
                <img
                  src={heroImage}
                  alt="HERBAGUARD herbal mosquito repellent amber bottle mockup with neem leaves, lemongrass, and cinnamon"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-103"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle Floating Feature Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#F7F4EA]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#A9B99A]/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#234735] flex items-center justify-center text-[#A9B99A]">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#173C2B] leading-tight">Photoprotective Concept</p>
                      <p className="text-[11px] text-[#24332A]/70">UV-Shielding Amber Glass</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-[#234735]/10 text-[#234735] px-2 py-0.5 rounded font-semibold">
                    100 mL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slim Information Strip */}
        <div className="mt-14 pt-8 border-t border-[#A9B99A]/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FCFAF2]/80 border border-[#A9B99A]/20">
              <div className="w-10 h-10 rounded-lg bg-[#234735]/10 flex items-center justify-center text-[#234735] shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#173C2B]">Botanical-Inspired Formulation</h4>
                <p className="text-xs text-[#24332A]/75 mt-0.5 leading-relaxed">
                  Exploring natural volatile terpenes and limonoids as conscious alternatives to synthetic compounds.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FCFAF2]/80 border border-[#A9B99A]/20">
              <div className="w-10 h-10 rounded-lg bg-[#234735]/10 flex items-center justify-center text-[#234735] shrink-0">
                <Beaker className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#173C2B]">Research-Informed Development</h4>
                <p className="text-xs text-[#24332A]/75 mt-0.5 leading-relaxed">
                  Methodology structured around published scientific bioassays (Sekar & Abd Rahim, 2017).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FCFAF2]/80 border border-[#A9B99A]/20">
              <div className="w-10 h-10 rounded-lg bg-[#234735]/10 flex items-center justify-center text-[#234735] shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#173C2B]">Thoughtful Packaging Concept</h4>
                <p className="text-xs text-[#24332A]/75 mt-0.5 leading-relaxed">
                  Light-filtering amber glass with digital QR code batch transparency and minimal waste.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Transparency Note */}
          <p className="text-center text-[11px] text-[#24332A]/60 mt-4 italic">
            *Academic research concept: The proposed finished repellent has not been independently tested or proven safe for human dermal use.
          </p>
        </div>
      </div>
    </section>
  );
}
