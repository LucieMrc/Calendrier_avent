
import React from 'react';
import { VideoState } from '../types';

interface VideoModalProps {
  state: VideoState;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ state, onClose }) => {
  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl">
      {/* 
          Pour les vidéos verticales, on réduit max-w de 4xl à md ou lg 
          et on utilise max-h pour s'assurer que ça rentre dans l'écran.
      */}
      <div className="relative w-full max-w-md bg-slate-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] animate-in zoom-in duration-300">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-md border border-white/10"
        >
          ✕
        </button>

        <div className="p-6 md:p-8 text-center flex flex-col h-full max-h-[92vh]">
          <header className="mb-4">
            <h2 className="text-3xl md:text-4xl font-christmas text-gold-400 drop-shadow-sm">
              Jour {state.day}
            </h2>
          </header>
          
          {/* Ratio 9:16 pour les vidéos verticales */}
          <div className="relative flex-1 aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-2xl border border-white/5 mx-auto w-full group">
            {state.videoUrl ? (
              <video 
                src={state.videoUrl} 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error("Erreur de chargement vidéo. Chemin testé :", state.videoUrl);
                }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4 p-8">
                <span className="text-6xl animate-bounce">🎁</span>
                <p className="text-sm font-quicksand opacity-60">Fichier vidéo introuvable dans /public/medias/</p>
              </div>
            )}
          </div>
          
          <footer className="mt-4 shrink-0">
            <p className="text-gold-200/60 italic font-medium text-sm md:text-base font-quicksand">
              "La magie est dans l'air..."
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
