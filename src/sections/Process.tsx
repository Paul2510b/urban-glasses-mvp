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
