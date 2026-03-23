import React, { useEffect } from 'react';
import { XIcon, WhatsAppIcon } from '@/components/icons';
import { useAppStore } from '@/store/appStore';
import { companyInfo } from '@/data';

const QuickView: React.FC = () => {
  const { quickViewProduct, isQuickViewOpen, closeQuickView, addToCart } = useAppStore();

  const formatPrice = (price: number) => {
    return `$ ${price.toLocaleString('es-CO')}`;
  };

  const openWhatsApp = () => {
    if (!quickViewProduct) return;
    const message = encodeURIComponent(`Hola Urban Glasses, estoy interesado en ${quickViewProduct.brand} ${quickViewProduct.model}. ¿Podrían darme más información?`);
    window.open(`https://wa.me/${companyInfo.whatsappNumber}?text=${message}`, '_blank');
  };

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeQuickView();
    };
    
    if (isQuickViewOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isQuickViewOpen, closeQuickView]);

  if (!isQuickViewOpen || !quickViewProduct) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/88 backdrop-blur-md z-[99999] flex items-center justify-center p-4"
        onClick={closeQuickView}
      >
        {/* Modal */}
        <div 
          className="w-full max-w-[960px] bg-[#0e0e12] border border-white/10 rounded-sm overflow-hidden grid lg:grid-cols-2 transform transition-all duration-500 ease-ug-slow"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative h-[300px] lg:h-auto">
            <img
              src={quickViewProduct.image}
              alt={`${quickViewProduct.brand} ${quickViewProduct.model}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-[#e8193c] transition-colors lg:hidden"
            >
              <XIcon size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 relative">
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm text-white hover:border-[#e8193c] hover:text-[#e8193c] transition-colors hidden lg:flex"
            >
              <XIcon size={18} />
            </button>

            <h2 className="font-serif text-4xl lg:text-5xl italic text-white mb-2">
              {quickViewProduct.brand}
            </h2>
            <p className="label-text text-[#e8193c] mb-6">{quickViewProduct.model}</p>
            
            <p className="font-serif text-3xl italic text-white mb-6">
              {formatPrice(quickViewProduct.price)}
            </p>
            
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              {quickViewProduct.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  addToCart(quickViewProduct);
                  closeQuickView();
                }}
                className="flex-1 py-4 bg-white text-[#070709] rounded-sm hover:bg-[#e8193c] hover:text-white transition-colors"
              >
                <span className="button-text">Agregar al carrito</span>
              </button>
              <button
                onClick={openWhatsApp}
                className="flex-1 py-4 border border-[#25D366] text-[#25D366] rounded-sm hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={16} />
                <span className="button-text">Preguntar por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickView;
