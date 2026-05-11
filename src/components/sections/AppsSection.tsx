import { ExternalLink, Smartphone } from 'lucide-react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { APPS } from '@/utils/constants';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { MagneticButton } from '@/components/ui/MagneticButton';

function PhoneMockup({ app }: { app: typeof APPS[0] }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [15, -15]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-15, 15]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex-shrink-0 relative"
      style={{ perspective: 800 }}
    >
      {/* Glow behind phone */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-48 h-48 rounded-full blur-3xl opacity-30"
          animate={{
            background: [
              'radial-gradient(circle, rgba(180, 74, 255, 0.4), transparent)',
              'radial-gradient(circle, rgba(255, 0, 229, 0.4), transparent)',
              'radial-gradient(circle, rgba(180, 74, 255, 0.4), transparent)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Phone frame with 3D tilt */}
      <motion.div
        className="relative w-[200px] h-[400px] rounded-[2.5rem] p-[8px] shadow-2xl"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e, #0a0a14)',
          boxShadow: '0 0 30px rgba(180, 74, 255, 0.2), 0 0 60px rgba(168, 85, 247, 0.1)',
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Inner bezel */}
        <div className="relative w-full h-full bg-black rounded-[2rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-2xl z-10" />

          {/* App screenshot with parallax */}
          <motion.img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-contain"
            style={{
              x: prefersReducedMotion ? 0 : useTransform(mouseX, [-200, 200], [-3, 3]),
              y: prefersReducedMotion ? 0 : useTransform(mouseY, [-200, 200], [-3, 3]),
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/200x400/0a0a14/00f0ff?text=${encodeURIComponent(app.title)}`;
            }}
          />
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full" />
      </motion.div>
    </div>
  );
}

export function AppsSection() {
  return (
    <section id="aplicativos" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-800/50" />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(180, 74, 255, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255, 0, 229, 0.04) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 container-center section-padding">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-neon-purple/10 border border-neon-purple/20 text-neon-purple px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Smartphone size={16} />
            Aplicativos Mobile
          </div>

          <h2 className="heading-lg text-white mb-6 font-space">
            Meus aplicativos{' '}
            <span className="text-gradient">mobile</span>
          </h2>

          <p className="body-lg text-white/50 max-w-2xl mx-auto">
            Aplicativos que desenvolvi para dispositivos móveis, disponíveis nas lojas oficiais.
          </p>
        </AnimatedSection>

        {/* App Showcases */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {APPS.map((app, index) => (
            <AnimatedSection
              key={app.id}
              delay={index * 0.15}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="flex flex-col sm:flex-row items-center gap-8">
                {/* Phone Mockup */}
                <PhoneMockup app={app} />

                {/* App Info */}
                <div className="flex-1 text-center sm:text-left">
                  {/* Platform badge */}
                  <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-4">
                    <Smartphone size={14} className="text-neon-purple" />
                    <span className="text-white/60 text-sm font-medium">{app.platform}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
                    {app.icon && (
                      <img
                        src={app.icon}
                        alt={`${app.title} icon`}
                        className="w-12 h-12 rounded-2xl shadow-lg border border-white/10"
                      />
                    )}
                    <h3 className="text-2xl font-bold text-white font-space">
                      {app.title}
                    </h3>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {app.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5 justify-center sm:justify-start">
                    {app.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-neon-cyan/70 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Store Buttons */}
                  <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    {/* App Store Button */}
                    <MagneticButton
                      as="a"
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2.5 rounded-xl hover:bg-white/15 hover:border-neon-cyan/30 hover:shadow-neon-cyan transition-all duration-300 font-semibold text-sm"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <div className="text-left">
                        <span className="block text-xs opacity-50">Disponível na</span>
                        <span className="block text-sm font-bold -mt-0.5">App Store</span>
                      </div>
                      <ExternalLink size={14} className="ml-1 opacity-30" />
                    </MagneticButton>

                    {/* Play Store Button */}
                    {app.playStoreUrl && (
                      <MagneticButton
                        as="a"
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2.5 rounded-xl hover:bg-white/15 hover:border-neon-green/30 hover:shadow-neon-green transition-all duration-300 font-semibold text-sm"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                        </svg>
                        <div className="text-left">
                          <span className="block text-xs opacity-50">Disponível no</span>
                          <span className="block text-sm font-bold -mt-0.5">Google Play</span>
                        </div>
                        <ExternalLink size={14} className="ml-1 opacity-30" />
                      </MagneticButton>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
