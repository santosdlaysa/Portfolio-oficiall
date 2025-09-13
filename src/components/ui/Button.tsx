import { ButtonHTMLAttributes, ReactNode } from 'react';

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
}

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
  ...props 
}: ButtonProps) {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 cursor-pointer group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-primary text-white shadow-medium hover:shadow-glow hover:scale-105 active:scale-95 focus:ring-purple-500 before:absolute before:inset-0 before:bg-gradient-secondary before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100',
    secondary: 'bg-white text-primary-800 border-2 border-primary-200 shadow-soft hover:border-primary-400 hover:shadow-medium hover:scale-105 active:scale-95 focus:ring-primary-500',
    ghost: 'text-primary-700 hover:bg-primary-100 hover:text-primary-900 focus:ring-primary-500',
    outline: 'border-2 border-gradient-from text-gradient-from hover:bg-gradient-primary hover:text-white hover:border-transparent focus:ring-purple-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3'
  };

  const isDisabled = disabled || loading;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <span className={`flex items-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
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

  if (as === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...(isDisabled && { 'aria-disabled': true, tabIndex: -1 })}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={isDisabled}
      {...props}
    >
      {content}
    </button>
  );
}