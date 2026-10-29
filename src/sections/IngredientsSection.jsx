import { ingredientsData } from '../data/ingredients';
import IngredientCard from '../components/IngredientCard';
import { Leaf, Info } from 'lucide-react';

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="py-20 bg-[#F7F4EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#234735]/10 text-[#234735] text-xs font-semibold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            <span>Phytochemical Selection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#173C2B] leading-tight">
            The Botanical Trinity
          </h2>
          <p className="text-base sm:text-lg text-[#24332A]/80 leading-relaxed font-normal">
            Three distinct botanical species chosen for their complementary phytochemical mechanisms—spanning non-volatile
            deterrents, rapid vapor-phase masking, and synergistic contact deterrence.
          </p>
        </div>

        {/* 3 Large Botanical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ingredientsData.map((ingredient) => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          ))}
        </div>

        {/* Integrity Disclaimer Bar */}
        <div className="p-4 rounded-xl bg-[#FCFAF2] border border-[#A9B99A]/30 flex items-center gap-3 max-w-3xl mx-auto shadow-xs">
          <Info className="w-5 h-5 text-[#234735] shrink-0" />
          <p className="text-xs text-[#24332A]/80 leading-relaxed">
            <strong className="text-[#173C2B]">Scientific Integrity Assurance:</strong> No ingredient percentages or
            unverified repellent rates have been fabricated. Each botanical’s performance in this specific formulation
            must be systematically quantified through future bioassay protocols.
          </p>
        </div>
      </div>
    </section>
  );
}
