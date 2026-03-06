
import React, { useState } from 'react';
import Card from './components/Card';
import Modal from './components/Modal';
import AIAssistant from './components/AIAssistant';
import { RPH_MODULES } from './constants';
import { RPHModule } from './types';

const App: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<RPHModule | null>(null);

  const aiModule: RPHModule = {
    id: 'ai-assistant',
    title: 'Asistente Jurídico Virtual',
    preview: 'Consultas avanzadas basadas en el RPH Puerto Azul, Ley 675 de 2001, Jurisprudencia y Sentencias de la Corte Constitucional.',
    icon: '✨',
    color: 'blue',
    articles: 'Base Legal: RPH + Ley 675 + Sentencias',
    sections: []
  };

  const openAssistant = () => setSelectedModule(aiModule);

  return (
    <div className="min-h-screen pb-32 relative bg-slate-50">
      {/* Header Section - More compact and without overlap */}
      <header className="relative overflow-hidden bg-slate-900 text-white pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-blue-600 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-purple-600 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* IA Status Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur px-3 py-1 rounded-full border border-blue-500/30 mb-6 animate-pulse">
            <span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Asistente IA En Línea</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            RPH Puerto Azul <span className="gemini-text-gradient">Intelligence</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 font-light max-w-2xl mx-auto mb-6">
            Manual Digital de Control, Riesgos y Normativa para Copropietarios
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-medium">
            <span className="bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700">📜 Reglamento</span>
            <span className="bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700">🤖 Gemini AI</span>
            <span className="bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700">⚖️ Ley 675</span>
          </div>
        </div>
      </header>

      {/* Main Grid - Margin top added to separate from header, no negative overlap */}
      <main className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* AI Feature Card First */}
          <Card 
            module={aiModule} 
            onClick={openAssistant} 
            isAI 
          />
          
          {/* Regular RPH Modules */}
          {RPH_MODULES.map((module) => (
            <Card 
              key={module.id} 
              module={module} 
              onClick={(m) => setSelectedModule(m)} 
            />
          ))}
        </div>

        <footer className="mt-24 text-center space-y-4">
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Este dashboard interactivo es una herramienta de consulta rápida basada en el Reglamento de Propiedad Horizontal de Puerto Azul Club House. No reemplaza la lectura formal del documento oficial.
          </p>
          <div className="w-24 h-1 bg-slate-200 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-xs font-bold tracking-widest uppercase">
            © 2025 • PUERTO AZUL CLUB HOUSE • INTELIGENCIA COLECTIVA-PILOTO DESARROLLADO POR IA Y NKM
          </p>
        </footer>
      </main>

      {/* Universal Modal */}
      <Modal 
        module={selectedModule} 
        onClose={() => setSelectedModule(null)}
      >
        {selectedModule?.id === 'ai-assistant' && <AIAssistant />}
      </Modal>
    </div>
  );
};

export default App;
