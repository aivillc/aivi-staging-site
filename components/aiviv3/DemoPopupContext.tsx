'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import DemoPopup from './DemoPopup';

interface DemoPopupContextType {
  openDemoPopup: () => void;
  closeDemoPopup: () => void;
  isOpen: boolean;
}

const DemoPopupContext = createContext<DemoPopupContextType | undefined>(undefined);

export function DemoPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDemoPopup = () => setIsOpen(true);
  const closeDemoPopup = () => setIsOpen(false);

  return (
    <DemoPopupContext.Provider value={{ openDemoPopup, closeDemoPopup, isOpen }}>
      <div className={isOpen ? 'demo-popup-open' : ''}>
        {children}
      </div>
      <DemoPopup isOpen={isOpen} onClose={closeDemoPopup} />
    </DemoPopupContext.Provider>
  );
}

export function useDemoPopup() {
  const context = useContext(DemoPopupContext);
  if (context === undefined) {
    throw new Error('useDemoPopup must be used within a DemoPopupProvider');
  }
  return context;
}
