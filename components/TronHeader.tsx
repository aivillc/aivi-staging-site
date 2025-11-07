'use client';

export default function TronHeader() {
  return (
    <>
      {/* Animated TRON-style gradient lines */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-75 animate-scan" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-75 animate-scan-reverse" />
      </div>

      {/* Secondary animated line */}
      <div className="fixed top-1 left-0 right-0 h-px z-50 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-orange-500 opacity-50 animate-shimmer" />
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes scan-reverse {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }

        .animate-scan-reverse {
          animation: scan-reverse 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 5s linear infinite;
        }
      `}</style>
    </>
  );
}
