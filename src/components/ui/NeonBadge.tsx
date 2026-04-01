import { ReactNode } from 'react';

interface NeonBadgeProps {
  children: ReactNode;
  color?: 'cyan' | 'pink' | 'purple';
  className?: string;
  icon?: ReactNode;
}

const colorStyles = {
  cyan: 'bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan shadow-neon-cyan/10',
  pink: 'bg-neon-pink/10 border-neon-pink/30 text-neon-pink shadow-neon-pink/10',
  purple: 'bg-neon-purple/10 border-neon-purple/30 text-neon-purple shadow-neon-purple/10',
};

export function NeonBadge({
  children,
  color = 'cyan',
  className = '',
  icon,
}: NeonBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm ${colorStyles[color]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
