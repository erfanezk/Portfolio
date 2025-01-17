import React from 'react';
import { cn } from '@src/utils/tailwind';

const colorClasses = {
  primary:
    'bg-primary-main text-white bg-primary-main hover:bg-blue-600 hover:border-blue-600',
  secondary:
    'bg-gray-500 text-white border-gray-500 hover:bg-gray-600 hover:border-gray-600',
};

const variantClasses = {
  contained: 'py-2 px-4 rounded-lg font-semibold focus:outline-none',
  outlined: 'py-2 px-4 rounded-lg font-semibold border-2 focus:outline-none',
};

function Button({
  variant = 'contained',
  color = 'primary',
  children,
  onClick,
  className,
}) {
  const buttonClasses = `${variantClasses[variant]} ${
    variant === 'contained'
      ? colorClasses[color]
      : `${colorClasses[color]} bg-transparent`
  }`;

  return (
    <button className={cn(buttonClasses, className)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
