import React from 'react';

export type TextSize = 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
  children: React.ReactNode;
  color?: string;
  size?: TextSize;
  weight?: TextWeight;
  className?: string;
}
