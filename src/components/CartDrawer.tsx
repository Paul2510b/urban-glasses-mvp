import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const CartDrawer: React.FC = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal } = useCartStore();

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "573026301340";
    let message = "Hola Urban Glasses, quiero confirmar mi pedido premium:%0A%0A";
    
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.name} ($${item.price.toLocaleString('es-CO')})%0A`;
    });
    
    message += `%0A*Total: $${cartTotal().toLocaleString('es-CO')} COP*%0A%0A`;
    message += "Mi nombre es: ";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay oscuro para cerrar al hacer clic */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeCart}></div>
      
      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#09090B] border-l border-white/10 h-full flex flex-col shadow-2xl animate-slide-in-right">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="font-headline text-3xl italic text-white">Tu Selección</h2>
          <button onClick={closeCart} className="text-zinc-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <p className="text-zinc-500 font-label text-xs tracking-widest uppercase text-center mt-10">Tu carrito está vacío.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <Link to={`/producto/${item.id}`} onClick={closeCart} className="shrink-0 overflow-hidden block group">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover bg-zinc-900 transition-transform duration-500 group-hover:scale-110" />
                </Link>
                <div className="flex-1">
                  <Link to={`/producto/${item.id}`} onClick={closeCart} className="inline-block">
                    <h3 className="text-white font-headline text-xl hover:text-[#D4AF37] transition-colors">{item.name}</h3>
                  </Link>
                  <p className="text-zinc-400 font-label text-sm">${item.price.toLocaleString('es-CO')}</p>
                  
                  {/* Controles de Cantidad */}
                  <div className="flex items-center gap-4 mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-zinc-500 hover:text-white"><Minus className="w-4 h-4" /></button>
                    <span className="text-white font-label text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-zinc-500 hover:text-white"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-zinc-600 hover:text-red-500 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#0A0A0C]">
            <div className="flex justify-between items-center mb-6 text-white font-label tracking-widest">
              <span className="text-xs uppercase text-zinc-400">Total Estimado</span>
              <span className="text-lg">${cartTotal().toLocaleString('es-CO')}</span>
            </div>
            <button 
              onClick={handleWhatsAppCheckout}
              className="w-full bg-white text-black py-4 font-label text-[10px] tracking-[0.25em] uppercase hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              FINALIZAR COMPRA POR WHATSAPP
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
