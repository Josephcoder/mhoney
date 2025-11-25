'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
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

const products: Product[] = [
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
  {
    id: 'h4',
    name: 'Organic Royal Jelly',
    price: '$30.00',
    img: '/images/big-pic.png',
    description: 'Pure royal jelly for vitality and wellness.',
    category: 'Supplements',
  },
];

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <p className="py-20 text-center text-gray-500">Product not found.</p>
    );
  }

  // Related products (same category, exclude current)
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg md:w-1/2"
        >
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="rounded-lg object-cover"
          />
        </motion.div>

        {/* Product Info */}
        <div className="flex flex-col md:w-1/2">
          <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
          <p className="mb-6 text-2xl font-semibold text-yellow-700">
            {product.price}
          </p>
          <p className="mb-6 text-gray-600">{product.description}</p>

          {/* Quantity selector */}
          <div className="mb-6 flex items-center gap-4">
            <span className="font-semibold">Quantity:</span>
            <div className="flex items-center overflow-hidden rounded-lg border">
              <button
                className="bg-gray-200 px-3 py-1 hover:bg-gray-300"
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="bg-gray-200 px-3 py-1 hover:bg-gray-300"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button className="flex-1 bg-yellow-500 text-black hover:bg-yellow-600">
              Add to Cart
            </Button>
            <Button className="flex-1 bg-gray-200 text-gray-800 hover:bg-gray-300">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="container mx-auto mt-20 px-4">
          <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                index={index}
              >
                {item.description && (
                  <p className="mt-2 text-sm text-gray-500">
                    {item.description}
                  </p>
                )}
              </ProductCard>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
