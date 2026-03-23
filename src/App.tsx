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
