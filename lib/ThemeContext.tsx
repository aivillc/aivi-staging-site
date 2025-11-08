'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeId, themes, getStoredTheme, saveTheme, defaultTheme } from '@/lib/themeConfig';

interface ThemeContextType {
  themeId: ThemeId;
  theme: typeof themes[ThemeId];
  setTheme: (themeId: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(defaultTheme);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = getStoredTheme();
    setThemeId(stored);
    setIsHydrated(true);
    
    // Apply CSS variables
    applyTheme(stored);
  }, []);

  const handleSetTheme = (newThemeId: ThemeId) => {
    setThemeId(newThemeId);
    saveTheme(newThemeId);
    applyTheme(newThemeId);
  };

  const applyTheme = (id: ThemeId) => {
    if (typeof window === 'undefined') return;
    
    const theme = themes[id];
    const root = document.documentElement;
    
    // Apply CSS custom properties
    root.style.setProperty('--color-primary', theme.primary.main);
    root.style.setProperty('--color-primary-dark', theme.primary.dark);
    root.style.setProperty('--color-primary-darker', theme.primary.darker);
    root.style.setProperty('--color-primary-light', theme.primary.light);
    
    root.style.setProperty('--color-secondary', theme.secondary.main);
    root.style.setProperty('--color-secondary-dark', theme.secondary.dark);
    root.style.setProperty('--color-secondary-darker', theme.secondary.darker);
    root.style.setProperty('--color-secondary-light', theme.secondary.light);
  };

  return (
    <ThemeContext.Provider value={{ themeId, theme: themes[themeId], setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
