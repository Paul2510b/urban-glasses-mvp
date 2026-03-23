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
