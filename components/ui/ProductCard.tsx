'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';

type ProductCardProps = {
  id: string | number;
  name: string;
  price: string | number;
  img: string;
  index?: number;
  children?: React.ReactNode; // optional description or extra content
};

export default function ProductCard({
  id,
  name,
  price,
  img,
  index = 0,
  children,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col rounded-lg bg-white p-6 shadow transition hover:shadow-xl"
    >
      <div className="relative mb-4 h-56 w-full overflow-hidden rounded-lg">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>

      <h3 className="mb-2 text-xl font-semibold">{name}</h3>
      <p className="text-lg font-bold text-yellow-700">{price}</p>

      {/* Optional children */}
      {children && <div className="mt-2">{children}</div>}

      {/* Actions */}
      <div className="mt-auto flex gap-3">
        <Button className="flex-1 bg-yellow-500 text-black hover:bg-yellow-600">
          Add to Cart
        </Button>
        <a
          href={`/product/${id}`}
          className="rounded-lg border px-4 py-2 text-center transition hover:bg-gray-100"
        >
          View
        </a>
      </div>
    </motion.article>
  );
}
