import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';
import { useAppStore } from '@/store/appStore';
import { ArrowRight, Heart } from 'lucide-react';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const addToast = useAppStore((state) => state.addToast);
  const toggleWishlist = useAppStore((state) => state.toggleWishlist);
  const isInWishlist = useAppStore((state) => state.isInWishlist);
  const isFavorite = isInWishlist(product.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    addToast(`Añadido al carrito - ${product.name}`, 'cart');
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product as any);
  };

  return (
    <div className="group flex flex-col h-full bg-[#09090B]">
      {/* Imagen Inmaculada Arriba */}
      <Link to={`/producto/${product.id}`} className="block w-full aspect-[4/5] overflow-hidden bg-[#111113] mb-6 relative transition-shadow duration-700 hover:shadow-[0_0_40px_rgba(255,45,139,0.3),0_0_40px_rgba(0,205,184,0.3)] z-10">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
        />
        {/* Etiqueta / Badge SIN overlay que tape centro */}
        <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 border border-white/10 z-10">
          <span className="font-accent text-[10px] uppercase tracking-widest bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent font-bold">
            {product.category}
          </span>
        </div>

        {/* Botón Favoritos */}
        <button 
          onClick={handleToggleFavorite}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-black/80 transition-all duration-300 group/heart"
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${isFavorite ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-white group-hover/heart:text-[#D4AF37]'}`} 
          />
        </button>
      </Link>

      {/* Info y Botón Debajo */}
      <div className="flex flex-col flex-grow items-start gap-3 p-4 pt-0">
        <Link to={`/producto/${product.id}`} className="block">
          <h3 className="font-serif text-2xl text-white font-light tracking-wide hover:text-white/80 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-sm text-zinc-400 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <p className="font-accent text-sm text-white font-medium mb-4">
          {formatPrice(product.price)}
        </p>
        
        {/* Botón Perfecto Estandarizado */}
        <button 
          onClick={handleAddToCart}
          className="w-full bg-white text-black px-6 py-3 flex items-center justify-center gap-3 font-label text-[10px] tracking-[0.25em] uppercase hover:bg-zinc-200 transition-colors mt-auto"
        >
          AÑADIR AL CARRITO <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
