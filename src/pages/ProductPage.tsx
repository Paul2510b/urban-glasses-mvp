import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { mockProducts as products } from '@/data/products';
import type { Product } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { useAppStore } from '@/store/appStore';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(products.find((p: Product) => p.id === id));
  
  const { addItem } = useCartStore();
  const { addToast, toggleWishlist, isInWishlist } = useAppStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    setProduct(products.find((p: Product) => p.id === id));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white font-headline text-3xl">
        Producto no encontrado.
      </div>
    );
  }

  const isFavorite = isInWishlist(product.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    addToast(`Añadido al carrito - ${product.name}`, 'cart');
  };

  return (
    <div className="bg-[#09090b] text-text-primary min-h-screen pt-32 pb-24 px-6 md:px-12 relative animate-in fade-in duration-700">
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Gallery */}
        <div className="flex flex-col gap-6 w-full">
          <Link to="/catalogo" className="flex items-center gap-2 font-label text-[10px] tracking-[0.25em] uppercase text-zinc-500 hover:text-white transition-colors mb-6 w-max">
            <ArrowLeft className="w-4 h-4" /> VOLVER AL CATÁLOGO
          </Link>
          <div className="w-full aspect-[4/5] bg-[#111113] relative group overflow-hidden shadow-[0_0_80px_rgba(255,45,139,0.1),0_0_80px_rgba(0,205,184,0.1)] rounded-sm">
             <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105" />
             
             {/* Gradient Aura overlay */}
             <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,45,139,0.15)] pointer-events-none mix-blend-screen overflow-hidden"></div>

             {/* Badge */}
             <div className="absolute top-6 left-6 bg-black/80 px-4 py-2 border border-white/10 z-10 backdrop-blur-md">
               <span className="font-accent text-[11px] uppercase tracking-[0.3em] bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent font-bold">
                 {product.category}
               </span>
             </div>

             {/* Favorito */}
             <button 
                onClick={() => toggleWishlist(product as any)}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/90 transition-all duration-300 group/heart"
              >
                <Heart className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-white group-hover/heart:text-[#D4AF37]'}`} />
              </button>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center gap-10 lg:pl-10">
          <div>
            <h1 className="font-headline text-[clamp(3rem,6vw,5.5rem)] italic tracking-tighter leading-[1] text-white">
              {product.name}
            </h1>
            <p className="font-accent text-3xl font-light tracking-wide text-zinc-300 mt-6">
              {formatPrice(product.price)}
            </p>
          </div>

          <div className="w-16 h-[1px] bg-gradient-to-r from-pink-500 to-cyan-400"></div>

          <p className="font-sans text-lg text-zinc-400 leading-relaxed max-w-lg">
            {product.description || "Un diseño arquitectónico de precisión con acetato pulido a mano. Protege tu mirada con estilo brutalista y comodidad absoluta."}
          </p>

          <div className="flex flex-col gap-4 mt-4 w-full max-w-md">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-white text-black py-5 flex items-center justify-center gap-4 font-label text-[11px] tracking-[0.3em] uppercase hover:bg-zinc-200 transition-colors"
            >
              AÑADIR AL CARRITO <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 text-zinc-500 font-sans text-sm space-y-3 pt-10 border-t border-zinc-800/50">
            <p className="flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Envío Express Gratuito a toda Colombia.</p>
            <p className="flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Garantía Óptica Global de Diseño Urbano.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
