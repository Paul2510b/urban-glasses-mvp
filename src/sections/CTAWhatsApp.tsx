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
