import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  { 
    id: 'ug-masculinas', 
    name: 'COLECCIÓN HOMBRE', 
    image: "/generated/cat_hombre.png", 
    cols: 'md:col-span-12 lg:col-span-6',
    route: '/catalogo?genero=Hombre'
  },
  { 
    id: 'ug-femeninas', 
    name: 'COLECCIÓN MUJER', 
    image: "/generated/cat_mujer.png", 
    cols: 'md:col-span-12 lg:col-span-6',
    route: '/catalogo?genero=Mujer'
  },
  { 
    id: 'ug-sol', 
    name: 'SOL', 
    image: "/generated/cat_sunwear.png", 
    cols: 'md:col-span-12 lg:col-span-4',
    route: '/catalogo?categoria=Sol'
  },
  { 
    id: 'ug-optica', 
    name: 'OPTICAL', 
    image: "/generated/cat_optical.png", 
    cols: 'md:col-span-12 lg:col-span-4',
    route: '/catalogo?categoria=Óptica'
  },
  { 
    id: 'ug-sport', 
    name: 'SPORT', 
    image: "/generated/cat_sport.png", 
    cols: 'md:col-span-12 lg:col-span-4',
    route: '/catalogo?categoria=Sport'
  }
];

const CategorySection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-bg-base relative z-20 border-t border-white/5">
      <div className="w-full">
        {/* Header Elegante */}
        <header className="max-w-[1700px] mx-auto px-6 md:px-12 py-20 pb-12 reveal-on-scroll-lookbook stagger-lkbk-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
            <div>
              <span className="font-accent text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] mb-4 block">Shop By Format</span>
              <h2 className="font-headline text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] italic tracking-tighter max-w-4xl text-white">
                Archivos de Colección
              </h2>
            </div>
          </div>
          <div className="flex justify-end">
            <p className="font-label text-xs tracking-[0.35em] uppercase text-text-secondary max-w-sm text-right leading-relaxed">
              REUNIMOS LAS MEJORES FIRMAS DEL MUNDO. UN CATÁLOGO EXTRAORDINARIO EN TUS MANOS.
            </p>
          </div>
        </header>

        {/* Massive 8K Rectangular Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 px-1 pb-1 w-full bg-[#111113]">
          
          {categories.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => navigate(cat.route)}
              className={`relative ${cat.cols} h-[65vh] md:h-[80vh] lg:h-[90vh] bg-black group cursor-pointer overflow-hidden reveal-on-scroll-lookbook transition-all duration-700`}
            >
              {/* Imagen 8K */}
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[2000ms] ease-out group-hover:scale-105"
              />

              {/* Velo Fume (Cinematic Vignette) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Box de Título (Top Left como la referencia del usuario) */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 border border-white/20 px-6 py-2 bg-black/30 backdrop-blur-md transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-[#D4AF37]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 font-label text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/90 group-hover:text-[#D4AF37] transition-colors duration-500">
                  {cat.name}
                </span>
              </div>

              {/* Hover CTA al Centro o Abajo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="overflow-hidden">
                  <span className="block font-serif text-3xl md:text-5xl lg:text-7xl italic text-transparent bg-clip-text bg-gradient-to-t from-white/0 to-white/0 group-hover:from-white/70 group-hover:to-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-[800ms] ease-[0.16,1,0.3,1]">
                    Explorar
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 text-white">
                <span className="font-accent text-[9px] uppercase tracking-widest text-[#D4AF37]">Ver Piezas</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CategorySection;
