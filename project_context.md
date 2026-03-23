# Frontend Architecture Context

Este documento contiene todo el código relevante del proyecto de React.

## Archivo: components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "postcss.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}

```

## Archivo: eslint.config.js
```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])

```

## Archivo: index.html
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Urban Glasses Colombia — Óptica Digital Premium</title>
    <meta name="description" content="La óptica digital premium de Colombia. Marcas originales, lentes a la medida y entrega en tu puerta. Garantía 12 meses." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

## Archivo: info.md
```md
Using Node.js 20, Tailwind CSS v3.4.19, and Vite v7.2.4

Tailwind CSS has been set up with the shadcn theme

Setup complete: /mnt/okcomputer/output/app

Components (40+):
  accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb,
  button-group, button, calendar, card, carousel, chart, checkbox, collapsible,
  command, context-menu, dialog, drawer, dropdown-menu, empty, field, form,
  hover-card, input-group, input-otp, input, item, kbd, label, menubar,
  navigation-menu, pagination, popover, progress, radio-group, resizable,
  scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner,
  spinner, switch, table, tabs, textarea, toggle-group, toggle, tooltip

Usage:
  import { Button } from '@/components/ui/button'
  import { Card, CardHeader, CardTitle } from '@/components/ui/card'

Structure:
  src/sections/        Page sections
  src/hooks/           Custom hooks
  src/types/           Type definitions
  src/App.css          Styles specific to the Webapp
  src/App.tsx          Root React component
  src/index.css        Global styles
  src/main.tsx         Entry point for rendering the Webapp
  index.html           Entry point for the Webapp
  tailwind.config.js   Configures Tailwind's theme, plugins, etc.
  vite.config.ts       Main build and dev server settings for Vite
  postcss.config.js    Config file for CSS post-processing tools
```

## Archivo: package.json
```json
{
  "name": "my-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@anthropic-ai/sdk": "^0.78.0",
    "@emailjs/browser": "^4.4.1",
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.5.0",
    "@supabase/supabase-js": "^2.99.2",
    "@tsparticles/react": "^3.0.0",
    "@tsparticles/slim": "^3.9.1",
    "@types/three": "^0.183.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.37.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.562.0",
    "next-themes": "^0.4.6",
    "react": "^19.2.0",
    "react-day-picker": "^9.13.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.70.0",
    "react-resizable-panels": "^4.2.2",
    "react-router-dom": "^7.13.1",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0",
    "three": "^0.183.2",
    "tsparticles": "^3.9.1",
    "vaul": "^1.1.2",
    "zod": "^4.3.5",
    "zustand": "^5.0.11"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/node": "^24.10.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "kimi-plugin-inspect-react": "^1.0.3",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.19",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.46.4",
    "vite": "^7.2.4"
  }
}

```

## Archivo: postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

## Archivo: README.md
```md
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```

## Archivo: src\App.css
```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

## Archivo: src\App.tsx
```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/sections/Header';
// import Hero from '@/sections/Hero';
// import Ticker from '@/sections/Ticker';
// import Editorial from '@/sections/Editorial';
// import BrandsCarousel from '@/sections/BrandsCarousel';
// import Benefits from '@/sections/Benefits';
// import Lookbook from '@/sections/Lookbook';
// import Catalog from '@/sections/Catalog';
// import Process from '@/sections/Process';
// import Testimonials from '@/sections/Testimonials';
// import FAQ from '@/sections/FAQ';
// import CTAWhatsApp from '@/sections/CTAWhatsApp';
// import Newsletter from '@/sections/Newsletter';
import Footer from '@/sections/Footer';

// Pages
import HomePage from '@/pages/HomePage';
import CatalogPage from '@/pages/CatalogPage';
import LookbookPage from '@/pages/LookbookPage';
import AboutPage from '@/pages/AboutPage';
import ProductPage from '@/pages/ProductPage';

// Floating Components
import CartDrawer from '@/components/CartDrawer';
import QuickView from '@/components/QuickView';
import Toasts from '@/components/Toasts';
import WishlistDrawer from '@/components/WishlistDrawer';
import FloatingButtons from '@/components/FloatingButtons';
import Mascot from '@/components/Mascot';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0c] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#18181b] via-[#0a0a0c] to-[#050505] text-white">
        <ScrollToTop />
        {/* Ambient Animated Background Elements - Oliver Peoples Elegance */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-30">
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#D4AF37]/5 blur-[180px] animate-[pulse_24s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#F3F0EA]/5 blur-[200px] animate-[pulse_30s_ease-in-out_infinite_alternate]" />
        </div>

        {/* Fixed Header */}
        <Header />
        
        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/lookbook" element={<LookbookPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/producto/:id" element={<ProductPage />} />
          </Routes>
          {/*
          <Hero />
          <Ticker />
          <Editorial />
          <BrandsCarousel />
          <Benefits />
          <Lookbook />
          <Catalog />
          <Process />
          <Testimonials />
          <FAQ />
          <CTAWhatsApp />
          <Newsletter />
          */}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating Components */}
        <CartDrawer />
        <WishlistDrawer />
        <QuickView />
        <Toasts />
        <FloatingButtons />
        <Mascot />
      </div>
    </BrowserRouter>
  );
}

export default App;

```

## Archivo: src\components\AuthModal.tsx
```typescript
import React, { useState } from 'react';
import { X, Mail, Lock, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-md border border-white/10 bg-[#09090b] shadow-[0_0_80px_rgba(255,45,139,0.15)] rounded-lg overflow-hidden animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white z-10 transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="p-10">
          <div className="w-12 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-8" />
          
          <h2 className="text-3xl font-headline italic tracking-tighter text-white mb-2">
            {isLogin ? 'Iniciar Sesión' : 'Únete a la Élite'}
          </h2>
          <p className="text-zinc-400 font-sans text-sm mb-8 leading-relaxed">
            {isLogin ? 'Accede a tu historial de compras y beneficios exclusivos.' : 'Regístrate para asegurar las piezas de colección antes que nadie.'}
          </p>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert(`Autenticación simulada: Datos enrutados al correo para ${email}`); onClose(); }}>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-[#D4AF37] transition-colors" />
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Correo electrónico" 
                className="w-full bg-[#0a0a0c] border border-white/10 text-white pl-12 pr-4 py-4 rounded-sm font-sans text-sm outline-none focus:border-[#D4AF37]/50 transition-colors"
                />
            </div>
            
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-[#D4AF37] transition-colors" />
              <input 
                type="password" 
                required
                placeholder="Contraseña" 
                className="w-full bg-[#0a0a0c] border border-white/10 text-white pl-12 pr-4 py-4 rounded-sm font-sans text-sm outline-none focus:border-[#D4AF37]/50 transition-colors"
                />
            </div>

            <button type="submit" className="w-full bg-[#D4AF37] text-black py-4 rounded-sm flex items-center justify-center gap-3 font-sans font-medium text-[10px] tracking-[0.3em] uppercase hover:bg-white transition-colors mt-8">
              {isLogin ? 'ENTRAR' : 'CREAR CUENTA'} <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-zinc-500 hover:text-white text-sm transition-colors border-b border-white/20 pb-1"
            >
              {isLogin ? '¿No tienes cuenta? Solicita acceso aquí' : '¿Ya eres miembro? Inicia sesión'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthModal;

```

## Archivo: src\components\CartDrawer.tsx
```typescript
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

```

## Archivo: src\components\FloatingButtons.tsx
```typescript
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

```

## Archivo: src\components\icons\index.tsx
```typescript
import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const WhatsAppIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const HeartIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

export const HeartFilledIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

export const ShoppingCartIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 12 15 16 10"/>
  </svg>
);

export const MedalIcon: React.FC<IconProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="9" r="5"/>
    <path d="M8.5 13.5 6 22l6-2 6 2-2.5-8.5"/>
  </svg>
);

export const PackageIcon: React.FC<IconProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="m7.5 4.27 9 5.15"/>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
    <path d="m3.3 7 8.7 5 8.7-5"/>
    <path d="M12 22V12"/>
  </svg>
);

export const EyeIcon: React.FC<IconProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export const CreditCardIcon: React.FC<IconProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect width="20" height="14" x="2" y="5" rx="2"/>
    <line x1="2" x2="22" y1="10" y2="10"/>
  </svg>
);

export const ChatBubbleIcon: React.FC<IconProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

export const GlassesIcon: React.FC<IconProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="6" cy="15" r="4"/>
    <circle cx="18" cy="15" r="4"/>
    <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/>
    <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/>
    <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/>
  </svg>
);

export const DocumentIcon: React.FC<IconProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" x2="8" y1="13" y2="13"/>
    <line x1="16" x2="8" y1="17" y2="17"/>
    <line x1="10" x2="8" y1="9" y2="9"/>
  </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className = '', size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const TikTokIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <line x1="12" x2="12" y1="5" y2="19"/>
    <line x1="5" x2="19" y1="12" y2="12"/>
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <line x1="18" x2="6" y1="6" y2="18"/>
    <line x1="6" x2="18" y1="6" y2="18"/>
  </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <line x1="5" x2="19" y1="12" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

```

## Archivo: src\components\Mascot.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';
import { useAppStore } from '@/store/appStore';
import { mockProducts } from '@/data/products';

type PhraseAction = 'whatsapp' | 'sale' | 'cart';

interface Phrase {
  text: string;
  action: PhraseAction;
}

const PHRASES: Phrase[] = [
  { text: "La verdadera elegancia es una elección. Permíteme mostrarte nuestra selección privada por WhatsApp.", action: 'whatsapp' },
  { text: "Albergamos las firmas ópticas más prestigiosas del mundo. ¿Te muestro unas piezas extraordinarias?", action: 'sale' },
  { text: "Una selección impecable en tu carrito. La visión correcta lo cambia todo. ¿Finalizamos?", action: 'cart' },
  { text: "El diseño perfecto no se fabrica, se descubre. Escríbenos para recibir asesoría personal.", action: 'whatsapp' },
  { text: "El lujo está en los detalles. Mira esta selección especial que preparamos para ti.", action: 'sale' }
];

const ProfessionalOwlSVG = ({ isSad }: { isSad: boolean }) => (
  // Hyper-Premium 3D Cute Owl: Volumetric chubby shading, massive expressive eyes, Platinum / Gold / Onyx
  <svg width="85" height="105" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]">
    <defs>
      {/* 3D Volumetric Body (Plump, snow white to soft grey) */}
      <radialGradient id="body3D" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#F3F0EA" />
        <stop offset="90%" stopColor="#D4D4D8" />
        <stop offset="100%" stopColor="#A1A1AA" />
      </radialGradient>
      
      {/* Wing Volumetric Gradient */}
      <linearGradient id="wing3D" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F4F4F5" />
        <stop offset="50%" stopColor="#E4E4E7" />
        <stop offset="100%" stopColor="#71717A" />
      </linearGradient>

      {/* Glossy Gold Eyes (The core cute feature mapping the yellow reference) */}
      <radialGradient id="cuteEyeGlow" cx="45%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="40%" stopColor="#FACC15" />
        <stop offset="80%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#854D0E" />
      </radialGradient>

      {/* Beak Gradient */}
      <linearGradient id="beakDark" x1="0%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#52525B" />
        <stop offset="100%" stopColor="#18181B" />
      </linearGradient>

      <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#D4AF37" floodOpacity="0.4"/>
      </filter>
    </defs>

    {/* Core Body Silhouette (Chubby and cute) */}
    {/* Talons */}
    <path d="M 45 115 Q 40 125 45 125 Q 50 125 48 115 Z" fill="#27272A" />
    <path d="M 75 115 Q 70 125 75 125 Q 80 125 78 115 Z" fill="#27272A" />

    {/* Body Plump Base */}
    <ellipse cx="60" cy="85" rx="35" ry="40" fill="url(#body3D)" />
    
    {/* Chest Fluff / Feather Texture scallops */}
    <g stroke="#D4D4D8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6">
      <path d="M 45 80 Q 50 85 55 80" />
      <path d="M 65 80 Q 70 85 75 80" />
      <path d="M 55 95 Q 60 100 65 95" />
    </g>

    {/* Left Folded Wing (Chubby tuck) */}
    <path d="M 25 70 C 15 85, 20 115, 35 120 C 30 100, 32 80, 25 70 Z" fill="url(#wing3D)" filter="drop-shadow(3px 0 5px rgba(0,0,0,0.15))" />

    {/* Right Folded Wing with Breathing Animation */}
    <motion.path 
      d="M 95 70 C 105 85, 100 115, 85 120 C 90 100, 88 80, 95 70 Z" 
      fill="url(#wing3D)"
      filter="drop-shadow(-3px 0 5px rgba(0,0,0,0.15))"
      animate={{ rotate: isSad ? 0 : [0, -3, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      style={{ transformOrigin: "85px 70px" }} 
    />

    {/* Massive Cute Head */}
    <ellipse cx="60" cy="45" rx="42" ry="38" fill="url(#body3D)" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.2))" />

    {/* Facial Disks (Very faint separation for the eyes) */}
    <ellipse cx="38" cy="45" rx="18" ry="22" fill="#FFFFFF" opacity="0.8" filter="blur(2px)" />
    <ellipse cx="82" cy="45" rx="18" ry="22" fill="#FFFFFF" opacity="0.8" filter="blur(2px)" />

    {/* Sharp Cute Little Beak */}
    <path d="M 60 52 L 55 65 Q 60 70 65 65 Z" fill="url(#beakDark)" filter="drop-shadow(0 4px 4px rgba(0,0,0,0.4))" />

    {/* === Massive Expressive Eyes === */}
    {/* Left Eye */}
    <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.4))">
      {/* Outer Dark rim */}
      <ellipse cx="38" cy="45" rx="16" ry="19" fill="#18181B" />
      {/* Golden Iris */}
      <ellipse cx="38" cy="45" rx="14.5" ry="17.5" fill="url(#cuteEyeGlow)" />
      {/* Massive Dark Pupil */}
      <ellipse cx="38" cy="45" rx="9" ry="11" fill="#09090B" />
      
      {/* 3D Glass Reflections (Catchlights) */}
      <circle cx="33" cy="38" r="4" fill="#FFFFFF" opacity="0.9" />
      <circle cx="43" cy="52" r="1.5" fill="#FFFFFF" opacity="0.6" />
    </g>

    {/* Right Eye with Blink */}
    <motion.g
      filter="drop-shadow(0 4px 8px rgba(0,0,0,0.4))"
      animate={{ scaleY: isSad ? 1 : [1, 0.05, 1] }}
      transition={{ repeat: Infinity, duration: 0.25, repeatDelay: 6 }}
      style={{ transformOrigin: "82px 45px" }}
    >
      <ellipse cx="82" cy="45" rx="16" ry="19" fill="#18181B" />
      <ellipse cx="82" cy="45" rx="14.5" ry="17.5" fill="url(#cuteEyeGlow)" />
      <ellipse cx="82" cy="45" rx="9" ry="11" fill="#09090B" />
      
      <circle cx="77" cy="38" r="4" fill="#FFFFFF" opacity="0.9" />
      <circle cx="87" cy="52" r="1.5" fill="#FFFFFF" opacity="0.6" />
    </motion.g>

    {/* Sad Expressions (Drooping eyelids) */}
    {isSad && (
      <>
        {/* Grey Eyelids coming down */}
        <path d="M 22 40 Q 38 48 54 40" stroke="#71717A" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
        <path d="M 66 40 Q 82 48 98 40" stroke="#71717A" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
      </>
    )}

    {/* Ultra-Premium Gold Glasses (Cute over-sized fit) */}
    <ellipse cx="38" cy="45" rx="21" ry="24" stroke="#D4AF37" strokeWidth="2.5" fill="none" filter="url(#goldGlow)" />
    <ellipse cx="82" cy="45" rx="21" ry="24" stroke="#D4AF37" strokeWidth="2.5" fill="none" filter="url(#goldGlow)" />
    
    {/* Bridge */}
    <path d="M 59 45 Q 60 40 61 45" stroke="#D4AF37" strokeWidth="3" fill="none" strokeLinecap="round" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.5))" />
    
    {/* Temples */}
    <path d="M 17 45 Q 10 40 5 35" stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M 103 45 Q 110 40 115 35" stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);

const Mascot: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSad, setIsSad] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState<Phrase>(PHRASES[0]);
  const navigate = useNavigate();

  // Stores
  const { openCart, isOpen: isCartOpen } = useCartStore();
  const { isWishlistOpen, isQuickViewOpen } = useAppStore();

  const isAnyOverlayOpen = isCartOpen || isWishlistOpen || isQuickViewOpen || document.body.style.overflow === 'hidden';

  // Retreat immediately if any overlay opens
  useEffect(() => {
    if (isAnyOverlayOpen) {
      setIsVisible(false);
      setIsSad(false);
    }
  }, [isAnyOverlayOpen]);

  useEffect(() => {
    const spawnInterval = setInterval(() => {
      // Do not popup if dialogs are open
      if (isAnyOverlayOpen) return;

      const randomPhrase = PHRASES[Math.floor(Math.random() * PHRASES.length)];
      setCurrentPhrase(randomPhrase);
      setIsSad(false);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible((prev) => {
          if (prev && !isSad) return false;
          return prev;
        });
      }, 10000); // 10 seconds of visibility before retreating
    }, 60000); // Every 60 seconds (non-intrusive)

    return () => clearInterval(spawnInterval);
  }, [isAnyOverlayOpen, isSad]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSad) return;
    
    setIsSad(true);
    
    // Execute Functional Intent
    switch (currentPhrase.action) {
      case 'whatsapp':
        setCurrentPhrase({ text: "Excelente elección. Te conectaré con un asesor de estilo ahora mismo...", action: 'whatsapp' });
        setTimeout(() => {
          window.open("https://wa.me/573026301340?text=Hola,%20me%20gustar%C3%ADa%20ver%20el%20cat%C3%A1logo%20de%20marcas%20selectas.%20Gracias!", "_blank");
        }, 1800);
        break;
      case 'sale':
        setCurrentPhrase({ text: "Acompáñame. Te llevaré a una pieza extraordinaria...", action: 'sale' });
        setTimeout(() => {
          const cheapest = mockProducts.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
          navigate(`/producto/${cheapest.id}`);
        }, 1800);
        break;
      case 'cart':
        setCurrentPhrase({ text: "Perfecto. Revisemos tu selección curada.", action: 'cart' });
        setTimeout(() => {
          openCart();
        }, 1800);
        break;
    }
    
    setTimeout(() => {
      setIsVisible(false);
    }, 3800);
  };

  return (
    <AnimatePresence>
      {isVisible && !isAnyOverlayOpen && (
        <motion.div 
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          exit={{ y: 200 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed bottom-0 left-4 lg:left-12 z-40 cursor-pointer drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
        >
          {/* Animated Stylish Speech Bubble */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -top-24 left-10 w-[240px] bg-[#09090b] text-white p-5 rounded-sm rounded-bl-none border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-xs font-serif text-center leading-relaxed tracking-wider z-20 font-light"
          >
            {currentPhrase.text}
            {/* Outer Gold Tail */}
            <div className="absolute -bottom-[11px] left-10 border-x-[10px] border-x-transparent border-t-[11px] border-t-[#D4AF37]/40"></div>
            {/* Inner Dark Tail */}
            <div className="absolute -bottom-[10px] left-10 border-x-[10px] border-x-transparent border-t-[10px] border-t-[#09090b]"></div>
          </motion.div>

          {/* Core Animation Bouncing */}
          <motion.div
            onClick={handleClick}
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10"
          >
            <ProfessionalOwlSVG isSad={isSad} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mascot;

```

## Archivo: src\components\QuickView.tsx
```typescript
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

```

## Archivo: src\components\ScrollToTop.tsx
```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

```

## Archivo: src\components\SearchModal.tsx
```typescript
import React, { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockProducts } from '@/data/products';
import type { Product } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setQuery(''), 300);
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSuggestion(null);
      return;
    }

    const lowerQuery = query.toLowerCase();
    
    // Exact/Partial matches
    const matches = mockProducts.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
    );

    if (matches.length > 0) {
      setResults(matches);
      setSuggestion(null);
    } else {
      // AI-like fallbacks
      const isCheap = ['barat', 'econom', 'promo', 'descuento', 'oferta'].some(kw => lowerQuery.includes(kw));
      const isSport = ['deport', 'correr', 'bici', 'sport'].some(kw => lowerQuery.includes(kw));
      
      if (isCheap) {
        setSuggestion("Resultados de nuestra IA: Las gafas más accesibles y en oferta");
        setResults([...mockProducts].sort((a, b) => a.price - b.price).slice(0, 4));
      } else if (isSport) {
        setSuggestion("¿Quisiste decir 'Gafas deportivas y activas'?");
        setResults(mockProducts.filter(p => p.category === 'Sport'));
      } else {
        // Did you mean?
        setSuggestion("No encontramos coincidencias exactas. Pero nuestra IA cree que amarás estos modelos:");
        setResults(mockProducts.slice(0, 4));
      }
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-2xl flex flex-col animate-in fade-in duration-300">
      <div className="w-full max-w-5xl mx-auto p-6 pt-[15vh] flex-1 flex flex-col">
        <button onClick={onClose} className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors duration-300">
          <X className="w-8 h-8" />
        </button>

        <div className="relative group">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 text-white/30 group-focus-within:text-[#D4AF37] transition-colors" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Buscar por estilo, marca o corrección..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-3xl md:text-5xl lg:text-7xl font-headline italic tracking-tighter placeholder:text-white/20 border-b-2 border-white/10 focus:border-[#D4AF37] outline-none py-6 pl-12 md:pl-20 transition-colors"
          />
        </div>

        <div className="mt-16 flex-1 overflow-y-auto pr-4 custom-scrollbar pb-10">
          {suggestion && query && (
            <p className="text-[#F3F0EA] font-accent text-sm md:text-base tracking-[0.3em] uppercase mb-10 animate-in slide-in-from-left-4">
              {suggestion}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.map((product) => (
              <div 
                key={product.id} 
                onClick={() => { onClose(); navigate(`/producto/${product.id}`); }}
                className="flex gap-6 items-center bg-[#111113] p-4 rounded-xl cursor-pointer hover:bg-[#18181b] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 group"
              >
                <img src={product.image} alt={product.name} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-700" />
                <div>
                  <h3 className="text-white font-headline text-2xl md:text-3xl group-hover:text-[#D4AF37] transition-colors">{product.name}</h3>
                  <p className="text-white/40 text-sm md:text-base mt-1 font-sans uppercase tracking-widest">{product.category}</p>
                  <p className="text-[#D4AF37] font-serif italic mt-3 md:text-lg">${product.price.toLocaleString('es-CO')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchModal;

```

## Archivo: src\components\Toasts.tsx
```typescript
import { ShoppingCartIcon, CheckIcon } from '@/components/icons';
import { useAppStore } from '@/store/appStore';

// Custom Info Icon
const InfoIconComp = ({ className = '', size = 20 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" x2="12" y1="16" y2="12"/>
    <line x1="12" x2="12.01" y1="8" y2="8"/>
  </svg>
);

const Toasts = () => {
  const { toasts, removeToast } = useAppStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-6 right-6 z-[999999] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#0e0e12] border border-white/10 px-5 py-4 min-w-[260px] flex items-center gap-3"
          style={{ animation: 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {toast.type === 'cart' && (
            <div className="w-8 h-8 flex items-center justify-center bg-[#e8193c]/10 rounded-sm text-[#e8193c]">
              <ShoppingCartIcon size={16} />
            </div>
          )}
          {toast.type === 'info' && (
            <div className="w-8 h-8 flex items-center justify-center bg-[#00d4e8]/10 rounded-sm text-[#00d4e8]">
              <InfoIconComp size={16} />
            </div>
          )}
          {toast.type === 'success' && (
            <div className="w-8 h-8 flex items-center justify-center bg-[#25D366]/10 rounded-sm text-[#25D366]">
              <CheckIcon size={16} />
            </div>
          )}
          <span className="text-sm text-white">{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="ml-auto text-white/40 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
      ))}
      
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(120%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Toasts;

```

## Archivo: src\components\ui\accordion.tsx
```typescript
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

```

## Archivo: src\components\ui\alert-dialog.tsx
```typescript
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

```

## Archivo: src\components\ui\alert.tsx
```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }

```

## Archivo: src\components\ui\aspect-ratio.tsx
```typescript
"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }

```

## Archivo: src\components\ui\avatar.tsx
```typescript
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }

```

## Archivo: src\components\ui\badge.tsx
```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

```

## Archivo: src\components\ui\breadcrumb.tsx
```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

```

## Archivo: src\components\ui\button-group.tsx
```typescript
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}

```

## Archivo: src\components\ui\button.tsx
```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

```

## Archivo: src\components\ui\calendar.tsx
```typescript
"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md"
            : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }

```

## Archivo: src\components\ui\card.tsx
```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

```

## Archivo: src\components\ui\carousel.tsx
```typescript
import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

```

## Archivo: src\components\ui\CategorySection.tsx
```typescript
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  { 
    id: 'ug-masculinas', 
    name: 'COLECCIÓN HOMBRE', 
    image: "/generated/cat_hombre.png", 
    cols: 'md:col-span-12 lg:col-span-6',
    route: '/catalogo?genero=Hombre'
  },
  { 
    id: 'ug-femeninas', 
    name: 'COLECCIÓN MUJER', 
    image: "/generated/cat_mujer.png", 
    cols: 'md:col-span-12 lg:col-span-6',
    route: '/catalogo?genero=Mujer'
  },
  { 
    id: 'ug-sol', 
    name: 'SOL', 
    image: "/generated/cat_sunwear.png", 
    cols: 'md:col-span-12 lg:col-span-4',
    route: '/catalogo?categoria=Sol'
  },
  { 
    id: 'ug-optica', 
    name: 'OPTICAL', 
    image: "/generated/cat_optical.png", 
    cols: 'md:col-span-12 lg:col-span-4',
    route: '/catalogo?categoria=Óptica'
  },
  { 
    id: 'ug-sport', 
    name: 'SPORT', 
    image: "/generated/cat_sport.png", 
    cols: 'md:col-span-12 lg:col-span-4',
    route: '/catalogo?categoria=Sport'
  }
];

const CategorySection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-bg-base relative z-20 border-t border-white/5">
      <div className="w-full">
        {/* Header Elegante */}
        <header className="max-w-[1700px] mx-auto px-6 md:px-12 py-20 pb-12 reveal-on-scroll-lookbook stagger-lkbk-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
            <div>
              <span className="font-accent text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] mb-4 block">Shop By Format</span>
              <h2 className="font-headline text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] italic tracking-tighter max-w-4xl text-white">
                Archivos de Colección
              </h2>
            </div>
          </div>
          <div className="flex justify-end">
            <p className="font-label text-xs tracking-[0.35em] uppercase text-text-secondary max-w-sm text-right leading-relaxed">
              REUNIMOS LAS MEJORES FIRMAS DEL MUNDO. UN CATÁLOGO EXTRAORDINARIO EN TUS MANOS.
            </p>
          </div>
        </header>

        {/* Massive 8K Rectangular Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 px-1 pb-1 w-full bg-[#111113]">
          
          {categories.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => navigate(cat.route)}
              className={`relative ${cat.cols} h-[65vh] md:h-[80vh] lg:h-[90vh] bg-black group cursor-pointer overflow-hidden reveal-on-scroll-lookbook transition-all duration-700`}
            >
              {/* Imagen 8K */}
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[2000ms] ease-out group-hover:scale-105"
              />

              {/* Velo Fume (Cinematic Vignette) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Box de Título (Top Left como la referencia del usuario) */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 border border-white/20 px-6 py-2 bg-black/30 backdrop-blur-md transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-[#D4AF37]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 font-label text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/90 group-hover:text-[#D4AF37] transition-colors duration-500">
                  {cat.name}
                </span>
              </div>

              {/* Hover CTA al Centro o Abajo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="overflow-hidden">
                  <span className="block font-serif text-3xl md:text-5xl lg:text-7xl italic text-transparent bg-clip-text bg-gradient-to-t from-white/0 to-white/0 group-hover:from-white/70 group-hover:to-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-[800ms] ease-[0.16,1,0.3,1]">
                    Explorar
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 text-white">
                <span className="font-accent text-[9px] uppercase tracking-widest text-[#D4AF37]">Ver Piezas</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CategorySection;

```

## Archivo: src\components\ui\chart.tsx
```typescript
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"]
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div"> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  }) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload
          .filter((item) => item.type !== "none")
          .map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="text-foreground font-mono font-medium tabular-nums">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> &
  Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean
    nameKey?: string
  }) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload
        .filter((item) => item.type !== "none")
        .map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
    </div>
  )
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}

```

## Archivo: src\components\ui\checkbox.tsx
```typescript
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }

```

## Archivo: src\components\ui\collapsible.tsx
```typescript
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

```

## Archivo: src\components\ui\command.tsx
```typescript
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("overflow-hidden p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

```

## Archivo: src\components\ui\context-menu.tsx
```typescript
"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}

```

## Archivo: src\components\ui\CustomCursor.tsx
```typescript
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorDotX = useSpring(0, { stiffness: 1000, damping: 40 });
  const cursorDotY = useSpring(0, { stiffness: 1000, damping: 40 });
  
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if desktop
    const checkIsDesktop = () => {
      setIsDesktop(typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      cursorDotX.set(e.clientX - 4);
      cursorDotY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, cursorDotX, cursorDotY]);

  if (!isDesktop) return null;

  return (
    <>
      <style>{`
        @media (min-width: 1024px) and (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-[var(--neon-pink)] drop-shadow-[0_0_8px_rgba(255,45,139,0.8)]"
        style={{ x: cursorDotX, y: cursorDotY }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9998] flex items-center justify-center backdrop-blur-sm"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'var(--neon-pink)' : 'var(--neon-teal)',
          backgroundColor: isHovering ? 'rgba(255, 45, 139, 0.1)' : 'rgba(0, 205, 184, 0.1)'
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.2 }}
      />
    </>
  );
}

```

## Archivo: src\components\ui\dialog.tsx
```typescript
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

```

## Archivo: src\components\ui\drawer.tsx
```typescript
"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

```

## Archivo: src\components\ui\dropdown-menu.tsx
```typescript
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}

```

## Archivo: src\components\ui\empty.tsx
```typescript
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}

```

## Archivo: src\components\ui\field.tsx
```typescript
import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-destructive text-sm font-normal", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}

```

## Archivo: src\components\ui\form.tsx
```typescript
"use client"

import * as React from "react"
import type * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

```

## Archivo: src\components\ui\hover-card.tsx
```typescript
"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }

```

## Archivo: src\components\ui\input-group.tsx
```typescript
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none",
        "h-9 min-w-0 has-[>textarea]:h-auto",

        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",

        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",

        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",

        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start":
          "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end":
          "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end":
          "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "text-sm shadow-none flex gap-2 items-center",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
        sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
        "icon-xs":
          "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}

```

## Archivo: src\components\ui\input-otp.tsx
```typescript
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

```

## Archivo: src\components\ui\input.tsx
```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }

```

## Archivo: src\components\ui\item.tsx
```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn("group/item-group flex flex-col", className)}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("my-0", className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50",
      },
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image:
          "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        className
      )}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        className
      )}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className
      )}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}

```

## Archivo: src\components\ui\kbd.tsx
```typescript
import { cn } from "@/lib/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }

```

## Archivo: src\components\ui\label.tsx
```typescript
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }

```

## Archivo: src\components\ui\menubar.tsx
```typescript
import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}

```

## Archivo: src\components\ui\navigation-menu.tsx
```typescript
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}

```

## Archivo: src\components\ui\pagination.tsx
```typescript
import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants, type Button } from "@/components/ui/button"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}

```

## Archivo: src\components\ui\popover.tsx
```typescript
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }

```

## Archivo: src\components\ui\ProductCard.tsx
```typescript
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

```

## Archivo: src\components\ui\progress.tsx
```typescript
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }

```

## Archivo: src\components\ui\radio-group.tsx
```typescript
"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }

```

## Archivo: src\components\ui\resizable.tsx
```typescript
import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Group>) {
  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Separator> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.Separator>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

```

## Archivo: src\components\ui\Scene3D.tsx
```typescript
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Environment, Float, Torus } from '@react-three/drei';
import * as THREE from 'three';

function GlassShape() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, state.mouse.y * 0.8, 0.05);
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, state.mouse.x * 0.8, 0.05);
    mesh.current.rotation.z += 0.001;
  });

  return (
    <Float floatIntensity={2} speed={1.5} rotationIntensity={0.5}>
      <Torus ref={mesh} args={[1.5, 0.6, 128, 128]} position={[2.5, 0, 0]}>
        <MeshTransmissionMaterial 
          backside={true}
          thickness={1.5}
          roughness={0.05}
          transmission={1}
          ior={1.15}
          chromaticAberration={0.08}
          distortion={0.3}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color="#ffffff"
        />
      </Torus>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-[15] hidden lg:block" style={{ mixBlendMode: 'screen' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#F3F0EA" />
        <directionalLight position={[-10, -10, -10]} intensity={2} color="#D4AF37" />
        <GlassShape />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

```

## Archivo: src\components\ui\scroll-area.tsx
```typescript
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }

```

## Archivo: src\components\ui\select.tsx
```typescript
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="absolute right-2 flex size-3.5 items-center justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

```

## Archivo: src\components\ui\separator.tsx
```typescript
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }

```

## Archivo: src\components\ui\sheet.tsx
```typescript
import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

```

## Archivo: src\components\ui\sidebar.tsx
```typescript
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { PanelLeftIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

```

## Archivo: src\components\ui\skeleton.tsx
```typescript
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }

```

## Archivo: src\components\ui\slider.tsx
```typescript
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }

```

## Archivo: src\components\ui\sonner.tsx
```typescript
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }

```

## Archivo: src\components\ui\spinner.tsx
```typescript
import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }

```

## Archivo: src\components\ui\switch.tsx
```typescript
"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }

```

## Archivo: src\components\ui\table.tsx
```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

```

## Archivo: src\components\ui\tabs.tsx
```typescript
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

```

## Archivo: src\components\ui\textarea.tsx
```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

```

## Archivo: src\components\ui\toggle-group.tsx
```typescript
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
  }
>({
  size: "default",
  variant: "default",
  spacing: 0,
})

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
  }) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      style={{ "--gap": spacing } as React.CSSProperties}
      className={cn(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }

```

## Archivo: src\components\ui\toggle.tsx
```typescript
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }

```

## Archivo: src\components\ui\tooltip.tsx
```typescript
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```

## Archivo: src\components\WishlistDrawer.tsx
```typescript
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

```

## Archivo: src\data\index.ts
```typescript
import type { Product, Testimonial, FAQItem, Benefit, ProcessStep, LookbookItem } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    brand: 'Ray-Ban',
    model: 'RB3025 Aviator Classic',
    price: 489000,
    image: '/product-1.jpg',
    category: 'Gafas de Sol',
    description: 'El icono que se convirtió en leyenda. Las Aviator Classic son el modelo que dio inicio a todo.',
    tags: ['nuevo']
  },
  {
    id: '2',
    brand: 'Lacoste',
    model: 'L881 Titanium',
    price: 620000,
    image: '/product-2.jpg',
    category: 'Monturas Ópticas',
    description: 'Montura de titanio ultraligera con el icónico cocodrilo francés.',
  },
  {
    id: '3',
    brand: 'Wonder',
    model: 'WG-2024 Urban',
    price: 345000,
    compareAtPrice: 420000,
    image: '/product-3.jpg',
    category: 'Gafas de Sol',
    description: 'Diseño urbano contemporáneo para el espíritu aventurero.',
    tags: ['sale']
  },
  {
    id: '4',
    brand: 'Ocho y Medio',
    model: 'OM Classic Round',
    price: 580000,
    image: '/product-4.jpg',
    category: 'Monturas Ópticas',
    description: 'Estilo vintage atemporal con acabados artesanales italianos.',
  },
  {
    id: '5',
    brand: 'Oakley',
    model: 'OO9102 Holbrook',
    price: 720000,
    image: '/product-5.jpg',
    category: 'Sport',
    description: 'Tecnología Prizm™ para una visión nítima en cualquier condición.',
  },
  {
    id: '6',
    brand: 'Carrera',
    model: 'C79 Stellaire',
    price: 890000,
    compareAtPrice: 1050000,
    image: '/product-6.jpg',
    category: 'Gafas de Sol',
    description: 'Elegancia francesa con un toque de audacia moderna.',
    tags: ['sale']
  },
  {
    id: '7',
    brand: 'Tom Ford',
    model: 'TF5634-B',
    price: 1250000,
    image: '/product-7.jpg',
    category: 'Monturas Ópticas',
    description: 'El lujo definitivo. Diseño impecable y materiales de élite.',
  },
  {
    id: '8',
    brand: 'Persol',
    model: 'PO3007V Meflecto',
    price: 980000,
    image: '/product-8.jpg',
    category: 'Monturas Ópticas',
    description: 'Artesanía italiana desde 1917. El legendario Meflecto en las varillas.',
  },
];

export const brands = [
  'Ray-Ban', 'Lacoste', 'Wonder', 'Ocho y Medio', 'Oakley', 'Carrera',
  'Tom Ford', 'Persol', 'Prada', 'Gucci', 'Versace', 'Emporio Armani',
  'Dolce & Gabbana', 'Carolina Herrera', 'Hugo Boss', 'Michael Kors'
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Santiago Morales',
    city: 'Bogotá',
    product: 'Ray-Ban RB3025',
    rating: 5,
    text: 'Llevaba meses buscando Ray-Ban Aviator originales a buen precio. En Urban Glasses los encontré con garantía de 12 meses y llegaron en menos de 24 horas. El servicio por WhatsApp es impecable — me respondieron todas las dudas en minutos.',
    initial: 'S'
  },
  {
    id: '2',
    name: 'Valentina Ospina',
    city: 'Medellín',
    product: 'Lacoste L881',
    rating: 5,
    text: 'Pedí los Lacoste con mis lentes de fórmula progresivos. La precisión fue perfecta y el empaque llegó impecable con estuche original incluido. Definitivamente Urban Glasses es mi óptica de confianza.',
    initial: 'V'
  },
  {
    id: '3',
    name: 'Carlos Pedraza',
    city: 'Cali',
    product: 'Oakley + Wonder + Ray-Ban',
    rating: 5,
    text: 'Compré 3 pares para toda la familia. El trato fue personalísimo, como si fuéramos clientes VIP. La garantía es real — reemplazaron una patilla sin costo ni discusión. Eso no pasa en cualquier lado.',
    initial: 'C'
  },
  {
    id: '4',
    name: 'Laura Jiménez',
    city: 'Bogotá Norte',
    product: 'Carrera C79',
    rating: 5,
    text: 'Pagué online un miércoles y el pedido llegó esa misma tarde. El estuche premium, el paño y el spray de limpieza muestran el nivel de detalle. Volvería a comprar sin pensarlo dos veces.',
    initial: 'L'
  },
  {
    id: '5',
    name: 'Andrés Vargas',
    city: 'Bucaramanga',
    product: 'Tom Ford TF5634',
    rating: 5,
    text: 'Para mis lentes progresivos me pidieron la fórmula completa. Notaron que una medida estaba mal y me avisaron antes de procesar. Ese nivel de cuidado vale oro. No lo consigues en ninguna óptica física.',
    initial: 'A'
  },
  {
    id: '6',
    name: 'Marcela Rueda',
    city: 'Barranquilla',
    product: 'Cliente recurrente',
    rating: 5,
    text: 'Ya son mis terceras gafas con Urban Glasses. El catálogo crece constantemente, siempre encuentro lo que busco y los precios son imbatibles para ser productos 100% originales con garantía.',
    initial: 'M'
  },
];

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: '¿Los productos de Urban Glasses son originales?',
    answer: 'Sí, sin excepción. Somos curadores y distribuidores de óptica de alta gama. Cada pieza que ofrecemos proviene de canales oficiales garantizando su procedencia e integridad. Nunca transigimos con importaciones dudosas; la calidad y el respaldo oficial son innegociables en nuestra boutique.'
  },
  {
    id: '2',
    question: '¿Cómo funciona exactamente la garantía de 12 meses?',
    answer: 'La garantía cubre defectos de fabricación: deformación del armazón, desprendimiento del recubrimiento, bisagras defectuosas, o cualquier falla que no sea causada por uso inadecuado o accidente. Si algo falla, te pedimos que nos envíes las gafas (cubrimos el flete de retorno en Bogotá), las evaluamos y las reemplazamos o reparamos sin cobro. El proceso tarda máximo 5 días hábiles.'
  },
  {
    id: '3',
    question: '¿Puedo pedir gafas con mis lentes de fórmula óptica?',
    answer: 'Sí, es uno de nuestros servicios más solicitados. Envíanos por WhatsApp tu fórmula óptica actualizada (con: esfera OD/OS, cilindro OD/OS, eje OD/OS, adición si la tienes, y distancia pupilar). Nuestro asesor óptico revisa la prescripción, confirma que sea montable en el armazón que elegiste, y te cotiza el costo de los lentes. El proceso de fabricación tarda entre 3 y 7 días hábiles adicionales.'
  },
  {
    id: '4',
    question: '¿Cuánto demora el envío a Bogotá?',
    answer: 'En Bogotá D.C. hacemos entrega el mismo día si confirmas tu pedido antes de las 2:00pm, o al día hábil siguiente si es después. El envío es completamente gratis. La entrega se hace en moto directamente a tu dirección, en un promedio de 1 a 3 horas desde que confirmamos. Recibirás un mensaje de WhatsApp cuando el mensajero salga.'
  },
  {
    id: '5',
    question: '¿Hacen envíos a todo Colombia?',
    answer: 'Sí, enviamos a todas las ciudades principales y zonas intermedias. Medellín, Cali, Barranquilla, Bucaramanga: 1 a 2 días hábiles. Ciudades intermedias y municipios: 2 a 4 días hábiles. Zonas de difícil acceso: hasta 5 días hábiles. El costo de envío nacional varía según la ciudad — te lo confirmamos por WhatsApp antes de que pagues.'
  },
  {
    id: '6',
    question: '¿Cuáles son los métodos de pago disponibles?',
    answer: 'Aceptamos todos los métodos posibles para que pagues cómodo: transferencia bancaria (Bancolombia, Davivienda, BBVA), Nequi, Daviplata, PSE, tarjeta de crédito/débito Visa o Mastercard, Efecty o Baloto para pagos en efectivo desde cualquier lugar del país, y contra entrega en Bogotá D.C. (solo pagas cuando recibes).'
  },
  {
    id: '7',
    question: '¿Puedo devolver un producto si no me gusta?',
    answer: 'Aceptamos devoluciones dentro de los 5 días calendario siguientes a la recepción si el producto presenta un defecto, si no corresponde a lo que describimos, o si llega en mal estado. No aceptamos devoluciones por cambio de opinión o gusto personal. Para iniciar una devolución, escríbenos por WhatsApp con fotos del producto.'
  },
  {
    id: '8',
    question: '¿Cómo sé qué montura me queda bien si no puedo probármela?',
    answer: 'Este es quizás el mejor servicio que ofrecemos. Envíanos por WhatsApp una foto frontal y una de perfil de tu rostro, y nuestro asesor de moda óptica te recomendará los marcos que mejor van con tu estructura facial. Tenemos entrenamiento en morfología facial y hemos asesorado a más de 500 clientes exitosamente. El servicio es completamente gratis.'
  },
  {
    id: '9',
    question: '¿Las gafas incluyen estuche y accesorios?',
    answer: 'Sí. Los pedidos con montaje de lentes incluyen estuche rígido original de la marca, paño de microfibra y spray limpiador de lentes. Los pedidos de armazones solos incluyen estuche y paño. Todo viene en el empaque original del fabricante, sellado de fábrica.'
  },
  {
    id: '10',
    question: '¿Tienen servicio de ajuste o reparación?',
    answer: 'Para clientes Urban Glasses ofrecemos ajuste básico de forma gratuita: alineación de varillas, ajuste de patillas, reemplazo de tornillos y limpieza profesional. Si tu armazón necesita una reparación mayor, la gestionamos con el servicio técnico autorizado de la marca y te cotizamos sin compromiso.'
  },
];

export const benefits: Benefit[] = [
  {
    id: '1',
    number: '01',
    color: 'gold',
    title: 'Garantía 12 Meses',
    description: 'Todo producto incluye garantía real contra defectos. Reemplazamos sin costo ni preguntas.',
    icon: 'shield'
  },
  {
    id: '2',
    number: '02',
    color: 'silver',
    title: 'Selección de Origen',
    description: 'Boutique oficial. Garantizamos la procedencia e integridad de cada montura en el envío.',
    icon: 'medal'
  },
  {
    id: '3',
    number: '03',
    color: 'gold',
    title: 'Envío Gratis Bogotá',
    description: 'Despacho el mismo día si confirmas antes de las 2pm. Entrega en 1–3 horas en moto.',
    icon: 'package'
  },
  {
    id: '4',
    number: '04',
    color: 'silver',
    title: 'Asesoría Óptica',
    description: 'Envía tu fórmula por WhatsApp. Calculamos tus lentes y cotizamos en menos de 2 horas.',
    icon: 'eye'
  },
  {
    id: '5',
    number: '05',
    color: 'gold',
    title: 'Pago Seguro',
    description: 'Nequi, Daviplata, PSE, tarjeta, transferencia o contra entrega. Tú eliges cómo pagar.',
    icon: 'credit'
  },
  {
    id: '6',
    number: '06',
    color: 'silver',
    title: 'Atención 24/7',
    description: 'WhatsApp siempre activo. Lun–Sáb con respuesta garantizada en menos de 30 minutos.',
    icon: 'chat'
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    number: '01',
    color: 'gold',
    title: 'Elige tu montura',
    description: 'Explora 650+ modelos en nuestro catálogo. Filtra por marca, usa el buscador, agrega al carrito o escríbenos por WhatsApp.',
    icon: 'glasses'
  },
  {
    id: '2',
    number: '02',
    color: 'silver',
    title: 'Comparte tu fórmula',
    description: 'Envíanos tu prescripción médica por WhatsApp (OD/OS: esfera, cilindro, eje, adición, D.P.). Cotizamos tus lentes en menos de 2 horas.',
    icon: 'document'
  },
  {
    id: '3',
    number: '03',
    color: 'gold',
    title: 'Recibe en tu puerta',
    description: 'Envío gratis en Bogotá, el mismo día si confirmas antes de las 2pm. A todo Colombia entre 1 y 5 días hábiles.',
    icon: 'home'
  },
];

export const lookbookItems: LookbookItem[] = [
  {
    id: '1',
    category: 'Colección Hombre',
    title: 'Clásicos Renovados',
    image: '/lookbook-1.jpg',
    span: 'large'
  },
  {
    id: '2',
    category: 'Colección Mujer',
    title: 'Feminidad Bold',
    image: '/lookbook-2.jpg',
    span: 'medium'
  },
  {
    id: '3',
    category: 'Gafas de Sol',
    title: 'Protección & Estilo',
    image: '/lookbook-3.jpg',
    span: 'small'
  },
  {
    id: '4',
    category: 'Monturas Ópticas',
    title: 'Claridad con Carácter',
    image: '/lookbook-4.jpg',
    span: 'small'
  },
  {
    id: '5',
    category: 'Sport & Active',
    title: 'Performance Premium',
    image: '/lookbook-5.jpg',
    span: 'small'
  },
];

export const tickerItems = [
  'Marcas 100% Originales',
  'Envío Gratis Bogotá',
  'Asesoría Óptica Personalizada',
  '12 Meses de Garantía',
  'Lentes a Tu Fórmula',
  'Distribuidores Autorizados Colombia',
  'Entrega el Mismo Día',
  '+650 Modelos',
  'Pago Seguro',
  'Contra Entrega Bogotá',
  'Atención Lun–Sáb 8am–8pm',
];

export const footerLinks = {
  store: [
    'Catálogo completo',
    'Gafas de Sol',
    'Monturas Ópticas',
    'Sport & Active',
    'Colección Hombre',
    'Colección Mujer',
    'Novedades',
    'Ofertas y Descuentos',
  ],
  info: [
    'Sobre Urban Glasses',
    'Garantía y Devoluciones',
    'Política de Envíos',
    'Preguntas Frecuentes',
    'Cuidado de tus Gafas',
    'Cómo Enviar tu Fórmula',
    'Blog de Moda Óptica',
  ],
};

export const companyInfo = {
  name: 'Urban Glasses Colombia',
  website: 'urbanglasses.co',
  email: 'info@urbanglassescol.com',
  whatsapp: '+57 302 630 1340',
  whatsappNumber: '573026301340',
  yearFounded: '2022',
  location: 'Bogotá D.C., Colombia',
  hours: 'Lunes a Domingo: 7:00 AM - 10:00 PM',
  catalogSize: '650+',
  responseTime: 'Menos de 30 minutos',
};

```

## Archivo: src\data\products.ts
```typescript
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Sol' | 'Óptica' | 'Sport';
  gender: 'Hombre' | 'Mujer' | 'Unisex';
  image: string;
}

export const mockProducts: Product[] = [
  {
    id: 'ug-001',
    name: 'Aura Titanium',
    description: 'Armazones de acetato premium diseñados obsesivamente para la perfección. Bisagras de alta relojería.',
    price: 320000,
    category: 'Óptica',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-002',
    name: 'Eclipse Noir',
    description: 'Bisel forjado en titanio aeroespacial. La reinterpretación moderna de un clásico atemporal.',
    price: 280000,
    category: 'Sol',
    gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-003',
    name: 'Velvet Havana',
    description: 'Cautivadoras piezas geométricas de acetato carey labrado a mano. Definición total para el rostro.',
    price: 250000,
    category: 'Sol',
    gender: 'Mujer',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-004',
    name: 'Lumina Crystal',
    description: 'Montura transparente para una elegancia que desafía la gravedad. Ligereza táctil y visual.',
    price: 450000,
    category: 'Óptica',
    gender: 'Mujer',
    image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-005',
    name: 'Obsidian Shield',
    description: 'La máxima expresión del minimalismo. Armazón ultra ligero en fibra mate y líneas esculpidas.',
    price: 310000,
    category: 'Sport',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-006',
    name: 'Rose Gold Aurelia',
    description: 'Perfiles finos y afilados revestidos en suave rosa dorado. Una declaración vanguardista y delicada.',
    price: 260000,
    category: 'Óptica',
    gender: 'Mujer',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-007',
    name: 'Alpine Velocity',
    description: 'Protección fotocromática envolvente de gama elite. El visor perfecto para el lujo deportivo radical.',
    price: 420000,
    category: 'Sport',
    gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-008',
    name: 'Sapphire Horizon',
    description: 'Silueta cuadrada retro fusionada con lentes celestes degradados y cristales premium.',
    price: 290000,
    category: 'Sol',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-009',
    name: 'Graphite Edge',
    description: 'Bordes pulidos a diamante en acetato color grafito. Contundente y estéticamente irreprochable.',
    price: 210000,
    category: 'Óptica',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-010',
    name: 'Tortoiseshell Amber',
    description: 'El clásico carey italiano en un volumen cat-eye acentuado que aporta sofisticación instantánea.',
    price: 335000,
    category: 'Sol',
    gender: 'Mujer',
    image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-011',
    name: 'Champagne Geometry',
    description: 'Montura geométrica bañada en tonos champagne translúcidos. Resistencia y flexibilidad total.',
    price: 245000,
    category: 'Óptica',
    gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-012',
    name: 'Ivy Browline',
    description: 'Diseño mixto con puente metálico y cejas marcadas en acetato italiano. Vintage revitalizado.',
    price: 275000,
    category: 'Sol',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-013',
    name: 'Canyon Wayfarer',
    description: 'Inyección de policarbonato ultraliviano con acabado madera clara. Robustez escultural.',
    price: 180000,
    category: 'Sol',
    gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-014',
    name: 'Silver Aviator Lite',
    description: 'El minimalismo llevado al extremo en una montura de aleación plateada de menos de 15 gramos.',
    price: 195000,
    category: 'Sol',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-015',
    name: 'Azure Runner',
    description: 'Lentes polarizados multicapa con curvatura base 8 para ajuste perfecto en actividades intensas.',
    price: 350000,
    category: 'Sport',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-016',
    name: 'Pearl Cat-Eye',
    description: 'Acetato perlado y cristales polarizados en tono arena. Radiante y excepcionalmente ligero.',
    price: 290000,
    category: 'Sol',
    gender: 'Mujer',
    image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=800&q=80'
  }
];

```

## Archivo: src\hooks\use-mobile.ts
```typescript
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

```

## Archivo: src\hooks\useScrollReveal.ts
```typescript
import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return ref;
}

export function useScrollRevealMultiple(
  selector: string,
  options?: IntersectionObserverInit
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
        ...options,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [selector, options]);
}

```

## Archivo: src\index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Urban Glasses Color System - Rediseño V2 */
    /* Fondos */
    --bg-base: #070B14; /* Deep Charcoal-Blue */
    --bg-surface: #111113;
    --bg-elevated: #18181B;
    --bg-overlay: rgba(9, 9, 11, 0.85);

    /* Heritage Luxury Primary (Champagne Gold) */
    --neon-pink: #D4AF37;
    --neon-pink-dim: rgba(212, 175, 55, 0.10);
    --neon-pink-glow: 0 0 5px rgba(212, 175, 55, 0.3), 0 0 15px rgba(212, 175, 55, 0.15), 0 0 30px rgba(212, 175, 55, 0.05);

    /* Heritage Luxury Secondary (Bone/Alabaster) */
    --neon-teal: #F3F0EA;
    --neon-teal-dim: rgba(243, 240, 234, 0.08);
    --neon-teal-glow: 0 0 5px rgba(243, 240, 234, 0.2), 0 0 15px rgba(243, 240, 234, 0.1), 0 0 30px rgba(243, 240, 234, 0.05);

    /* Metálicos (para marcos, detalles de producto) */
    --metal-silver: #C0C4CC;
    --metal-chrome: #E8ECEF;
    --metal-dark: #3D4147;

    /* Texto */
    --text-primary: #F4F4F5;
    --text-secondary: #A1A1AA;
    --text-muted: #52525B;
    --text-inverse: #09090B;

    /* Semánticos */
    --success: #22C55E;
    --warning: #F59E0B;
    --error: #EF4444;
    --info: #3B82F6;

    /* Urban Glasses Legacy Color System */
    --red: #e8193c;
    --red2: #ff2d55;
    --red-gl: rgba(232, 25, 60, 0.14);
    --cyan: #00d4e8;
    --cyan-gl: rgba(0, 212, 232, 0.10);
    --wa: #25D366;
    --gold: #c9a84c;
    
    /* Backgrounds */
    --ink: #05080F; /* Deep Charcoal-Blue */
    --ink2: #0e0e12;
    --ink3: #141418;
    --ink4: #1c1c22;
    
    /* Text & White Transparency */
    --w100: #ffffff;
    --w80: rgba(255,255,255,0.80);
    --w60: rgba(255,255,255,0.60);
    --w40: rgba(255,255,255,0.40);
    --w20: rgba(255,255,255,0.20);
    --w10: rgba(255,255,255,0.10);
    --w08: rgba(255,255,255,0.08);
    --w04: rgba(255,255,255,0.04);
    
    /* Shadows */
    --sh-red: 0 8px 32px rgba(232,25,60,0.28);
    --sh-cyan: 0 8px 32px rgba(0,212,232,0.22);
    --sh-wa: 0 8px 32px rgba(37,211,102,0.28);
    
    /* Transitions */
    --tr: 0.22s cubic-bezier(0.4,0,0.2,1);
    --tr-slow: 0.65s cubic-bezier(0.16,1,0.3,1);
    
    /* Fonts */
    --serif: 'Cormorant Garamond', Georgia, serif;
    --sans: 'DM Sans', -apple-system, sans-serif;
    
    /* shadcn overrides */
    --background: 240 7% 3%;
    --foreground: 0 0% 100%;
    --card: 240 7% 5%;
    --card-foreground: 0 0% 100%;
    --popover: 240 7% 5%;
    --popover-foreground: 0 0% 100%;
    --primary: 351 83% 50%;
    --primary-foreground: 0 0% 100%;
    --secondary: 240 7% 8%;
    --secondary-foreground: 0 0% 100%;
    --muted: 240 7% 12%;
    --muted-foreground: 0 0% 60%;
    --accent: 185 100% 45%;
    --accent-foreground: 0 0% 0%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 100% / 0.08;
    --input: 0 0% 100% / 0.08;
    --ring: 351 83% 50%;
    --radius: 2px;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--sans);
    background-color: var(--ink);
    color: var(--w80);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Typography Classes */
.font-serif {
  font-family: var(--serif);
}

.font-sans {
  font-family: var(--sans);
}

/* Heading Styles */
.heading-hero {
  font-family: var(--serif);
  font-size: clamp(72px, 10vw, 160px);
  font-weight: 300;
  font-style: italic;
  line-height: 0.95;
  letter-spacing: -0.02em;
}

.heading-section {
  font-family: var(--serif);
  font-size: clamp(34px, 3.2vw, 54px);
  font-weight: 300;
  font-style: italic;
  line-height: 1.1;
  letter-spacing: 0.02em;
}

.heading-subsection {
  font-family: var(--serif);
  font-size: clamp(28px, 2.4vw, 42px);
  font-weight: 300;
  font-style: italic;
  line-height: 1.2;
}

/* Price Style */
.price {
  font-family: var(--serif);
  font-size: 30px;
  font-weight: 300;
  font-style: italic;
}

/* Label/Badge Style */
.label-text {
  font-family: var(--sans);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
}

/* Button Text */
.button-text {
  font-family: var(--sans);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
}

/* Scroll Reveal Animations */
.rv, .rv-l, .rv-r, .rv-s {
  opacity: 0;
}

.rv {
  transform: translateY(32px);
  transition: opacity var(--tr-slow), transform var(--tr-slow);
}

.rv-l {
  transform: translateX(-32px);
  transition: opacity var(--tr-slow), transform var(--tr-slow);
}

.rv-r {
  transform: translateX(32px);
  transition: opacity var(--tr-slow), transform var(--tr-slow);
}

.rv-s {
  transform: scale(0.96);
  transition: opacity var(--tr-slow), transform var(--tr-slow);
}

.rv.in, .rv-l.in, .rv-r.in, .rv-s.in {
  opacity: 1;
  transform: none;
}

.d1 { transition-delay: 0.08s; }
.d2 { transition-delay: 0.16s; }
.d3 { transition-delay: 0.24s; }
.d4 { transition-delay: 0.32s; }
.d5 { transition-delay: 0.40s; }
.d6 { transition-delay: 0.52s; }

/* Keyframes */
@keyframes ug-rise {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes ug-zoom {
  from { transform: scale(1.08); }
  to { transform: scale(1); }
}

@keyframes ug-tick {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes ug-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.15; }
}

@keyframes ug-spin {
  to { transform: rotate(360deg); }
}

@keyframes ug-gs {
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
}

@keyframes ug-spulse {
  0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
  25% { transform: scaleY(1); transform-origin: top; opacity: 1; }
  75% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
  100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
}

@keyframes ug-bounce {
  0%, 100% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* Gradient Text */
.gradient-text {
  background: linear-gradient(90deg, var(--red), var(--cyan), var(--red));
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ug-gs 7s ease infinite alternate;
}

/* Ticker Animation */
.ticker-track {
  display: flex;
  width: max-content;
  animation: ug-tick 40s linear infinite;
}

.ticker-track:hover {
  animation-play-state: paused;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--ink2);
}

::-webkit-scrollbar-thumb {
  background: var(--w10);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--w20);
}

/* Selection */
::selection {
  background: var(--neon-pink-dim);
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 45, 139, 0.5);
}

/* --- URBAN GLASSES LOOKBOOK ANIMATIONS --- */
@layer utilities {
  .masonry-grid-lookbook {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2.5rem; /* gap-10 */
  }

  .reveal-on-scroll-lookbook {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInLookbook 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes fadeInLookbook {
    to { opacity: 1; transform: translateY(0); }
  }

  .image-parallax-lookbook-container {
    position: relative;
    overflow: hidden;
  }

  .image-parallax-lookbook-container img {
    transition: transform 2000ms cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }

  .image-parallax-lookbook-container:hover img {
    transform: scale(1.05) translateY(-5px);
    filter: drop-shadow(0 0 15px rgba(255, 45, 139, 0.6));
  }

  .stagger-lkbk-1 { animation-delay: 0.1s; }
  .stagger-lkbk-2 { animation-delay: 0.2s; }
  .stagger-lkbk-3 { animation-delay: 0.3s; }

  .bg-aurora-vibrant {
    background: #070B14;
    background-image:
      radial-gradient(at 10% 10%, rgba(212, 175, 55, 0.08) 0px, transparent 50%),
      radial-gradient(at 90% 90%, rgba(243, 240, 234, 0.05) 0px, transparent 50%);
    animation: auroraBackground 30s ease infinite;
  }

  @keyframes auroraBackground {
    0%, 100% { background-position: 0% 50%; opacity: 0.6; }
    50% { background-position: 100% 50%; opacity: 1; }
  }

  /* --- 3D SCROLL EXPERIENCE (HARDWARE ACCELERATED) --- */
  .perspective-container {
    perspective: 1000px;
    overflow-x: hidden;
    transform-style: preserve-3d;
  }
  
  .layer-back {
    transform: translateZ(-100px) scale(1.2);
    will-change: transform;
  }
  
  .layer-mid {
    transform: translateZ(-50px) scale(1.1);
    will-change: transform;
  }
  
  .layer-front {
    transform: translateZ(0);
    will-change: transform;
  }
  
  .floating-element {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0% { transform: translateY(0px) rotateX(0deg); }
    50% { transform: translateY(-15px) rotateX(2deg); }
    100% { transform: translateY(0px) rotateX(0deg); }
  }
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.animate-slide-in-right {
  animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

```

## Archivo: src\lib\utils.ts
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

## Archivo: src\main.tsx
```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## Archivo: src\pages\AboutPage.tsx
```typescript
import React, { useEffect, useState } from 'react';

const AboutPage: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  // Lógica ligera para efecto Parallax 3D al hacer scroll
  const handleScroll = () => {
    // Only set if window is defined (safe for SSR/CSR)
    if (typeof window !== 'undefined') {
      setOffsetY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-aurora-vibrant text-text-primary min-h-screen overflow-hidden perspective-container">
      
      {/* Hero Section 3D */}
      <section className="relative h-screen flex items-center justify-center px-6">
        {/* Capa de Fondo (Se mueve lento) */}
        <div 
          className="absolute inset-0 opacity-40 layer-back"
          style={{ transform: `translateY(${offsetY * 0.5}px) translateZ(-100px) scale(1.2)` }}
        >
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
        </div>

        {/* Capa de Imagen Central (Flotante) */}
        <div 
          className="relative z-10 w-full max-w-5xl aspect-[21/9] overflow-hidden floating-element shadow-[0_0_50px_rgba(0,205,184,0.15)] layer-mid"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        >
          <img 
            src="/about-hero.jpg" 
            alt="Urban Glasses Concept" 
            className="w-full h-full object-cover contrast-125"
          />
          {/* Gradiente overlay para que el texto resalte */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </div>

        {/* Capa de Texto (Frente, se mueve rápido hacia arriba) */}
        <div 
          className="absolute z-20 text-center px-4 layer-front"
          style={{ transform: `translateY(${offsetY * -0.1}px)` }}
        >
          <h1 className="font-headline text-[clamp(3rem,8vw,8rem)] italic leading-none tracking-tighter mix-blend-difference">
            Visión Sin Límites.
          </h1>
          <p className="font-label text-sm md:text-base tracking-[0.3em] uppercase mt-6 text-text-secondary">
            Nacidos en el concreto. Diseñados para el mundo.
          </p>
        </div>
      </section>

      {/* Storytelling Content - Diseño Editorial */}
      <section className="relative z-30 bg-background/90 backdrop-blur-xl py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <div className="reveal-staggered-in">
            <h2 className="font-label text-xs tracking-[0.4em] uppercase text-text-secondary mb-6 border-b border-white/10 pb-4">01. El Origen</h2>
            <p className="font-headline text-3xl md:text-5xl leading-tight text-white/90">
              Urban Glasses no es una óptica. Es un laboratorio de percepción. Surgimos de la necesidad de desafiar lo convencional, combinando la crudeza del entorno urbano colombiano con la precisión milimétrica del diseño de alta gama.
            </p>
          </div>

          <div className="reveal-staggered-in stagger-lkbk-1">
            <h2 className="font-label text-xs tracking-[0.4em] uppercase text-text-secondary mb-6 border-b border-white/10 pb-4">02. La Artesanía</h2>
            <p className="font-body text-lg md:text-xl leading-relaxed text-text-secondary font-light">
              Cada armazón que forjamos es un testamento a la durabilidad y al estilo. Rechazamos el plástico de producción masiva. Trabajamos exclusivamente con acetatos de origen responsable y aleaciones de titanio ultraligero. Nuestras lentes no solo filtran la luz; calibran tu realidad, ofreciendo un contraste superior y protección absoluta.
            </p>
          </div>

          <div className="reveal-staggered-in stagger-lkbk-2">
            <h2 className="font-label text-xs tracking-[0.4em] uppercase text-text-secondary mb-6 border-b border-white/10 pb-4">03. Nuestra Promesa</h2>
            <p className="font-body text-lg md:text-xl leading-relaxed text-text-secondary font-light">
              Llevar unas Urban Glasses es una declaración de intenciones. Es reclamar tu espacio visual. Estamos comprometidos a ofrecerte no solo un accesorio, sino una herramienta de empoderamiento personal que se siente tan bien como se ve. Tu mirada es tu manifiesto. Nosotros solo le damos la claridad que merece.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;

```

## Archivo: src\pages\CatalogPage.tsx
```typescript
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


```

## Archivo: src\pages\HomePage.tsx
```typescript
import { useEffect, useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ArrowRightIcon } from '@/components/icons';
import { useAppStore } from '@/store/appStore';
import ProductCard from '@/components/ui/ProductCard';
import { mockProducts } from '@/data/products';
import CategorySection from '@/components/ui/CategorySection';

export default function HomePage() {
  const [init, setInit] = useState(false);
  const { } = useAppStore();

  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    particles: {
      number: { value: 30 },
      color: { value: ["#D4AF37", "#F3F0EA"] },
      opacity: { value: 0.015 },
      size: { value: { min: 1, max: 2 } },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none" as const,
        random: true,
        straight: false,
        outModes: "out" as const,
      }
    },
    interactivity: { events: {} },
    detectRetina: true,
  }), []);

  const stats = [
    { value: '2022', label: 'Fundación' },
    { value: '+500', label: 'Clientes' },
    { value: '12 MESES', label: 'Garantía' },
    { value: '650+', label: 'Modelos' },
    { value: '24h', label: 'Atención' },
  ];

  const highlightedProducts = [
    { ...mockProducts[0], id: 'ug-ai-1', name: 'Aura Titanium Elite', image: '/generated/gafas_1.png', price: 450000 },
    { ...mockProducts[1], id: 'ug-ai-2', name: 'Clear Acetate Pro', image: '/generated/gafas_2.png', price: 380000 },
    { ...mockProducts[2], id: 'ug-ai-3', name: 'Onyx Gradient', image: '/generated/gafas_3.png', price: 420000 },
    { ...mockProducts[3], id: 'ug-ai-4', name: 'Sport Rose Gold', image: '/generated/gafas_4.png', price: 510000 },
    { ...mockProducts[4], id: 'ug-ai-5', name: 'Champagne Elite', image: '/generated/gafas_5.png', price: 600000 },
  ];

  return (
    <div className="min-h-screen antialiased">
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        
        {/* FASE 1: La Capa de Fondo (luminosidad y nitidez) */}
        {/* Layer 0: Imagen en su máxima luminosidad */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Urban Glasses"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

        {/* Partículas releagadas al fondo (Detrás del overlay de legibilidad, baja opacidad) */}
        {init && (
          <div className="absolute inset-0 z-[1] hidden lg:block pointer-events-none mix-blend-screen opacity-[0.015]">
            <Particles id="tsparticles" options={options} className="w-full h-full" />
          </div>
        )}

        {/* Overlay selectivo: Solo en la mitad izquierda para legibilidad del texto */}
        <div 
          className="absolute inset-0 z-[2] bg-gradient-to-r from-[rgba(9,9,11,0.85)] via-[rgba(9,9,11,0.4)] to-transparent pointer-events-none"
        />

        {/* FASE 2 y 3: Capa Editorial Principal */}
        <div className="relative z-20 w-full h-full flex flex-col justify-between max-w-[1600px] mx-auto px-6 lg:px-12 pt-10 pb-10">
          
          {/* Header Superior del Cover (Eyebrow + Nav Hints) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-between items-start w-full border-b border-white/10 pb-6 mt-20"
          >
            <div className="flex flex-col gap-1">
              <span className="font-accent text-white uppercase tracking-[0.4em] text-xs">
                Urban Glasses
              </span>
              <span className="font-serif text-white/50 italic text-sm">
                Alta Óptica Profesional
              </span>
            </div>
            
            <div className="hidden md:flex flex-col items-end gap-1 text-right">
              <span className="font-accent text-[var(--neon-teal)] uppercase tracking-[0.3em] text-[10px] font-bold">
                Colección 2026
              </span>
              <span className="font-sans text-white/40 text-[10px] uppercase tracking-widest">
                Bogotá, Colombia
              </span>
            </div>
          </motion.div>

          {/* Bloque Inferior Izquierdo: Título y Actions (Despejando el centro para la foto) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.5 }
              }
            }}
            className="max-w-[800px] flex flex-col gap-6 mt-auto pb-24 lg:pb-12"
          >
            <motion.h1 
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }} 
              className="flex flex-col items-start leading-[0.9]"
            >
              <span className="font-serif font-light text-5xl md:text-7xl lg:text-[7rem] text-white tracking-tight">
                Visión que
              </span>
              <span 
                className="font-serif font-light text-5xl md:text-7xl lg:text-[7rem] italic animate-ug-gs mt-1 relative"
                style={{
                  background: 'linear-gradient(90deg, var(--neon-teal), var(--neon-pink), var(--neon-teal))',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animationDuration: '10s'
                }}
              >
                Trasciende
              </span>
            </motion.h1>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="mt-4 flex flex-col sm:flex-row gap-6 items-start sm:items-center border-l border-white/20 pl-6 ml-2">
              <p className="font-sans font-light text-white/70 max-w-[320px] text-sm leading-relaxed">
                La óptica digital premium de Colombia. Marcas originales, lentes a la altura y entrega en tu puerta totalmente gratis.
              </p>
              
              <Link
                to="/catalogo"
                className="group flex items-center justify-center gap-4 bg-white text-black px-8 py-4 transition-all duration-500 hover:bg-[#070709] hover:text-white hover:border-white border border-transparent shadow-[0_4px_30px_rgba(255,255,255,0.15)]"
              >
                <span className="font-accent uppercase tracking-[0.2em] text-[11px] font-bold">Ver Colección</span>
                <ArrowRightIcon size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* FASE 4: Barra de Métricas (Social Proof) Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 w-full z-10 border-t border-white/10 bg-gradient-to-t from-black/80 to-[#070709]/60 backdrop-blur-xl h-auto py-8 hidden md:block"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-5 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex flex-col gap-1 items-start cursor-default"
                >
                  <span className="font-serif text-3xl xl:text-4xl italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8B1A30]">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[11px] xl:text-xs uppercase tracking-widest text-white/50">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FASE 4: Franja Lateral Derecha */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 origin-center translate-x-[40%] z-10 hidden xl:block">
          <span 
            className="block font-accent text-xs uppercase tracking-[0.4em] text-text-secondary/40 whitespace-nowrap"
            style={{ transform: 'rotate(-90deg)' }}
          >
            COL. 2026 — PREMIUM EDITION
          </span>
        </div>
        


      </section>

      {/* TENDENCIAS 2026 - EDITORIAL ASYMMETRIC GRID */}
      <section className="bg-bg-base pt-16 pb-20 relative z-20 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-10 mb-16"
          >
            <div>
              <span className="font-accent text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] mb-6 block">Top Tier</span>
              <h2 className="font-serif text-4xl lg:text-7xl text-white font-light tracking-tight">
                Los Más <span className="italic text-white/50">Deseados</span>
              </h2>
            </div>
            <Link to="/catalogo" className="hidden md:flex items-center gap-3 group text-white/60 hover:text-white transition-colors duration-500 pb-2">
              <span className="font-accent uppercase tracking-[0.2em] text-[10px]">Descubrir Colección</span>
              <ArrowRightIcon size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </motion.div>
          
          {/* Asymmetric Grid (Oliver Peoples Style) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Fila 1: 7 / 5 Split */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7 group relative"
            >
              <ProductCard product={highlightedProducts[0]} />
            </motion.div>

            <div className="md:col-span-5 flex flex-col gap-12 lg:gap-20 md:mt-32">
              {highlightedProducts.slice(1, 3).map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <ProductCard product={product} />
                  <div className="hidden xl:block absolute top-1/2 -right-12 translate-x-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-serif italic text-white/40 text-sm tracking-widest" style={{ writingMode: 'vertical-rl' }}>
                      BEST SELLER — 2026
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fila 2: 5 / 7 Split (Invirtiendo la asimetría para flujo visual) */}
            <div className="md:col-span-5 flex flex-col justify-start md:mt-20">
               <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
               >
                  <ProductCard product={highlightedProducts[3]} />
               </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7 group relative md:-mt-16"
            >
              <ProductCard product={highlightedProducts[4]} />
            </motion.div>

          </div>
          
          {/* Mobile CTA */}
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            className="md:hidden flex justify-center mt-16"
          >
            <Link to="/catalogo" className="w-full flex justify-center py-4 border border-white/20 text-xs font-accent uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors">
              Ver Catálogo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SHOP BY CATEGORY (Enriqueciendo el Home) */}
      <CategorySection />

    </div>
  );
}

```

## Archivo: src\pages\LookbookPage.tsx
```typescript
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const campaigns = [
  {
    id: 'bogota',
    title: 'Distrito Financiero',
    location: 'BOGOTÁ, D.C.',
    description: 'Entre la niebla y la arrolladora modernidad, Bogotá impone un ritmo de clase mundial. La arquitectura de cristal y ladrillo es el telón de fondo perfecto para el lujo de alta velocidad corporativo.',
    image: '/generated/campana_bogota.png',
    productId: 'ug-001',
    productName: 'Aura Titanium'
  },
  {
    id: 'cartagena',
    title: 'Ocaso Amurallado',
    location: 'CARTAGENA DE INDIAS',
    description: 'El realismo mágico despierta en las murallas bañadas por el atardecer del Caribe. Las calles coloniales vibran con un calor tropical donde la seda y la historia bailan juntas hasta el anochecer.',
    image: '/generated/campana_cartagena.png',
    productId: 'ug-010',
    productName: 'Tortoiseshell Amber'
  },
  {
    id: 'medellin',
    title: 'Primavera Única',
    location: 'MEDELLÍN, ANTIOQUIA',
    description: 'La eterna primavera flota en las brisas cálidas que suben por los cerros. Una ciudad vanguardista, repleta de terrazas exuberantes que redefinen el lujo casual y celebran la vibra cosmopolita.',
    image: '/generated/campana_medellin.png',
    productId: 'ug-008',
    productName: 'Sapphire Horizon'
  },
  {
    id: 'cocora',
    title: 'Aura Mística',
    location: 'VALLE DEL COCORA, QUINDÍO',
    description: 'Bajo la sombra de las imponentes palmas de cera, la bruma andina revela la grandeza intocable de Colombia. Un santuario natural colosal, reservado para el diseño aerodinámico extremo.',
    image: '/generated/campana_cocora.png',
    productId: 'ug-015',
    productName: 'Azure Runner'
  },
  {
    id: 'barichara',
    title: 'Herencia Colonial',
    location: 'BARICHARA, SANTANDER',
    description: 'El tiempo se detiene sobre las calles de piedra amarilla que capturan el oro del sol santandereano. Un rincón patrimonial de serenidad colonial donde el lino blanco brilla con luz propia.',
    image: '/generated/campana_barichara.png',
    productId: 'ug-012',
    productName: 'Ivy Browline'
  },
  {
    id: 'sanandres',
    title: 'Resort Elegance',
    location: 'SAN ANDRÉS ISLAS',
    description: 'El asombroso Mar de los Siete Colores deslumbrando bajo cielos despejados. Una joya caribeña de arrecifes y brisa salina que eleva el estilo de yate a un estándar impecable y deslumbrante.',
    image: '/generated/campana_sanandres.png',
    productId: 'ug-014',
    productName: 'Silver Aviator Lite'
  },
  {
    id: 'leyva',
    title: 'Gala Nocturna',
    location: 'VILLA DE LEYVA, BOYACÁ',
    description: 'La historia milenaria se erige bajo el frío dramático de la Plaza Mayor más grande del país. Noches boyacenses de gala arquitectónica, arcos antiguos y secretos custodiados por el viento andino.',
    image: '/generated/campana_leyva.png',
    productId: 'ug-016',
    productName: 'Pearl Cat-Eye'
  }
];

const LookbookPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0a0c] text-white min-h-screen">
      {/* Intro Header */}
      <div className="pt-32 pb-8 px-6 lg:px-12 max-w-[1440px] mx-auto text-center reveal-on-scroll-lookbook">
        <span className="font-accent text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] mb-4 block">Editorial Visual</span>
        <h1 className="font-serif text-5xl lg:text-7xl font-light tracking-tight mb-6">Campañas</h1>
        <p className="font-sans text-white/50 text-base max-w-2xl mx-auto">
          Un recorrido estético por siete locaciones vibrantes de Colombia, donde nuestras firmas de lujo se fusionan con la moda, la arquitectura y los paisajes naturales.
        </p>
      </div>

      {/* Editorial Campaign Sections */}
      <div className="w-full flex flex-col mt-12 pb-24">
        {campaigns.map((camp, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={camp.id} className="relative w-full min-h-[90vh] flex items-center justify-center py-20 mb-8 overflow-hidden group">
              {/* Background Ambient Glow */}
              <div className="absolute inset-0 w-full h-full select-none -z-10 bg-[#060608]">
                <img 
                  src={camp.image} 
                  alt=""
                  className="w-full h-full object-cover opacity-[0.06] group-hover:opacity-[0.12] scale-110 blur-3xl transition-opacity duration-1000"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              
              <div className={`relative z-10 max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                
                {/* Photo Gallery Side - No cropping, native ratio preservation */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-[650px] aspect-square rounded-sm group/photo reveal-on-scroll-lookbook">
                    {/* Architectural Frame Offset */}
                    <div className="absolute inset-0 border border-white/20 translate-x-4 translate-y-4 group-hover/photo:translate-x-6 group-hover/photo:translate-y-6 transition-transform duration-[800ms] pointer-events-none"></div>
                    
                    {/* The 8K Image Native Aspect Square */}
                    <div className="absolute inset-0 z-10 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)]">
                      <img 
                        src={camp.image} 
                        alt={camp.title}
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover/photo:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Typography Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center reveal-on-scroll-lookbook">
                  <div className="flex items-center gap-2 mb-6 text-[#D4AF37]">
                    <MapPin size={16} strokeWidth={1.5} />
                    <span className="font-accent text-[10px] uppercase tracking-[0.3em]">{camp.location}</span>
                  </div>
                  
                  <h2 className="font-headline text-5xl md:text-6xl lg:text-[5.5rem] italic tracking-tighter text-white mb-8 leading-[1]">
                    {camp.title}
                  </h2>
                  
                  <div className="w-16 h-[1px] bg-[#D4AF37] mb-8 shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
                  
                  <p className="font-sans text-lg text-white/70 leading-[1.8] mb-12 max-w-lg font-light">
                    {camp.description}
                  </p>
                  
                  <button 
                    onClick={() => navigate(`/producto/${camp.productId}`)}
                    className="bg-transparent border border-white/30 text-white px-8 py-5 flex items-center justify-start gap-4 font-accent text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#09090b] transition-all duration-500 w-max group/btn"
                  >
                    <span className="tracking-widest flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                      VER MODELO <span className="font-bold border-b border-[#D4AF37] group-hover/btn:border-[#09090b] leading-none pb-0.5 transition-colors">{camp.productName}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 duration-300" />
                  </button>
                </div>

              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
};

export default LookbookPage;

```

## Archivo: src\pages\ProductPage.tsx
```typescript
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

```

## Archivo: src\sections\Benefits.tsx
```typescript
import React, { useEffect, useRef } from 'react';
import { ShieldCheckIcon, MedalIcon, PackageIcon, EyeIcon, CreditCardIcon, ChatBubbleIcon } from '@/components/icons';
import { benefits } from '@/data';

const iconMap: Record<string, React.FC<{ className?: string; size?: number }>> = {
  shield: ShieldCheckIcon,
  medal: MedalIcon,
  package: PackageIcon,
  eye: EyeIcon,
  credit: CreditCardIcon,
  chat: ChatBubbleIcon,
};

const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={sectionRef} className="bg-[#070709] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }}
        >
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            const colorClass = benefit.color === 'red' ? 'text-[#e8193c]' : 'text-[#00d4e8]';
            const bgColorClass = benefit.color === 'red' ? 'bg-[#e8193c]' : 'bg-[#00d4e8]';

            return (
              <div
                key={benefit.id}
                className="rv relative bg-[#070709] p-10 lg:p-14 group hover:bg-[#0e0e12] transition-colors duration-200"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Ghost Number */}
                <span 
                  className={`absolute top-6 right-6 font-serif text-6xl lg:text-7xl italic ${colorClass} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                >
                  {benefit.number}
                </span>

                {/* Top Bar */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-px ${bgColorClass} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-ug-slow origin-left`}
                />

                {/* Icon */}
                <div className={`mb-5 ${colorClass}`}>
                  <Icon size={44} />
                </div>

                {/* Title */}
                <h3 className="text-xs font-bold uppercase tracking-[2px] text-white mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-white/40 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

```

## Archivo: src\sections\BrandsCarousel.tsx
```typescript
import React from 'react';
import { brands } from '@/data';

const BrandsCarousel: React.FC = () => {
  // Duplicate brands for seamless loop
  const allBrands = [...brands, ...brands];

  return (
    <section className="bg-[#141418] py-16 lg:py-[68px] border-y border-white/5 relative overflow-hidden">
      {/* Label */}
      <div className="text-center mb-10">
        <span className="label-text text-white/20">Distribuidores Autorizados Colombia</span>
      </div>

      {/* Fade edges */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-[120px] z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #141418, transparent)' }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-[120px] z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #141418, transparent)' }}
      />

      {/* Track */}
      <div 
        className="flex gap-0 animate-ug-tick hover:[animation-play-state:paused]"
        style={{ width: 'max-content', animationDuration: '36s' }}
      >
        {allBrands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center px-10 lg:px-14 border-r border-white/5"
          >
            <span className="font-serif text-lg lg:text-[22px] italic text-white/20 hover:text-white/60 transition-colors duration-300 cursor-default whitespace-nowrap">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsCarousel;

```

## Archivo: src\sections\Catalog.tsx
```typescript
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

```

## Archivo: src\sections\CTAWhatsApp.tsx
```typescript
import React, { useEffect, useRef } from 'react';
import { WhatsAppIcon, ArrowRightIcon } from '@/components/icons';
import { companyInfo } from '@/data';

const CTAWhatsApp: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const openWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsappNumber}?text=Hola%20Urban%20Glasses,%20quiero%20asesoría%20personalizada.`, '_blank');
  };

  const scrollToCatalog = () => {
    const element = document.getElementById('catalogo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-[#070709] py-24 lg:py-32 overflow-hidden">
      {/* Glow Effects */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse 900px 600px, rgba(232,25,60,0.06), transparent 70%)'
        }}
      />
      <div 
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse 500px 500px, rgba(0,212,232,0.04), transparent 70%)'
        }}
      />

      <div className="relative max-w-[800px] mx-auto px-6 lg:px-20 text-center">
        {/* Tag */}
        <div className="rv flex items-center justify-center gap-4 mb-8" style={{ animationDelay: '0.08s' }}>
          <div className="w-8 h-px bg-[#00d4e8]" />
          <span className="label-text text-[#00d4e8]">Asesoría Gratuita</span>
          <div className="w-8 h-px bg-[#00d4e8]" />
        </div>

        {/* H2 */}
        <h2 className="rv heading-section text-white mb-6" style={{ animationDelay: '0.16s' }}>
          Habla con un{' '}
          <em className="text-[#e8193c] not-italic font-semibold">experto</em>
        </h2>

        {/* Subtitle */}
        <p className="rv text-base text-white/60 leading-relaxed max-w-xl mx-auto mb-10" style={{ animationDelay: '0.24s' }}>
          No necesitas cita, no necesitas ir a ningún lado. Un asesor óptico real en WhatsApp, listo para ayudarte con tu elección, tu fórmula y cualquier duda.
        </p>

        {/* Buttons */}
        <div className="rv flex flex-col sm:flex-row items-center justify-center gap-4 mb-10" style={{ animationDelay: '0.32s' }}>
          <button
            onClick={openWhatsApp}
            className="group flex items-center gap-3 px-8 py-4 rounded-sm transition-all duration-200 hover:scale-[1.04]"
            style={{ 
              background: 'linear-gradient(135deg, #25D366, #1da851)',
              boxShadow: '0 8px 32px rgba(37,211,102,0.28)'
            }}
          >
            <WhatsAppIcon size={20} />
            <span className="button-text">Chatear ahora</span>
          </button>
          <button
            onClick={scrollToCatalog}
            className="flex items-center gap-3 px-8 py-4 border border-white/30 text-white rounded-sm hover:border-[#00d4e8] hover:text-[#00d4e8] transition-all duration-200"
          >
            <span className="button-text">Ver catálogo completo</span>
            <ArrowRightIcon size={14} />
          </button>
        </div>

        {/* Note */}
        <p className="rv text-xs text-white/40" style={{ animationDelay: '0.4s' }}>
          ⏱ Tiempo promedio de respuesta: menos de 30 minutos · Lun–Sáb 8:00am – 8:00pm
        </p>
      </div>
    </section>
  );
};

export default CTAWhatsApp;

```

## Archivo: src\sections\Editorial.tsx
```typescript
import React, { useEffect, useRef } from 'react';
import { ArrowRightIcon } from '@/components/icons';
import { companyInfo } from '@/data';

const Editorial: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.rv, .rv-l, .rv-r');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToCatalog = () => {
    const element = document.getElementById('catalogo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#070709]">
      <div className="grid lg:grid-cols-[55%_45%]">
        {/* Image Side */}
        <div className="rv-l relative min-h-[400px] lg:min-h-[680px] overflow-hidden group">
          <img
            src="/editorial.jpg"
            alt="Urban Glasses Studio"
            className="w-full h-full object-cover transition-transform duration-[1400ms] ease-ug-slow group-hover:scale-105"
          />
          {/* Caption */}
          <div 
            className="absolute bottom-7 left-7 px-5 py-4 backdrop-blur-md bg-black/30 border-l-[3px] border-[#e8193c]"
          >
            <span className="text-xs text-white/80">
              Urban Glasses Studio — Bogotá D.C.
            </span>
          </div>
        </div>

        {/* Text Side */}
        <div className="rv-r bg-[#0e0e12] px-8 lg:px-16 xl:px-20 py-16 lg:py-24 flex flex-col justify-center relative">
          {/* Decorative Line */}
          <div className="absolute left-0 top-24 w-[3px] h-24 bg-[#e8193c] hidden lg:block" />

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#e8193c] text-sm">—</span>
            <span className="label-text text-[#e8193c]">Nuestra Filosofía</span>
          </div>

          {/* H2 */}
          <h2 className="heading-section text-white mb-8">
            Ver bien es{' '}
            <em className="text-[#00d4e8] not-italic font-semibold">vivir mejor</em>
          </h2>

          {/* Paragraphs */}
          <p className="text-sm lg:text-base text-white/60 leading-relaxed mb-6">
            No vendemos simples gafas. Vendemos la expresión de quién eres y la claridad con la que ves el mundo. Cada montura ha sido seleccionada con un criterio único: calidad que se siente, estilo que permanece.
          </p>
          <p className="text-sm lg:text-base text-white/60 leading-relaxed mb-10">
            En Urban Glasses encontrarás desde el clásico intemporal hasta la vanguardia más audaz. Todas originales. Todas con garantía. Todas elegidas pensando en ti.
          </p>

          {/* Link */}
          <button
            onClick={scrollToCatalog}
            className="group flex items-center gap-3 text-white hover:text-[#00d4e8] transition-colors duration-200 self-start mb-12"
          >
            <span className="text-sm font-medium">Explorar catálogo</span>
            <div className="w-7 h-px bg-current group-hover:w-12 transition-all duration-300" />
            <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mini Stats */}
          <div className="flex flex-wrap gap-6 lg:gap-10">
            {[
              { value: `${companyInfo.catalogSize}`, label: 'Modelos' },
              { value: '100%', label: 'Originales' },
              { value: 'Gratis', label: 'Asesoría' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-serif text-xl lg:text-2xl italic text-white">
                  {stat.value}
                </span>
                <span className="label-text text-white/30 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editorial;

```

## Archivo: src\sections\FAQ.tsx
```typescript
import React, { useEffect, useRef, useState } from 'react';
import { PlusIcon, WhatsAppIcon } from '@/components/icons';
import { faqItems, companyInfo } from '@/data';

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.rv, .rv-l, .rv-r');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsappNumber}?text=Hola%20Urban%20Glasses,%20tengo%20una%20pregunta.`, '_blank');
  };

  return (
    <section id="faq" ref={sectionRef} className="bg-[#070709] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          {/* Sidebar */}
          <div className="rv-l lg:sticky lg:top-24 lg:self-start" style={{ animationDelay: '0.08s' }}>
            <span className="label-text text-[#e8193c] block mb-4">Preguntas Frecuentes</span>
            <h2 className="heading-section text-white mb-6">
              ¿Tienes alguna{' '}
              <em className="text-[#00d4e8] not-italic font-semibold">pregunta?</em>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed mb-8">
              Resolvemos todas las dudas antes de que compres. Si no encuentras lo que buscas, escríbenos por WhatsApp.
            </p>
            <button
              onClick={openWhatsApp}
              className="flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-sm hover:bg-[#1da851] transition-colors"
            >
              <WhatsAppIcon size={18} />
              <span className="button-text">Hacer una pregunta</span>
            </button>
          </div>

          {/* Accordion */}
          <div className="rv-r space-y-3" style={{ animationDelay: '0.16s' }}>
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="border border-white/5 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-[#141418] transition-colors"
                >
                  <span className="text-sm text-white pr-4">{item.question}</span>
                  <div 
                    className={`w-8 h-8 flex-shrink-0 flex items-center justify-center border border-white/20 rounded-sm transition-all duration-300 ${
                      openId === item.id ? 'border-[#00d4e8] text-[#00d4e8] rotate-45' : ''
                    }`}
                  >
                    <PlusIcon size={16} />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-ug-slow ${
                    openId === item.id ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-sm text-white/50 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

```

## Archivo: src\sections\Footer.tsx
```typescript
import React from 'react';
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon, PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from '@/components/icons';
import { companyInfo, footerLinks } from '@/data';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black pt-16 lg:pt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8 pb-12 lg:pb-16">
          {/* Column 1 - Brand */}
          <div>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-block mb-6">
              <span className="font-serif text-3xl italic text-white">
                Urban<span className="text-[#D4AF37]">.</span>Glasses
              </span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-8">
              La óptica digital premium de Colombia. Marcas originales, asesoría personalizada y entrega en tu puerta.
            </p>
            
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: InstagramIcon, href: 'https://www.instagram.com/urban_glasses_26/' },
                { icon: FacebookIcon, href: '#' },
                { icon: TikTokIcon, href: '#' },
                { icon: WhatsAppIcon, href: `https://wa.me/${companyInfo.whatsappNumber}` },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Store */}
          <div>
            <h4 className="label-text text-white/20 mb-6">Tienda</h4>
            <ul className="space-y-3">
              {footerLinks.store.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('catalogo')}
                    className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Info */}
          <div>
            <h4 className="label-text text-white/20 mb-6">Información</h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => link.includes('FAQ') ? scrollToSection('faq') : scrollToSection('catalogo')}
                    className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="label-text text-white/20 mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-white/10 rounded-sm text-[#D4AF37]">
                  <PhoneIcon size={14} />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">WhatsApp</span>
                  <a 
                    href={`https://wa.me/${companyInfo.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {companyInfo.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-white/10 rounded-sm text-[#D4AF37]">
                  <MailIcon size={14} />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">Email</span>
                  <a 
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-white/10 rounded-sm text-[#D4AF37]">
                  <MapPinIcon size={14} />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">Ciudad</span>
                  <span className="text-sm text-white">{companyInfo.location}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-white/10 rounded-sm text-[#D4AF37]">
                  <ClockIcon size={14} />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">Horario</span>
                  <span className="text-sm text-white">{companyInfo.hours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.04] py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Urban Glasses Colombia
          </p>
          
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {['Privacidad', 'Términos', 'Devoluciones', 'Envíos'].map((link) => (
              <button
                key={link}
                onClick={() => {
                  if (link === 'Garantía y Devoluciones' || link === 'Devoluciones') {
                    // TODO: Implementar despliegue de PDF con políticas de garantía al hacer clic
                  }
                  scrollToSection('faq');
                }}
                className="text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ug-blink" />
            <span className="text-xs text-white/20">Distribuidores Autorizados Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

## Archivo: src\sections\Header.tsx
```typescript
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

```

## Archivo: src\sections\Hero.tsx
```typescript
import React, { useEffect, useRef } from 'react';
import { WhatsAppIcon, ArrowRightIcon } from '@/components/icons';
import { companyInfo } from '@/data';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.rv, .rv-l, .rv-r');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToCatalog = () => {
    const element = document.getElementById('catalogo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsappNumber}?text=Hola%20Urban%20Glasses,%20quiero%20asesoría%20personalizada.`, '_blank');
  };

  const stats = [
    { value: companyInfo.yearFounded, label: 'Fundación' },
    { value: '+500', label: 'Clientes' },
    { value: '12M', label: 'Garantía' },
    { value: `${companyInfo.catalogSize}`, label: 'Modelos' },
    { value: '24h', label: 'Atención' },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Urban Glasses"
          className="w-full h-full object-cover animate-ug-zoom"
          style={{ animationDuration: '30s' }}
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(170deg, rgba(7,7,9,0.08) 0%, rgba(7,7,9,0.32) 42%, rgba(7,7,9,0.85) 68%, rgba(7,7,9,0.99) 100%)'
          }}
        />
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-8 lg:left-20 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />
      <div className="absolute right-8 lg:right-20 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />

      {/* Side Text */}
      <div className="absolute right-8 lg:right-20 top-1/2 -translate-y-1/2 hidden lg:block">
        <span 
          className="text-xs uppercase tracking-[4px] text-white/20 whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Col. {companyInfo.yearFounded} — Premium Edition
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-20 pb-12 lg:pb-20">
        {/* Eyebrow */}
        <div className="rv flex items-center gap-4 mb-6" style={{ animationDelay: '0.05s' }}>
          <div className="w-8 h-px bg-[#00d4e8]" />
          <span className="label-text text-[#00d4e8]">Colección {companyInfo.yearFounded}</span>
        </div>

        {/* H1 */}
        <h1 className="rv mb-8" style={{ animationDelay: '0.14s' }}>
          <span className="heading-hero text-white block">Visión que</span>
          <span className="heading-hero gradient-text block">Trasciende</span>
        </h1>

        {/* Row: Subtitle + Buttons */}
        <div className="rv flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12" style={{ animationDelay: '0.26s' }}>
          <p className="text-sm lg:text-base text-white/60 max-w-md leading-relaxed">
            La óptica digital premium de Colombia. Marcas originales, lentes a la medida y entrega en tu puerta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToCatalog}
              className="group flex items-center justify-center gap-3 bg-white text-[#070709] px-7 py-4 rounded-sm hover:bg-[#e8193c] hover:text-white transition-all duration-200"
            >
              <span className="button-text">Explorar catálogo</span>
              <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={openWhatsApp}
              className="group flex items-center justify-center gap-3 bg-transparent text-white border border-white/30 px-7 py-4 rounded-sm hover:border-[#00d4e8] hover:text-[#00d4e8] transition-all duration-200"
            >
              <WhatsAppIcon size={16} />
              <span className="button-text">Asesoría gratis</span>
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div 
          className="rv pt-8 border-t border-white/10"
          style={{ animationDelay: '0.38s' }}
        >
          <div className="flex flex-wrap gap-8 lg:gap-14">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-serif text-3xl lg:text-4xl italic text-[#e8193c]">
                  {stat.value}
                </span>
                <span className="label-text text-white/20 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 lg:right-20 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[2px] text-white/30">Scroll</span>
        <div className="w-px h-12 bg-white/10 relative overflow-hidden">
          <div 
            className="absolute w-full bg-white/40"
            style={{ 
              height: '50%',
              animation: 'ug-spulse 2s ease-in-out infinite'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

```

## Archivo: src\sections\Lookbook.tsx
```typescript
import React, { useEffect, useRef } from 'react';
import { lookbookItems } from '@/data';

const Lookbook: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.rv-s');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="lookbook" ref={sectionRef} className="bg-[#070709] py-2">
      <div className="grid grid-cols-12 gap-0.5">
        {/* Large Left */}
        <div className="rv-s col-span-12 lg:col-span-7 relative min-h-[400px] lg:min-h-[600px] overflow-hidden group" style={{ animationDelay: '0.08s' }}>
          <img
            src={lookbookItems[0].image}
            alt={lookbookItems[0].title}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-ug-slow group-hover:scale-[1.06]"
          />
          {/* Tag */}
          <div className="absolute top-5 left-5 px-3 py-1.5 border border-white/20 rounded-sm">
            <span className="label-text text-white/80">{lookbookItems[0].category}</span>
          </div>
          {/* Overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(to top, rgba(7,7,9,0.92), transparent 50%)' }}
          />
          {/* Info */}
          <div className="absolute bottom-7 left-7 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="label-text text-[#00d4e8] block mb-2">{lookbookItems[0].category}</span>
            <h3 className="font-serif text-lg lg:text-xl italic text-white">{lookbookItems[0].title}</h3>
          </div>
        </div>

        {/* Medium Right */}
        <div className="rv-s col-span-12 lg:col-span-5 relative min-h-[400px] lg:min-h-[600px] overflow-hidden group" style={{ animationDelay: '0.16s' }}>
          <img
            src={lookbookItems[1].image}
            alt={lookbookItems[1].title}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-ug-slow group-hover:scale-[1.06]"
          />
          {/* Tag */}
          <div className="absolute top-5 left-5 px-3 py-1.5 border border-white/20 rounded-sm">
            <span className="label-text text-white/80">{lookbookItems[1].category}</span>
          </div>
          {/* Overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(to top, rgba(7,7,9,0.92), transparent 50%)' }}
          />
          {/* Info */}
          <div className="absolute bottom-7 left-7 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="label-text text-[#00d4e8] block mb-2">{lookbookItems[1].category}</span>
            <h3 className="font-serif text-lg lg:text-xl italic text-white">{lookbookItems[1].title}</h3>
          </div>
        </div>

        {/* Small Items */}
        {lookbookItems.slice(2).map((item, index) => (
          <div 
            key={item.id} 
            className="rv-s col-span-12 md:col-span-6 lg:col-span-4 relative min-h-[300px] lg:min-h-[340px] overflow-hidden group"
            style={{ animationDelay: `${(index + 3) * 0.08}s` }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-ug-slow group-hover:scale-[1.06]"
            />
            {/* Tag */}
            <div className="absolute top-5 left-5 px-3 py-1.5 border border-white/20 rounded-sm">
              <span className="label-text text-white/80">{item.category}</span>
            </div>
            {/* Overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to top, rgba(7,7,9,0.92), transparent 50%)' }}
            />
            {/* Info */}
            <div className="absolute bottom-7 left-7 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="label-text text-[#00d4e8] block mb-2">{item.category}</span>
              <h3 className="font-serif text-lg italic text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lookbook;

```

## Archivo: src\sections\Newsletter.tsx
```typescript
import React, { useEffect, useRef, useState } from 'react';
import { CheckIcon } from '@/components/icons';

const Newsletter: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setIsSubmitted(true);
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#141418] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="rv flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8" style={{ animationDelay: '0.08s' }}>
          {/* Left */}
          <div>
            <h3 className="heading-subsection text-white mb-3">
              Novedades y{' '}
              <em className="text-[#00d4e8] not-italic font-semibold">descuentos exclusivos</em>
            </h3>
            <p className="text-sm text-white/40">
              Sin spam — solo lo que vale la pena. Descuentos exclusivos, lanzamientos y novedades.
            </p>
          </div>

          {/* Right - Form */}
          <div className="w-full lg:w-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="flex-1 lg:w-80 bg-[#070709] border border-white/10 border-r-0 rounded-l-sm px-5 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#e8193c] transition-colors"
                />
                <button
                  type="submit"
                  className="px-7 py-4 bg-[#e8193c] text-white rounded-r-sm hover:bg-[#ff2d55] transition-colors"
                >
                  <span className="button-text">Suscribirse</span>
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 px-6 py-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-sm">
                <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center">
                  <CheckIcon size={14} className="text-white" />
                </div>
                <span className="text-sm text-white">
                  ¡Listo! Ya eres parte de Urban Glasses.
                </span>
              </div>
            )}
            <p className="text-xs text-white/30 mt-3">
              Puedes darte de baja cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

```

## Archivo: src\sections\Process.tsx
```typescript
import React, { useEffect, useRef } from 'react';
import { GlassesIcon, DocumentIcon, HomeIcon } from '@/components/icons';
import { processSteps } from '@/data';

const iconMap: Record<string, React.FC<{ className?: string; size?: number }>> = {
  glasses: GlassesIcon,
  document: DocumentIcon,
  home: HomeIcon,
};

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="proceso" ref={sectionRef} className="bg-[#0e0e12] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="rv text-center mb-16" style={{ animationDelay: '0.08s' }}>
          <span className="label-text text-[#e8193c] block mb-4">Cómo Funciona</span>
          <h2 className="heading-section text-white">
            Tu nueva visión en{' '}
            <em className="text-[#00d4e8] not-italic font-semibold">3 pasos</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const colorClass = step.color === 'red' ? 'text-[#e8193c] border-[#e8193c]' : 
                              step.color === 'cyan' ? 'text-[#00d4e8] border-[#00d4e8]' :
                              'text-[#c9a84c] border-[#c9a84c]';
            const bgColorClass = step.color === 'red' ? 'bg-[#e8193c]/5' : 
                                 step.color === 'cyan' ? 'bg-[#00d4e8]/5' :
                                 'bg-[#c9a84c]/5';

            return (
              <div
                key={step.id}
                className="rv relative text-center"
                style={{ animationDelay: `${(index + 1) * 0.16}s` }}
              >
                {/* Ghost Number */}
                <span className="absolute -top-4 right-0 lg:right-8 font-serif text-7xl lg:text-[88px] italic text-white opacity-[0.04]">
                  {step.number}
                </span>

                {/* Icon Circle */}
                <div 
                  className={`w-[72px] h-[72px] mx-auto mb-6 rounded-full border ${colorClass} ${bgColorClass} flex items-center justify-center`}
                >
                  <Icon size={32} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl lg:text-2xl italic text-white mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/40 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;

```

## Archivo: src\sections\Testimonials.tsx
```typescript
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';
import { testimonials } from '@/data';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentPage((prev) => {
        const maxPage = Math.ceil(testimonials.length / itemsPerView) - 1;
        return prev >= maxPage ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, itemsPerView]);

  const goToPage = useCallback((page: number) => {
    const maxPage = Math.ceil(testimonials.length / itemsPerView) - 1;
    setCurrentPage(Math.max(0, Math.min(page, maxPage)));
  }, [itemsPerView]);

  const totalPages = Math.ceil(testimonials.length / itemsPerView);

  return (
    <section id="testimonios" ref={sectionRef} className="bg-[#070709] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="rv flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12" style={{ animationDelay: '0.08s' }}>
          <div>
            <span className="label-text text-[#e8193c] block mb-4">Testimonios</span>
            <h2 className="heading-section text-white">
              Lo que dicen nuestros{' '}
              <em className="text-[#00d4e8] not-italic font-semibold">clientes</em>
            </h2>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-sm hover:border-[#e8193c] hover:text-[#e8193c] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeftIcon size={20} />
            </button>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage >= totalPages - 1}
              className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-sm hover:border-[#e8193c] hover:text-[#e8193c] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          className="rv overflow-hidden"
          style={{ animationDelay: '0.16s' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-ug-slow"
            style={{ transform: `translateX(-${currentPage * (100 / itemsPerView)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-[#141418] border border-white/5 p-8 h-full relative">
                  {/* Quote */}
                  <span className="absolute top-4 right-4 font-serif text-8xl italic text-white opacity-[0.04]">
                    "
                  </span>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} size={14} className="text-[#c9a84c]" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-white/60 leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#e8193c]/10 flex items-center justify-center border border-[#e8193c]/20">
                      <span className="font-serif text-lg italic text-[#e8193c]">
                        {testimonial.initial}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">{testimonial.name}</p>
                      <p className="text-xs text-white/40">
                        {testimonial.city} · {testimonial.product}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="rv flex justify-center gap-2 mt-8" style={{ animationDelay: '0.24s' }}>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`h-[3px] transition-all duration-300 ${
                i === currentPage ? 'w-11 bg-[#e8193c]' : 'w-6 bg-white/10 hover:bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

```

## Archivo: src\sections\Ticker.tsx
```typescript
import React from 'react';
import { tickerItems } from '@/data';

const Ticker: React.FC = () => {
  // Duplicate items for seamless loop
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <section className="bg-[#e8193c] py-4 overflow-hidden">
      <div className="ticker-track hover:[animation-play-state:paused]">
        {allItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="font-serif text-base lg:text-lg italic text-white whitespace-nowrap px-4">
              {item}
            </span>
            <span className="text-white/50 px-2">·</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Ticker;

```

## Archivo: src\store\appStore.ts
```typescript
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

```

## Archivo: src\store\cartStore.ts
```typescript
import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  cartTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (newItem) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === newItem.id);
      if (existingItem) {
        return { items: state.items.map((i) => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i), isOpen: true }; // Open cart on existing
      }
      return { items: [...state.items, { ...newItem, quantity: 1 }], isOpen: true }; // Abre el carrito al añadir
    });
  },
  removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  updateQuantity: (id, quantity) => set((state) => ({
    items: quantity === 0 ? state.items.filter((i) => i.id !== id) : state.items.map((i) => i.id === id ? { ...i, quantity } : i)
  })),
  cartTotal: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
}));

```

## Archivo: src\types\index.ts
```typescript
export interface Product {
  id: string;
  brand: string;
  model: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  category: string;
  description?: string;
  tags?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface WishlistItem extends Product {}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  product: string;
  rating: number;
  text: string;
  initial: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Benefit {
  id: string;
  number: string;
  color: 'gold' | 'silver';
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  color: 'gold' | 'silver';
  title: string;
  description: string;
  icon: string;
}

export interface LookbookItem {
  id: string;
  category: string;
  title: string;
  image: string;
  span: 'large' | 'medium' | 'small';
}

```

## Archivo: tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', '-apple-system', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Urban Glasses Custom Colors
        ug: {
          red: '#e8193c',
          red2: '#ff2d55',
          cyan: '#00d4e8',
          wa: '#25D366',
          gold: '#c9a84c',
          ink: '#070709',
          ink2: '#0e0e12',
          ink3: '#141418',
          ink4: '#1c1c22',
        },
        // V2 Design System Tokens
        'bg-base': 'var(--bg-base)',
        'bg-surface': 'var(--bg-surface)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-overlay': 'var(--bg-overlay)',
        'neon-pink': 'var(--neon-pink)',
        'neon-pink-dim': 'var(--neon-pink-dim)',
        'neon-teal': 'var(--neon-teal)',
        'neon-teal-dim': 'var(--neon-teal-dim)',
        'metal-silver': 'var(--metal-silver)',
        'metal-chrome': 'var(--metal-chrome)',
        'metal-dark': 'var(--metal-dark)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-inverse': 'var(--text-inverse)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
        info: 'var(--info)',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'red': '0 8px 32px rgba(232,25,60,0.28)',
        'cyan': '0 8px 32px rgba(0,212,232,0.22)',
        'wa': '0 8px 32px rgba(37,211,102,0.28)',
        'neon-pink': 'var(--neon-pink-glow)',
        'neon-teal': 'var(--neon-teal-glow)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "ug-tick": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "ug-zoom": {
          from: { transform: "scale(1.08)" },
          to: { transform: "scale(1)" },
        },
        "ug-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.15" },
        },
        "ug-spulse": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top", opacity: "0" },
          "25%": { transform: "scaleY(1)", transformOrigin: "top", opacity: "1" },
          "75%": { transform: "scaleY(1)", transformOrigin: "bottom", opacity: "1" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom", opacity: "0" },
        },
        "ug-gs": {
          from: { backgroundPosition: "0% 50%" },
          to: { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "ug-tick": "ug-tick 40s linear infinite",
        "ug-zoom": "ug-zoom 30s ease-out both",
        "ug-blink": "ug-blink 2s ease-in-out infinite",
        "ug-spulse": "ug-spulse 2s ease-in-out infinite",
        "ug-gs": "ug-gs 7s ease infinite alternate",
      },
      transitionTimingFunction: {
        'ug': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ug-slow': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

```

## Archivo: tsconfig.app.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}

```

## Archivo: tsconfig.json
```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Archivo: tsconfig.node.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}

```

## Archivo: vite.config.ts
```typescript
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

```

