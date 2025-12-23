
export interface OrnamentData {
  day: number;
  id: string;
  color: string;
  position: { top: string; left: string };
  videoUrls: string[]; // Liste de vos vidéos pour ce jour
}

export interface VideoState {
  isOpen: boolean;
  videoUrl: string | null;
  day: number | null;
}

declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}
