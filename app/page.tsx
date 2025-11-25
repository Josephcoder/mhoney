'use client';

import HeroSlider from '@/components/public/HeroSlider';
import Services from '@/components/public/Services';
import FeaturedProducts from '@/components/public/FeaturedProducts';
import Testimonials from '@/components/public/Testimonials';
import NewsLetter from '@/components/public/NewsLetter';

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* white card overlay below hero for better visual separation */}
      <section className="relative z-10 -mt-20 rounded-t-3xl bg-white">
        <div className="container mx-auto px-4 pt-8 pb-12">
          <div className="rounded-lg bg-white p-8 shadow">
            <h2 className="text-center text-3xl font-bold text-black">
              Welcome to Our Honey Farm
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-gray-700">
              We provide the purest honey harvested sustainably from our
              mountain hives. Our products are 100% natural and carefully
              packaged for you.
            </p>
          </div>
        </div>
      </section>

      <Services />
      <FeaturedProducts />
      <Testimonials />
      <NewsLetter />
    </>
  );
}
