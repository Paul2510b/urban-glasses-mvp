import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XIcon, TrashIcon } from '@/components/icons';
import { useAppStore } from '@/store/appStore';
import { useCartStore } from '@/store/cartStore';

const WishlistDrawer = () => {
  const { wishlist, isWishlistOpen, closeWishlist, removeFromWishlist } = useAppStore();
  const { addItem } = useCartStore();

  const formatPrice = (price: number) => {
    return `$ ${price.toLocaleString('es-CO')}`;
  };

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeWishlist();
    };
    
    if (isWishlistOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isWishlistOpen, closeWishlist]);

  if (!isWishlistOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[99997] transition-opacity"
        onClick={closeWishlist}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[480px] bg-[#070709] border-l border-white/10 z-[99998] flex flex-col transform transition-transform duration-400 ease-ug-slow">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h3 className="font-serif text-2xl italic text-white">Mis favoritos</h3>
            <span className="label-text text-white/40">{wishlist.length} artículos</span>
          </div>
          <button
            onClick={closeWishlist}
            className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm hover:border-[#e8193c] hover:text-[#e8193c] transition-colors"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-auto p-6">
          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <span className="font-serif text-7xl italic text-white opacity-10 mb-4">♡</span>
              <p className="text-white/60 mb-2">Tu lista de deseos está vacía</p>
              <p className="text-sm text-white/40">Guarda tus favoritos para verlos después</p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlist.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-4 bg-[#141418] border border-white/5 rounded-sm">
                  <Link to={`/producto/${item.id}`} onClick={closeWishlist} className="flex gap-4 items-center flex-1 min-w-0 group hover:opacity-80 transition-opacity">
                    <img
                      src={item.image}
                      alt={`${item.brand} ${item.model}`}
                      className="w-[72px] h-[60px] object-cover rounded-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-base italic text-white truncate group-hover:text-[#D4AF37] transition-colors">{item.brand}</h4>
                      <p className="text-xs text-white/60 truncate mb-1">{item.model}</p>
                      <p className="font-serif text-lg italic text-[#00d4e8]">{formatPrice(item.price)}</p>
                    </div>
                  </Link>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-[#e8193c] transition-colors"
                    >
                      <TrashIcon size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#070709]">
            <button
              onClick={() => {
                wishlist.forEach(item => addItem({ id: item.id, name: (item as any).name || item.brand || 'Producto', price: item.price, image: item.image }));
                closeWishlist();
              }}
              className="w-full py-4 bg-white text-[#070709] rounded-sm hover:bg-[#e8193c] hover:text-white transition-colors"
            >
              <span className="button-text">Agregar todos al carrito</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default WishlistDrawer;
