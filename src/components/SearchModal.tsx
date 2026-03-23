import React, { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockProducts } from '@/data/products';
import type { Product } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setQuery(''), 300);
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSuggestion(null);
      return;
    }

    const lowerQuery = query.toLowerCase();
    
    // Exact/Partial matches
    const matches = mockProducts.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
    );

    if (matches.length > 0) {
      setResults(matches);
      setSuggestion(null);
    } else {
      // AI-like fallbacks
      const isCheap = ['barat', 'econom', 'promo', 'descuento', 'oferta'].some(kw => lowerQuery.includes(kw));
      const isSport = ['deport', 'correr', 'bici', 'sport'].some(kw => lowerQuery.includes(kw));
      
      if (isCheap) {
        setSuggestion("Resultados de nuestra IA: Las gafas más accesibles y en oferta");
        setResults([...mockProducts].sort((a, b) => a.price - b.price).slice(0, 4));
      } else if (isSport) {
        setSuggestion("¿Quisiste decir 'Gafas deportivas y activas'?");
        setResults(mockProducts.filter(p => p.category === 'Sport'));
      } else {
        // Did you mean?
        setSuggestion("No encontramos coincidencias exactas. Pero nuestra IA cree que amarás estos modelos:");
        setResults(mockProducts.slice(0, 4));
      }
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-2xl flex flex-col animate-in fade-in duration-300">
      <div className="w-full max-w-5xl mx-auto p-6 pt-[15vh] flex-1 flex flex-col">
        <button onClick={onClose} className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors duration-300">
          <X className="w-8 h-8" />
        </button>

        <div className="relative group">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 text-white/30 group-focus-within:text-[#D4AF37] transition-colors" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Buscar por estilo, marca o corrección..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-3xl md:text-5xl lg:text-7xl font-headline italic tracking-tighter placeholder:text-white/20 border-b-2 border-white/10 focus:border-[#D4AF37] outline-none py-6 pl-12 md:pl-20 transition-colors"
          />
        </div>

        <div className="mt-16 flex-1 overflow-y-auto pr-4 custom-scrollbar pb-10">
          {suggestion && query && (
            <p className="text-[#F3F0EA] font-accent text-sm md:text-base tracking-[0.3em] uppercase mb-10 animate-in slide-in-from-left-4">
              {suggestion}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.map((product) => (
              <div 
                key={product.id} 
                onClick={() => { onClose(); navigate(`/producto/${product.id}`); }}
                className="flex gap-6 items-center bg-[#111113] p-4 rounded-xl cursor-pointer hover:bg-[#18181b] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 group"
              >
                <img src={product.image} alt={product.name} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-700" />
                <div>
                  <h3 className="text-white font-headline text-2xl md:text-3xl group-hover:text-[#D4AF37] transition-colors">{product.name}</h3>
                  <p className="text-white/40 text-sm md:text-base mt-1 font-sans uppercase tracking-widest">{product.category}</p>
                  <p className="text-[#D4AF37] font-serif italic mt-3 md:text-lg">${product.price.toLocaleString('es-CO')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchModal;
