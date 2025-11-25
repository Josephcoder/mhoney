'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type TeamCardProps = {
  name: string;
  role: string;
  img: string;
  index?: number;
};

export default function TeamCard({
  name,
  role,
  img,
  index = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg bg-white p-6 text-center shadow hover:shadow-xl"
    >
      <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </motion.div>
  );
}
