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
