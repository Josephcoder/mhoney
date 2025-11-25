'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';

type Product = {
  id: string;
  name: string;
  price: string;
  img: string;
  description: string;
  category?: string;
  featured?: boolean;
};

const allProducts: Product[] = [
  {
    id: 'h1',
    name: 'Pure Mountain Honey',
    price: '$12.00',
    img: '/images/big-pic.png',
    description:
      'Rich, natural honey harvested from pristine mountain forests.',
    category: 'Honey',
    featured: true,
  },
  {
    id: 'h2',
    name: 'Organic Bee Pollen',
    price: '$18.00',
    img: '/images/big-pic.png',
    description: 'Nutrient-packed pollen for a healthy lifestyle.',
    category: 'Supplements',
  },
  {
    id: 'h3',
    name: 'Honeycomb Premium',
    price: '$25.00',
    img: '/images/big-pic.png',
    description: 'Premium honeycomb, perfect as a natural treat or gift.',
    category: 'Honey',
    featured: true,
  },
  // Add more products here...
];

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'asc' | 'desc'>('asc');

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        const priceA = Number(a.price.replace('$', ''));
        const priceB = Number(b.price.replace('$', ''));
        return sort === 'asc' ? priceA - priceB : priceB - priceA;
      });
  }, [search, sort]);

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Products</h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Discover our natural, organic honey products carefully harvested for
            quality and taste.
          </p>
        </header>

        {/* Controls: Search + Sort */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 placeholder-gray-400 shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none sm:w-1/2"
          />

          <div className="flex items-center gap-2">
            <span className="text-gray-700">Sort by price:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as 'asc' | 'desc')}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800 shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.length ? (
            filteredProducts.map((item, index) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                index={index}
              >
                <p className="mt-2 text-sm text-gray-500">{item.description}</p>

                {/* Featured badge */}
                {item.featured && (
                  <span className="mt-2 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                    Featured
                  </span>
                )}
              </ProductCard>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>

        {/* Load more button (optional) */}
        {filteredProducts.length < allProducts.length && (
          <div className="mt-8 text-center">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
