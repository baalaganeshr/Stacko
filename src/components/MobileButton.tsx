import React from 'react';

interface MobileButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: (e?: React.MouseEvent) => void;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const MobileButton: React.FC<MobileButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-2xl
    transition-all duration-300 ease-out touch-manipulation
    focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2
    active:transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 
      text-white shadow-lg shadow-purple-500/25 
      hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02]
      border-0
    `,
    secondary: `
      bg-white/10 border border-white/20 text-white backdrop-blur-sm
      hover:bg-white/15 hover:border-white/30 hover:scale-[1.02]
      shadow-md shadow-black/10
    `
  };

  const sizeClasses = {
    sm: 'px-6 py-3 text-sm min-h-[44px]',
    md: 'px-8 py-4 text-base min-h-[52px]',
    lg: 'px-10 py-5 text-lg min-h-[60px]'
  };

  const mobileClasses = `
    sm:w-auto w-full
    ${size === 'sm' ? 'sm:min-w-[140px]' : size === 'md' ? 'sm:min-w-[160px]' : 'sm:min-w-[180px]'}
  `;

  const finalClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${mobileClasses}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={finalClasses}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default MobileButton;