import { Heart, Code2, Coffee, Sparkles, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { PERSONAL_INFO } from '@/utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-surface-900 overflow-hidden border-t border-white/5">
      {/* Animated gradient border at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #a855f7, #b44aff, #ff00e5, transparent)',
        }}
      />

      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl" />

      <AnimatedSection className="relative z-10 py-12">
        <div className="container-center section-padding">
          <div className="text-center">
            {/* Profile with name */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <motion.div
                className="relative group"
                whileHover={{ rotateY: 10, rotateX: -5 }}
                transition={{ type: 'spring', stiffness: 200 }}
                style={{ perspective: 800 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff)' }}
                />
                {/* Photo */}
                <div className="relative p-1 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff, #ff00e5)' }}
                >
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-surface-900"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-1 -right-1 rounded-full p-1.5"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff)' }}
                >
                  <Code2 size={12} className="text-surface-900" />
                </div>
              </motion.div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-1 font-space">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-neon-cyan/60 text-sm flex items-center justify-center gap-2">
                  <Sparkles size={14} />
                  {PERSONAL_INFO.role}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative max-w-md mx-auto mb-8">
              <div className="absolute -left-4 -top-2 text-4xl text-neon-purple/20">"</div>
              <p className="text-white/60 text-lg italic px-6">
                Transformando ideias em código, um projeto por vez
              </p>
              <div className="absolute -right-4 -bottom-2 text-4xl text-neon-purple/20">"</div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-32" style={{ background: 'linear-gradient(to right, transparent, rgba(168, 85, 247, 0.3), transparent)' }} />
              <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <Coffee size={18} className="text-yellow-400" />
              </div>
              <div className="h-px w-32" style={{ background: 'linear-gradient(to right, transparent, rgba(180, 74, 255, 0.3), transparent)' }} />
            </div>

            {/* Made with love */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/5">
              <span className="text-white/50">Desenvolvido com</span>
              <Heart size={16} className="text-neon-pink animate-pulse" fill="currentColor" />
              <span className="text-white/50">por</span>
              <span className="font-semibold text-gradient">
                {PERSONAL_INFO.name.split(' ')[0]}
              </span>
            </div>

            {/* Tech stack */}
            <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
              {['React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/40 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-white/30 text-sm">
              © {currentYear} {PERSONAL_INFO.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Back to top button */}
      <MagneticButton
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 p-3 rounded-full text-surface-900 shadow-neon-cyan"
        aria-label="Voltar ao topo"
      >
        <div
          className="p-3 rounded-full"
          style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff)' }}
        >
          <ArrowUp size={20} />
        </div>
      </MagneticButton>
    </footer>
  );
}
