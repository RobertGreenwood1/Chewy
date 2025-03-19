import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'view';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'px-4 py-2 font-medium transition-colors uppercase tracking-wider rounded-md shadow-sm',
          {
            'bg-[#F8BC40] text-gray-800 hover:bg-[#F9AA15] shadow-md': variant === 'primary',
            'bg-gray-200 text-gray-700 hover:bg-gray-300': variant === 'secondary',
            'border-2 border-gray-300 bg-transparent text-gray-700 hover:border-gray-400': variant === 'outline',
            'px-6 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-sm': variant === 'view',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';