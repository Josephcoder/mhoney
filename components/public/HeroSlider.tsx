'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

/* ------------------------------- Hero Slider ------------------------------ */
export default function HeroSlider({
  slides,
}: {
  slides?: { title: string; subtitle?: string; image: string }[];
}) {
  const defaultSlides = [
    {
      title: 'Mountain Honey',
      subtitle: 'Pure & sustainably harvested',
      image: '/images/big-pic.png',
    },
    {
      title: 'Organic Quality',
      subtitle: 'From hive to jar',
      image: '/images/main-image.webp',
    },
  ];
  const items = slides ?? defaultSlides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <section className="relative h-[750px] w-full overflow-hidden">
      {items.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1200 ${i === index ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
          aria-hidden={i === index ? 'false' : 'true'}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="max-w-3xl text-center text-white">
              <h1 className="text-3xl font-bold drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
                {s.title}
              </h1>
              <p className="mt-4 text-base drop-shadow sm:text-lg md:text-xl">
                {s.subtitle}
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="#shop"
                  className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-600"
                >
                  Shop Now
                </a>
                <a
                  href="#about"
                  className="rounded-lg border border-white/30 px-6 py-3 text-white"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 w-8 rounded-full ${i === index ? 'bg-yellow-500' : 'bg-white/60'}`}
          />
        ))}
      </div>
    </section>
  );
}
