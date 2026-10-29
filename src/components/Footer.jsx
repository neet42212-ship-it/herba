import { ArrowUpRight, Leaf, Shield, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Formulation', href: '#formulation' },
    { name: 'Smart Packaging', href: '#packaging' },
    { name: 'Product Info', href: '#product-info' },
    { name: 'References', href: '#references' },
  ];

  return (
    <footer className="bg-[#173C2B] text-[#F7F4EA] pt-16 pb-12 border-t border-[#A9B99A]/20 relative overflow-hidden">
      {/* Decorative leaf watermark background */}
      <div className="absolute -right-16 -bottom-16 opacity-5 pointer-events-none">
        <svg className="w-96 h-96 text-[#A9B99A]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#A9B99A]/20">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#234735] flex items-center justify-center text-[#A9B99A] shadow-xs">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#FCFAF2]">
                HERBAGUARD
              </span>
            </div>

            <p className="text-sm font-serif italic text-[#A9B99A] text-base">
              “Nature Inspired. Smarter Protection.”
            </p>

            <p className="text-xs text-[#F7F4EA]/75 max-w-sm leading-relaxed">
              An academic college project exploring botanical mosquito-repellency synergy (Neem, Lemongrass, Cinnamon)
              paired with photoprotective amber apothecary packaging and transparent digital batch traceability.
            </p>

            <div className="pt-2 text-[11px] font-mono text-[#A9B99A]/90">
              Department of Biotechnology & Chemical Engineering • 2026 Academic Thesis
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A9B99A] font-bold">
              Site Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-[#F7F4EA]/80 hover:text-[#FCFAF2] hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Scientific Foundation Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A9B99A] font-bold">
              Research Dossier
            </h4>
            <p className="text-xs text-[#F7F4EA]/75 leading-relaxed">
              Based on the benchmark formulation framework published in Annual Research & Review in Biology:
            </p>
            <a
              href="https://doi.org/10.9734/ARRB/2017/36834"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 p-3 rounded-xl bg-[#234735] hover:bg-[#234735]/80 text-xs text-[#FCFAF2] border border-[#A9B99A]/30 transition-all duration-200 group"
            >
              <span>Sekar & Abd Rahim (2017) DOI Reference</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A9B99A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="pt-2">
              <span className="text-[10px] font-mono text-[#A9B99A]/80 uppercase block">
                Tri-Botanical Actives:
              </span>
              <p className="text-xs text-[#F7F4EA]/80 mt-0.5">
                Azadirachta indica • Cymbopogon citratus • Cinnamomum cassia
              </p>
            </div>
          </div>
        </div>

        {/* Academic Disclaimer & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F7F4EA]/60">
          <p className="text-center md:text-left text-[11px] max-w-2xl leading-relaxed">
            <strong>Academic Project Notice:</strong> This website constitutes a university conceptual design and
            formulation proposal. It does not sell commercial products, nor has the proposed combination been cleared
            by medical or regulatory authorities.
          </p>

          <div className="flex items-center gap-1 font-mono text-[11px] shrink-0">
            <span>© {currentYear} HERBAGUARD. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
