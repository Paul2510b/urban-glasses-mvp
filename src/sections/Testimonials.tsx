import React, { useEffect, useRef, useState, useCallback } from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';
import { testimonials } from '@/data';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentPage((prev) => {
        const maxPage = Math.ceil(testimonials.length / itemsPerView) - 1;
        return prev >= maxPage ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, itemsPerView]);

  const goToPage = useCallback((page: number) => {
    const maxPage = Math.ceil(testimonials.length / itemsPerView) - 1;
    setCurrentPage(Math.max(0, Math.min(page, maxPage)));
  }, [itemsPerView]);

  const totalPages = Math.ceil(testimonials.length / itemsPerView);

  return (
    <section id="testimonios" ref={sectionRef} className="bg-[#070709] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="rv flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12" style={{ animationDelay: '0.08s' }}>
          <div>
            <span className="label-text text-[#e8193c] block mb-4">Testimonios</span>
            <h2 className="heading-section text-white">
              Lo que dicen nuestros{' '}
              <em className="text-[#00d4e8] not-italic font-semibold">clientes</em>
            </h2>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-sm hover:border-[#e8193c] hover:text-[#e8193c] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeftIcon size={20} />
            </button>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage >= totalPages - 1}
              className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-sm hover:border-[#e8193c] hover:text-[#e8193c] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          className="rv overflow-hidden"
          style={{ animationDelay: '0.16s' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-ug-slow"
            style={{ transform: `translateX(-${currentPage * (100 / itemsPerView)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-[#141418] border border-white/5 p-8 h-full relative">
                  {/* Quote */}
                  <span className="absolute top-4 right-4 font-serif text-8xl italic text-white opacity-[0.04]">
                    "
                  </span>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} size={14} className="text-[#c9a84c]" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-white/60 leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#e8193c]/10 flex items-center justify-center border border-[#e8193c]/20">
                      <span className="font-serif text-lg italic text-[#e8193c]">
                        {testimonial.initial}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">{testimonial.name}</p>
                      <p className="text-xs text-white/40">
                        {testimonial.city} · {testimonial.product}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="rv flex justify-center gap-2 mt-8" style={{ animationDelay: '0.24s' }}>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`h-[3px] transition-all duration-300 ${
                i === currentPage ? 'w-11 bg-[#e8193c]' : 'w-6 bg-white/10 hover:bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
