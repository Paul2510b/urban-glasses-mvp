import React, { useEffect, useRef } from 'react';
import { ShieldCheckIcon, MedalIcon, PackageIcon, EyeIcon, CreditCardIcon, ChatBubbleIcon } from '@/components/icons';
import { benefits } from '@/data';

const iconMap: Record<string, React.FC<{ className?: string; size?: number }>> = {
  shield: ShieldCheckIcon,
  medal: MedalIcon,
  package: PackageIcon,
  eye: EyeIcon,
  credit: CreditCardIcon,
  chat: ChatBubbleIcon,
};

const Benefits: React.FC = () => {
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
    <section ref={sectionRef} className="bg-[#070709] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }}
        >
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            const colorClass = benefit.color === 'red' ? 'text-[#e8193c]' : 'text-[#00d4e8]';
            const bgColorClass = benefit.color === 'red' ? 'bg-[#e8193c]' : 'bg-[#00d4e8]';

            return (
              <div
                key={benefit.id}
                className="rv relative bg-[#070709] p-10 lg:p-14 group hover:bg-[#0e0e12] transition-colors duration-200"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Ghost Number */}
                <span 
                  className={`absolute top-6 right-6 font-serif text-6xl lg:text-7xl italic ${colorClass} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                >
                  {benefit.number}
                </span>

                {/* Top Bar */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-px ${bgColorClass} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-ug-slow origin-left`}
                />

                {/* Icon */}
                <div className={`mb-5 ${colorClass}`}>
                  <Icon size={44} />
                </div>

                {/* Title */}
                <h3 className="text-xs font-bold uppercase tracking-[2px] text-white mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-white/40 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
