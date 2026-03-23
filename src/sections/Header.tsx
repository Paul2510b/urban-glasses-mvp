import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingCart } from 'lucide-react';
import { useAppStore } from '@/store/appStore';
import { useCartStore } from '@/store/cartStore';
import SearchModal from '@/components/SearchModal';
import AuthModal from '@/components/AuthModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openWishlist, wishlist } = useAppStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { openCart } = useCartStore();
  const cartItems = useCartStore((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlist.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[350ms] ${
        isScrolled
          ? 'bg-bg-overlay backdrop-blur-[20px] border-b border-[rgba(255,45,139,0.15)] h-[60px]'
          : 'bg-transparent border-b border-transparent h-[72px]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center group"
          >
            <span className="font-serif text-2xl italic text-text-primary group-hover:text-white transition-colors">
              Urban<span className="text-neon-pink group-hover:drop-shadow-[0_0_8px_rgba(255,45,139,0.8)] transition-all">.</span>Glasses
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Inicio', path: '/' },
              { label: 'Catálogo', path: '/catalogo' },
              { label: 'Campañas', path: '/lookbook' },
              { label: 'Nosotros', path: '/nosotros' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-sans text-[10px] uppercase tracking-[0.25em] text-text-secondary hover:text-[#D4AF37] transition-colors duration-500"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            {/* Search */}
            <button onClick={() => setIsSearchOpen(true)} className="text-text-secondary hover:text-[#D4AF37] transition-colors duration-500">
              <Search size={18} strokeWidth={1.5} />
            </button>

            {/* Wishlist */}
            <button
              onClick={openWishlist}
              className="relative flex items-center justify-center w-10 h-10 text-text-secondary hover:text-[#D4AF37] transition-colors duration-500"
            >
              <Heart size={18} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-neon-pink rounded-full text-[9px] font-bold flex items-center justify-center text-white shadow-[var(--neon-pink-glow)]">
                  {wishlistCount}
                </span>
              )}
            </button>
            
            {/* Account */}
            <button
              onClick={() => setIsAuthOpen(true)}
              className="flex items-center justify-center w-10 h-10 text-text-secondary hover:text-[#D4AF37] transition-colors duration-500 md:flex"
            >
              <User size={18} strokeWidth={1.5} />
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative flex items-center justify-center w-10 h-10 text-text-secondary hover:text-[#D4AF37] transition-colors duration-500"
            >
              <ShoppingCart size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-neon-pink rounded-full text-[9px] font-bold flex items-center justify-center text-white shadow-[var(--neon-pink-glow)]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </header>
  );
};

export default Header;
