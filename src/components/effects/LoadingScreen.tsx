import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'logo' | 'name' | 'role' | 'exit'>('logo');

  const name = 'Laysa Diniz';
  const role = 'Desenvolvedora Fullstack';

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('name'), 300),
      setTimeout(() => setPhase('role'), 900),
      setTimeout(() => setPhase('exit'), 1600),
      setTimeout(() => onComplete(), 1900),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-surface-900"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {/* Glow background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-64 h-64 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Logo / Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="relative mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink flex items-center justify-center shadow-neon-cyan">
              <span className="text-2xl font-bold text-surface-900 font-space">LD</span>
            </div>
          </motion.div>

          {/* Name - letter by letter */}
          {(phase === 'name' || phase === 'role') && (
            <div className="flex gap-1 mb-4">
              {name.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-3xl sm:text-4xl font-bold text-white font-space"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          )}

          {/* Role - typewriter */}
          {phase === 'role' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-1"
            >
              <span className="text-neon-cyan font-mono text-sm">{'>'}</span>
              <div className="overflow-hidden">
                <motion.span
                  className="text-white/60 font-mono text-sm inline-block"
                  initial={{ width: 0 }}
                  animate={{ width: 'auto' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  {role}
                </motion.span>
              </div>
              <motion.span
                className="text-neon-cyan font-mono"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.div>
          )}

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #a855f7, #b44aff, #ff00e5)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
