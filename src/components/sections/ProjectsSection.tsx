import { ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { PROJECTS } from '@/utils/constants';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="projetos" className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-900" />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(180, 74, 255, 0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 container-center section-padding">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-neon-purple/10 border border-neon-purple/20 text-neon-purple px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>💼</span>
            Portfolio
          </div>

          <h2 className="heading-lg text-white mb-6 font-space">
            Meus projetos pessoais{' '}
            <span className="text-gradient">🚀</span>
          </h2>

          <p className="body-lg text-white/50 max-w-3xl mx-auto">
            No decorrer dos meus estudos desenvolvi alguns projetos para aplicar conhecimentos práticos,
            desde interfaces simples até aplicações mais complexas.
          </p>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={prefersReducedMotion ? {} : itemVariants}
              whileHover={prefersReducedMotion ? {} : {
                y: -8,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.2 },
              }}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm"
              style={{ perspective: 800 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x200/0a0a14/00f0ff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-surface-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-surface-900 text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff)' }}
                >
                  {index + 1}
                </div>
              </div>

              {/* Neon line at bottom of image */}
              <div className="h-[1px] w-full"
                style={{ background: 'linear-gradient(90deg, #a855f7, #b44aff, #ff00e5)' }}
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-space">
                  {project.title}
                </h3>

                <p className="text-white/50 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 border border-white/10 text-neon-cyan/80 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 text-surface-900 hover:shadow-neon-cyan"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff)' }}
                >
                  <ExternalLink size={16} />
                  Ver Projeto
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <AnimatedSection className="text-center mt-12">
          <MagneticButton
            as="a"
            href="https://github.com/santosdlaysa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl hover:border-neon-cyan/30 hover:shadow-neon-cyan transition-all duration-300 font-semibold"
          >
            Ver mais no GitHub
          </MagneticButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
