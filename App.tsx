
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
    title: 'Asistente Virtual IA',
    preview: 'Pregunta al reglamento o redacta cartas formales con Inteligencia Artificial.',
    icon: '✨',
    color: 'blue',
    articles: 'Powered by Gemini API',
    sections: []
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-blue-600 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-purple-600 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            RPH Puerto Azul <span className="gemini-text-gradient">Intelligence</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400 font-light max-w-3xl mx-auto mb-4">
            Manual Digital de Control, Riesgos y Normativa para Copropietarios
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700">📜 Reglamento Interactivo</span>
            <span className="bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700">🤖 Asistente Legal Gemini</span>
            <span className="bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700">⚖️ Ley 675 de 2001</span>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="container mx-auto px-6 -mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* AI Feature Card First */}
          <Card 
            module={aiModule} 
            onClick={() => setSelectedModule(aiModule)} 
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

        <footer className="mt-20 text-center space-y-4">
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Este dashboard interactivo es una herramienta de consulta rápida basada en el Reglamento de Propiedad Horizontal de Puerto Azul Club House. No reemplaza la lectura formal del documento oficial.
          </p>
          <div className="w-24 h-1 bg-slate-200 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-xs font-bold tracking-widest uppercase">
            © 2024 • PUERTO AZUL CLUB HOUSE • INTELIGENCIA COLECTIVA
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
