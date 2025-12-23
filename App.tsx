
import React, { useState, useCallback } from 'react';
import Snowfall from './components/Snowfall';
import Ornament from './components/Ornament';
import VideoModal from './components/VideoModal';
import { ORNAMENTS } from './constants';
import { OrnamentData, VideoState } from './types';

const App: React.FC = () => {
  const [videoState, setVideoState] = useState<VideoState>({
    isOpen: false,
    videoUrl: null,
    day: null,
  });

  const handleOrnamentClick = useCallback((ornament: OrnamentData) => {
    let selectedVideo: string | null = null;
    
    if (ornament.videoUrls && ornament.videoUrls.length > 0) {
      const randomIndex = Math.floor(Math.random() * ornament.videoUrls.length);
      selectedVideo = ornament.videoUrls[randomIndex];
    }

    setVideoState({
      isOpen: true,
      videoUrl: selectedVideo,
      day: ornament.day,
    });
  }, []);

  const closeVideo = () => {
    setVideoState({
      isOpen: false,
      videoUrl: null,
      day: null,
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#020617] text-white selection:bg-gold-500/30">
      <Snowfall />
      
      {/* Ambiance lumineuse arrière-plan */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(30,64,175,0.15),transparent_70%)] pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 pt-16 pb-8 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-christmas text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-slate-400 drop-shadow-[0_5px_15px_rgba(255,255,255,0.2)] pt-4 pb-12 leading-snug">
          Magie de l'Avent
        </h1>
        <p className="mt-[-1rem] text-slate-300 max-w-xl mx-auto text-xl font-light tracking-wide">
          Chaque boule de neige cache une surprise...
        </p>
      </header>

      {/* Arbre de Noël */}
      <main className="relative max-w-5xl mx-auto h-[700px] md:h-[850px] flex items-center justify-center">
        <div className="relative w-full h-full max-w-3xl">
          
          {/* Forme de l'Arbre */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <svg viewBox="0 0 500 600" className="w-[100%] h-[100%] opacity-40 drop-shadow-[0_0_60px_rgba(5,150,105,0.3)]">
              <path d="M250 30 L60 520 L440 520 Z" fill="#064e3b" />
              <path d="M250 80 L100 480 L400 480 Z" fill="#065f46" />
              <path d="M250 140 L140 420 L360 420 Z" fill="#047857" />
              <rect x="220" y="520" width="60" height="70" fill="#451a03" />
            </svg>
          </div>

          {/* Boules de Noël */}
          <div className="absolute inset-0">
            {ORNAMENTS.map((ornament) => (
              <Ornament
                key={ornament.id}
                data={ornament}
                onClick={handleOrnamentClick}
              />
            ))}
          </div>

          {/* Étoile de Noël - Positionnement corrigé */}
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 z-30">
             <div className="text-7xl animate-pulse-star select-none">⭐</div>
          </div>
        </div>
      </main>

      <VideoModal state={videoState} onClose={closeVideo} />

      {/* Footer */}
      <footer className="relative z-50 py-16 text-center text-slate-400">
        <div className="flex justify-center gap-10 mb-6 text-3xl opacity-80">
          <span>🎁</span><span>🦌</span><span>❄️</span><span>🔔</span>
        </div>
        <p className="font-light tracking-widest uppercase text-xs">Un Noël Étincelant • 2024</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap');
        .font-christmas { font-family: 'Mountains of Christmas', cursive; }
        
        @keyframes pulse-star {
          0%, 100% { 
            filter: drop-shadow(0 0 15px rgba(251,191,36,0.6));
            transform: scale(1);
          }
          50% { 
            filter: drop-shadow(0 0 40px rgba(251,191,36,1));
            transform: scale(1.15);
          }
        }
        .animate-pulse-star { 
          animation: pulse-star 3s ease-in-out infinite;
          display: inline-block;
          transform-origin: center center;
        }
      `}</style>
    </div>
  );
};

export default App;
