
import React, { useState } from 'react';
import { askGemini } from '../services/geminiService';
import { AITab } from '../types';

const AIAssistant: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AITab>('consultas');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    setResult('');
    setError('');
    
    try {
      const response = await askGemini(input, activeTab);
      setResult(response);
    } catch (err) {
      setError('Hubo un error al conectar con el asistente. Por favor verifica tu conexión o intenta más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl w-fit">
        <button 
          onClick={() => setActiveTab('consultas')}
          className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'consultas' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:bg-white/50'}`}
        >
          🔍 Consultar Reglamento
        </button>
        <button 
          onClick={() => setActiveTab('cartas')}
          className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'cartas' ? 'bg-white shadow-sm text-purple-600' : 'text-slate-500 hover:bg-white/50'}`}
        >
          📝 Redactar Carta
        </button>
      </div>

      <div className="space-y-4">
        <p className="text-slate-600 text-sm italic">
          {activeTab === 'consultas' 
            ? 'Pregunta dudas sobre mascotas, ruidos, parqueaderos, multas o asambleas.' 
            : 'Describe tu situación y la IA redactará una carta formal lista para enviar a la administración.'}
        </p>

        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={activeTab === 'consultas' ? 'Ejemplo: ¿Es legal que el Consejo cambie el color de la fachada sin asamblea?' : 'Ejemplo: Soy del apto 305 y tengo una filtración hace 2 semanas que no han reparado.'}
          className="w-full h-32 p-4 rounded-2xl border-2 border-slate-100 focus:border-blue-400 focus:ring-0 outline-none transition-all resize-none text-slate-800"
        />

        <button 
          onClick={handleGenerate}
          disabled={isLoading || !input.trim()}
          className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-white transition-all shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${activeTab === 'consultas' ? 'bg-blue-600' : 'gemini-gradient'}`}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Procesando...</span>
            </>
          ) : (
            <>
              <span>{activeTab === 'consultas' ? 'Preguntar a la IA' : 'Generar Documento'}</span>
              <span>✨</span>
            </>
          )}
        </button>
      </div>

      {(result || error) && (
        <div className={`mt-8 p-6 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-500 ${error ? 'bg-red-50 border border-red-100' : 'bg-slate-50 border border-slate-100'}`}>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-slate-800 uppercase text-xs tracking-widest flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${error ? 'bg-red-500' : 'bg-green-500'}`}></span>
              Respuesta del Asistente
            </span>
          </div>
          {error ? (
            <p className="text-red-600 text-sm font-medium">{error}</p>
          ) : (
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 whitespace-pre-wrap leading-relaxed text-[1.05rem]">{result}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
