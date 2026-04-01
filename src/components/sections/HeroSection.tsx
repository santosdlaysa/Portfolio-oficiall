import { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform, useReducedMotion } from 'framer-motion';
import { Download, ArrowDown, Code2, Briefcase, MapPin } from 'lucide-react';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { NeonBadge } from '@/components/ui/NeonBadge';
import { PERSONAL_INFO } from '@/utils/constants';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <p ref={ref} className="text-3xl font-bold text-white font-space">
      {count}{suffix}
    </p>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D tilt for photo
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-surface-900" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent)' }}
        animate={prefersReducedMotion ? {} : { y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-20 w-48 h-48 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(180, 74, 255, 0.12), transparent)' }}
        animate={prefersReducedMotion ? {} : { y: [20, -20, 20] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(255, 0, 229, 0.1), transparent)' }}
        animate={prefersReducedMotion ? {} : { y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container-center py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 max-w-3xl text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
              >
                <NeonBadge color="cyan" icon={
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                }>
                  Disponível para projetos
                </NeonBadge>
              </motion.div>

              {/* Greeting */}
              <motion.p
                className="text-white/50 text-lg mb-2 mt-6 flex items-center gap-2 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-2xl">👋</span> Olá, seja bem-vindo(a)!
              </motion.p>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-space">
                <motion.span
                  className="text-white inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Eu sou{' '}
                </motion.span>
                <AnimatedText
                  text={PERSONAL_INFO.name}
                  className="text-gradient bg-gradient-neon bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                  delay={0.6}
                  staggerDelay={0.04}
                />
              </h1>

              {/* Role - typewriter style */}
              <motion.div
                className="flex items-center gap-3 justify-center lg:justify-start mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <div className="flex items-center gap-2 glass-dark px-4 py-2">
                  <Code2 size={18} className="text-neon-cyan" />
                  <span className="text-white font-semibold">{PERSONAL_INFO.role}</span>
                  <motion.span
                    className="text-neon-cyan font-mono"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </div>
                <div className="flex items-center gap-2 glass-dark px-4 py-2">
                  <MapPin size={16} className="text-neon-pink" />
                  <span className="text-white/60 text-sm">Brasil</span>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.p
                className="text-lg sm:text-xl text-white/50 leading-relaxed mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                {PERSONAL_INFO.bio}
              </motion.p>

              {/* Action buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <MagneticButton
                  as="a"
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl hover:shadow-neon-cyan transition-all duration-300 font-semibold"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff)' }}
                >
                  <Download size={20} className="group-hover:animate-bounce" />
                  Baixar CV
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="#contatos"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border border-white/20 hover:border-neon-cyan/50 hover:shadow-neon-cyan backdrop-blur-sm transition-all duration-300"
                >
                  <Briefcase size={18} />
                  Entre em Contato
                </MagneticButton>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex items-center gap-8 mt-10 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                <div className="text-center">
                  <AnimatedCounter target={9} suffix="+" />
                  <p className="text-white/40 text-sm">Projetos</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <AnimatedCounter target={2} suffix="+" />
                  <p className="text-white/40 text-sm">Anos Exp.</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <AnimatedCounter target={100} suffix="%" />
                  <p className="text-white/40 text-sm">Dedicação</p>
                </div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              className="flex-shrink-0 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
            >
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full"
                  style={{
                    border: '1px solid rgba(168, 85, 247, 0.15)',
                    rotateX: prefersReducedMotion ? 0 : rotateX,
                    rotateY: prefersReducedMotion ? 0 : rotateY,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] rounded-full"
                  style={{ border: '1px solid rgba(180, 74, 255, 0.15)' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Glow effect behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-full blur-3xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(180, 74, 255, 0.2))',
                  }}
                  animate={{
                    background: [
                      'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(180, 74, 255, 0.15))',
                      'linear-gradient(135deg, rgba(180, 74, 255, 0.15), rgba(168, 85, 247, 0.25))',
                    ],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* Main image container with 3D tilt */}
              <motion.div
                className="relative"
                style={{
                  perspective: 800,
                  rotateX: prefersReducedMotion ? 0 : rotateX,
                  rotateY: prefersReducedMotion ? 0 : rotateY,
                }}
              >
                {/* Gradient border */}
                <div className="relative p-1 rounded-full shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #b44aff, #ff00e5)',
                    boxShadow: '0 0 40px rgba(168, 85, 247, 0.2), 0 0 80px rgba(180, 74, 255, 0.1)',
                  }}
                >
                  <div className="p-1 rounded-full bg-surface-900/80 backdrop-blur-sm">
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/320x320/0a0a14/00f0ff?text=${encodeURIComponent(PERSONAL_INFO.name)}`;
                      }}
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-2 -right-2 flex items-center gap-2 rounded-full px-4 py-2 shadow-xl border border-neon-cyan/30 bg-surface-900/90 backdrop-blur-sm"
                  animate={prefersReducedMotion ? {} : { y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="text-neon-cyan text-sm">✨</span>
                  <span className="text-sm font-bold text-white">Criativa</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 flex items-center gap-2 rounded-full px-4 py-2 shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff)' }}
                  animate={prefersReducedMotion ? {} : { y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <Code2 size={16} className="text-surface-900" />
                  <span className="text-sm font-bold text-surface-900">Dev</span>
                </motion.div>

                {/* Status indicator */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-surface-900/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg border border-white/10">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-white/80">Disponível</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/40"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-1 glass-dark px-4 py-2">
              <span className="text-xs font-medium">Scroll</span>
              <ArrowDown size={16} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
