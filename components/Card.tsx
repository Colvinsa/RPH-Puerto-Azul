
import React from 'react';
import { RPHModule } from '../types';

interface CardProps {
  module: RPHModule;
  onClick: (module: RPHModule) => void;
  isAI?: boolean;
}

const Card: React.FC<CardProps> = ({ module, onClick, isAI }) => {
  const borderColor = {
    blue: 'border-blue-600',
    amber: 'border-amber-500',
    purple: 'border-purple-600',
    cyan: 'border-cyan-500',
    green: 'border-green-600',
    orange: 'border-orange-500',
    slate: 'border-slate-700',
    sky: 'border-sky-500',
    red: 'border-red-600',
  }[module.color] || 'border-blue-600';

  const btnColor = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    amber: 'bg-amber-500 hover:bg-amber-600',
    purple: 'bg-purple-600 hover:bg-purple-700',
    cyan: 'bg-cyan-500 hover:bg-cyan-600',
    green: 'bg-green-600 hover:bg-green-700',
    orange: 'bg-orange-500 hover:bg-orange-600',
    slate: 'bg-slate-700 hover:bg-slate-800',
    sky: 'bg-sky-500 hover:bg-sky-600',
    red: 'bg-red-600 hover:bg-red-700',
  }[module.color] || 'bg-blue-600';

  if (isAI) {
    return (
      <div 
        onClick={() => onClick(module)}
        className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col border-t-4 border-transparent hover:-translate-y-2"
        style={{ borderImage: 'linear-gradient(135deg, #4285f4, #9b72cb, #d96570) 1' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="pt-8 pb-4 flex justify-center items-center text-7xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <span className="gemini-text-gradient">✨</span>
        </div>
        <div className="px-6 pb-8 text-center flex-grow flex flex-col justify-between items-center relative z-10">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{module.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{module.preview}</p>
          </div>
          <button className="gemini-gradient text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all">
            Usar Asistente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => onClick(module)}
      className={`group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col border-t-4 ${borderColor} hover:-translate-y-2`}
    >
      <div className="pt-8 pb-4 flex justify-center items-center text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        {module.icon}
      </div>
      <div className="px-6 pb-8 text-center flex-grow flex flex-col justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">{module.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">{module.preview}</p>
        </div>
        <button className={`${btnColor} text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-colors`}>
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default Card;
