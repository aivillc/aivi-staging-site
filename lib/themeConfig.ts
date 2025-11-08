// Theme configuration for color palettes
export type ThemeId = 'tron' | 'ocean' | 'sunset' | 'forest' | 'royal' | 'neon' | 'crimson' | 'cyber';

export interface ThemePalette {
  id: ThemeId;
  name: string;
  primary: {
    main: string;
    dark: string;
    darker: string;
    light: string;
  };
  secondary: {
    main: string;
    dark: string;
    darker: string;
    light: string;
  };
  tailwind: {
    primary: string;    // e.g., 'purple'
    secondary: string;  // e.g., 'orange'
  };
}

export const themes: Record<ThemeId, ThemePalette> = {
  tron: {
    id: 'tron',
    name: 'TRON (Purple & Orange)',
    primary: {
      main: '#8b5cf6',    // purple-500
      dark: '#7c3aed',    // purple-600
      darker: '#6d28d9',  // purple-700
      light: '#a78bfa',   // purple-400
    },
    secondary: {
      main: '#ff6b35',    // orange-500
      dark: '#f55a2c',    // orange-600
      darker: '#e04d23',  // orange-700
      light: '#ff8c5a',   // orange-400
    },
    tailwind: {
      primary: 'purple',
      secondary: 'orange',
    },
  },
  ocean: {
    id: 'ocean',
    name: 'Ocean (Cyan & Blue)',
    primary: {
      main: '#06b6d4',    // cyan-500
      dark: '#0891b2',    // cyan-600
      darker: '#0e7490',  // cyan-700
      light: '#22d3ee',   // cyan-400
    },
    secondary: {
      main: '#3b82f6',    // blue-500
      dark: '#2563eb',    // blue-600
      darker: '#1d4ed8',  // blue-700
      light: '#60a5fa',   // blue-400
    },
    tailwind: {
      primary: 'cyan',
      secondary: 'blue',
    },
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset (Rose & Amber)',
    primary: {
      main: '#f43f5e',    // rose-500
      dark: '#e11d48',    // rose-600
      darker: '#be123c',  // rose-700
      light: '#fb7185',   // rose-400
    },
    secondary: {
      main: '#f59e0b',    // amber-500
      dark: '#d97706',    // amber-600
      darker: '#b45309',  // amber-700
      light: '#fbbf24',   // amber-400
    },
    tailwind: {
      primary: 'rose',
      secondary: 'amber',
    },
  },
  forest: {
    id: 'forest',
    name: 'Forest (Emerald & Lime)',
    primary: {
      main: '#10b981',    // emerald-500
      dark: '#059669',    // emerald-600
      darker: '#047857',  // emerald-700
      light: '#34d399',   // emerald-400
    },
    secondary: {
      main: '#84cc16',    // lime-500
      dark: '#65a30d',    // lime-600
      darker: '#4d7c0f',  // lime-700
      light: '#a3e635',   // lime-400
    },
    tailwind: {
      primary: 'emerald',
      secondary: 'lime',
    },
  },
  royal: {
    id: 'royal',
    name: 'Royal (Indigo & Violet)',
    primary: {
      main: '#6366f1',    // indigo-500
      dark: '#4f46e5',    // indigo-600
      darker: '#4338ca',  // indigo-700
      light: '#818cf8',   // indigo-400
    },
    secondary: {
      main: '#8b5cf6',    // violet-500
      dark: '#7c3aed',    // violet-600
      darker: '#6d28d9',  // violet-700
      light: '#a78bfa',   // violet-400
    },
    tailwind: {
      primary: 'indigo',
      secondary: 'violet',
    },
  },
  neon: {
    id: 'neon',
    name: 'Neon (Pink & Fuchsia)',
    primary: {
      main: '#ec4899',    // pink-500
      dark: '#db2777',    // pink-600
      darker: '#be185d',  // pink-700
      light: '#f472b6',   // pink-400
    },
    secondary: {
      main: '#d946ef',    // fuchsia-500
      dark: '#c026d3',    // fuchsia-600
      darker: '#a21caf',  // fuchsia-700
      light: '#e879f9',   // fuchsia-400
    },
    tailwind: {
      primary: 'pink',
      secondary: 'fuchsia',
    },
  },
  crimson: {
    id: 'crimson',
    name: 'Crimson (Red & Orange)',
    primary: {
      main: '#ef4444',    // red-500
      dark: '#dc2626',    // red-600
      darker: '#b91c1c',  // red-700
      light: '#f87171',   // red-400
    },
    secondary: {
      main: '#f97316',    // orange-500
      dark: '#ea580c',    // orange-600
      darker: '#c2410c',  // orange-700
      light: '#fb923c',   // orange-400
    },
    tailwind: {
      primary: 'red',
      secondary: 'orange',
    },
  },
  cyber: {
    id: 'cyber',
    name: 'Cyber (Sky & Teal)',
    primary: {
      main: '#0ea5e9',    // sky-500
      dark: '#0284c7',    // sky-600
      darker: '#0369a1',  // sky-700
      light: '#38bdf8',   // sky-400
    },
    secondary: {
      main: '#14b8a6',    // teal-500
      dark: '#0d9488',    // teal-600
      darker: '#0f766e',  // teal-700
      light: '#2dd4bf',   // teal-400
    },
    tailwind: {
      primary: 'sky',
      secondary: 'teal',
    },
  },
};

export const defaultTheme: ThemeId = 'tron';

// Get theme from localStorage or default
export function getStoredTheme(): ThemeId {
  if (typeof window === 'undefined') return defaultTheme;
  const stored = localStorage.getItem('aivi_theme');
  return (stored as ThemeId) || defaultTheme;
}

// Save theme to localStorage
export function saveTheme(themeId: ThemeId): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('aivi_theme', themeId);
}

// Get theme classes for Tailwind
export function getThemeClasses(themeId: ThemeId) {
  const theme = themes[themeId];
  const { primary, secondary } = theme.tailwind;
  
  return {
    // Gradients - primary to secondary
    gradientPrimarySecondary: `from-${primary}-500 to-${secondary}-500`,
    gradientPrimarySecondaryDark: `from-${primary}-600 to-${secondary}-600`,
    gradientPrimarySecondaryDarker: `from-${primary}-700 to-${secondary}-700`,
    
    // Gradients - secondary to primary
    gradientSecondaryPrimary: `from-${secondary}-500 to-${primary}-500`,
    gradientSecondaryPrimaryDark: `from-${secondary}-600 to-${primary}-600`,
    
    // Single color gradients
    primaryGradient: `from-${primary}-500 to-${primary}-700`,
    secondaryGradient: `from-${secondary}-500 to-${secondary}-700`,
    
    // Solid colors
    primaryBg: `bg-${primary}-500`,
    primaryBgDark: `bg-${primary}-600`,
    primaryBgDarker: `bg-${primary}-700`,
    primaryText: `text-${primary}-500`,
    primaryTextDark: `text-${primary}-600`,
    primaryBorder: `border-${primary}-500`,
    
    secondaryBg: `bg-${secondary}-500`,
    secondaryBgDark: `bg-${secondary}-600`,
    secondaryBgDarker: `bg-${secondary}-700`,
    secondaryText: `text-${secondary}-500`,
    secondaryTextDark: `text-${secondary}-600`,
    secondaryBorder: `border-${secondary}-500`,
    
    // Hover states
    hoverPrimary: `hover:from-${primary}-600 hover:to-${primary}-700`,
    hoverSecondary: `hover:from-${secondary}-600 hover:to-${secondary}-700`,
    hoverGradient: `hover:from-${primary}-600 hover:to-${secondary}-600`,
    
    // Focus states
    focusPrimary: `focus:ring-${primary}-500`,
    focusSecondary: `focus:ring-${secondary}-500`,
  };
}
