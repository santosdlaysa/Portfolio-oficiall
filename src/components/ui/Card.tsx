import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  glow?: boolean;
  gradient?: boolean;
  interactive?: boolean;
}

export function Card({ 
  children, 
  className = '', 
  hover = false, 
  glass = false,
  glow = false,
  gradient = false,
  interactive = false
}: CardProps) {
  const baseClasses = 'relative overflow-hidden transition-all duration-300';
  
  const styleClasses = glass 
    ? 'glass'
    : gradient 
    ? 'bg-gradient-primary p-0.5'
    : 'bg-white shadow-card';
    
  const roundingClasses = 'rounded-2xl';
  
  const hoverClasses = hover || interactive 
    ? 'hover:shadow-large hover:-translate-y-1 hover:scale-[1.02] cursor-pointer' 
    : '';
    
  const glowClasses = glow ? 'hover:shadow-glow-lg' : '';
  
  const classes = `${baseClasses} ${styleClasses} ${roundingClasses} ${hoverClasses} ${glowClasses} ${className}`;
  
  if (gradient) {
    return (
      <div className={classes}>
        <div className="bg-white rounded-2xl h-full w-full p-6">
          {children}
        </div>
      </div>
    );
  }
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
}