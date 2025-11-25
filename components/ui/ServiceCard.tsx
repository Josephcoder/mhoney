'use client';

import { motion } from 'framer-motion';

type ServiceCardProps = {
  title: string;
  text: string;
  index?: number; // for animation delay
};

export default function ServiceCard({
  title,
  text,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="rounded-lg bg-white p-6 shadow transition hover:shadow-lg"
    >
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
}
