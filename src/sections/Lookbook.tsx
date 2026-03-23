import React, { useEffect, useRef } from 'react';
import { lookbookItems } from '@/data';

const Lookbook: React.FC = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.rv-s');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="lookbook" ref={sectionRef} className="bg-[#070709] py-2">
      <div className="grid grid-cols-12 gap-0.5">
        {/* Large Left */}
        <div className="rv-s col-span-12 lg:col-span-7 relative min-h-[400px] lg:min-h-[600px] overflow-hidden group" style={{ animationDelay: '0.08s' }}>
          <img
            src={lookbookItems[0].image}
            alt={lookbookItems[0].title}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-ug-slow group-hover:scale-[1.06]"
          />
          {/* Tag */}
          <div className="absolute top-5 left-5 px-3 py-1.5 border border-white/20 rounded-sm">
            <span className="label-text text-white/80">{lookbookItems[0].category}</span>
          </div>
          {/* Overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(to top, rgba(7,7,9,0.92), transparent 50%)' }}
          />
          {/* Info */}
          <div className="absolute bottom-7 left-7 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="label-text text-[#00d4e8] block mb-2">{lookbookItems[0].category}</span>
            <h3 className="font-serif text-lg lg:text-xl italic text-white">{lookbookItems[0].title}</h3>
          </div>
        </div>

        {/* Medium Right */}
        <div className="rv-s col-span-12 lg:col-span-5 relative min-h-[400px] lg:min-h-[600px] overflow-hidden group" style={{ animationDelay: '0.16s' }}>
          <img
            src={lookbookItems[1].image}
            alt={lookbookItems[1].title}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-ug-slow group-hover:scale-[1.06]"
          />
          {/* Tag */}
          <div className="absolute top-5 left-5 px-3 py-1.5 border border-white/20 rounded-sm">
            <span className="label-text text-white/80">{lookbookItems[1].category}</span>
          </div>
          {/* Overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(to top, rgba(7,7,9,0.92), transparent 50%)' }}
          />
          {/* Info */}
          <div className="absolute bottom-7 left-7 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="label-text text-[#00d4e8] block mb-2">{lookbookItems[1].category}</span>
            <h3 className="font-serif text-lg lg:text-xl italic text-white">{lookbookItems[1].title}</h3>
          </div>
        </div>

        {/* Small Items */}
        {lookbookItems.slice(2).map((item, index) => (
          <div 
            key={item.id} 
            className="rv-s col-span-12 md:col-span-6 lg:col-span-4 relative min-h-[300px] lg:min-h-[340px] overflow-hidden group"
            style={{ animationDelay: `${(index + 3) * 0.08}s` }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-ug-slow group-hover:scale-[1.06]"
            />
            {/* Tag */}
            <div className="absolute top-5 left-5 px-3 py-1.5 border border-white/20 rounded-sm">
              <span className="label-text text-white/80">{item.category}</span>
            </div>
            {/* Overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to top, rgba(7,7,9,0.92), transparent 50%)' }}
            />
            {/* Info */}
            <div className="absolute bottom-7 left-7 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="label-text text-[#00d4e8] block mb-2">{item.category}</span>
              <h3 className="font-serif text-lg italic text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lookbook;
