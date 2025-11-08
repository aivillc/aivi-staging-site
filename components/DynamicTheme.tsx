'use client';

import { CSSProperties, ReactNode } from 'react';
import { useTheme } from '@/lib/ThemeContext';

interface DynamicGradientProps {
  children: ReactNode;
  className?: string;
  direction?: 'to-r' | 'to-br' | 'to-b' | 'to-bl' | 'to-l' | 'to-tl' | 'to-t' | 'to-tr';
  variant?: 'primary-secondary' | 'secondary-primary' | 'primary-only' | 'secondary-only';
  opacity?: number;
  as?: 'div' | 'button' | 'span';
  onClick?: () => void;
  style?: CSSProperties;
}

const directionMap = {
  'to-r': '90deg',
  'to-br': '135deg',
  'to-b': '180deg',
  'to-bl': '225deg',
  'to-l': '270deg',
  'to-tl': '315deg',
  'to-t': '0deg',
  'to-tr': '45deg',
};

export function DynamicGradient({
  children,
  className = '',
  direction = 'to-r',
  variant = 'primary-secondary',
  opacity = 1,
  as: Component = 'div',
  onClick,
  style: additionalStyle,
}: DynamicGradientProps) {
  const { theme } = useTheme();
  
  let fromColor, toColor;
  
  switch (variant) {
    case 'primary-secondary':
      fromColor = theme.primary.main;
      toColor = theme.secondary.main;
      break;
    case 'secondary-primary':
      fromColor = theme.secondary.main;
      toColor = theme.primary.main;
      break;
    case 'primary-only':
      fromColor = theme.primary.main;
      toColor = theme.primary.dark;
      break;
    case 'secondary-only':
      fromColor = theme.secondary.main;
      toColor = theme.secondary.dark;
      break;
  }
  
  const style: CSSProperties = {
    backgroundImage: `linear-gradient(${directionMap[direction]}, ${fromColor}, ${toColor})`,
    opacity,
    ...additionalStyle,
  };
  
  return (
    <Component className={className} style={style} onClick={onClick}>
      {children}
    </Component>
  );
}

interface DynamicTextGradientProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary-secondary' | 'secondary-primary';
}

export function DynamicTextGradient({
  children,
  className = '',
  variant = 'primary-secondary',
}: DynamicTextGradientProps) {
  const { theme } = useTheme();
  
  const fromColor = variant === 'primary-secondary' ? theme.primary.main : theme.secondary.main;
  const toColor = variant === 'primary-secondary' ? theme.secondary.main : theme.primary.main;
  
  const style: CSSProperties = {
    backgroundImage: `linear-gradient(90deg, ${fromColor}, ${toColor})`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };
  
  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
}

interface DynamicColorProps {
  children: ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'primary-dark' | 'secondary-dark';
  type?: 'bg' | 'text' | 'border';
}

export function DynamicColor({
  children,
  className = '',
  color = 'primary',
  type = 'bg',
}: DynamicColorProps) {
  const { theme } = useTheme();
  
  let colorValue: string;
  
  switch (color) {
    case 'primary':
      colorValue = theme.primary.main;
      break;
    case 'secondary':
      colorValue = theme.secondary.main;
      break;
    case 'primary-dark':
      colorValue = theme.primary.dark;
      break;
    case 'secondary-dark':
      colorValue = theme.secondary.dark;
      break;
  }
  
  const style: CSSProperties = {};
  
  switch (type) {
    case 'bg':
      style.backgroundColor = colorValue;
      break;
    case 'text':
      style.color = colorValue;
      break;
    case 'border':
      style.borderColor = colorValue;
      break;
  }
  
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
