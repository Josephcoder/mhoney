'use client';

import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Amina',
      text: 'Amazing honey — I can taste the mountains!',
      stars: 5,
    },
    { name: 'John', text: 'Fast delivery and great packaging.', stars: 4 },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold">What Customers Say</h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <TestimonialCard
              key={i}
              name={r.name}
              text={r.text}
              stars={r.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
