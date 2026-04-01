import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'letter' | 'word';
  staggerDelay?: number;
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  type = 'letter',
  staggerDelay = 0.03,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const items = type === 'letter' ? text.split('') : text.split(' ');

  return (
    <span className={className}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            delay: delay + i * staggerDelay,
            duration: 0.4,
            ease: 'easeOut',
          }}
          className="inline-block"
        >
          {item === ' ' ? '\u00A0' : item}
          {type === 'word' && i < items.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  );
}
