import { create } from 'zustand';
import type { Product, CartItem, WishlistItem } from '@/types';

interface AppState {
  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  
  // Wishlist
  wishlist: WishlistItem[];
  isWishlistOpen: boolean;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  openWishlist: () => void;
  closeWishlist: () => void;
  toggleWishlistDrawer: () => void;
  
  // Quick View
  quickViewProduct: Product | null;
  isQuickViewOpen: boolean;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  
  // Toasts
  toasts: Array<{ id: string; message: string; type: 'cart' | 'info' | 'success' }>;
  addToast: (message: string, type: 'cart' | 'info' | 'success') => void;
  removeToast: (id: string) => void;
  
  // Product Filter
  activeFilter: string;
  searchQuery: string;
  setActiveFilter: (filter: string) => void;
  setSearchQuery: (query: string) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  // Cart
  cart: [],
  isCartOpen: false,
  
  addToCart: (product) => {
    const { cart } = get();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      set({
        cart: cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
    
    get().addToast('Agregado a tu selección', 'cart');
  },
  
  removeFromCart: (productId) => {
    set({ cart: get().cart.filter(item => item.id !== productId) });
  },
  
  clearCart: () => set({ cart: [] }),
  
  openCart: () => {
    set({ isCartOpen: true, isWishlistOpen: false });
    document.body.style.overflow = 'hidden';
  },
  
  closeCart: () => {
    set({ isCartOpen: false });
    document.body.style.overflow = '';
  },
  
  toggleCart: () => {
    const { isCartOpen } = get();
    if (isCartOpen) {
      get().closeCart();
    } else {
      get().openCart();
    }
  },
  
  getCartTotal: () => {
    return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
  
  getCartCount: () => {
    return get().cart.reduce((count, item) => count + item.quantity, 0);
  },
  
  // Wishlist
  wishlist: [],
  isWishlistOpen: false,
  
  addToWishlist: (product) => {
    const { wishlist } = get();
    if (!wishlist.find(item => item.id === product.id)) {
      set({ wishlist: [...wishlist, product] });
      get().addToast('Agregado a favoritos', 'info');
    }
  },
  
  removeFromWishlist: (productId) => {
    set({ wishlist: get().wishlist.filter(item => item.id !== productId) });
  },
  
  toggleWishlist: (product) => {
    const { isInWishlist, addToWishlist, removeFromWishlist } = get();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  },
  
  isInWishlist: (productId) => {
    return get().wishlist.some(item => item.id === productId);
  },
  
  openWishlist: () => {
    set({ isWishlistOpen: true, isCartOpen: false });
    document.body.style.overflow = 'hidden';
  },
  
  closeWishlist: () => {
    set({ isWishlistOpen: false });
    document.body.style.overflow = '';
  },
  
  toggleWishlistDrawer: () => {
    const { isWishlistOpen } = get();
    if (isWishlistOpen) {
      get().closeWishlist();
    } else {
      get().openWishlist();
    }
  },
  
  // Quick View
  quickViewProduct: null,
  isQuickViewOpen: false,
  
  openQuickView: (product) => {
    set({ quickViewProduct: product, isQuickViewOpen: true });
    document.body.style.overflow = 'hidden';
  },
  
  closeQuickView: () => {
    set({ isQuickViewOpen: false, quickViewProduct: null });
    document.body.style.overflow = '';
  },
  
  // Toasts
  toasts: [],
  
  addToast: (message, type) => {
    const id = Math.random().toString(36).substring(2, 9);
    set({ toasts: [...get().toasts, { id, message, type }] });
    
    setTimeout(() => {
      get().removeToast(id);
    }, 3200);
  },
  
  removeToast: (id) => {
    set({ toasts: get().toasts.filter(toast => toast.id !== id) });
  },
  
  // Product Filter
  activeFilter: 'todos',
  searchQuery: '',
  
  setActiveFilter: (filter) => set({ activeFilter: filter }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
