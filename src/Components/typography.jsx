import React from 'react';
import { cn } from '@src/utils/tailwind';

const typographyClasses = {
  h1: 'text-4xl font-extrabold tracking-tight text-white',
  h2: 'text-3xl font-semibold tracking-tight text-white',
  h3: 'text-2xl font-medium tracking-tight text-white',
  h4: 'text-xl font-semibold text-white',
  body: 'text-base leading-relaxed text-white',
  lead: 'text-lg leading-relaxed text-white',
  caption: 'text-sm text-white',
  small: 'text-xs text-white',
};

function Typography({ variant = 'body', children, className = '', ...props }) {
  const typographyClass = typographyClasses[variant] || typographyClasses.body;

  return (
    <div className={cn(typographyClass, className)} {...props}>
      {children}
    </div>
  );
}

export default Typography;
