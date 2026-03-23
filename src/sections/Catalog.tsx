import { useEffect, useRef, useMemo } from 'react';
import { SearchIcon, WhatsAppIcon, HeartIcon, HeartFilledIcon, EyeIcon } from '@/components/icons';
import { products } from '@/data';
import { useAppStore } from '@/store/appStore';
import type { Product } from '@/types';

const filters = ['todos', 'ray-ban', 'lacoste', 'wonder', 'oakley', 'carrera', 'tom-ford', 'persol'];

const Catalog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { activeFilter, searchQuery, setActiveFilter, setSearchQuery, addToCart, openQuickView, toggleWishlist, isInWishlist } = useAppStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.rv');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesFilter = activeFilter === 'todos' || product.brand.toLowerCase().replace(' ', '-') === activeFilter;
      const matchesSearch = !searchQuery || 
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.model.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const formatPrice = (price: number) => {
    return `$ ${price.toLocaleString('es-CO')}`;
  };

  const openWhatsApp = (product: Product) => {
    const message = encodeURIComponent(`Hola Urban Glasses, estoy interesado en ${product.brand} ${product.model}. ¿Podrían darme más información?`);
    window.open(`https://wa.me/573026301340?text=${message}`, '_blank');
  };

  return (
    <section id="catalogo" ref={sectionRef} className="bg-[#070709] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="rv flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12" style={{ animationDelay: '0.08s' }}>
          <div>
            <span className="label-text text-[#e8193c] block mb-4">Catálogo Completo</span>
            <h2 className="heading-section text-white">
              Descubre tu{' '}
              <em className="text-[#00d4e8] not-italic font-semibold">estilo</em>
            </h2>
          </div>
          
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input
              type="search"
              placeholder="Buscar marca o modelo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141418] border border-white/10 rounded-sm pl-12 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#e8193c] transition-colors"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="rv flex flex-wrap gap-2 mb-8" style={{ animationDelay: '0.16s' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs uppercase tracking-[2px] rounded-sm border transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-[#e8193c] border-[#e8193c] text-white'
                  : 'bg-transparent border-white/10 text-white/60 hover:border-white/30 hover:text-white'
              }`}
            >
              {filter === 'todos' ? 'Todos' : filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="rv mb-8" style={{ animationDelay: '0.24s' }}>
          <span className="text-sm text-white/40">
            {filteredProducts.length} modelos disponibles
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid gap-4 lg:gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => {
            const inWishlist = isInWishlist(product.id);
            
            return (
              <div
                key={product.id}
                className="rv group"
                style={{ animationDelay: `${(index + 3) * 0.06}s` }}
              >
                {/* Image */}
                <div className="relative h-[200px] sm:h-[280px] lg:h-[340px] overflow-hidden bg-[#141418] mb-4">
                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.model}`}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-ug-slow group-hover:scale-[1.06]"
                  />
                  
                  {/* Badge */}
                  {product.tags?.includes('sale') ? (
                    <span className="absolute top-3 left-3 px-3 py-1.5 bg-[#e8193c] text-white text-[9px] uppercase tracking-[2px]">
                      Sale
                    </span>
                  ) : product.tags?.includes('nuevo') ? (
                    <span className="absolute top-3 left-3 px-3 py-1.5 bg-[#00d4e8] text-black text-[9px] uppercase tracking-[2px]">
                      Nuevo
                    </span>
                  ) : (
                    <span className="absolute top-3 left-3 px-3 py-1.5 bg-white/10 text-white/80 text-[9px] uppercase tracking-[2px]">
                      {product.category}
                    </span>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => openQuickView(product)}
                      className="w-12 h-12 flex items-center justify-center bg-white text-[#070709] rounded-sm hover:bg-[#e8193c] hover:text-white transition-colors"
                    >
                      <EyeIcon size={20} />
                    </button>
                    <button
                      onClick={() => openWhatsApp(product)}
                      className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-sm hover:bg-[#1da851] transition-colors"
                    >
                      <WhatsAppIcon size={20} />
                    </button>
                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`w-12 h-12 flex items-center justify-center rounded-sm transition-colors ${
                        inWishlist 
                          ? 'bg-[#e8193c] text-white' 
                          : 'bg-white text-[#070709] hover:bg-[#e8193c] hover:text-white'
                      }`}
                    >
                      {inWishlist ? <HeartFilledIcon size={20} /> : <HeartIcon size={20} />}
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div>
                  <h3 className="font-serif text-lg lg:text-2xl italic text-white group-hover:text-[#00d4e8] transition-colors mb-1">
                    {product.brand}
                  </h3>
                  <p className="label-text text-[#e8193c] mb-2">{product.model}</p>
                  <p className="text-xs text-white/40 line-clamp-2 mb-3 hidden lg:block">{product.description}</p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      {product.compareAtPrice && (
                        <span className="text-sm text-white/30 line-through">
                          {formatPrice(product.compareAtPrice)}
                        </span>
                      )}
                      <span className="price text-white">{formatPrice(product.price)}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => addToCart(product)}
                        className="px-3 lg:px-4 py-2 bg-[#e8193c] text-white text-[9px] uppercase tracking-[2px] rounded-sm hover:bg-[#ff2d55] transition-colors"
                      >
                        + <span className="hidden sm:inline">Agregar</span>
                      </button>
                      <button
                        onClick={() => openWhatsApp(product)}
                        className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-sm hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                      >
                        <WhatsAppIcon size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
 Catalog;
