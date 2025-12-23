
import React from 'react';
import { OrnamentData } from '../types';

interface OrnamentProps {
  data: OrnamentData;
  onClick: (data: OrnamentData) => void;
  disabled?: boolean;
}

const Ornament: React.FC<OrnamentProps> = ({ data, onClick, disabled }) => {
  return (
    <button
      onClick={() => !disabled && onClick(data)}
      disabled={disabled}
      className={`absolute w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/20 
        shadow-lg flex items-center justify-center text-white font-bold text-xl
        transition-all duration-300 transform hover:scale-110 active:scale-95 z-20
        ${data.color} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:ring-4 hover:ring-white/50 cursor-pointer'}
        before:content-[''] before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-4 before:bg-gray-400
      `}
      style={{
        top: data.position.top,
        left: data.position.left,
        transform: 'translateX(-50%)',
      }}
    >
      <span className="drop-shadow-md">{data.day}</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
    </button>
  );
};

export default Ornament;
