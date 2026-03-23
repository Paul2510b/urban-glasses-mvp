import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ui/ProductCard';
import { mockProducts } from '@/data/products';

export default function CatalogPage() {
  const [searchParams] = useSearchParams();
  const paramCategoria = searchParams.get('categoria');
  const paramGenero = searchParams.get('genero');

  const [filterCategory, setFilterCategory] = useState<string>(paramCategoria || 'Todos');
  const [filterGender, setFilterGender] = useState<string>(paramGenero || 'Todos');
  const [filterPriceRange, setFilterPriceRange] = useState<string>('Todos');
  const [sortOrder, setSortOrder] = useState<string>('Más recientes');

  // Si cambian los params de URL, actualizamos estado
  useEffect(() => {
    if (paramCategoria) setFilterCategory(paramCategoria);
    if (paramGenero) setFilterGender(paramGenero);
  }, [paramCategoria, paramGenero]);

  // Variables para ocultar filtros si entramos por una ruta dedicada
  const isCategoryLocked = !!paramCategoria;
  const isGenderLocked = !!paramGenero;

  // Título Dinámico
  let pageTitle = "Catálogo Premium";
  if (isCategoryLocked) {
    pageTitle = `Colección ${paramCategoria}`;
  } else if (isGenderLocked) {
    pageTitle = `Colección ${paramGenero}`;
  }

  // Lógica de Filtrado y Ordenamiento
  const filteredProducts = useMemo(() => {
    let result = [...mockProducts];

    // Categoria
    if (filterCategory !== 'Todos') {
      result = result.filter(p => p.category === filterCategory);
    }

    // Género
    if (filterGender !== 'Todos') {
      // Manejar Unisex para que aparezca tanto en hombre como en mujer de ser necesario, o estricto. (Estricto o Unisex)
      result = result.filter(p => p.gender === filterGender || p.gender === 'Unisex');
    }

    // Rango de Precio
    if (filterPriceRange !== 'Todos') {
      if (filterPriceRange === 'Menos de $300.000') {
        result = result.filter(p => p.price < 300000);
      } else if (filterPriceRange === '$300.000 - $500.000') {
        result = result.filter(p => p.price >= 300000 && p.price <= 500000);
      } else if (filterPriceRange === 'Más de $500.000') {
        result = result.filter(p => p.price > 500000);
      }
    }

    // Ordenamiento
    switch (sortOrder) {
      case 'Precio: Menor a Mayor':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Precio: Mayor a Menor':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Más recientes':
      default:
        // Mantener orden de mock data (simula recientes)
        break;
    }

    return result;
  }, [filterCategory, filterGender, filterPriceRange, sortOrder]);

  return (
    <div className="min-h-screen pt-32 pb-24 antialiased">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header Dinámico */}
        <div className="mb-12 text-center md:text-left border-b border-white/10 pb-8">
          <span className="font-accent text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] mb-4 block">Shop All</span>
          <h1 className="font-serif text-5xl lg:text-7xl text-white font-light tracking-tight mb-4">
            {pageTitle}
          </h1>
          <p className="font-sans text-white/50 text-base max-w-xl">
            {filteredProducts.length} piezas encontradas bajo tus criterios de selección.
          </p>
        </div>

        {/* Barra de Controles (Filtros y Ordenamiento) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          
          <div className="flex flex-wrap gap-4 md:gap-8 items-center">
            
            {/* Si NO entramos por una Categoría Bloqueada, permitimos cambiarla */}
            {!isCategoryLocked && (
              <div className="relative group">
                <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-white/60 hover:text-white transition-colors pb-2 border-b border-transparent hover:border-[#D4AF37]">
                  Categoría: <span className="text-white">{filterCategory}</span>
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="bg-[#09090B] border border-white/10 p-2 min-w-[160px] shadow-xl">
                    {['Todos', 'Sol', 'Óptica', 'Sport'].map(c => (
                      <button key={c} onClick={() => setFilterCategory(c)} className="block w-full text-left px-4 py-2 text-sm text-white/60 hover:text-[#D4AF37] hover:bg-white/5 transition-colors">
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Filtro de Género */}
            {!isGenderLocked && (
              <div className="relative group">
                <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-white/60 hover:text-white transition-colors pb-2 border-b border-transparent hover:border-[#D4AF37]">
                  Género: <span className="text-white">{filterGender}</span>
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="bg-[#09090B] border border-white/10 p-2 min-w-[160px] shadow-xl">
                    {['Todos', 'Hombre', 'Mujer', 'Unisex'].map(g => (
                      <button key={g} onClick={() => setFilterGender(g)} className="block w-full text-left px-4 py-2 text-sm text-white/60 hover:text-[#D4AF37] hover:bg-white/5 transition-colors">
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Filtro de Rango de Precio (Cifra entre) */}
            <div className="relative group z-40">
              <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-white/60 hover:text-white transition-colors pb-2 border-b border-transparent hover:border-[#D4AF37]">
                Rango: <span className="text-white">{filterPriceRange === 'Todos' ? 'Cualquiera' : filterPriceRange}</span>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="bg-[#09090B] border border-white/10 p-2 min-w-[180px] shadow-xl">
                  {['Todos', 'Menos de $300.000', '$300.000 - $500.000', 'Más de $500.000'].map(p => (
                    <button key={p} onClick={() => setFilterPriceRange(p)} className="block w-full text-left px-4 py-2 text-sm text-white/60 hover:text-[#D4AF37] hover:bg-white/5 transition-colors">
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
          
          {/* Ordenamiento */}
          <div className="relative group z-30 border-t border-white/10 md:border-none pt-4 md:pt-0">
            <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-white/60 hover:text-[#D4AF37] transition-colors pb-2">
              Ordenar: <span className="text-white">{sortOrder}</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-50 ml-1"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="absolute top-full md:right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
               <div className="bg-[#09090B] border border-white/10 p-2 min-w-[200px] shadow-xl">
                {['Más recientes', 'Precio: Mayor a Menor', 'Precio: Menor a Mayor'].map(s => (
                  <button key={s} onClick={() => setSortOrder(s)} className="block w-full text-left px-4 py-2 text-sm text-white/60 hover:text-[#D4AF37] hover:bg-white/5 transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Grid Asimétrica de Lujo (Similar a Lookbook) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center border border-white/5 bg-white/5">
            <h3 className="font-serif text-2xl text-white mb-2">Sin resultados</h3>
            <p className="text-white/40">No encontramos piezas curadas bajo esa combinación exacta.</p>
            <button 
              onClick={() => {
                setFilterPriceRange('Todos');
                if(!isGenderLocked) setFilterGender('Todos');
                if(!isCategoryLocked) setFilterCategory('Todos');
              }}
              className="mt-6 px-8 py-3 bg-white text-black font-accent text-xs tracking-widest uppercase hover:bg-[#D4AF37] hover:text-white transition-colors"
            >
              Limpiar Filtros
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

