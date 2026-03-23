import React from 'react';
import { brands } from '@/data';

const BrandsCarousel: React.FC = () => {
  // Duplicate brands for seamless loop
  const allBrands = [...brands, ...brands];

  return (
    <section className="bg-[#141418] py-16 lg:py-[68px] border-y border-white/5 relative overflow-hidden">
      {/* Label */}
      <div className="text-center mb-10">
        <span className="label-text text-white/20">Distribuidores Autorizados Colombia</span>
      </div>

      {/* Fade edges */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-[120px] z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #141418, transparent)' }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-[120px] z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #141418, transparent)' }}
      />

      {/* Track */}
      <div 
        className="flex gap-0 animate-ug-tick hover:[animation-play-state:paused]"
        style={{ width: 'max-content', animationDuration: '36s' }}
      >
        {allBrands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center px-10 lg:px-14 border-r border-white/5"
          >
            <span className="font-serif text-lg lg:text-[22px] italic text-white/20 hover:text-white/60 transition-colors duration-300 cursor-default whitespace-nowrap">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsCarousel;
