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
