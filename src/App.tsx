import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { TechnologiesSection } from '@/components/sections/TechnologiesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function App() {
  useScrollToSection();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">
        <HeroSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}