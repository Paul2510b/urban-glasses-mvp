import React from 'react';
import { WhatsAppIcon, ShoppingCartIcon } from '@/components/icons';
import { companyInfo } from '@/data';
import { useCartStore } from '@/store/cartStore';

const FloatingButtons: React.FC = () => {
  const { isOpen, openCart } = useCartStore();
  const cartItems = useCartStore((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsappNumber}?text=Hola%20Urban%20Glasses,%20quiero%20asesoría%20personalizada.`, '_blank');
  };

  // Hides floating buttons when CartDrawer is open to prevent overlapping
  if (isOpen) return null;

  return (
    <div className="fixed bottom-6 lg:bottom-8 right-6 lg:right-8 z-[9000] flex flex-col gap-3">
      {/* WhatsApp */}
      <button
        onClick={openWhatsApp}
        data-tip="WhatsApp"
        className="group relative w-14 h-14 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
        style={{ 
          background: 'linear-gradient(135deg, #E6C875, #B6922C)',
          boxShadow: '0 8px 32px rgba(212,175,55,0.3)'
        }}
      >
        <WhatsAppIcon size={24} className="text-[#0A0A0C]" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-black/85 backdrop-blur-sm text-xs text-white whitespace-nowrap rounded-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
          WhatsApp
        </span>
      </button>

      {/* Cart */}
      <button
        onClick={openCart}
        data-tip="Mi Carrito"
        className="group relative w-14 h-14 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
        style={{ 
          background: 'linear-gradient(135deg, #F3F0EA, #C0C4CC)',
          boxShadow: '0 8px 32px rgba(243,240,234,0.3)'
        }}
      >
        <ShoppingCartIcon size={22} className="text-[#0A0A0C]" />
        
        {/* Badge */}
        {cartCount > 0 && (
          <span 
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#111113] text-[#D4AF37] border border-[#D4AF37]/50 text-[9px] font-bold flex items-center justify-center"
            style={{ 
              boxShadow: '0 0 12px rgba(212,175,55,0.5)',
              animation: 'bounceIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            {cartCount}
          </span>
        )}
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-black/85 backdrop-blur-sm text-xs text-white whitespace-nowrap rounded-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
          Mi Carrito
        </span>
      </button>

      <style>{`
        @keyframes bounceIn {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default FloatingButtons;
