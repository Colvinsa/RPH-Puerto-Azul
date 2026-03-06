
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
    } catch (err: any) {
      console.error("Assistant Error:", err);
      if (err.message === 'API_KEY_MISSING') {
        const aistudio = (window as any).aistudio;
        if (aistudio) {
          setError('La clave de API no está configurada. Por favor, selecciona una clave válida.');
          await aistudio.openSelectKey();
        } else {
          setError('La clave de API no está configurada y no se pudo abrir el selector de claves.');
        }
      } else {
        // Show more detailed error if available
        const detail = err.message || 'Error desconocido';
        setError(`Error: ${detail}. Por favor verifica tu conexión o intenta con otra consulta.`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl w-fit">
          <button 
            onClick={() => setActiveTab('consultas')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'consultas' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:bg-white/50'}`}
          >
            🔍 Consultar
          </button>
          <button 
            onClick={() => setActiveTab('cartas')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'cartas' ? 'bg-white shadow-sm text-purple-600' : 'text-slate-500 hover:bg-white/50'}`}
          >
            📝 Redactar
          </button>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded-full border border-green-100">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          Motor Gemini 3 Activo
        </div>
        <button 
          onClick={async () => {
            const aistudio = (window as any).aistudio;
            if (aistudio) await aistudio.openSelectKey();
          }}
          className="text-[10px] font-bold text-slate-400 hover:text-blue-600 uppercase tracking-tight transition-colors"
        >
          ⚙️ Cambiar Clave
        </button>
      </div>

      <div className="space-y-4">
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={activeTab === 'consultas' ? 'Ejemplo: ¿Cuál es el interés de mora máximo permitido?' : 'Ejemplo: Carta solicitando permiso para trasteo el sábado.'}
          className="w-full h-32 p-4 rounded-2xl border-2 border-slate-100 focus:border-blue-400 focus:ring-0 outline-none transition-all resize-none text-slate-800 shadow-inner"
        />

        <button 
          onClick={handleGenerate}
          disabled={isLoading || !input.trim()}
          className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-white transition-all shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${activeTab === 'consultas' ? 'bg-blue-600 hover:bg-blue-700' : 'gemini-gradient hover:brightness-110'}`}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Analizando Reglamento...</span>
            </>
          ) : (
            <>
              <span>{activeTab === 'consultas' ? 'Enviar Consulta' : 'Generar Documento'}</span>
              <span>✨</span>
            </>
          )}
        </button>
      </div>

      {!result && !error && !isLoading && (
        <div className="py-12 text-center space-y-4 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <div className="text-4xl">🤖</div>
          <div className="max-w-xs mx-auto">
            <h4 className="text-slate-800 font-bold">¡Hola! Soy tu asistente legal.</h4>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed">
              Puedes hacerme preguntas complejas sobre el reglamento de Puerto Azul o pedirme que redacte comunicaciones oficiales.
            </p>
          </div>
        </div>
      )}

      {(result || error) && (
        <div className={`mt-8 p-6 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-500 shadow-sm border ${error ? 'bg-red-50 border-red-100' : 'bg-white border-slate-100'}`}>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-slate-800 uppercase text-[10px] tracking-widest flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${error ? 'bg-red-500' : 'bg-green-500'}`}></span>
              {error ? 'Error de conexión' : 'Respuesta Procesada'}
            </span>
          </div>
          {error ? (
            <div className="space-y-4">
              <p className="text-red-600 text-sm font-medium">{error}</p>
              <button 
                onClick={handleGenerate}
                className="text-xs font-bold text-red-600 hover:underline uppercase tracking-tight"
              >
                Reintentar Consulta
              </button>
            </div>
          ) : (
            <div className="prose prose-slate max-w-none">
              <div className="text-slate-700 whitespace-pre-wrap leading-relaxed text-[1rem] bg-slate-50 p-4 rounded-xl border border-slate-100 font-medium">
                {result}
              </div>
            </div>
          )}
          <div className="mt-4 flex justify-end">
             <button 
              onClick={() => { navigator.clipboard.writeText(result); }}
              className="text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-tight"
             >
               Copiar al portapapeles
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
