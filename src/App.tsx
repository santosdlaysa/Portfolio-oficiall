import { useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { TechnologiesSection } from '@/components/sections/TechnologiesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AppsSection } from '@/components/sections/AppsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { LoadingScreen } from '@/components/effects/LoadingScreen';
import { ScrollProgress } from '@/components/effects/ScrollProgress';

const LazyParticleBackground = lazy(() =>
  import('@/components/effects/ParticleBackground').then((mod) => ({
    default: mod.ParticleBackground,
  }))
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-surface-900 text-white">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <ScrollProgress />
            <Header />
            <main className="relative">
              {/* Global particle background */}
              <div className="fixed inset-0 z-0 pointer-events-none">
                <Suspense fallback={null}>
                  <LazyParticleBackground />
                </Suspense>
              </div>

              <HeroSection />
              <TechnologiesSection />
              <AppsSection />
              <ProjectsSection />
              <ContactSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
