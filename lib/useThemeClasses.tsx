'use client';

import { useTheme } from '@/lib/ThemeContext';

// Hook to get dynamic theme class names
export function useThemeClasses() {
  const { theme } = useTheme();
  const p = theme.tailwind.primary;
  const s = theme.tailwind.secondary;

  return {
    // Primary color classes
    primary: {
      bg: `bg-${p}-500`,
      bgDark: `bg-${p}-600`,
      bgDarker: `bg-${p}-700`,
      text: `text-${p}-500`,
      textDark: `text-${p}-600`,
      textLight: `text-${p}-400`,
      border: `border-${p}-500`,
      borderDark: `border-${p}-600`,
    },
    
    // Secondary color classes
    secondary: {
      bg: `bg-${s}-500`,
      bgDark: `bg-${s}-600`,
      bgDarker: `bg-${s}-700`,
      text: `text-${s}-500`,
      textDark: `text-${s}-600`,
      textLight: `text-${s}-400`,
      border: `border-${s}-500`,
      borderDark: `border-${s}-600`,
    },
    
    // Gradient classes (primary → secondary)
    gradient: {
      // Background gradients
      bg: `bg-gradient-to-r from-${p}-500 to-${s}-500`,
      bgBr: `bg-gradient-to-br from-${p}-500 to-${s}-500`,
      bgDark: `bg-gradient-to-r from-${p}-600 to-${s}-600`,
      bgDarker: `bg-gradient-to-r from-${p}-700 to-${s}-700`,
      
      // Text gradients
      text: `bg-gradient-to-r from-${p}-500 to-${s}-500 text-transparent bg-clip-text`,
      
      // Hover states
      hover: `hover:from-${p}-600 hover:to-${s}-600`,
      hoverDark: `hover:from-${p}-700 hover:to-${s}-700`,
    },
    
    // Reverse gradient (secondary → primary)
    gradientReverse: {
      bg: `bg-gradient-to-r from-${s}-500 to-${p}-500`,
      bgBr: `bg-gradient-to-br from-${s}-500 to-${p}-500`,
      text: `bg-gradient-to-r from-${s}-500 to-${p}-500 text-transparent bg-clip-text`,
    },
    
    // Single color gradients
    primaryGradient: {
      bg: `bg-gradient-to-r from-${p}-500 to-${p}-600`,
      bgVertical: `bg-gradient-to-b from-${p}-500 to-${p}-700`,
      hover: `hover:from-${p}-600 hover:to-${p}-700`,
    },
    
    secondaryGradient: {
      bg: `bg-gradient-to-r from-${s}-500 to-${s}-600`,
      bgVertical: `bg-gradient-to-b from-${s}-500 to-${s}-700`,
      hover: `hover:from-${s}-600 hover:to-${s}-700`,
    },
    
    // Opacity variants
    bgOpacity: {
      primary10: `bg-${p}-500/10`,
      primary20: `bg-${p}-500/20`,
      primary30: `bg-${p}-500/30`,
      primary50: `bg-${p}-500/50`,
      secondary10: `bg-${s}-500/10`,
      secondary20: `bg-${s}-500/20`,
      secondary30: `bg-${s}-500/30`,
      secondary50: `bg-${s}-500/50`,
    },
    
    borderOpacity: {
      primary30: `border-${p}-500/30`,
      primary50: `border-${p}-500/50`,
      secondary30: `border-${s}-500/30`,
      secondary50: `border-${s}-500/50`,
    },
    
    // Focus states
    focus: {
      primary: `focus:ring-${p}-500`,
      secondary: `focus:ring-${s}-500`,
    },
  };
}

// Component that applies inline styles using CSS variables
export function ThemeGradient({ 
  children, 
  className = '',
  direction = 'to-r',
  reverse = false 
}: { 
  children: React.ReactNode;
  className?: string;
  direction?: 'to-r' | 'to-br' | 'to-b' | 'to-bl' | 'to-l' | 'to-tl' | 'to-t' | 'to-tr';
  reverse?: boolean;
}) {
  const { theme } = useTheme();
  
  const fromColor = reverse ? theme.secondary.main : theme.primary.main;
  const toColor = reverse ? theme.primary.main : theme.secondary.main;
  
  return (
    <div 
      className={`bg-gradient-${direction} ${className}`}
      style={{
        backgroundImage: `linear-gradient(${direction.replace('to-', '')}, ${fromColor}, ${toColor})`
      }}
    >
      {children}
    </div>
  );
}
