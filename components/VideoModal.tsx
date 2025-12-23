
import React from 'react';
import { VideoState } from '../types';

interface VideoModalProps {
  state: VideoState;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ state, onClose }) => {
  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
        >
          ✕
        </button>

        <div className="p-4 md:p-8 text-center">
          <h2 className="text-4xl font-christmas text-gold-400 mb-6 drop-shadow-sm">
            Surprise du Jour {state.day}
          </h2>
          
          <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/5">
            {state.videoUrl ? (
              <video 
                src={state.videoUrl} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-500 space-y-4">
                <span className="text-6xl">🎁</span>
                <p>La vidéo de ce jour arrive bientôt !</p>
              </div>
            )}
          </div>
          
          <p className="mt-6 text-slate-300 italic font-medium">
            "Joyeuses Fêtes !"
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
