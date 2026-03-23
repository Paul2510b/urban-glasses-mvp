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
