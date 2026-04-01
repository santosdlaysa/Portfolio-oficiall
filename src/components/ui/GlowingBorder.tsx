import { ReactNode } from 'react';

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
  color?: 'cyan' | 'pink' | 'purple' | 'mixed';
  rounded?: string;
}

const gradients = {
  cyan: 'from-neon-cyan via-neon-cyan/50 to-neon-cyan',
  pink: 'from-neon-pink via-neon-pink/50 to-neon-pink',
  purple: 'from-neon-purple via-neon-purple/50 to-neon-purple',
  mixed: 'from-neon-cyan via-neon-purple to-neon-pink',
};

export function GlowingBorder({
  children,
  className = '',
  color = 'mixed',
  rounded = 'rounded-2xl',
}: GlowingBorderProps) {
  return (
    <div className={`relative p-[1px] ${rounded} ${className}`}>
      {/* Animated gradient border */}
      <div
        className={`absolute inset-0 ${rounded} bg-gradient-to-r ${gradients[color]} opacity-60 animate-border-glow bg-[length:200%_200%]`}
      />
      {/* Content container */}
      <div className={`relative ${rounded} bg-surface-900 h-full`}>
        {children}
      </div>
    </div>
  );
}
