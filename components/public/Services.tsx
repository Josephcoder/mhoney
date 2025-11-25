'use client';

import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';

export default function Services() {
  const items = [
    {
      title: 'Honey Production',
      text: 'From hive to jar, the highest quality.',
    },
    { title: 'Sustainable Farming', text: 'Protecting bees and nature.' },
    { title: 'Fast Delivery', text: 'Tracked shipments, careful packaging.' },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl md:text-5xl">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <ServiceCard key={i} title={s.title} text={s.text} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
