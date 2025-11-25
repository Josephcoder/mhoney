'use client';

import { motion } from 'framer-motion';

type StatsCardProps = {
  number: string;
  label: string;
  index?: number;
};

export default function StatsCard({
  number,
  label,
  index = 0,
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg bg-yellow-100 p-6 text-center"
    >
      <p className="text-3xl font-bold text-yellow-700">{number}</p>
      <p className="mt-1 text-gray-600">{label}</p>
    </motion.div>
  );
}
