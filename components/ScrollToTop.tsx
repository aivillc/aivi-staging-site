'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detect if we're on a white background section
      const elements = document.elementsFromPoint(window.innerWidth - 50, window.innerHeight - 150);
      const hasWhiteBg = elements.some(el => {
        const bg = window.getComputedStyle(el).backgroundColor;
        return bg === 'rgb(255, 255, 255)' || bg === 'rgba(255, 255, 255, 1)';
      });
      setIsDarkBg(!hasWhiteBg);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-28 right-6 z-40 p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
        isDarkBg 
          ? 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30 text-white'
          : 'bg-gray-800/80 border-gray-700 hover:bg-gray-700 hover:border-gray-600 text-white'
      } ${
        isVisible ? 'opacity-30 hover:opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
