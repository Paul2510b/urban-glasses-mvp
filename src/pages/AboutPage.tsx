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
