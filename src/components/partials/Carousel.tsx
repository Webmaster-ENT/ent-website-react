'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { AboutCard } from './AboutSection';


interface CarouselProps {
  cards: AboutCard[];
}

export default function Carousel({ cards }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = cards.length;
  const maxVisibility = 2; // 1 kiri, 1 kanan, 1 aktif

  const loopIndex = (index: number) => {
    return (index + count) % count;
  };

  const goLeft = () => {
    setActiveIndex((prev) => loopIndex(prev - 1));
  };

  const goRight = () => {
    setActiveIndex((prev) => loopIndex(prev + 1));
  };

  return (
    <div className="relative w-full px-5 py-12 rounded-2xl mx-auto max-w-sm bg-[#134679] h-[650px] overflow-hidden perspective-[1000px] flex flex-col items-center justify-start md:hidden mt-10">
      {/* Button kiri */}
      <button
        onClick={goLeft}
        className="absolute left-0 top-1/3 z-20 text-white"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Cards */}
      {cards.map((card, i) => {
        const offset = loopIndex(i - activeIndex);
        const signedOffset = ((i - activeIndex + count) % count) > count / 2 ? offset - count : offset;
        const absOffset = Math.abs(signedOffset);

        if (absOffset > maxVisibility) return null;

        return (
          <div
            key={card.id}
            className="absolute transition-all duration-300 ease-out"
            style={{
              transform: `
                rotateY(${signedOffset * -15}deg)
                rotateZ(${signedOffset * -20}deg)
                scale(${1 - absOffset * 0.15})
                translateX(${signedOffset * -95}px)
                translateZ(${absOffset * 100}px)
              `,
              opacity: 1 - absOffset * 0.4,
              zIndex: maxVisibility - absOffset, // ❗ zIndex untuk layering
            }}
          >
            <div className="relative group w-[260px] h-[307px] rounded-3xl overflow-hidden">
              <img
                src={card.photo}
                alt={card.alt}
                width={260}
                height={307}
                className="w-full h-full object-cover select-none rounded-3xl"
              />
              <div className="text-white text-xl select-none w-full h-full bg-gradient-to-t from-black/85 to-transparent flex flex-col justify-end gap-3 absolute inset-0 px-5 py-5">
                <p className="font-medium text-lg">{card.description}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Button kanan */}
      <button
        onClick={goRight}
        className="absolute right-0 top-1/3 z-20 text-white"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* text */}
      <main className='absolute left-3 right-3 bottom-12 text-white text-2xl font-medium space-y-5'>
        <h1>Somebody Said <br /> &quot;Tak Kenal Maka Tak Sayang&quot;</h1>
        <p className='text-sm font-light'>So Let&apos;s Get To Know About <span className='font-semibold'>ENT</span></p>
      </main>
    </div>
  );
}