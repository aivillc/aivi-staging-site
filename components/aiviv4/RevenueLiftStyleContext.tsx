'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type RevenueLiftStyle = '1' | '2' | '3';

interface RevenueLiftStyleContextType {
  style: RevenueLiftStyle;
  setStyle: (style: RevenueLiftStyle) => void;
}

const RevenueLiftStyleContext = createContext<RevenueLiftStyleContextType | undefined>(undefined);

export function RevenueLiftStyleProvider({ children }: { children: ReactNode }) {
  const [style, setStyle] = useState<RevenueLiftStyle>('2'); // Default to Option 2

  return (
    <RevenueLiftStyleContext.Provider value={{ style, setStyle }}>
      {children}
    </RevenueLiftStyleContext.Provider>
  );
}

export function useRevenueLiftStyle() {
  const context = useContext(RevenueLiftStyleContext);
  if (context === undefined) {
    throw new Error('useRevenueLiftStyle must be used within a RevenueLiftStyleProvider');
  }
  return context;
}

// Safe hook that doesn't throw if context is missing
export function useRevenueLiftStyleSafe() {
  const context = useContext(RevenueLiftStyleContext);
  return context;
}
