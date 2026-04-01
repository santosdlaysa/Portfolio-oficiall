import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  glow?: boolean;
  gradient?: boolean;
  interactive?: boolean;
  tilt?: boolean;
  neonBorder?: 'cyan' | 'pink' | 'purple';
  revealOnScroll?: boolean;
}

const neonBorderColors = {
  cyan: 'border-neon-cyan/30 hover:shadow-neon-cyan',
  pink: 'border-neon-pink/30 hover:shadow-neon-pink',
  purple: 'border-neon-purple/30 hover:shadow-neon-purple',
};

export function Card({
  children,
  className = '',
  hover = false,
  glass = false,
  glow = false,
  gradient = false,
  interactive = false,
  tilt = false,
  neonBorder,
  revealOnScroll = false,
}: CardProps) {
  const prefersReducedMotion = useReducedMotion();

  const baseClasses = 'relative overflow-hidden transition-all duration-300';

  const styleClasses = glass
    ? 'bg-white/5 backdrop-blur-xl border border-white/10'
    : gradient
    ? 'p-[1px]'
    : 'bg-white/5 border border-white/5';

  const roundingClasses = 'rounded-2xl';

  const hoverClasses = hover || interactive
    ? 'hover:shadow-large hover:-translate-y-1 hover:scale-[1.02] cursor-pointer'
    : '';

  const glowClasses = glow ? 'hover:shadow-glow-lg' : '';

  const neonClasses = neonBorder ? neonBorderColors[neonBorder] : '';

  const classes = `${baseClasses} ${styleClasses} ${roundingClasses} ${hoverClasses} ${glowClasses} ${neonClasses} ${className}`;

  const motionProps = {
    ...(revealOnScroll && !prefersReducedMotion ? {
      initial: { opacity: 0, y: 30 } as const,
      whileInView: { opacity: 1, y: 0 } as const,
      viewport: { once: true, margin: '-50px' },
      transition: { duration: 0.5 },
    } : {}),
    ...(tilt && !prefersReducedMotion ? {
      whileHover: { rotateX: 3, rotateY: -3, y: -5, transition: { duration: 0.2 } },
    } : hover && !prefersReducedMotion ? {
      whileHover: { y: -4, transition: { duration: 0.2 } },
    } : {}),
  };

  if (gradient) {
    return (
      <motion.div
        className={classes}
        style={{
          background: 'linear-gradient(135deg, #00f0ff, #b44aff, #ff00e5)',
          perspective: tilt ? 800 : undefined,
        }}
        {...motionProps}
      >
        <div className="bg-surface-900 rounded-2xl h-full w-full p-6">
          {children}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={classes}
      style={{ perspective: tilt ? 800 : undefined }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
