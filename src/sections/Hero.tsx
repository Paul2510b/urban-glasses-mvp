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
