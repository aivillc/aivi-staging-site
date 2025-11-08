'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { themes, ThemeId } from '@/lib/themeConfig';

export default function ThemeSelector() {
  const { themeId, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const currentTheme = themes[themeId];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Theme Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2.5 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-lg hover:border-white/20 transition-all group"
        aria-label="Select color theme"
      >
        {/* Color Preview Circles */}
        <div className="flex items-center gap-1">
          <div 
            className="w-4 h-4 rounded-full border-2 border-white/30"
            style={{ backgroundColor: currentTheme.primary.main }}
          />
          <div 
            className="w-4 h-4 rounded-full border-2 border-white/30"
            style={{ backgroundColor: currentTheme.secondary.main }}
          />
        </div>
        
        {/* Theme Name */}
        <span className="text-sm font-bold text-white hidden sm:inline">
          {currentTheme.name}
        </span>

        {/* Dropdown Arrow */}
        <svg 
          className={`w-4 h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-black/95 backdrop-blur-xl border-2 border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-scaleIn">
          <div className="p-3">
            <div className="text-xs font-bold text-white/60 uppercase tracking-wider px-3 py-2">
              Select Theme
            </div>
            
            {/* Theme Options */}
            <div className="space-y-1">
              {Object.values(themes).map((theme) => {
                const isActive = theme.id === themeId;
                
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setTheme(theme.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                      isActive 
                        ? 'bg-white/10 border-2 border-white/20' 
                        : 'bg-white/5 border-2 border-transparent hover:bg-white/10 hover:border-white/10'
                    }`}
                  >
                    {/* Color Preview */}
                    <div className="flex items-center gap-1">
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white/30 shadow-lg"
                        style={{ backgroundColor: theme.primary.main }}
                      />
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white/30 shadow-lg"
                        style={{ backgroundColor: theme.secondary.main }}
                      />
                    </div>

                    {/* Theme Name */}
                    <span className="flex-1 text-left text-sm font-bold text-white">
                      {theme.name}
                    </span>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.primary.main }} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
