
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
        className="group relative p-[1px] rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden flex flex-col hover:-translate-y-2 border border-slate-100 hover:border-transparent min-h-[360px]"
      >
        {/* Border Gradient overlay on hover */}
        <div className="absolute inset-0 gemini-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]"></div>
        
        <div className="bg-white/60 group-hover:bg-white rounded-[15px] flex flex-col h-full w-full relative z-10 transition-colors duration-500 backdrop-blur-md group-hover:backdrop-blur-none">
          {/* Centered Icon that is now highlighted and colored */}
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-50">
             <div className="relative mb-4">
                {/* Dynamic Glow and Rings */}
                <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute inset-0 animate-spin-slow opacity-30">
                  <div className="w-full h-full border-2 border-dashed border-blue-400 rounded-full"></div>
                </div>
                <span className="text-7xl relative z-10 block drop-shadow-[0_0_15px_rgba(66,133,244,0.6)]">
                  ✨
                </span>
             </div>
             <span className="text-[12px] font-black gemini-text-gradient uppercase tracking-[0.4em] mb-4">Inteligencia Artificial</span>
             
             {/* Source Tags Visible in Idle */}
             <div className="flex flex-wrap justify-center gap-2 px-6">
                <span className="text-[8px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 font-bold">RPH PUERTO AZUL</span>
                <span className="text-[8px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-100 font-bold">LEY 675/2001</span>
                <span className="text-[8px] px-2 py-0.5 rounded-full bg-pink-50 text-pink-600 border border-pink-100 font-bold">SENTENCIAS CORTE</span>
             </div>

             <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-6 animate-bounce">Pasa el cursor para abrir</span>
          </div>

          {/* Actual Content revealed on hover */}
          <div className="flex flex-col h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="pt-8 pb-4 flex justify-center items-center text-7xl transition-transform duration-500 group-hover:scale-110">
              <span className="gemini-text-gradient">✨</span>
            </div>
            <div className="px-6 pb-8 text-center flex-grow flex flex-col justify-between items-center relative">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{module.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{module.preview}</p>
                <p className="mt-3 text-[10px] font-semibold text-blue-500 bg-blue-50 p-2 rounded-lg inline-block">
                  Incluye jurisprudencia y normativa vigente
                </p>
              </div>
              
              <div className="mt-6 w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <button className="w-full py-4 gemini-gradient text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Consultar Inteligencia Artificial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => onClick(module)}
      className={`group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col border-t-4 ${borderColor} border-x border-b border-slate-100 hover:-translate-y-2 h-full`}
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
