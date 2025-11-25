'use client';

import CategoryCard from '@/components/ui/CategoryCard';

const categories = [
  {
    title: 'Honey',
    description: 'Pure, natural honey harvested from organic sources.',
    img: '/images/big-pic.png',
    link: '/products?category=honey',
  },
  {
    title: 'Bee Pollen',
    description: 'Nutrient-rich pollen for a healthy lifestyle.',
    img: '/images/pollen.avif',
    link: '/products?category=pollen',
  },
  {
    title: 'Honeycomb',
    description: 'Premium honeycomb for gifts or personal use.',
    img: '/images/honeycomb.avif',
    link: '/products?category=honeycomb',
  },
  {
    title: 'Beeswax',
    description: 'Natural beeswax for candles and cosmetics.',
    img: '/images/beeswax.avif',
    link: '/products?category=beeswax',
  },
];

export default function CategoriesPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Our Categories
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore our wide range of natural products, carefully sourced and
            crafted to perfection.
          </p>
        </header>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => (
            <CategoryCard
              key={cat.title}
              title={cat.title}
              description={cat.description}
              img={cat.img}
              link={cat.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
