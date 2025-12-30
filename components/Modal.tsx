
import React, { useEffect, useState } from 'react';
import { RPHModule } from '../types';

interface ModalProps {
  module: RPHModule | null;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ module, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (module) {
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }
  }, [module]);

  if (!module) return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(4px)' }}
      onClick={handleClose}
    >
      <div 
        className={`bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-transform duration-300 ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-6">
            <span className="text-5xl">{module.icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">{module.title}</h2>
              <span className="text-sm font-medium text-slate-400">{module.articles}</span>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="text-slate-300 hover:text-red-500 transition-colors text-4xl leading-none p-2"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-8 scroll-smooth">
          {children ? (
            children
          ) : (
            <div className="space-y-8">
              {module.sections.map((section, idx) => {
                const typeStyles = {
                  info: 'border-blue-400 bg-blue-50 text-blue-900',
                  warning: 'border-amber-400 bg-amber-50 text-amber-900',
                  danger: 'border-red-400 bg-red-50 text-red-900 font-medium',
                  success: 'border-green-400 bg-green-50 text-green-900',
                }[section.type || 'info'];

                return (
                  <div key={idx} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h4 className="text-lg font-bold text-slate-700 border-b-2 border-slate-100 pb-2 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                      {section.title}
                    </h4>
                    
                    {section.type ? (
                      <div className={`p-4 rounded-xl border-l-4 ${typeStyles} shadow-sm`}>
                        {Array.isArray(section.content) ? (
                          <ul className="space-y-2">
                            {section.content.map((item, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-current opacity-70 mt-1">●</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="leading-relaxed">{section.content}</p>
                        )}
                      </div>
                    ) : (
                      <div className="text-slate-600 leading-relaxed">
                        {Array.isArray(section.content) ? (
                          <ul className="space-y-3">
                            {section.content.map((item, i) => (
                              <li key={i} className="flex gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>{section.content}</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
