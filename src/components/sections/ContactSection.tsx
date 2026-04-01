import { ExternalLink, Mail, MessageCircle, Coffee } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlowingBorder } from '@/components/ui/GlowingBorder';
import { PERSONAL_INFO } from '@/utils/constants';

const platformColors: Record<string, { border: string; glow: string; neon: string }> = {
  LinkedIn: { border: 'border-blue-400/30', glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]', neon: 'text-blue-400' },
  GitHub: { border: 'border-neon-cyan/30', glow: 'hover:shadow-neon-cyan', neon: 'text-neon-cyan' },
  Instagram: { border: 'border-neon-pink/30', glow: 'hover:shadow-neon-pink', neon: 'text-neon-pink' },
};

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contatos" className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-800/50" />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(180, 74, 255, 0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 container-center section-padding">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-neon-pink/10 border border-neon-pink/20 text-neon-pink px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle size={16} />
            Vamos conversar
          </div>

          <h2 className="heading-lg text-white mb-6 font-space">
            Entre em{' '}
            <span className="text-gradient">contato</span>
          </h2>

          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12">
            Estou sempre aberta a novas oportunidades e projetos interessantes.
            Vamos criar algo incrível juntos!
          </p>
        </AnimatedSection>

        {/* Contact cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {PERSONAL_INFO.socialLinks.map((social) => {
            const colors = platformColors[social.name] || platformColors.GitHub;
            return (
              <motion.div
                key={social.name}
                variants={prefersReducedMotion ? {} : itemVariants}
                whileHover={prefersReducedMotion ? {} : {
                  y: -8,
                  rotateX: 3,
                  rotateY: -3,
                  transition: { duration: 0.2 },
                }}
                className={`group p-8 text-center rounded-2xl border bg-white/5 backdrop-blur-sm transition-all duration-300 ${colors.border} ${colors.glow}`}
                style={{ perspective: 800 }}
              >
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/10"
                    style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(180, 74, 255, 0.1))' }}
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-8 h-8 brightness-0 invert opacity-80"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>

                  <h3 className={`text-xl font-bold text-white mb-2 font-space`}>
                    {social.name}
                  </h3>

                  <p className="text-white/40 text-sm mb-6">
                    {social.name === 'LinkedIn' && 'Conecte-se comigo profissionalmente'}
                    {social.name === 'GitHub' && 'Veja meus projetos e código'}
                    {social.name === 'Instagram' && 'Acompanhe minha jornada'}
                  </p>

                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-semibold text-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:${colors.border}`}
                  >
                    <ExternalLink size={16} />
                    Visitar
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <AnimatedSection className="text-center">
          <GlowingBorder color="mixed" className="inline-block">
            <div className="p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Coffee size={32} className="text-yellow-400" />
                <h3 className="text-2xl font-bold text-white font-space">
                  Vamos tomar um café?
                </h3>
              </div>

              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Sempre disponível para discutir projetos, oportunidades ou apenas bater um papo sobre tecnologia!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton
                  as="a"
                  href="mailto:santosdlaysa@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-white hover:shadow-neon-cyan"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff)' }}
                >
                  <Mail size={20} />
                  Enviar Email
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="https://wa.me/5595991371313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/20 text-white px-6 py-3 rounded-xl hover:border-neon-cyan/30 hover:shadow-neon-cyan transition-all duration-300 font-semibold"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </MagneticButton>
              </div>
            </div>
          </GlowingBorder>
        </AnimatedSection>

        {/* Bottom decoration */}
        <div className="flex justify-center items-center mt-8 space-x-8 opacity-30">
          <div className="w-20 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, #a855f7)' }} />
          <motion.div
            className="w-3 h-3 rounded-full"
            style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="w-20 h-[1px]" style={{ background: 'linear-gradient(to left, transparent, #b44aff)' }} />
        </div>
      </div>
    </section>
  );
}
