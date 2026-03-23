import React from 'react';
import { tickerItems } from '@/data';

const Ticker: React.FC = () => {
  // Duplicate items for seamless loop
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <section className="bg-[#e8193c] py-4 overflow-hidden">
      <div className="ticker-track hover:[animation-play-state:paused]">
        {allItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="font-serif text-base lg:text-lg italic text-white whitespace-nowrap px-4">
              {item}
            </span>
            <span className="text-white/50 px-2">·</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Ticker;
