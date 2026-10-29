import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Sprout } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F4EA]/90 backdrop-blur-md shadow-sm border-b border-[#A9B99A]/30 py-3'
          : 'bg-[#F7F4EA]/60 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234735] rounded-lg p-1"
            aria-label="HERBAGUARD Home"
          >
            <div className="w-10 h-10 rounded-full bg-[#234735] flex items-center justify-center text-[#F7F4EA] transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <svg
                className="w-5 h-5 text-[#A9B99A] group-hover:text-[#F7F4EA] transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-[#173C2B] leading-none">
                HERBAGUARD
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#234735]/70 font-semibold mt-0.5">
                Smart Botanical Repellent
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#24332A]/80 hover:text-[#173C2B] hover:bg-[#A9B99A]/20 rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234735]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#formulation"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F7F4EA] bg-[#234735] hover:bg-[#173C2B] rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234735]"
            >
              <span>Explore the Formula</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#173C2B] hover:bg-[#A9B99A]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234735]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F4EA] border-b border-[#A9B99A]/30 px-4 pt-3 pb-6 shadow-xl transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-[#24332A] hover:bg-[#A9B99A]/20 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#234735]/40 font-mono">→</span>
              </a>
            ))}
            <div className="pt-3 border-t border-[#A9B99A]/20">
              <a
                href="#formulation"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#F7F4EA] bg-[#234735] hover:bg-[#173C2B] rounded-full shadow-sm"
              >
                <span>Explore the Formula</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
