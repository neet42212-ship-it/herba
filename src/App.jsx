import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './sections/AboutSection';
import IngredientsSection from './sections/IngredientsSection';
import FormulationSection from './sections/FormulationSection';
import SmartPackagingSection from './sections/SmartPackagingSection';
import ProductInformationSection from './sections/ProductInformationSection';
import ReferencesSection from './sections/ReferencesSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F4EA] text-[#24332A] flex flex-col font-sans selection:bg-[#A9B99A]/40 selection:text-[#173C2B]">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <AboutSection />
        <IngredientsSection />
        <FormulationSection />
        <SmartPackagingSection />
        <ProductInformationSection />
        <ReferencesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
