import { motion, useReducedMotion } from 'framer-motion';
import { TECHNOLOGIES } from '@/utils/constants';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const categoryColors: Record<string, { border: string; glow: string; bg: string }> = {
  frontend: {
    border: 'border-neon-cyan/30',
    glow: 'group-hover:shadow-neon-cyan',
    bg: 'group-hover:bg-neon-cyan/5',
  },
  backend: {
    border: 'border-neon-pink/30',
    glow: 'group-hover:shadow-neon-pink',
    bg: 'group-hover:bg-neon-pink/5',
  },
  tools: {
    border: 'border-neon-purple/30',
    glow: 'group-hover:shadow-neon-purple',
    bg: 'group-hover:bg-neon-purple/5',
  },
  testing: {
    border: 'border-neon-cyan/30',
    glow: 'group-hover:shadow-neon-cyan',
    bg: 'group-hover:bg-neon-cyan/5',
  },
  practices: {
    border: 'border-neon-purple/30',
    glow: 'group-hover:shadow-neon-purple',
    bg: 'group-hover:bg-neon-purple/5',
  },
  design: {
    border: 'border-neon-pink/30',
    glow: 'group-hover:shadow-neon-pink',
    bg: 'group-hover:bg-neon-pink/5',
  },
};

export function TechnologiesSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="tecnologias" className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-800/50" />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.03) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 container-center px-4">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>⚡</span>
            Stack Tecnológica
          </div>

          <h2 className="heading-lg text-white mb-6 font-space">
            Tecnologias que{' '}
            <span className="text-gradient">domino</span>
          </h2>

          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-8">
            Ferramentas e tecnologias que uso para criar experiências digitais incríveis
          </p>
        </AnimatedSection>

        {/* Main tech grid */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {TECHNOLOGIES.map((tech) => {
            const colors = categoryColors[tech.category] || categoryColors.frontend;
            return (
              <motion.div
                key={tech.name}
                variants={prefersReducedMotion ? {} : itemVariants}
                whileHover={prefersReducedMotion ? {} : {
                  y: -5,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.2 },
                }}
                className={`group relative p-4 text-center rounded-2xl border bg-white/5 backdrop-blur-sm transition-all duration-300 ${colors.border} ${colors.glow} ${colors.bg}`}
                style={{ perspective: 600 }}
              >
                <div className="relative">
                  <div className="relative w-12 h-12 mx-auto mb-3">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="relative w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                    />
                  </div>

                  <h3 className="font-semibold text-white/80 group-hover:text-white transition-colors duration-300 text-xs">
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
