'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type CategoryCardProps = {
  title: string;
  description: string;
  img: string;
  link?: string;
  index?: number;
};

export default function CategoryCard({
  title,
  description,
  img,
  link,
  index = 0,
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>

        {/* Link styled as button */}
        {link && (
          <a
            href={link}
            className="block w-full rounded-lg bg-yellow-500 py-2 text-center text-black transition hover:bg-yellow-600"
          >
            View Products
          </a>
        )}
      </div>
    </motion.div>
  );
}
