
import React, { useMemo } from 'react';

const Snowfall: React.FC = () => {
  // Création de 100 flocons avec des propriétés variées pour la profondeur
  const snowflakes = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => {
      const size = Math.random() * 5 + 1;
      const layer = size > 4 ? 'foreground' : size > 2 ? 'midground' : 'background';
      
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${10 + Math.random() * 15}s`,
        delay: `${Math.random() * -20}s`,
        opacity: Math.random() * 0.6 + 0.2,
        size: `${size}px`,
        blur: layer === 'foreground' ? '2px' : '0px',
        swayDuration: `${2 + Math.random() * 4}s`,
        swayAmount: `${20 + Math.random() * 30}px`,
        zIndex: layer === 'foreground' ? 40 : layer === 'midground' ? 10 : 0,
      };
    });
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute rounded-full bg-white animate-snow-fall"
            style={{
              left: flake.left,
              width: flake.size,
              height: flake.size,
              opacity: flake.opacity,
              filter: `blur(${flake.blur})`,
              zIndex: flake.zIndex,
              top: '-10px',
              animation: `
                fall ${flake.duration} linear infinite ${flake.delay},
                sway ${flake.swayDuration} ease-in-out infinite alternate
              `,
            }}
          />
        ))}
      </div>

      {/* Effet d'accumulation de neige au bas de l'écran */}
      <div className="fixed bottom-0 left-0 right-0 h-16 pointer-events-none z-40 bg-gradient-to-t from-white/10 to-transparent blur-xl" />
      <div className="fixed bottom-[-10px] left-0 right-0 h-8 pointer-events-none z-40 flex items-end">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full opacity-40">
          <path d="M0,120 C300,20 600,100 900,20 C1200,80 1200,120 1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>

      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh); }
          100% { transform: translateY(110vh); }
        }
        
        @keyframes sway {
          0% { margin-left: -20px; }
          100% { margin-left: 20px; }
        }

        .animate-snow-fall {
          will-change: transform;
        }
      `}</style>
    </>
  );
};

export default Snowfall;
