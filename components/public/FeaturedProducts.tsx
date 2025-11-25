'use client';

import ProductCard from '../ui/ProductCard';

const products = [
  {
    id: 'h1',
    name: 'Pure Mountain Honey',
    price: '$12.00',
    img: '/images/big-pic.png',
  },
  {
    id: 'h2',
    name: 'Organic Bee Pollen',
    price: '$18.00',
    img: '/images/big-pic.png',
  },
  {
    id: 'h3',
    name: 'Honeycomb Premium',
    price: '$25.00',
    img: '/images/big-pic.png',
  },
];

export default function FeaturedProducts() {
  return (
    <section id="shop" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              img={p.img}
              index={i}
            ></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
}
