'use client';

import { motion } from 'framer-motion';

type ServiceCardProps = {
  name: string;
  stars: number;
  text: string;
  index?: number; // for animation delay
};

export default function TestimonialCard({
  name,
  stars,
  text,
  index = 0,
}: ServiceCardProps) {
  return (
    <blockquote key={index} className="rounded-lg bg-gray-50 p-6 shadow">
      <p className="mb-4 text-gray-700">“{text}”</p>
      <footer className="text-sm font-semibold">
        — {name} ·{' '}
        {Array.from({ length: stars }).map((_, k) => (
          <span key={k}>⭐</span>
        ))}
      </footer>
    </blockquote>
  );
}
