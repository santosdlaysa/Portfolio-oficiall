import { ButtonHTMLAttributes, ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  neonColor?: 'cyan' | 'pink' | 'purple';
}

const neonShadows = {
  cyan: '0 0 20px rgba(168, 85, 247, 0.3)',
  pink: '0 0 20px rgba(255, 0, 229, 0.3)',
  purple: '0 0 20px rgba(180, 74, 255, 0.3)',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  as = 'button',
  href,
  target,
  rel,
  icon,
  iconPosition = 'left',
  loading = false,
  disabled,
  neonColor,
  onClick,
  ...props
}: ButtonProps) {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 cursor-pointer group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-900';

  const variantClasses = {
    primary: 'text-surface-900 shadow-medium focus:ring-neon-cyan',
    secondary: 'bg-white/5 text-white border border-white/20 hover:border-neon-cyan/50 hover:shadow-neon-cyan focus:ring-neon-cyan',
    ghost: 'text-white/70 hover:bg-white/5 hover:text-white focus:ring-white/20',
    outline: 'border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 focus:ring-neon-cyan'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3'
  };

  const isDisabled = disabled || loading;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Ripple effect
  const btnRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent) => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const id = Date.now();
      setRipples((prev) => [...prev, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
    }
    if (onClick) (onClick as (e: React.MouseEvent) => void)(e);
  };

  const content = (
    <>
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-scale-in pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            transform: 'scale(0)',
            animation: 'ripple 0.6s ease-out',
          }}
        />
      ))}

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <span className={`relative z-10 flex items-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0 transition-transform group-hover:scale-110">
            {icon}
          </span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0 transition-transform group-hover:scale-110">
            {icon}
          </span>
        )}
      </span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05, boxShadow: neonColor ? neonShadows[neonColor] : undefined },
    whileTap: { scale: 0.95 },
  };

  if (as === 'a') {
    return (
      <motion.a
        ref={btnRef as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={handleClick}
        style={variant === 'primary' ? { background: 'linear-gradient(135deg, #00f0ff, #b44aff)' } : undefined}
        {...motionProps}
        {...(isDisabled && { 'aria-disabled': true, tabIndex: -1 })}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={btnRef as React.Ref<HTMLButtonElement>}
      className={classes}
      disabled={isDisabled}
      onClick={handleClick}
      style={variant === 'primary' ? { background: 'linear-gradient(135deg, #00f0ff, #b44aff)' } : undefined}
      {...motionProps}
      {...(props as Record<string, unknown>)}
    >
      {content}
    </motion.button>
  );
}
