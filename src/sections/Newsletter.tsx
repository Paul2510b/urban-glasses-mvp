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
